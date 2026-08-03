import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Card } from "@/components/ui/Card";
import { Ear, Target, Wrench } from "lucide-react";

const reasons = [
  {
    icon: Ear,
    title: "Kami Dengarkan Dulu.",
    description:
      "Setiap proyek dimulai dengan memahami bisnis Anda — bukan hanya requirement-nya. Kami percaya solusi yang baik lahir dari pemahaman yang mendalam.",
  },
  {
    icon: Target,
    title: "Kami Bangun dengan Presisi.",
    description:
      "Dari arsitektur hingga UI, tim kami mengelola seluruh delivery — tanpa hand-off, tanpa alasan. Kualitas adalah non-negotiable.",
  },
  {
    icon: Wrench,
    title: "Kami Tetap Bertanggung Jawab.",
    description:
      "Post-launch support, iterasi, dan maintenance — karena shipping baru permulaan. Kami hadir sampai semuanya berjalan sempurna.",
  },
];

export function WhyUs() {
  return (
    <section className="py-28 bg-[#030712] relative overflow-hidden">
      {/* Ambient background blob */}
      <div className="absolute top-1/3 left-0 w-[450px] h-[450px] bg-[#06b6d4]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        <SectionLabel>Why Us</SectionLabel>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-16 leading-tight tracking-tight max-w-3xl">
          Kami Bukan Sekadar Vendor.
          <br />
          <span className="bg-gradient-to-r from-white via-[#a5f3fc] to-[#22b4a6] bg-clip-text text-transparent">
            Kami Partner Engineering Anda.
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <div className="w-12 h-12 rounded-2xl bg-[#22b4a6]/15 border border-[#22b4a6]/30 border-t-white/30 shadow-[0_0_20px_rgba(34,180,166,0.25)] flex items-center justify-center mb-6">
                  <reason.icon className="w-6 h-6 text-[#22b4a6]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                  {reason.title}
                </h3>
                <p className="text-sm text-[#a3a3a3] leading-relaxed">
                  {reason.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
