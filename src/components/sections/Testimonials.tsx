import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Budi Santoso",
    role: "CTO, PT Nusantara Digital",
    content:
      "Technodigi membantu kami migrasi seluruh infrastruktur tanpa satu hari pun downtime. Tim mereka tidak hanya mengeksekusi — mereka mengantisipasi masalah sebelum kami menyadarinya.",
  },
  {
    name: "Siti Rahayu",
    role: "IT Manager, Bank Sejahtera",
    content:
      "Implementasi sistem security mereka mengubah cara kami melindungi data pelanggan. Respon cepat, solusi tepat, dan hasilnya luar biasa.",
  },
  {
    name: "Andi Pratama",
    role: "Founder, GoVentures",
    content:
      "Kebanyakan vendor bicara soal agile. Technodigi benar-benar menjalankannya. Sprint reviews, komunikasi jelas, on-time delivery — persis yang dibutuhkan startup yang sedang scaling.",
  },
  {
    name: "Dewi Kartika",
    role: "Kepala Divisi IT, Pemerintah DKI Jakarta",
    content:
      "Sistem yang dibangun Technodigi mengubah cara kami mengelola informasi publik. Yang dulu memakan waktu berhari-hari, sekarang hanya butuh beberapa menit.",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );

  return (
    <section className="py-28 bg-[#030712] relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#22b4a6]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        <SectionLabel>Testimonials</SectionLabel>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-16 tracking-tight">
          Apa Kata Mereka tentang Kami.
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl border border-white/10 border-t-white/25 bg-white/[0.035] backdrop-blur-3xl p-8 md:p-14 shadow-[0_30px_70px_rgba(0,0,0,0.6)] overflow-hidden">
            <Quote className="w-12 h-12 text-[#22b4a6]/40 mb-6" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-xl md:text-2xl text-white/95 leading-relaxed font-sans mb-10 tracking-tight">
                  &ldquo;{testimonials[current].content}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#22b4a6]/20 border border-[#22b4a6]/40 border-t-white/40 shadow-[0_0_20px_rgba(34,180,166,0.3)] flex items-center justify-center">
                    <span className="text-base font-bold text-[#22b4a6]">
                      {testimonials[current].name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-white text-base">
                      {testimonials[current].name}
                    </p>
                    <p className="text-sm font-mono text-[#22b4a6]">
                      {testimonials[current].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    i === current
                      ? "bg-[#22b4a6] w-8 shadow-[0_0_10px_#22b4a6]"
                      : "bg-white/10 w-4 hover:bg-white/20"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="p-3 rounded-full bg-white/[0.04] backdrop-blur-xl border border-white/10 border-t-white/20 text-white/80 hover:text-white hover:border-[#22b4a6]/40 hover:bg-[#22b4a6]/15 transition-all cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="p-3 rounded-full bg-white/[0.04] backdrop-blur-xl border border-white/10 border-t-white/20 text-white/80 hover:text-white hover:border-[#22b4a6]/40 hover:bg-[#22b4a6]/15 transition-all cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
