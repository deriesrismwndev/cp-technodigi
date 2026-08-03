import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Layanan IT apa saja yang disediakan oleh PT Technodigi Mandiri Solusi?",
    answer:
      "Kami menyediakan 4 pilar solusi terpadu: pengembangan aplikasi custom (web & mobile), otomatisasi alur kerja bisnis & integrasi AI, pengolahan data analytics & dasbor real-time, serta perancangan infrastruktur jaringan enterprise, pengadaan hardware resmi, dan dukungan teknis 24/7.",
  },
  {
    question: "Bagaimana alur kerja dan tahap dimulainya sebuah proyek?",
    answer:
      "Proyek dimulai dengan tahap analisis kebutuhan dan diskusi awal gratis tanpa komitmen. Setelah memahami alur bisnis Anda, kami menyusun proposal teknis, arsitektur sistem, dan timeline yang transparan sebelum memasuki tahap rekayasa dan pengembangan berstandar enterprise.",
  },
  {
    question: "Apakah Technodigi menangani perencanaan konsultasi sekaligus eksekusi teknis?",
    answer:
      "Ya, ini adalah keunggulan utama kami. Kami tidak hanya memberikan rekomendasi strategis, tetapi juga mengeksekusi langsung seluruh proses pengembangan backend, antarmuka pengguna, pengujian keamanan, deployment, hingga perawatan berkelanjutan.",
  },
  {
    question: "Berapa lama waktu yang dibutuhkan untuk menyelesaikan satu proyek?",
    answer:
      "Durasi pengerjaan bervariasi bergantung pada skala dan kompleksitas kebutuhan bisnis Anda — mulai dari 2–4 minggu untuk otomatisasi workflow/dasbor analitis sederhana, hingga 2–4 bulan untuk sistem manajemen enterprise dan aplikasi custom skala besar.",
  },
  {
    question: "Apakah ada layanan dukungan dan pemeliharaan setelah sistem diluncurkan (post-launch)?",
    answer:
      "Tentu saja. Peluncuran sistem adalah awal dari kolaborasi. Kami menyediakan jaminan pemeliharaan rutin, monitoring kesehatan sistem 24/7, pembaruan keamanan berkala, serta tim helpdesk responsif untuk memastikan operasional bisnis Anda berjalan tanpa hambatan.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-transparent relative">

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header Centered */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel className="justify-center">PERTANYAAN UMUM</SectionLabel>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Pertanyaan yang Sering{" "}
            <span className="bg-gradient-to-r from-white via-[#a5f3fc] to-[#22b4a6] bg-clip-text text-transparent">
              Diajukan Klien.
            </span>
          </h2>
          <p className="mt-4 text-sm text-[#a3a3a3] leading-relaxed">
            Temukan jawaban atas pertanyaan seputar layanan, proses eksekusi,
            hingga dukungan purna jual kami.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              viewport={{ once: true }}
              className={`rounded-3xl transition-all duration-300 overflow-hidden ${
                openIndex === i
                  ? "bg-white/[0.05] border border-[#22b4a6]/40 border-t-white/30 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                  : "bg-white/[0.025] border border-white/10 hover:border-white/20"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between text-left gap-4 p-6 cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-[#22b4a6] shrink-0" />
                  <span className="text-base md:text-lg font-bold text-white group-hover:text-[#22b4a6] transition-colors leading-snug">
                    {faq.question}
                  </span>
                </div>
                <div
                  className={`shrink-0 p-2 rounded-full border transition-all duration-300 ${
                    openIndex === i
                      ? "border-[#22b4a6] bg-[#22b4a6]/20 text-[#22b4a6]"
                      : "border-white/15 bg-white/[0.04] text-white/50 group-hover:text-white"
                  }`}
                >
                  {openIndex === i ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
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
