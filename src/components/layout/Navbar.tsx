import { useState, useEffect } from "react";
import { LayoutGrid, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

function WhatsAppIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      viewBox="0 0 510 512.459"
      className={className}
    >
      <path
        fill="currentColor"
        d="M435.689 74.468C387.754 26.471 324 .025 256.071 0 116.098 0 2.18 113.906 2.131 253.916c-.024 44.758 11.677 88.445 33.898 126.946L0 512.459l134.617-35.311c37.087 20.238 78.85 30.891 121.345 30.903h.109c139.949 0 253.88-113.917 253.928-253.928.024-67.855-26.361-131.645-74.31-179.643v-.012zm-179.618 390.7h-.085c-37.868-.011-75.016-10.192-107.428-29.417l-7.707-4.577-79.886 20.953 21.32-77.889-5.017-7.987c-21.125-33.605-32.29-72.447-32.266-112.322.049-116.366 94.729-211.046 211.155-211.046 56.373.025 109.364 22.003 149.214 61.903 39.853 39.888 61.781 92.927 61.757 149.313-.05 116.377-94.728 211.058-211.057 211.058v.011zm115.768-158.067c-6.344-3.178-37.537-18.52-43.358-20.639-5.82-2.119-10.044-3.177-14.27 3.178-4.225 6.357-16.388 20.651-20.09 24.875-3.702 4.238-7.403 4.762-13.747 1.583-6.343-3.178-26.787-9.874-51.029-31.487-18.86-16.827-31.597-37.598-35.297-43.955-3.702-6.355-.39-9.789 2.775-12.943 2.849-2.848 6.344-7.414 9.522-11.116s4.225-6.355 6.343-10.581c2.12-4.238 1.06-7.937-.522-11.117-1.584-3.177-14.271-34.409-19.568-47.108-5.151-12.37-10.385-10.69-14.269-10.897-3.703-.183-7.927-.219-12.164-.219s-11.105 1.582-16.925 7.939c-5.82 6.354-22.209 21.709-22.209 52.927 0 31.22 22.733 61.405 25.911 65.642 3.177 4.237 44.745 68.318 108.389 95.812 15.135 6.538 26.957 10.446 36.175 13.368 15.196 4.834 29.027 4.153 39.96 2.52 12.19-1.825 37.54-15.353 42.824-30.172 5.283-14.818 5.283-27.529 3.701-30.172-1.582-2.641-5.819-4.237-12.163-7.414l.011-.024z"
      />
    </svg>
  );
}

interface NavbarProps {
  currentPath?: string;
}

export function Navbar({ currentPath }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [pathname, setPathname] = useState(currentPath || "/");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPathname(window.location.pathname);
    }
  }, []);

  return (
    <nav
      className={`fixed top-5 left-4 right-4 z-50 mx-auto max-w-6xl overflow-hidden border border-white/12 border-t-white/22 bg-white/[0.03] backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] px-5 md:px-7 py-2 md:py-2.5 rounded-3xl lg:rounded-full transition-[background-color,border-color,box-shadow] duration-200`}
    >
      <div className="flex h-10 md:h-11 items-center justify-between relative">
        <a href="/" className="flex items-center group shrink-0">
          <img
            src="/images/logo.png"
            alt="Technodigi Mandiri Solusi"
            width={44}
            height={44}
            className="h-10 md:h-11.5 w-auto transition-transform duration-300 group-hover:scale-105"
            style={{
              filter:
                "brightness(0) invert(1) sepia(1) saturate(6) hue-rotate(134deg) brightness(0.9)",
            }}
          />
        </a>

        <div className="hidden lg:flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <a
                key={link.href}
                href={link.href}
                className={`font-mono text-xs tracking-wide transition-all duration-300 ${
                  isActive
                    ? "px-4 py-1.5 rounded-full bg-white/[0.08] border border-white/15 border-t-white/30 backdrop-blur-xl text-[#22b4a6] font-bold shadow-[0_4px_15px_rgba(0,0,0,0.3)]"
                    : "px-3.5 py-1.5 text-[#a3a3a3] hover:text-white rounded-full hover:bg-white/[0.03]"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <div className="hidden lg:block shrink-0">
          <a
            href="https://wa.me/6285353615220"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 font-mono text-xs tracking-wide px-4.5 py-1.5 rounded-full text-white bg-[#22b4a6]/20 hover:bg-[#22b4a6]/35 border border-white/15 border-t-white/30 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02]"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 text-[#22b4a6]" />
            WhatsApp
          </a>
        </div>

        <button
          className="lg:hidden text-[#22b4a6] hover:text-[#22b4a6]/80 p-1.5 cursor-pointer transition-colors duration-200"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Navigasi Menu"
        >
          {isMobileMenuOpen ? (
            <X size={22} className="text-[#22b4a6]" />
          ) : (
            <LayoutGrid size={20} />
          )}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden lg:hidden pt-3 border-t border-white/10 mt-3"
          >
            <div className="space-y-1.5 pb-2">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`block font-mono text-sm tracking-wide py-2.5 px-4 rounded-xl transition-all duration-200 ${
                      isActive
                        ? "text-[#22b4a6] font-semibold bg-white/[0.08] border border-white/15 backdrop-blur-xl"
                        : "text-[#a3a3a3] hover:text-white hover:bg-white/[0.06]"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                );
              })}
              <div className="pt-3">
                <a
                  href="https://wa.me/6285353615220"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full font-mono text-sm tracking-wide px-5 py-2.5 rounded-full text-white bg-[#22b4a6]/20 hover:bg-[#22b4a6]/35 border border-white/15 border-t-white/30 backdrop-blur-xl transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#22b4a6]" />
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
