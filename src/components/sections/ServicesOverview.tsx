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
    number: "01",
    title: "Software Development & Digital Solutions",
    subtitle: "Aplikasi Web, Mobile & Sistem Kustom",
    bgImage: "/home_about_card.jpeg",
    description:
      "Pengembangan aplikasi web, mobile, dan sistem kustom yang dirancang khusus untuk memangkas inefisiensi serta siap meningkatkan skala operasional bisnis Anda.",
    features: [
      "Custom Web Applications & Portals",
      "Native & Cross-Platform Mobile Apps",
      "Arsitektur & Integrasi API Enterprise",
    ],
    color: "from-[#22b4a6]/20 via-[#06b6d4]/10 to-transparent",
  },
  {
    id: "automation",
    icon: Bot,
    number: "02",
    title: "Business Automation & AI Solutions",
    subtitle: "Otomatisasi Workflow & Integrasi AI",
    bgImage: "/home_about_card.jpeg",
    description:
      "Memangkas jam kerja manual yang berulang melalui otomatisasi alur kerja terpadu dan penerapan teknologi kecerdasan buatan (AI) untuk keputusan presisi.",
    features: [
      "Otomatisasi Alur Kerja Operasional",
      "Integrasi AI & Machine Learning Custom",
      "Efisiensi Biaya & Bot Layanan",
    ],
    color: "from-[#06b6d4]/20 via-[#3b82f6]/10 to-transparent",
  },
  {
    id: "analytics",
    icon: BarChart3,
    number: "03",
    title: "Data Analytics & Reporting",
    subtitle: "Dasbor Analytics Real-Time & BI",
    bgImage: "/home_about_card.jpeg",
    description:
      "Mengolah tumpukan data mentah menjadi dasbor analitis interaktif real-time dan business intelligence untuk mendukung keputusan bisnis berbasis data.",
    features: [
      "Dasbor Analisis Interaktif Real-Time",
      "Business Intelligence & Data Warehouse",
      "Laporan Kinerja & Prediksi Tren",
    ],
    color: "from-[#3b82f6]/20 via-[#22b4a6]/10 to-transparent",
  },
  {
    id: "infrastructure",
    icon: Network,
    number: "04",
    title: "IT Infrastructure, Procurement & Support",
    subtitle: "Jaringan Enterprise, Hardware & Support 24/7",
    bgImage: "/home_about_card.jpeg",
    description:
      "Perancangan jaringan enterprise yang resilien, pengadaan perangkat keras dari distributor resmi, serta dukungan teknis & pemeliharaan 24/7 tanpa kompromi.",
    features: [
      "Desain & Arsitektur Jaringan Enterprise",
      "Pengadaan Hardware Distributor Resmi",
      "Dukungan Teknis & Maintenance 24/7",
    ],
    color: "from-[#8b5cf6]/20 via-[#22b4a6]/10 to-transparent",
  },
];

