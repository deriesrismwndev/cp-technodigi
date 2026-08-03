import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, MessageSquare, Layers, Sparkles } from "lucide-react";

const clientLogos = [
  { src: "/clients/logo_kerjasama.webp", alt: "Mitra Kerjasama" },
  { src: "/clients/logo_palembang.webp", alt: "Pemerintah Kota Palembang" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-transparent flex flex-col justify-between pt-32 pb-20">
      {/* Video Background - Fully Vibrant & Smoothly Dissolved at the Bottom 98% */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-35 mix-blend-screen pointer-events-none"
        style={{
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 98%)",
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 98%)",
        }}
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Ambient Liquid Halo Blobs */}
      <div className="absolute top-1/4 left-10 w-[550px] h-[550px] bg-[#22b4a6]/15 rounded-full blur-[160px] pointer-events-none animate-liquid-float" />
      <div className="absolute top-1/3 right-10 w-[550px] h-[550px] bg-[#06b6d4]/15 rounded-full blur-[170px] pointer-events-none animate-liquid-pulse" />

      {/* Hero Content - Left Aligned */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8 w-full my-auto">
        <div className="max-w-3xl text-left">
          {/* Floating Pill Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] backdrop-blur-2xl border border-white/15 border-t-white/30 shadow-[0_10px_30px_rgba(0,0,0,0.5)] mb-8"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#22b4a6]" />
            <span className="font-mono text-xs font-semibold tracking-wider text-white/90">
              KONSULTASI & PENGEMBANGAN IT TERDEPAN
            </span>
          </motion.div>

          {/* Main Headline in Full Indonesian */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight text-white mb-6"
          >
            Solusi Digital Tepat.
            <br />
            Eksekusi Cepat.
            <br />
            <span className="bg-gradient-to-r from-white via-[#a5f3fc] to-[#22b4a6] bg-clip-text text-transparent">
              Ditenagai Rekayasa Enterprise.
            </span>
          </motion.h1>

          {/* Subtitle in Full Indonesian */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg text-[#a3a3a3] leading-relaxed mb-10 max-w-2xl"
          >
            Mitra teknologi end-to-end terpercaya Anda di Indonesia. Dari pengembangan
            aplikasi custom, automasi bisnis, hingga infrastruktur cloud & keamanan cyber.
            Kami tidak hanya berkonsultasi — kami mengeksekusi hingga tuntas.
          </motion.p>

          {/* CTA Buttons in Full Indonesian */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <Button href="/contact" size="lg" variant="primary">
              <MessageSquare className="w-4 h-4 text-[#22b4a6]" />
              Konsultasi Gratis Sekarang
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button href="/services" size="lg" variant="secondary">
              <Layers className="w-4 h-4 text-[#22b4a6]" />
              Jelajahi Solusi Kami
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Seamless Client Logos Section (Without Border Line) */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8 w-full pt-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-mono text-[10px] tracking-[0.3em] text-[#22b4a6] uppercase font-semibold shrink-0">
            TRUSTED BY ENTERPRISES & INSTITUTIONS
          </p>

          <div className="flex items-center gap-10 md:gap-16">
            {clientLogos.map((client, i) => (
              <motion.div
                key={client.src}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                className="group cursor-pointer transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={client.src}
                  alt={client.alt}
                  className="h-10 md:h-12 w-auto max-w-[180px] object-contain filter grayscale opacity-50 contrast-125 brightness-125 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-400 ease-out"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
