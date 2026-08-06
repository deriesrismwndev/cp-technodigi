import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Sparkles, Cpu, Layers } from "lucide-react";

export function AboutBrief() {
  return (
    <section className="py-24 bg-[#030712] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#22b4a6]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        <div className="rounded-3xl border border-white/12 border-t-white/25 bg-white/[0.035] backdrop-blur-3xl p-8 md:p-14 shadow-[0_30px_70px_rgba(0,0,0,0.6)] relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          <SectionLabel>About Us</SectionLabel>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-8"
          >
            Kami membantu bisnis mengubah kebutuhan jadi sistem yang{" "}
            <span className="bg-gradient-to-r from-white via-[#a5f3fc] to-[#22b4a6] bg-clip-text text-transparent">
              jelas, cepat, dan siap berkembang.
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#a3a3a3] text-base leading-relaxed">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white/[0.025] border border-white/10 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-[#22b4a6]/15 border border-[#22b4a6]/30 flex items-center justify-center shrink-0 mt-0.5">
                <Cpu className="w-5 h-5 text-[#22b4a6]" />
              </div>
              <p>
                <strong className="text-white">Technodigi Mandiri Solusi</strong>{" "}
                membantu organisasi menjawab tantangan transformasi digital
                melalui sistem manajemen digital, automasi, data analytics, dan
                solusi berbasis AI.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white/[0.025] border border-white/10 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-[#22b4a6]/15 border border-[#22b4a6]/30 flex items-center justify-center shrink-0 mt-0.5">
                <Layers className="w-5 h-5 text-[#22b4a6]" />
              </div>
              <p>
                Setiap solusi dirancang agar{" "}
                <span className="text-white font-medium">
                  efektif, efisien, adaptif
                </span>
                , dan dapat berkembang mengikuti kebutuhan bisnis tanpa
                mengorbankan stabilitas.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
