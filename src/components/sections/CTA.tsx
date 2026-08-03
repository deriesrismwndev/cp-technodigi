import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Rocket } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 bg-transparent relative px-4">

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <div className="rounded-3xl border border-[#22b4a6]/35 border-t-white/50 bg-white/[0.04] backdrop-blur-3xl p-10 sm:p-14 md:p-20 shadow-[0_30px_90px_rgba(0,0,0,0.8),0_0_60px_rgba(34,180,166,0.2)] relative overflow-hidden group transition-all duration-500 hover:border-[#22b4a6]/60 hover:shadow-[0_30px_100px_rgba(0,0,0,0.9),0_0_80px_rgba(34,180,166,0.3)]">
          {/* Blended Background Image Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-30 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"
            style={{ backgroundImage: "url('/hero_about_card.jpeg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/90 via-[#030712]/80 to-[#030712]/95 pointer-events-none" />

          {/* Top Specular Glare */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent z-10 pointer-events-none" />

          {/* CTA Content */}
          <div className="relative z-10 space-y-6">
            {/* Unified Section Label */}
            <SectionLabel className="justify-center">MULAI KOLABORASI</SectionLabel>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] max-w-4xl mx-auto"
            >
              Bawa Bisnis Anda ke Tingkat Berikutnya dengan{" "}
              <span className="bg-gradient-to-r from-white via-[#a5f3fc] to-[#22b4a6] bg-clip-text text-transparent">
                Solusi Teknologi Enterprise.
              </span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-[#a3a3a3] text-base sm:text-lg leading-relaxed font-sans"
            >
              Konsultasikan kebutuhan sistem Anda secara gratis bersama tim pakar Technodigi — tanpa komitmen dan siap dieksekusi dengan cepat.
            </motion.p>

            {/* Single Prominent Action Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <Button href="/contact" size="lg" variant="primary">
                <Rocket className="w-4.5 h-4.5 text-[#22b4a6]" />
                Konsultasi Gratis Sekarang
                <ArrowRight className="w-4.5 h-4.5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
