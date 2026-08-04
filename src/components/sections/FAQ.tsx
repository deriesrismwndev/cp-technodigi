import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Layanan IT apa saja yang dikerjakan oleh Technodigi Mandiri Solusi?",
    answer:
      "Kami mengeksekusi 4 pilar layanan utama: pengembangan aplikasi kustom (web & mobile), otomatisasi alur kerja bisnis & integrasi AI, pengolahan data analytics & dasbor eksekutif real-time, serta perancangan infrastruktur jaringan enterprise, pengadaan hardware resmi, dan dukungan teknis 24/7.",
  },
  {
    question: "Bagaimana tahap awal dimulainya sebuah proyek teknologi?",
    answer:
      "Proyek diawali dengan tahap analisis kebutuhan gratis tanpa komitmen. Setelah membedah alur operasional bisnis Anda, kami menyusun rancangan teknis, arsitektur sistem, serta estimasi waktu dan biaya yang transparan sebelum masuk ke tahap eksekusi.",
  },
  {
    question: "Apakah Technodigi menangani perencanaan sekaligus eksekusi teknisnya?",
    answer:
      "Ya, ini adalah nilai tambah utama kami. Kami tidak hanya memberikan saran konsultasi di atas kertas, tetapi mengeksekusi langsung pengkodean backend, antarmuka pengguna, pengujian keamanan, deployment, hingga pemeliharaan rutin pasca-peluncuran.",
  },
  {
    question: "Berapa lama estimasi waktu penyelesaian satu proyek?",
    answer:
      "Durasi pengerjaan disesuaikan dengan skala dan kompleksitas proyek — mulai dari 2–4 minggu untuk otomatisasi workflow/dasbor analitis sederhana, hingga 2–4 bulan untuk sistem manajemen enterprise dan aplikasi custom skala besar.",
  },
  {
    question: "Bagaimana bentuk dukungan dan perawatan setelah sistem diluncurkan?",
    answer:
      "Peluncuran sistem adalah awal dari kemitraan. Kami menyediakan garansi pemeliharaan rutin, monitoring kesehatan sistem 24/7, pembaruan keamanan berkala, serta tim teknis responsif untuk memastikan operasional bisnis Anda berjalan tanpa hambatan.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-transparent relative">
      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header Centered */}
        <motion.div
          initial={{ opacity: 0.01, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-40px" }}
          className="text-center max-w-3xl mx-auto mb-16 gpu-layer"
        >
          <SectionLabel className="justify-center">PERTANYAAN UMUM</SectionLabel>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Segala Hal yang Perlu Anda Ketahui{" "}
            <span className="bg-gradient-to-r from-white via-[#a5f3fc] to-[#22b4a6] bg-clip-text text-transparent">
              Sebelum Memulai Proyek.
            </span>
          </h2>
          <p className="mt-4 text-sm text-[#a3a3a3] leading-relaxed">
            Jawaban langsung seputar layanan, alur eksekusi teknis, hingga pengawalan purna jual Technodigi.
          </p>
        </motion.div>

        {/* FAQ Accordion List — Pure Liquid Glass */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0.01, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-30px" }}
              className={`rounded-2xl transition-all duration-500 ease-out overflow-hidden gpu-layer ${
                openIndex === i
                  ? "bg-white/[0.08] border border-white/20 backdrop-blur-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                  : "bg-white/[0.035] border border-white/10 hover:border-white/20 backdrop-blur-xl"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between text-left gap-4 p-6 cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-[#22b4a6] shrink-0" />
                  <span className="text-base md:text-lg font-bold text-white group-hover:text-[#22b4a6] transition-colors duration-300 leading-snug">
                    {faq.question}
                  </span>
                </div>
                {/* Clean Liquid Glass Chevron Dropdown Button */}
                <div
                  className={`shrink-0 p-2 rounded-full border border-white/15 backdrop-blur-xl transition-all duration-500 ease-out ${
                    openIndex === i
                      ? "bg-[#22b4a6]/20 text-[#22b4a6] border-white/30"
                      : "bg-white/[0.05] text-white/60 group-hover:text-white"
                  }`}
                >
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-500 ease-out ${
                      openIndex === i ? "rotate-180 text-[#22b4a6]" : ""
                    }`}
                  />
                </div>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ opacity: 0.01, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0.01, height: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden gpu-layer"
                  >
                    <p className="text-sm md:text-base text-[#a3a3a3] leading-relaxed px-6 pb-6 pl-14">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
