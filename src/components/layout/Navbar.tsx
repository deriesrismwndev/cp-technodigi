import { useState, useEffect } from "react";
import { LayoutGrid, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

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
    <nav className="fixed top-5 left-4 right-4 z-50 mx-auto max-w-6xl overflow-hidden border border-white/15 border-t-white/30 bg-white/[0.04] backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-[28px] px-6 md:px-8 py-2.5 md:py-3 transition-all duration-300">
      <div className="flex h-10 md:h-12 items-center justify-between relative">
        {/* Logo image only */}
        <a href="/" className="flex items-center group shrink-0">
          <img
            src="/logo.png"
            alt="Technodigi Mandiri Solusi"
            width={34}
            height={34}
            className="h-8 w-8 md:h-9 md:w-9 transition-transform duration-300 group-hover:scale-105"
            style={{
              filter:
                "brightness(0) invert(1) sepia(1) saturate(6) hue-rotate(134deg) brightness(0.9)",
            }}
          />
        </a>

        {/* Desktop Navigation (>= 1024px) */}
        <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <a
                key={link.href}
                href={link.href}
                className={`font-mono text-xs tracking-wide transition-colors duration-200 ${
                  isActive
                    ? "text-[#22b4a6] font-semibold"
                    : "text-[#a3a3a3] hover:text-white"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block shrink-0">
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 font-mono text-xs tracking-wide px-5 py-2 rounded-full text-white bg-[#22b4a6]/15 hover:bg-[#22b4a6]/25 border border-[#22b4a6]/40 border-t-white/40 shadow-[0_4px_20px_rgba(34,180,166,0.2)] hover:shadow-[0_6px_25px_rgba(34,180,166,0.35)] transition-all duration-300 hover:scale-[1.02]"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#22b4a6]" />
            Hubungi Kami
          </a>
        </div>

        {/* Mobile & Tablet Toggle Button — Clean, Borderless Icon */}
        <button
          className="lg:hidden text-white/80 hover:text-[#22b4a6] p-1.5 cursor-pointer transition-colors duration-200"
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

      {/* Direct Smooth Height Expand without changing outer rounded shape */}
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
                    className={`block font-mono text-sm tracking-wide py-2.5 px-4 rounded-2xl transition-all duration-200 ${
                      isActive
                        ? "text-[#22b4a6] font-semibold bg-[#22b4a6]/15 border border-[#22b4a6]/30"
                        : "text-[#a3a3a3] hover:text-white hover:bg-white/[0.05]"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                );
              })}
              <div className="pt-3">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 w-full font-mono text-sm tracking-wide px-5 py-3 rounded-full text-white bg-[#22b4a6]/20 border border-[#22b4a6]/40 shadow-[0_4px_20px_rgba(34,180,166,0.25)] hover:bg-[#22b4a6]/30 transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <MessageCircle className="w-4 h-4 text-[#22b4a6]" />
                  Hubungi Kami
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
