import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { MessagesSquare, Layers } from "lucide-react";

const clientLogos = [
  { src: "/clients/logo_bogor.webp", alt: "Pemerintah Kota Bogor" },
  { src: "/clients/logo_kabbogor.webp", alt: "Pemerintah Kabupaten Bogor" },
  { src: "/clients/logo_kerjasama.webp", alt: "Mitra Kerjasama Palembang" },
  { src: "/clients/logo_palembang.webp", alt: "Pemerintah Kota Palembang" },
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
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between text-center lg:text-left gap-6">
          <motion.p
            initial={{ opacity: 0.01 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-[10px] tracking-[0.3em] text-[#22b4a6] uppercase font-semibold shrink-0 gpu-layer"
          >
            DIPERCAYA OLEH PERUSAHAAN & INSTANSI
          </motion.p>

          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-8 md:gap-14">
            {clientLogos.map((client, i) => (
              <motion.div
                key={client.src}
                initial={{ opacity: 0.01, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group cursor-pointer transition-transform duration-500 ease-out hover:scale-105 gpu-layer"
              >
                <img
                  src={client.src}
                  alt={client.alt}
                  className="h-10 md:h-12 w-auto max-w-[170px] object-contain transition-all duration-500 ease-out opacity-70 group-hover:opacity-100 [filter:sepia(1)_hue-rotate(130deg)_saturate(1.8)_brightness(0.65)] group-hover:[filter:none]"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
