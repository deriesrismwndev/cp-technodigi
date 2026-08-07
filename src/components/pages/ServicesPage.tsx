import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import {
  Code2,
  Bot,
  BarChart3,
  Network,
  ArrowRight,
  Headphones,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Software Development & Digital Solutions",
    subtitle: "Aplikasi Web, Mobile & Sistem Kustom",
    description:
      "Pengembangan aplikasi web, mobile, dan sistem kustom yang dirancang khusus untuk performa, keamanan, dan skalabilitas jangka panjang bisnis Anda.",
    features: [
      "Custom Web Applications & Portals",
      "Native & Cross-Platform Mobile Apps",
      "API Development & Seamless Integration",
      "Modernisasi & Refactoring Sistem Legacy",
    ],
  },
  {
    icon: Bot,
    title: "Business Automation & AI Solutions",
    subtitle: "Otomatisasi Workflow & Integrasi Kecerdasan Buatan",
    description:
      "Otomatisasi alur kerja operasional untuk memangkas waktu kerja manual serta integrasi kecerdasan buatan (AI) untuk keputusan yang lebih cepat dan presisi.",
    features: [
      "Otomatisasi Workflow & Pemrosesan Data",
      "Integrasi AI & Machine Learning Custom",
      "Bot Layanan & Chatbot Pintar Enterprise",
      "Optimasi Operasional & Penghematan Biaya",
    ],
  },
  {
    icon: BarChart3,
    title: "Data Analytics & Reporting",
    subtitle: "Visualisasi Data & Business Intelligence Real-Time",
    description:
      "Pengolahan dan visualisasi data bisnis menjadi dasbor interaktif real-time untuk memberikan wawasan mendalam bagi manajemen dalam mengambil keputusan.",
    features: [
      "Dasbor Analytics Interaktif Real-Time",
      "Data Warehouse & Pipeline Architecture",
      "Business Intelligence & Reporting Engine",
      "Analisis Prediktif & Tren Bisnis",
    ],
  },
  {
    icon: Network,
    title: "IT Infrastructure, Procurement & Technical Support",
    subtitle: "Arsitektur Jaringan, Pengadaan & Support 24/7",
    description:
      "Perancangan arsitektur jaringan enterprise, pengadaan perangkat keras dari distributor resmi, serta dukungan teknis & pemeliharaan 24/7 tanpa interruption.",
    features: [
      "Desain & Implementasi Jaringan Enterprise",
      "Pengadaan Perangkat Keras Hardware Resmi",
      "Dukungan Helpdesk & Pemeliharaan 24/7",
      "Audit Keamanan Jaringan & Cloud Setup",
    ],
  },
];

export function ServicesPage() {
  return (
    <div className="bg-[#030712]">
      <section className="pt-36 md:pt-44 pb-20 relative overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-[#22b4a6]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
          <SectionLabel>Layanan Kami</SectionLabel>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              Layanan Teknologi Terpadu
              <br />
              <span className="bg-gradient-to-r from-white via-[#a5f3fc] to-[#22b4a6] bg-clip-text text-transparent">
                untuk Transformasi Digital Bisnis Anda.
              </span>
            </h1>
            <p className="max-w-2xl text-lg md:text-xl text-[#a3a3a3] leading-relaxed">
              Dari rekayasa perangkat lunak hingga otomatisasi kecerdasan buatan —
              Technodigi siap mengeksekusi setiap kebutuhan IT Anda secara profesional.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-white/12 border-t-white/25 bg-white/[0.035] backdrop-blur-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-[#22b4a6]/15 border border-[#22b4a6]/30 border-t-white/30 shadow-[0_0_20px_rgba(34,180,166,0.25)]">
                      <service.icon className="w-7 h-7 text-[#22b4a6]" />
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-[#a3a3a3] leading-relaxed text-base">
                    {service.description}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.025] backdrop-blur-xl p-6 space-y-3">
                  <p className="font-mono text-xs text-[#22b4a6] mb-4 tracking-[0.2em] font-semibold">
                    CAKUPAN SOLUSI:
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm text-white/90"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#22b4a6] shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden px-4">
        <div className="relative z-10 mx-auto max-w-5xl">
          <div className="rounded-3xl border border-white/15 border-t-white/30 bg-white/[0.035] backdrop-blur-3xl p-10 md:p-16 text-center shadow-[0_30px_80px_rgba(0,0,0,0.7)]">
            <SectionLabel className="justify-center">Konsultasi</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Butuh Solusi Teknologi Khusus?
            </h2>
            <p className="max-w-xl mx-auto text-[#a3a3a3] mb-10 text-lg">
              Hubungi tim spesialis kami untuk mendiskusikan kebutuhan bisnis Anda secara gratis.
            </p>
            <Button href="/contact" size="lg" variant="primary">
              <Headphones className="w-4 h-4 text-[#22b4a6]" />
              Hubungi Kami Sekarang
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
