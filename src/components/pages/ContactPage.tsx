import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Mail, Phone, MapPin, Send, MessageSquare, Building2 } from "lucide-react";

const locations = [
  {
    city: "Bogor",
    province: "Jawa Barat, Indonesia",
    detail: "Kantor Operasional & Pengembangan Software",
  },
  {
    city: "Lubuklinggau",
    province: "Sumatera Selatan, Indonesia",
    detail: "Kantor Cabang & Infrastruktur Teknis",
  },
];

export function ContactPage() {
  return (
    <div className="bg-transparent font-sans">
      {/* Hero */}
      <section className="pt-36 md:pt-44 pb-16 relative">
        <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
          <SectionLabel>Hubungi Kami</SectionLabel>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              Mari Bicara tentang{" "}
              <span className="bg-gradient-to-r from-white via-[#a5f3fc] to-[#22b4a6] bg-clip-text text-transparent">
                Proyek & Solusi Anda.
              </span>
            </h1>
            <p className="max-w-2xl text-lg md:text-xl text-[#a3a3a3] leading-relaxed">
              Tim spesialis kami siap menjawab pertanyaan dan mendiskusikan
              kebutuhan sistem perusahaan Anda secara langsung.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section — Aligned 2-Column Grid */}
      <section className="pb-28 relative">
        <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left: Contact Form (7 cols) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-7 rounded-3xl border border-white/12 border-t-white/30 bg-white/[0.035] backdrop-blur-3xl p-8 md:p-10 shadow-[0_30px_70px_rgba(0,0,0,0.6)] flex flex-col justify-between relative overflow-hidden group"
            >
              {/* Blended Background Overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-20 pointer-events-none"
                style={{ backgroundImage: "url('/hero_about_card.jpeg')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/95 via-[#030712]/85 to-[#030712]/95 pointer-events-none" />

              <div className="relative z-10">
                <h2 className="text-2xl font-extrabold text-white mb-2 tracking-tight">
                  Kirim Pesan Langsung
                </h2>
                <p className="text-sm text-[#a3a3a3] mb-8">
                  Isi formulir di bawah ini dan tim kami akan merespon dalam waktu kurang dari 2 jam.
                </p>

                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-mono text-[10px] text-[#22b4a6] mb-2 tracking-[0.2em] font-semibold">
                        NAMA LENGKAP
                      </label>
                      <input
                        type="text"
                        placeholder="Masukkan nama Anda"
                        className="w-full bg-white/[0.04] border border-white/12 rounded-2xl px-5 py-3.5 text-sm text-white placeholder-white/30 focus:border-[#22b4a6] focus:bg-white/[0.07] focus:outline-none transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] text-[#22b4a6] mb-2 tracking-[0.2em] font-semibold">
                        EMAIL PERUSAHAAN
                      </label>
                      <input
                        type="email"
                        placeholder="nama@perusahaan.com"
                        className="w-full bg-white/[0.04] border border-white/12 rounded-2xl px-5 py-3.5 text-sm text-white placeholder-white/30 focus:border-[#22b4a6] focus:bg-white/[0.07] focus:outline-none transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] text-[#22b4a6] mb-2 tracking-[0.2em] font-semibold">
                      SUBJEK / KATEGORI LAYANAN
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: Otomatisasi AI / Software Custom / IT Infrastructure"
                      className="w-full bg-white/[0.04] border border-white/12 rounded-2xl px-5 py-3.5 text-sm text-white placeholder-white/30 focus:border-[#22b4a6] focus:bg-white/[0.07] focus:outline-none transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] text-[#22b4a6] mb-2 tracking-[0.2em] font-semibold">
                      PESAN & DETAIL KEBUTUHAN
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Jelaskan kebutuhan atau tantangan bisnis yang ingin Anda selesaikan..."
                      className="w-full bg-white/[0.04] border border-white/12 rounded-2xl px-5 py-3.5 text-sm text-white placeholder-white/30 focus:border-[#22b4a6] focus:bg-white/[0.07] focus:outline-none transition-all duration-300 resize-none shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]"
                    />
                  </div>
                  <Button type="submit" size="lg" variant="primary">
                    <Send className="w-4 h-4 text-[#22b4a6]" />
                    Kirim Pesan Sekarang
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Right: Single Unified Contact Info & Locations Card (5 cols) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-5 rounded-3xl border border-white/12 border-t-white/30 bg-white/[0.035] backdrop-blur-3xl p-8 md:p-10 shadow-[0_30px_70px_rgba(0,0,0,0.6)] flex flex-col justify-between relative overflow-hidden"
            >
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-extrabold text-white mb-6 tracking-tight">
                    Informasi & Lokasi
                  </h2>
                  <div className="space-y-5">
                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-2xl bg-[#22b4a6]/15 border border-[#22b4a6]/30 flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-[#22b4a6]" />
                      </div>
                      <div>
                        <p className="font-mono text-[10px] text-[#22b4a6] tracking-[0.2em] font-semibold">
                          EMAIL SUPPORT
                        </p>
                        <a
                          href="mailto:support@technodigi.co.id"
                          className="text-sm font-semibold text-white hover:text-[#22b4a6] transition-colors"
                        >
                          support@technodigi.co.id
                        </a>
                      </div>
                    </div>

                    {/* WhatsApp */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-2xl bg-[#22b4a6]/15 border border-[#22b4a6]/30 flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-[#22b4a6]" />
                      </div>
                      <div>
                        <p className="font-mono text-[10px] text-[#22b4a6] tracking-[0.2em] font-semibold">
                          WHATSAPP / TELEPON
                        </p>
                        <a
                          href="https://wa.me/6285353615220"
                          className="text-sm font-semibold text-white hover:text-[#22b4a6] transition-colors block mb-2"
                        >
                          +62 853-5361-5220
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Office Locations */}
                <div className="pt-6 border-t border-white/10 space-y-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Building2 className="w-4 h-4 text-[#22b4a6]" />
                    <h3 className="text-sm font-bold text-white tracking-wide uppercase font-mono">
                      LOKASI KANTOR RESMI
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {locations.map((loc) => (
                      <div
                        key={loc.city}
                        className="p-3.5 rounded-2xl border border-white/10 bg-white/[0.025]"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <MapPin className="w-4 h-4 text-[#22b4a6] shrink-0" />
                          <h4 className="font-bold text-white text-sm">
                            {loc.city},{" "}
                            <span className="text-[#a3a3a3] font-normal">
                              {loc.province}
                            </span>
                          </h4>
                        </div>
                        <p className="text-xs text-white/60 pl-6">{loc.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp CTA Button at Bottom */}
              <div className="pt-6 mt-6 border-t border-white/10">
                <Button
                  href="https://wa.me/6285353615220"
                  variant="primary"
                  size="md"
                >
                  <MessageSquare className="w-4 h-4 text-[#22b4a6]" />
                  Chat WhatsApp Langsung
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
