import { useEffect, useRef, useState } from "react";
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
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const loadScript = () => {
      if (document.querySelector('script[src*="recaptcha/api.js"]')) {
        if (window.grecaptcha) {
          renderWidget();
        } else {
          window.onRecaptchaLoad = renderWidget;
        }
        return;
      }

      window.onRecaptchaLoad = renderWidget;

      const script = document.createElement("script");
      script.src = "https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit";
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    };

    const renderWidget = () => {
      if (!window.grecaptcha || !containerRef.current) return;

      widgetIdRef.current = window.grecaptcha.render(containerRef.current, {
        sitekey: siteKey,
        theme: "dark",
        callback: (token) => {
          setIsVerified(true);
          onChange(token);
        },
        "expired-callback": () => {
          setIsVerified(false);
          onChange(null);
        },
        "error-callback": () => {
          setIsVerified(false);
          onChange(null);
        },
      });

      setIsLoaded(true);
    };

    loadScript();

    return () => {
      window.onRecaptchaLoad = undefined;
    };
  }, [siteKey, onChange]);

  return (
    <div className="flex flex-col items-start gap-2">
      <div
        ref={containerRef}
        className="[&>div]:!w-auto [&>div>div]:!w-auto [&>div>div>iframe]:!w-[304px] [&>div>div>iframe]:!h-[78px]"
      />
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