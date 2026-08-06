import { useState } from "react";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  Code2,
  Bot,
  BarChart3,
  Network,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    id: "software",
    icon: Code2,
    title: "Software & Mobile App Development",
    subtitle: "Aplikasi Web & Mobile Custom",
    bgImage: "/images/home_services_one.jpeg",
    description:
      "Aplikasi bisnis dan portal internal yang dibangun khusus sesuai alur kerja spesifik perusahaan Anda. Cepat, responsif, dan mudah dikembangkan seiring pertumbuhan bisnis.",
    features: [
      "Aplikasi Web & Portal Sistem Perusahaan",
      "Aplikasi Mobile Native (iOS & Android)",
      "Integrasi API & Arsitektur Backend Tangguh",
    ],
    color: "from-[#22b4a6]/20 via-[#06b6d4]/10 to-transparent",
  },
  {
    id: "automation",
    icon: Bot,
    title: "Business Automation & AI Solutions",
    subtitle: "Otomatisasi Workflow & Integrasi AI",
    bgImage: "/images/home_services_two.jpeg",
    description:
      "Memangkas jam kerja manual yang berulang melalui otomatisasi alur kerja terpadu dan penerapan kecerdasan buatan (AI) untuk keputusan operasional yang presisi.",
    features: [
      "Otomatisasi Alur Kerja & Proses Bisnis",
      "Integrasi Bot & Machine Learning Custom",
      "Penghematan Jam Kerja & Efisiensi Biaya",
    ],
    color: "from-[#06b6d4]/20 via-[#3b82f6]/10 to-transparent",
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Data Analytics & Executive Dashboard",
    subtitle: "Dasbor Analytics Real-Time & BI",
    bgImage: "/images/home_services_three.jpeg",
    description:
      "Mengolah tumpukan data mentah menjadi dasbor analitis interaktif real-time. Membantu direksi dan manajemen mengambil keputusan strategis berbasis data akurat.",
    features: [
      "Dasbor Pemantauan Performa Real-Time",
      "Business Intelligence & Data Warehouse",
      "Visualisasi Laporan Penjualan & Operasional",
    ],
    color: "from-[#3b82f6]/20 via-[#22b4a6]/10 to-transparent",
  },
  {
    id: "infrastructure",
    icon: Network,
    title: "IT Infrastructure, Hardware & Support",
    subtitle: "Jaringan Enterprise & Perawatan 24/7",
    bgImage: "/images/home_services_four.jpeg",
    description:
      "Perancangan jaringan enterprise yang stabil, pengadaan perangkat keras dari distributor resmi, serta dukungan teknis & pemeliharaan 24/7 agar bisnis berjalan tanpa gangguan.",
    features: [
      "Desain & Arsitektur Jaringan Enterprise",
      "Pengadaan Perangkat Hardware Resmi",
      "Pengawalan Tim Teknis & Maintenance 24/7",
    ],
    color: "from-[#8b5cf6]/20 via-[#22b4a6]/10 to-transparent",
  },
];

