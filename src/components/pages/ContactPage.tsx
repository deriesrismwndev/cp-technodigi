import { useState } from "react";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import {
  Send,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  MessageSquare,
} from "lucide-react";

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const locations = [
    {
      city: "Bogor",
      region: "Jawa Barat, Indonesia",
      address: "Kota Bogor, Jawa Barat 16111",
    },
    {
      city: "Lubuklinggau",
      region: "Sumatera Selatan, Indonesia",
      address: "Kota Lubuklinggau, Sumatera Selatan 31626",
    },
  ];

  return (
    <div className="pt-32 pb-24 relative overflow-hidden bg-transparent">
      <div className="absolute top-1/4 left-10 w-[550px] h-[550px] bg-[#22b4a6]/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[550px] h-[550px] bg-[#06b6d4]/15 rounded-full blur-[170px] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel className="justify-center">HUBUNGI KAMI</SectionLabel>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Mari Bicara tentang{" "}
            <span className="bg-gradient-to-r from-white via-[#a5f3fc] to-[#22b4a6] bg-clip-text text-transparent">
              Proyek IT Anda.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#a3a3a3] leading-relaxed">
            Tim pakar Technodigi siap membantu menganalisis kebutuhan sistem,
            memberikan konsultasi gratis, serta merancang solusi terbaik untuk bisnis Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 rounded-3xl border border-white/12 border-t-white/25 bg-white/[0.035] backdrop-blur-3xl p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group">
            <div className="relative z-10">
              <h2 className="text-2xl font-extrabold text-white tracking-tight mb-2">
                Kirim Pesan atau Konsultasi
              </h2>
              <p className="text-xs text-[#a3a3a3] mb-8 leading-relaxed">
                Isi formulir di bawah ini dan tim teknis kami akan menghubungi Anda dalam waktu 1x24 jam kerja.
              </p>

              {submitted ? (
                <div className="p-8 text-center rounded-2xl bg-white/[0.04] border border-white/10 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#22b4a6]/20 border border-white/15 text-[#22b4a6] flex items-center justify-center mx-auto">
                    <Sparkles className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Pesan Berhasil Terkirim!</h3>
                  <p className="text-xs text-[#a3a3a3] max-w-md mx-auto leading-relaxed">
                    Terima kasih telah menghubungi Technodigi. Tim spesialis kami akan segera meninjau pesan Anda.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono text-white/80 mb-2 font-medium">
                        NAMA LENGKAP *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-3.5 text-sm text-white placeholder-white/30 focus:border-white/25 focus:bg-white/[0.08] focus:outline-none transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-white/80 mb-2 font-medium">
                        ALAMAT EMAIL *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-3.5 text-sm text-white placeholder-white/30 focus:border-white/25 focus:bg-white/[0.08] focus:outline-none transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono text-white/80 mb-2 font-medium">
                        NOMOR WHATSAPP *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+62 812-3456-7890"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-3.5 text-sm text-white placeholder-white/30 focus:border-white/25 focus:bg-white/[0.08] focus:outline-none transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-white/80 mb-2 font-medium">
                        TOPIK / KEBUTUHAN *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Pengembangan Web, AI, IT Support..."
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-3.5 text-sm text-white placeholder-white/30 focus:border-white/25 focus:bg-white/[0.08] focus:outline-none transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-white/80 mb-2 font-medium">
                      DETAIL PESAN ATAU PROYEK *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Jelaskan secara singkat mengenai sistem atau permasalahan IT yang ingin Anda selesaikan..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-3.5 text-sm text-white placeholder-white/30 focus:border-white/25 focus:bg-white/[0.08] focus:outline-none transition-all duration-300 resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" variant="primary" className="w-full">
                    <Send className="w-4 h-4 text-[#22b4a6]" />
                    Kirim Pesan Sekarang
                  </Button>
                </form>
              )}
            </div>
          </div>

          <div className="lg:col-span-5 rounded-3xl border border-white/12 border-t-white/25 bg-white/[0.035] backdrop-blur-3xl p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-extrabold text-white tracking-tight mb-6">
                  Informasi Kontak
                </h2>

                <div className="space-y-6">
                  <a
                    href="https://wa.me/6285353615220"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-2xl bg-[#22b4a6]/15 border border-white/15 flex items-center justify-center shrink-0">
                      <MessageSquare className="w-5 h-5 text-[#22b4a6]" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-[#22b4a6] tracking-wider uppercase font-semibold block">
                        WHATSAPP / TELEPON
                      </span>
                      <span className="text-sm font-bold text-white group-hover:text-[#a5f3fc] transition-colors">
                        +62 853-5361-5220
                      </span>
                      <p className="text-xs text-[#a3a3a3]">Respon Cepat Jam Kerja</p>
                    </div>
                  </a>

                  <a
                    href="mailto:support@technodigi.co.id"
                    className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-2xl bg-[#22b4a6]/15 border border-white/15 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-[#22b4a6]" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-[#22b4a6] tracking-wider uppercase font-semibold block">
                        EMAIL DUKUNGAN
                      </span>
                      <span className="text-sm font-bold text-white group-hover:text-[#a5f3fc] transition-colors">
                        support@technodigi.co.id
                      </span>
                      <p className="text-xs text-[#a3a3a3]">Untuk penawaran & kerja sama resmi</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-4 h-4 text-[#22b4a6]" />
                  <span className="font-mono text-xs text-white font-semibold tracking-wider uppercase">
                    LOKASI KANTOR (INDONESIA)
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                  {locations.map((loc) => (
                    <div
                      key={loc.city}
                      className="p-3.5 rounded-2xl bg-white/[0.025] border border-white/10"
                    >
                      <div className="font-bold text-sm text-white">{loc.city}</div>
                      <div className="text-xs text-[#22b4a6] font-mono">{loc.region}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-3 text-xs text-[#a3a3a3]">
                <Clock className="w-4 h-4 text-[#22b4a6] shrink-0" />
                <span>Senin – Jumat: 08:00 – 17:00 WIB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
