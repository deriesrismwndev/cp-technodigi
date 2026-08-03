import { motion } from "framer-motion";
import { Ear, Target, Wrench, Compass } from "lucide-react";

const approachPillars = [
  {
    icon: Ear,
    title: "Kami Dengarkan Dulu",
    subtitle: "Memahami Akar Kebutuhan Bisnis",
    description:
      "Setiap solusi dimulai dari pemahaman mendalam atas proses bisnis Anda — bukan sekadar daftar spesifikasi. Kami memastikan arsitektur yang dibangun tepat sasaran sejak hari pertama.",
  },
  {
    icon: Target,
    title: "Kami Bangun dengan Presisi",
    subtitle: "Rekayasa Sistem Berstandar Tinggi",
    description:
      "Dari arsitektur backend hingga antarmuka pengguna, seluruh proses pengkodean dan integrasi dikelola langsung oleh tim spesialis kami tanpa kompromi pada kualitas.",
  },
  {
    icon: Wrench,
    title: "Kami Tetap Bertanggung Jawab",
    subtitle: "Dukungan & Perawatan Berkelanjutan",
    description:
      "Peluncuran sistem baru merupakan awal dari kolaborasi. Kami memberikan dukungan teknis yang sigap, pemeliharaan rutin, serta pengembangan berkelanjutan.",
  },
];

export function AboutAndWhyUs() {
  return (
    <section className="py-20 bg-transparent relative">
      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        {/* Single Unified Liquid Glass Card Container */}
        <div className="rounded-3xl border border-white/15 border-t-white/30 bg-white/[0.035] backdrop-blur-3xl p-8 md:p-14 lg:p-16 shadow-[0_30px_80px_rgba(0,0,0,0.7)] relative overflow-hidden group">
          {/* Blended Background Image Overlay — Clearly Visible & Vibrant */}
          <div
            className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-10 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none"
            style={{ backgroundImage: "url('/home_about_card.jpeg')" }}
          />

          {/* Soft Vignette Overlay to enhance readability while preserving background graphics */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#030712]/80 via-[#030712]/50 to-[#030712]/80 pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent z-10 pointer-events-none" />

          {/* Card Inner Content */}
          <div className="relative z-10">
            {/* Headline Statement in Full Indonesian */}
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.12] tracking-tight mb-8 max-w-4xl"
            >
              Kami membantu bisnis mengubah kebutuhan kompleks jadi sistem digital yang{" "}
              <span className="bg-gradient-to-r from-white via-[#a5f3fc] to-[#22b4a6] bg-clip-text text-transparent">
                jelas, cepat, dan siap berkembang.
              </span>
            </motion.h2>

            {/* Narrative Paragraphs in Full Indonesian */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
              className="max-w-3xl space-y-4 text-base sm:text-lg text-[#a3a3a3] leading-relaxed mb-12"
            >
              <p>
                <strong className="text-white font-semibold">
                  PT Technodigi Mandiri Solusi
                </strong>{" "}
                adalah mitra teknologi strategis yang membantu organisasi menjawab
                tantangan otomatisasi digital, sistem manajemen terpadu, analisis
                data, hingga integrasi solusi berbasis AI.
              </p>
              <p>
                Setiap arsitektur yang kami bangun dirancang untuk memberikan dampak
                bisnis yang terukur —{" "}
                <span className="text-white font-medium">
                  efisien dalam operasional, adaptif terhadap pertumbuhan
                </span>
                , serta tangguh tanpa mengorbankan stabilitas.
              </p>
            </motion.div>

            {/* Bridging Element to 3 Pillars */}
            <div className="pt-10 border-t border-white/10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 rounded-full bg-[#22b4a6]/15 border border-[#22b4a6]/30 flex items-center justify-center shrink-0">
                  <Compass className="w-4 h-4 text-[#22b4a6]" />
                </div>
                <div>
                  <span className="font-mono text-xs text-[#22b4a6] tracking-widest uppercase font-semibold block">
                    PRINSIP EKSEKUSI KAMI
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Bagaimana Kami Mewujudkan Setiap Solusi Bisnis Anda
                  </h3>
                </div>
              </div>

              {/* 3 Integrated Approach Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {approachPillars.map((pillar, i) => (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="rounded-2xl bg-white/[0.025] hover:bg-white/[0.06] border border-white/10 hover:border-[#22b4a6]/40 p-6 transition-all duration-300 group/item flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-[#22b4a6]/15 border border-[#22b4a6]/30 border-t-white/30 flex items-center justify-center mb-5 group-hover/item:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(34,180,166,0.2)]">
                        <pillar.icon className="w-6 h-6 text-[#22b4a6]" />
                      </div>

                      <span className="font-mono text-[10px] text-[#22b4a6] tracking-wider uppercase font-semibold block mb-1">
                        {pillar.subtitle}
                      </span>
                      <h4 className="text-lg font-bold text-white mb-2 tracking-tight group-hover/item:text-[#a5f3fc] transition-colors">
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
