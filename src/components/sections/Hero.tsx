import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { MessagesSquare, Layers } from "lucide-react";

const clientLogos = [
  { src: "/clients/logo_bogor.webp", alt: "Pemerintah Kota Bogor" },
  { src: "/clients/logo_kabbogor.webp", alt: "Pemerintah Kabupaten Bogor" },
  { src: "/clients/logo_kerjasama.webp", alt: "Sekretariat Bagian Kerjasama Palembang" },
  { src: "/clients/logo_palembang.webp", alt: "Pemerintah Kota Palembang" },
  { src: "/clients/logo-bapenda.jpeg?v=2", alt: "Bapenda Kabupaten Lahat" },
  { src: "/clients/logo_kabupaten_lahat.jpg?v=2", alt: "Pemerintah Kabupaten Lahat" },
];

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          setVideoFailed(true);
        });
      }
    }
  }, []);

  return (
    <section className="relative min-h-screen w-full bg-transparent flex flex-col justify-between pt-32 pb-20 overflow-x-clip">
      {videoFailed ? (
        <img
          src="/images/hero-bg-poster.jpeg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center opacity-35 mix-blend-screen pointer-events-none select-none"
          style={{
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 98%)",
            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 98%)",
          }}
        />
      ) : (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          controls={false}
          aria-hidden="true"
          tabIndex={-1}
          className="absolute inset-0 w-full h-full object-cover object-center opacity-35 mix-blend-screen pointer-events-none select-none [&::-webkit-media-controls]:!hidden [&::-webkit-media-controls-panel]:!hidden [&::-webkit-media-controls-play-button]:!hidden [&::-webkit-media-controls-start-playback-button]:!hidden [&::-webkit-media-controls-container]:!hidden"
          style={{
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 98%)",
            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 98%)",
          }}
        >
          <source src="/images/hero-bg.mp4" type="video/mp4" />
        </video>
      )}

      <div className="absolute top-1/4 left-10 w-[550px] h-[550px] bg-[#22b4a6]/15 rounded-full blur-[160px] pointer-events-none animate-liquid-float" />
      <div className="absolute top-1/3 right-10 w-[550px] h-[550px] bg-[#06b6d4]/12 rounded-full blur-[180px] pointer-events-none animate-liquid-pulse" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8 w-full my-auto text-center lg:text-left flex flex-col items-center lg:items-start justify-center">
        <div className="max-w-4xl lg:max-w-3xl w-full text-center lg:text-left flex flex-col items-center lg:items-start">
          <motion.h1
            initial={{ opacity: 0.01, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight text-white mb-6 text-center lg:text-left max-w-4xl gpu-layer"
          >
            Solusi Software & Sistem Terintegrasi.
            <br />
            <span className="bg-gradient-to-r from-white via-[#a5f3fc] to-[#22b4a6] bg-clip-text text-transparent">
              Didesain untuk Efisiensi & Skala Bisnis.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0.01, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-[#a3a3a3] leading-relaxed mb-10 max-w-2xl text-center lg:text-left mx-auto lg:mx-0 gpu-layer"
          >
            Technodigi Mandiri Solusi menghadirkan{" "}
            <span className="text-[#22b4a6] font-semibold">perangkat lunak kustom</span>,{" "}
            <span className="text-[#22b4a6] font-semibold">otomatisasi alur kerja</span>, dan{" "}
            <span className="text-[#22b4a6] font-semibold">sistem analitik data</span>{" "}
            yang dirancang khusus untuk memangkas proses manual serta mempercepat skala operasional perusahaan Anda.
          </motion.p>

          <motion.div
            initial={{ opacity: 0.01, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 w-full sm:w-auto gpu-layer"
          >
            <Button href="/contact" size="lg" variant="primary">
              <MessagesSquare className="w-4 h-4 text-[#22b4a6]" />
              Konsultasi Proyek Gratis
            </Button>
            <Button href="/services" size="lg" variant="secondary">
              <Layers className="w-4 h-4 text-[#22b4a6]" />
              Lihat Solusi Layanan
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8 w-full pt-16">
        <div className="flex flex-col items-center gap-8">
          <motion.div
            initial={{ opacity: 0.01, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center gap-4 w-full gpu-layer"
          >
            <div className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-transparent to-[#22b4a6]/40" />
            <p className="font-mono text-xs sm:text-sm tracking-[0.28em] text-[#22b4a6] uppercase font-semibold text-center">
              DIPERCAYA OLEH PERUSAHAAN &amp; INSTANSI
            </p>
            <div className="h-px flex-1 max-w-[120px] bg-gradient-to-l from-transparent to-[#22b4a6]/40" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0.01, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full overflow-hidden py-3 gpu-layer"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 8%, rgba(0,0,0,1) 92%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 8%, rgba(0,0,0,1) 92%, transparent 100%)",
            }}
          >
            <div className="flex w-max animate-client-marquee">
              {[0, 1].map((groupIndex) => (
                <div
                  key={groupIndex}
                  aria-hidden={groupIndex === 1}
                  className="flex items-center gap-12 sm:gap-16 md:gap-20 pr-12 sm:pr-16 md:pr-20"
                >
                  {clientLogos.map((client) => (
                    <div
                      key={`${groupIndex}-${client.src}`}
                      className="group cursor-pointer flex flex-col items-center justify-center shrink-0 transition-transform duration-500 ease-out hover:-translate-y-1 gpu-layer"
                    >
                      <div className="h-24 sm:h-28 md:h-32 flex items-center justify-center">
                        <img
                          src={client.src}
                          alt={client.alt}
                          loading="eager"
                          className="max-h-20 sm:max-h-24 md:max-h-28 w-auto max-w-[200px] sm:max-w-[240px] md:max-w-[260px] object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.5)] transition-transform duration-500 ease-out group-hover:scale-110"
                        />
                      </div>
                      <span className="mt-3 text-xs sm:text-sm font-semibold text-white/80 group-hover:text-[#a5f3fc] transition-colors duration-300 text-center leading-snug">
                        {client.alt}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