export function ServicesOverview() {
  const [activeHover, setActiveHover] = useState<number>(0);

  return (
    <section className="py-16 sm:py-20 bg-transparent relative">
      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8 space-y-12 sm:space-y-16">
        <motion.div
          initial={{ opacity: 0.01, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-40px" }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 gpu-layer"
        >
          <div>
            <SectionLabel>LAYANAN UTAMA</SectionLabel>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight max-w-3xl">
              Solusi IT End-to-End untuk{" "}
              <span className="bg-gradient-to-r from-white via-[#a5f3fc] to-[#22b4a6] bg-clip-text text-transparent">
                Akselerasi Pertumbuhan Bisnis.
              </span>
            </h2>
          </div>
          <a
            href="/services"
            className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-[#22b4a6] hover:text-white transition-colors duration-300 py-1 shrink-0 group self-start sm:self-auto"
          >
            <span>Jelajahi Semua Layanan</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>

        <div className="hidden lg:flex gap-4 h-[520px] w-full">
          {services.map((service, index) => {
            const isExpanded = activeHover === index;
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveHover(index)}
                className={`relative rounded-3xl border border-white/12 border-t-white/25 bg-white/[0.035] backdrop-blur-3xl p-8 transition-all duration-700 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] cursor-pointer overflow-hidden flex flex-col justify-between group gpu-layer ${
                  isExpanded
                    ? "flex-[3.5] bg-gradient-to-br " + service.color + " border-white/30"
                    : "flex-1 hover:bg-white/[0.06] hover:border-white/20"
                }`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-45 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none"
                  style={{ backgroundImage: `url('${service.bgImage}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#030712]/75 via-[#030712]/45 to-[#030712]/80 pointer-events-none" />

                <div className="relative z-10 flex items-center justify-between">
                  <div
                    className={`w-14 h-14 rounded-2xl border border-white/15 flex items-center justify-center transition-all duration-500 ease-out shrink-0 ${
                      isExpanded
                        ? "bg-[#22b4a6] text-black scale-105"
                        : "bg-white/[0.05] text-[#22b4a6]"
                    }`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>
                  {isExpanded && (
                    <motion.span
                      initial={{ opacity: 0.01, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="font-mono text-xs text-[#22b4a6] font-semibold tracking-wider px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 gpu-layer"
                    >
                      {service.subtitle}
                    </motion.span>
                  )}
                </div>

                {isExpanded ? (
                  <motion.div
                    initial={{ opacity: 0.01, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="relative z-10 space-y-4 my-auto gpu-layer"
                  >
                    <h3 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#a3a3a3] leading-relaxed max-w-xl">
                      {service.description}
                    </p>

                    <div className="pt-4 grid grid-cols-1 gap-2.5 border-t border-white/10">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2.5 text-xs text-white/90"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#22b4a6] shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center">
                    <span className="font-mono text-xs text-white/40 tracking-widest uppercase font-semibold">
                      {service.subtitle}
                    </span>
                    <h3 className="text-base font-bold text-white/80 mt-4 leading-tight">
                      {service.title.split("&")[0]}
                    </h3>
                  </div>
                )}

                <div className="relative z-10 flex items-center justify-end pt-4 border-t border-white/10">
                  {isExpanded && (
                    <motion.a
                      initial={{ opacity: 0.01 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                      href="/services"
                      className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-white hover:text-[#22b4a6] transition-colors duration-300 gpu-layer"
                    >
                      <span>Lihat Detail</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0.01, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: "-30px" }}
                className="h-full gpu-layer"
              >
                <div className="h-full relative overflow-hidden rounded-3xl border border-white/12 border-t-white/25 bg-white/[0.035] backdrop-blur-3xl p-6 sm:p-8 flex flex-col justify-between group hover:border-white/30 hover:bg-white/[0.06] transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)]">
                  <div
                    className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-45 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none"
                    style={{ backgroundImage: `url('${service.bgImage}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#030712]/75 via-[#030712]/45 to-[#030712]/80 pointer-events-none" />

                  <div>
                    <div className="relative z-10 flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-[#22b4a6]/15 border border-white/15 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 ease-out">
                        <Icon className="w-6 h-6 text-[#22b4a6]" />
                      </div>
                    </div>

                    <span className="relative z-10 font-mono text-[10px] text-[#22b4a6] tracking-wider uppercase font-semibold block mb-1">
                      {service.subtitle}
                    </span>
                    <h3 className="relative z-10 text-xl font-extrabold text-white tracking-tight leading-snug mb-3 group-hover:text-[#a5f3fc] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="relative z-10 text-xs text-[#a3a3a3] leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  <div>
                    <div className="relative z-10 pt-4 border-t border-white/10 space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2.5 text-xs text-white/90"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#22b4a6] shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <a
                      href="/services"
                      className="relative z-10 inline-flex items-center gap-2 font-mono text-xs font-semibold text-[#22b4a6] group-hover:text-white transition-colors duration-300"
                    >
                      <span>Lihat Detail Layanan</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
