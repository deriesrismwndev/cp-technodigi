import { motion } from "framer-motion";
import { Ear, Target, Wrench, Compass } from "lucide-react";

const approachPillars = [
  {
    icon: Ear,
    title: "Pelajari Alur Kerja Lapangan",
    subtitle: "Tepat Kebutuhan Sejak Awal",
    description:
      "Kami bedah dulu alur operasional dan kendala tim Anda di lapangan sebelum mulai membuat sistem. Solusi yang dihasilkan dipastikan benar-benar menjawab kebutuhan.",
  },
  {
    icon: Target,
    title: "Pengerjaan Sistem yang Rapi",
    subtitle: "Kode Kustom & Aman",
    description:
      "Sistem yang stabil, tampilan yang tidak membingungkan, dan keamanan data terjamin. Seluruh pengkodean ditangani langsung oleh tim pakar Technodigi.",
  },
  {
    icon: Wrench,
    title: "Pengawalan Setelah Peluncuran",
    subtitle: "Dukungan & Perawatan Rutin",
    description:
      "Setelah sistem berjalan, kami tetap mendampingi Anda. Dari perawatan berkala, bantuan teknis cepat, hingga penambahan fitur saat bisnis berkembang.",
  },
];

export function AboutAndWhyUs() {
  return (
    <section className="py-16 lg:py-20 bg-transparent relative">
      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        {/* Single Unified Liquid Glass Card Container */}
        <div className="rounded-3xl border border-white/12 border-t-white/25 bg-white/[0.035] backdrop-blur-3xl p-8 md:p-14 lg:p-16 relative overflow-hidden group">
          {/* Blended Background Image Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-45 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none"
            style={{ backgroundImage: "url('/home_about_card.jpeg')" }}
          />

          {/* Soft Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#030712]/80 via-[#030712]/50 to-[#030712]/80 pointer-events-none" />

          {/* Card Inner Content */}
          <div className="relative z-10">
            {/* Headline Statement — Natural & Human */}
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-40px" }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.12] tracking-tight mb-8 max-w-4xl"
            >
              Bukan cuma bikin aplikasi, kami pastikan sistemnya{" "}
              <span className="bg-gradient-to-r from-white via-[#a5f3fc] to-[#22b4a6] bg-clip-text text-transparent">
                beneran bantu operasional bisnis Anda.
              </span>
            </motion.h2>

            {/* Narrative Paragraphs — Direct & Authentic */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-40px" }}
              className="max-w-3xl space-y-4 text-base sm:text-lg text-[#a3a3a3] leading-relaxed mb-12"
            >
              <p>
                Banyak proyek sistem IT gagal karena fiturnya tidak sesuai alur kerja di lapangan. Di{" "}
                <strong className="text-white font-semibold">
                  Technodigi Mandiri Solusi
                </strong>
                , kami membuat aplikasi kustom, otomatisasi kerja, dan dasbor data yang dirancang ringkas serta mudah dipakai oleh tim Anda sehari-hari.
              </p>
              <p>
                Tanpa bahasa teknis yang rumit: fokus kami adalah memberikan sistem yang{" "}
                <span className="text-white font-medium">
                  stabil, aman, dan memotong jam kerja manual secara nyata
                </span>
                .
              </p>
            </motion.div>

            {/* Bridging Element to 3 Pillars */}
            <div className="pt-10 border-t border-white/10">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-8"
              >
                <div className="w-8 h-8 rounded-full bg-[#22b4a6]/15 border border-white/15 flex items-center justify-center shrink-0">
                  <Compass className="w-4 h-4 text-[#22b4a6]" />
                </div>
                <div>
                  <span className="font-mono text-xs text-[#22b4a6] tracking-widest uppercase font-semibold block">
                    CARA KERJA KAMI
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    3 Langkah Memastikan Proyek Anda Sukses
                  </h3>
                </div>
              </motion.div>

              {/* 3 Integrated Approach Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {approachPillars.map((pillar, i) => (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.25 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="rounded-2xl border border-white/10 hover:border-white/25 bg-white/[0.03] hover:bg-white/[0.07] backdrop-blur-2xl p-6 transition-all duration-500 ease-out group/item flex flex-col justify-between hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)]"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-[#22b4a6]/15 border border-white/15 flex items-center justify-center mb-5 group-hover/item:scale-110 transition-transform duration-500 ease-out">
                        <pillar.icon className="w-6 h-6 text-[#22b4a6]" />
                      </div>

                      <span className="font-mono text-[10px] text-[#22b4a6] tracking-wider uppercase font-semibold block mb-1">
                        {pillar.subtitle}
                      </span>
                      <h4 className="text-lg font-bold text-white mb-2 tracking-tight group-hover/item:text-[#a5f3fc] transition-colors duration-300">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-[#a3a3a3] leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
