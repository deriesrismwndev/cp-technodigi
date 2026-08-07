import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  Users,
  Target,
  Lightbulb,
  Award,
  ArrowRight,
  Zap,
  Shield,
  Rocket,
  Code2,
  Globe,
  Building2,
  TrendingUp,
  Cpu,
  Layers,
} from "lucide-react";

const milestones = [
  {
    year: "2023",
    title: "Inisiasi & Proyek Independen",
    description:
      "Para founder & engineer berpengalaman mulai menangani konsultasi IT dan pengembangan aplikasi kustom secara independen.",
  },
  {
    year: "2025",
    title: "Pendirian CV Technodigi Mandiri Solusi",
    description:
      "Resmi berdiri sebagai badan hukum CV, mengonsolidasikan tim pakar teknis, dan meluncurkan 4 pilar layanan IT utama.",
  },
  {
    year: "2026",
    title: "Ekspansi Solusi Enterprise",
    description:
      "Memperluas kemitraan strategi IT, solusi cloud infrastructure terkelola, dan otomatisasi bisnis lintas sektor.",
  },
];

const values = [
  {
    number: "01",
    icon: Target,
    title: "Komitmen pada Hasil",
    description:
      "Kami tidak hanya menyelesaikan tugas — kami memastikan setiap solusi memberikan dampak nyata bagi bisnis Anda.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Inovasi Berkelanjutan",
    description:
      "Teknologi terus berkembang, begitu juga dengan kami. Selalu mengadopsi pendekatan terbaru untuk solusi terbaik.",
  },
  {
    number: "03",
    icon: Users,
    title: "Kolaborasi Mendalam",
    description:
      "Kami menjadi perpanjangan tim Anda. Bukan vendor, melainkan partner yang memahami visi dan tujuan bisnis.",
  },
  {
    number: "04",
    icon: Award,
    title: "Standar Enterprise",
    description:
      "Setiap proyek dikerjakan dengan standar kualitas enterprise — dari arsitektur hingga deployment dan maintenance.",
  },
];

const stats = [
  { value: "50+", label: "Proyek Selesai" },
  { value: "30+", label: "Klien & Mitra" },
  { value: "5+", label: "Thn Pengalaman Tim" },
  { value: "99.9%", label: "Uptime SLA" },
];


const expertise = [
  { icon: Code2, label: "Software Engineering" },
  { icon: Shield, label: "Cybersecurity" },
  { icon: Globe, label: "Cloud Architecture" },
  { icon: Building2, label: "Enterprise Systems" },
  { icon: TrendingUp, label: "Digital Strategy" },
  { icon: Zap, label: "Infrastructure" },
];

export function AboutPage() {
  return (
    <div className="bg-[#030712]">
      <section className="pt-36 md:pt-44 pb-28 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-[#22b4a6]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
          <SectionLabel>About Technodigi</SectionLabel>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              Kami membantu bisnis mengubah kebutuhan jadi sistem yang{" "}
              <span className="bg-gradient-to-r from-white via-[#a5f3fc] to-[#22b4a6] bg-clip-text text-transparent">
                jelas, cepat, dan siap berkembang.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-[#a3a3a3] leading-relaxed mb-10 max-w-3xl">
              Technodigi Mandiri Solusi membantu organisasi menjawab tantangan
              transformasi digital melalui sistem manajemen digital, automasi,
              data analytics, dan solusi berbasis AI.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-3xl border border-white/10 border-t-white/25 bg-white/[0.035] backdrop-blur-2xl flex items-start gap-4">
                <Cpu className="w-6 h-6 text-[#22b4a6] shrink-0 mt-1" />
                <p className="text-sm text-[#a3a3a3] leading-relaxed">
                  Solusi kami mencakup perancangan sistem terintegrasi yang dapat
                  diukur dan diandalkan untuk skalabilitas jangka panjang.
                </p>
              </div>

              <div className="p-6 rounded-3xl border border-white/10 border-t-white/25 bg-white/[0.035] backdrop-blur-2xl flex items-start gap-4">
                <Layers className="w-6 h-6 text-[#22b4a6] shrink-0 mt-1" />
                <p className="text-sm text-[#a3a3a3] leading-relaxed">
                  Setiap solusi dirancang agar efektif, efisien, adaptif, dan
                  dapat berkembang mengikuti kebutuhan bisnis tanpa mengorbankan
                  stabilitas.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 relative overflow-hidden">
        <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-white/10 border-t-white/20 bg-white/[0.03] backdrop-blur-2xl p-6 text-center shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
              >
                <p className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white to-[#22b4a6] bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="mt-2 font-mono text-[10px] text-[#22b4a6] tracking-[0.3em] uppercase font-semibold">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 relative overflow-hidden">
        <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
          <SectionLabel>Our Journey</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-16 tracking-tight">
            Dari Passion menjadi
            <br />
            <span className="bg-gradient-to-r from-white via-[#a5f3fc] to-[#22b4a6] bg-clip-text text-transparent">
              Partner Teknologi Terpercaya
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, i) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#22b4a6]/15 border border-[#22b4a6]/30 font-mono text-xs font-bold text-[#22b4a6] mb-4">
                    {milestone.year}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-[#a3a3a3] leading-relaxed">
                    {milestone.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 relative overflow-hidden">
        <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
          <SectionLabel>Values</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-16 tracking-tight">
            Nilai-Nilai yang Menggerakkan Kami.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#22b4a6]/15 border border-[#22b4a6]/30 border-t-white/30 shadow-[0_0_20px_rgba(34,180,166,0.25)] flex items-center justify-center">
                      <value.icon className="w-6 h-6 text-[#22b4a6]" />
                    </div>
                    <span className="font-mono text-xs font-bold text-white/30">
                      {value.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                    {value.title}
                  </h3>
                  <p className="text-sm text-[#a3a3a3] leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 relative overflow-hidden">
        <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8 text-center">
          <SectionLabel className="justify-center">Expertise</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Area Keahlian Kami.
          </h2>
          <p className="max-w-xl mx-auto text-[#a3a3a3] mb-16">
            Kami tidak hanya menguasai satu bidang — tim kami memiliki keahlian
            mendalam di berbagai layer teknologi.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {expertise.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/10 border-t-white/20 bg-white/[0.035] backdrop-blur-xl p-5 text-center hover:border-[#22b4a6]/40 hover:bg-white/[0.06] transition-all duration-300 group shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
              >
                <item.icon className="w-6 h-6 text-[#22b4a6] mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-xs font-semibold text-white/90">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 relative overflow-hidden px-4">
        <div className="relative z-10 mx-auto max-w-5xl">
          <div className="rounded-3xl border border-white/15 border-t-white/30 bg-white/[0.035] backdrop-blur-3xl p-10 md:p-16 text-center shadow-[0_30px_80px_rgba(0,0,0,0.7)]">
            <SectionLabel className="justify-center">Let&apos;s Talk</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Siap Memulai Proyek Bersama?
            </h2>
            <p className="max-w-xl mx-auto text-[#a3a3a3] mb-10 text-lg">
              Ceritakan kebutuhan bisnis Anda dan mari kita wujudkan solusi
              teknologi yang tepat bersama.
            </p>
            <Button href="/contact" size="lg" variant="primary">
              <Rocket className="w-4 h-4 text-[#22b4a6]" />
              Hubungi Kami
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
