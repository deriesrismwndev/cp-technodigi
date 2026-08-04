import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { MessagesSquare } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 bg-transparent relative px-4">
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Main CTA Card — Pure Frosted Liquid Glass */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-40px" }}
          className="rounded-3xl border border-white/15 border-t-white/35 bg-white/[0.035] backdrop-blur-3xl p-10 sm:p-14 md:p-20 shadow-[0_30px_90px_rgba(0,0,0,0.6)] relative overflow-hidden group transition-all duration-500 hover:border-white/40"
        >
          {/* Blended Background Image Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-40 group-hover:opacity-55 transition-opacity duration-700 pointer-events-none"
            style={{ backgroundImage: "url('/home_cta_card.jpeg')" }}
          />
          {/* Subtle Soft Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/60 via-transparent to-[#030712]/70 pointer-events-none" />

          {/* Top Specular Glare Line */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent z-10 pointer-events-none" />

          {/* CTA Content */}
          <div className="relative z-10 space-y-6">
            {/* Headline — Direct & Natural */}
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] max-w-4xl mx-auto"
            >
              Siap Membenahi Operasional Bisnis Anda dengan{" "}
              <span className="bg-gradient-to-r from-white via-[#a5f3fc] to-[#22b4a6] bg-clip-text text-transparent">
                Sistem Digital yang Tepat?
              </span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-[#a3a3a3] text-base sm:text-lg leading-relaxed font-sans"
            >
              Konsultasikan ide atau permasalahan teknis perusahaan Anda bersama tim pakar Technodigi. Diskusi awal 100% gratis tanpa komitmen.
            </motion.p>

            {/* Single Action Button with MessagesSquare */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <Button href="/contact" size="lg" variant="primary">
                <MessagesSquare className="w-4 h-4 text-[#22b4a6]" />
                Konsultasi Proyek Gratis
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