export function ServicesOverview() {
  const [activeHover, setActiveHover] = useState<number>(0);

  return (
    <section className="py-16 sm:py-20 bg-transparent relative">
      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Section Header - Fully Responsive Flex */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <SectionLabel>Layanan Utama</SectionLabel>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight max-w-3xl">
              Solusi Teknologi Terpadu{" "}
              <span className="bg-linear-to-r from-white via-[#a5f3fc] to-[#22b4a6] bg-clip-text text-transparent">
                berstandar Enterprise.
              </span>
            </h2>
          </div>
          <a
            href="/services"
            className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-[#22b4a6] hover:text-white transition-colors duration-200 py-1 shrink-0 group self-start sm:self-auto"
          >
            <span>Jelajahi Semua Layanan</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* DESKTOP (>= 1024px): Expanding Horizontal Glass Accordion Deck */}
        <div className="hidden lg:flex gap-4 h-130 w-full">
          {services.map((service, index) => {
            const isExpanded = activeHover === index;
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveHover(index)}
                className={`relative rounded-3xl border border-white/12 border-t-white/30 bg-white/[0.035] backdrop-blur-3xl p-8 transition-all duration-700 ease-out cursor-pointer overflow-hidden flex flex-col justify-between group ${
                  isExpanded
                    ? "flex-[3.5] bg-linear-to-br " +
                      service.color +
                      " border-[#22b4a6]/50 shadow-[0_30px_80px_rgba(0,0,0,0.8),0_0_40px_rgba(34,180,166,0.2)]"
                    : "flex-1 hover:bg-white/6 hover:border-white/20"
                }`}
              >
                {/* Custom Background Image Overlay */}
                <div
                  className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-25 group-hover:opacity-35 transition-opacity duration-700 pointer-events-none"
                  style={{ backgroundImage: `url('${service.bgImage}')` }}
                />
                <div className="absolute inset-0 bg-linear-to-r from-[#030712] via-[#030712]/85 to-[#030712]/90 pointer-events-none" />
                <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent z-10 pointer-events-none" />

                {/* Top Bar */}
                <div className="relative z-10 flex items-center justify-between">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 shrink-0 ${
                      isExpanded
                        ? "bg-[#22b4a6] text-black shadow-[0_0_30px_#22b4a6]"
                        : "bg-white/5 border border-white/10 text-[#22b4a6]"
                    }`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>
                  {isExpanded && (
                    <span className="font-mono text-xs text-[#22b4a6] font-semibold tracking-wider px-3 py-1 rounded-full bg-white/4 border border-white/10">
                      {service.subtitle}
                    </span>
                  )}
                </div>

                {/* Middle Content */}
                {isExpanded ? (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="relative z-10 space-y-4 my-auto"
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

                {/* Bottom Bar */}
                <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="font-mono text-xs text-white/40 font-semibold">
                    {service.number}
                  </span>
                  {isExpanded && (
                    <a
                      href="/services"
                      className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-white hover:text-[#22b4a6] transition-colors"
                    >
                      <span>Lihat Detail</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* MOBILE & TABLET (< 1024px): 1-col on Mobile, 2-col Grid on Tablet */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <div className="h-full relative overflow-hidden rounded-3xl border border-white/12 border-t-white/30 bg-white/[0.035] backdrop-blur-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col justify-between group hover:border-[#22b4a6]/40 transition-all duration-300">
                  {/* Blended Background Overlay */}
                  <div
                    className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-25 group-hover:opacity-35 transition-opacity duration-500 pointer-events-none"
                    style={{ backgroundImage: `url('${service.bgImage}')` }}
                  />
                  <div className="absolute inset-0 bg-linear-to-r from-[#030712] via-[#030712]/85 to-[#030712]/90 pointer-events-none" />
                  <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent z-10 pointer-events-none" />

                  <div>
                    {/* Top Row: Icon Sphere + Number Badge */}
                    <div className="relative z-10 flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-[#22b4a6]/15 border border-[#22b4a6]/30 flex items-center justify-center shadow-[0_0_20px_rgba(34,180,166,0.25)]">
                        <Icon className="w-6 h-6 text-[#22b4a6]" />
                      </div>
                      <span className="font-mono text-xs text-[#22b4a6] font-semibold px-2.5 py-1 rounded-full bg-white/4 border border-white/10">
                        {service.number}
                      </span>
                    </div>

                    <span className="relative z-10 font-mono text-[10px] text-[#22b4a6] tracking-wider uppercase font-semibold block mb-1">
                      {service.subtitle}
                    </span>
                    <h3 className="relative z-10 text-xl font-extrabold text-white tracking-tight leading-snug mb-3 group-hover:text-[#a5f3fc] transition-colors">
                      {service.title}
                    </h3>
                    <p className="relative z-10 text-xs text-[#a3a3a3] leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  <div>
                    {/* Feature Checklist */}
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

                    {/* Bottom CTA Link */}
                    <a
                      href="/services"
                      className="relative z-10 inline-flex items-center gap-2 font-mono text-xs font-semibold text-[#22b4a6] group-hover:text-white transition-colors"
                    >
                      <span>Lihat Detail Layanan</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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
