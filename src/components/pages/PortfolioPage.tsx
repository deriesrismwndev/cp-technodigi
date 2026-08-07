import { useState } from "react";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ExternalLink, FolderOpen } from "lucide-react";

const categories = ["Semua", "Software", "Network", "Cloud", "Consulting"];

const projects = [
  {
    title: "ERP System — PT Nusantara Digital",
    category: "Software",
    description:
      "Sistem ERP custom yang mengintegrasikan seluruh operasional bisnis — dari inventory hingga finance — dalam satu platform.",
    tags: ["Web App", "Custom Software", "API Integration"],
  },
  {
    title: "Network Infrastructure — Bank Sejahtera",
    category: "Network",
    description:
      "Redesign dan implementasi infrastruktur jaringan untuk 50+ cabang dengan monitoring 24/7 dan failover otomatis.",
    tags: ["Enterprise Network", "Monitoring", "Security"],
  },
  {
    title: "Cloud Migration — GoVentures",
    category: "Cloud",
    description:
      "Migrasi seluruh infrastruktur on-premise ke multi-cloud environment dengan zero downtime dan cost optimization.",
    tags: ["AWS", "Multi-Cloud", "DevOps"],
  },
  {
    title: "Digital Transformation — Pemerintah DKI Jakarta",
    category: "Consulting",
    description:
      "Strategi dan implementasi transformasi digital untuk layanan publik, termasuk sistem informasi terintegrasi.",
    tags: ["Government", "Digital Strategy", "GIS"],
  },
  {
    title: "Mobile Banking App — Bank Sejahtera",
    category: "Software",
    description:
      "Aplikasi mobile banking dengan fitur lengkap — transfer, pembayaran, investasi — dengan security standar perbankan.",
    tags: ["Mobile App", "Fintech", "Security"],
  },
  {
    title: "Security Operations — PT Sinar Abadi",
    category: "Network",
    description:
      "Implementasi SOC (Security Operations Center) dengan layered security untuk melindungi aset digital perusahaan.",
    tags: ["Cybersecurity", "SOC", "Compliance"],
  },
];

export function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredProjects =
    activeCategory === "Semua"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-[#030712]">
      <section className="pt-36 md:pt-44 pb-20 relative overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-[#22b4a6]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
          <SectionLabel>Portfolio</SectionLabel>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              Proyek yang Telah
              <br />
              <span className="bg-gradient-to-r from-white via-[#a5f3fc] to-[#22b4a6] bg-clip-text text-transparent">
                Kami Eksekusi dengan Hasil Nyata.
              </span>
            </h1>
            <p className="max-w-2xl text-lg md:text-xl text-[#a3a3a3] leading-relaxed">
              Setiap proyek adalah cerminan komitmen kami terhadap kualitas,
              ketepatan waktu, dan dampak nyata bagi bisnis klien.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-mono text-xs font-semibold px-5 py-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? "text-white bg-[#22b4a6]/20 border border-[#22b4a6]/50 border-t-white/30 shadow-[0_0_20px_rgba(34,180,166,0.3)]"
                    : "text-[#a3a3a3] bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:text-white hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <Card className="h-full flex flex-col justify-between">
                  <div>
                    <div className="relative h-44 rounded-2xl bg-white/[0.02] border border-white/10 mb-6 flex items-center justify-center overflow-hidden group-hover:border-[#22b4a6]/30 transition-colors">
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#22b4a6]/10 to-transparent opacity-50" />
                      <ExternalLink className="w-8 h-8 text-[#22b4a6] group-hover:scale-110 transition-transform relative z-10" />
                    </div>
                    <span className="font-mono text-[10px] font-bold text-[#22b4a6] tracking-[0.2em]">
                      {project.category.toUpperCase()}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-2 mb-3 tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[#a3a3a3] leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] text-white/70 bg-white/[0.04] border border-white/10 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden px-4">
        <div className="relative z-10 mx-auto max-w-5xl">
          <div className="rounded-3xl border border-white/15 border-t-white/30 bg-white/[0.035] backdrop-blur-3xl p-10 md:p-16 text-center shadow-[0_30px_80px_rgba(0,0,0,0.7)]">
            <SectionLabel className="justify-center">CTA</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Ingin Proyek Anda Menjadi Berikutnya?
            </h2>
            <p className="max-w-xl mx-auto text-[#a3a3a3] mb-10 text-lg">
              Ceritakan kebutuhan Anda dan mari kita wujudkan bersama.
            </p>
            <Button href="/contact" size="lg" variant="primary">
              <FolderOpen className="w-4 h-4 text-[#22b4a6]" />
              Mulai Proyek
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
