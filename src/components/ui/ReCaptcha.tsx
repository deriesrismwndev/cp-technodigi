import { useEffect, useRef, useState, useId } from "react";
import { ShieldCheck } from "lucide-react";

interface ReCaptchaProps {
  siteKey: string;
  onChange: (token: string | null) => void;
}

declare global {
  interface Window {
    grecaptcha?: {
      render: (
        container: HTMLElement | string,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
          theme?: "light" | "dark";
          size?: "normal" | "compact" | "invisible";
        },
      ) => number;
      reset: (widgetId?: number) => void;
    };
    onRecaptchaLoad?: () => void;
  }
}

export function ReCaptcha({ siteKey, onChange }: ReCaptchaProps) {
  const rawId = useId();
  const containerId = `recaptcha-${rawId.replace(/[^a-zA-Z0-9]/g, "")}`;
  const onChangeRef = useRef(onChange);
  const renderedRef = useRef(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  onChangeRef.current = onChange;

  useEffect(() => {
    let isMounted = true;

    const renderWidget = () => {
      if (!window.grecaptcha || renderedRef.current) return;

      const container = document.getElementById(containerId);
      if (!container) return;

      // Jangan render ulang jika widget sudah ada di dalam container
      if (container.children.length > 0) return;

      try {
        window.grecaptcha.render(container, {
          sitekey: siteKey,
          theme: "dark",
          callback: (token) => {
            setIsVerified(true);
            onChangeRef.current(token);
          },
          "expired-callback": () => {
            setIsVerified(false);
            onChangeRef.current(null);
          },
          "error-callback": () => {
            setIsVerified(false);
            onChangeRef.current(null);
          },
        });
        renderedRef.current = true;
        if (isMounted) setIsLoaded(true);
      } catch (e) {
        // Jika sudah pernah dirender, abaikan
        console.error("reCAPTCHA render error:", e);
      }
    };

    const loadScript = () => {
      if (document.querySelector('script[src*="recaptcha/api.js"]')) {
        renderWidget();
        return;
      }

      window.onRecaptchaLoad = renderWidget;

      const script = document.createElement("script");
      script.src =
        "https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit";
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    };

    loadScript();

    return () => {
      isMounted = false;
    };
  }, [siteKey, containerId]);

  return (
    <div className="flex flex-col items-start gap-2">
      <div id={containerId} />
      {!isLoaded && (
        <p className="text-xs text-white/40 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#22b4a6]" />
          Memuat verifikasi keamanan...
        </p>
      )}
      {isLoaded && !isVerified && (
        <p className="text-xs text-white/40 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#22b4a6]" />
          Centang kotak di atas untuk verifikasi keamanan.
        </p>
      )}
      {isVerified && (
        <p className="text-xs text-[#22b4a6] flex items-center gap-2">
          <ShieldCheck className="w-4 h-4" />
          Verifikasi berhasil.
        </p>
      )}
    </div>
  );
}