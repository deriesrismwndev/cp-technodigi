import { motion } from "framer-motion";

const clientLogos = [
  { src: "/clients/logo_bogor.webp", alt: "Pemerintah Kota Bogor" },
  { src: "/clients/logo_kabbogor.webp", alt: "Pemerintah Kabupaten Bogor" },
  { src: "/clients/logo_kerjasama.webp", alt: "Mitra Kerjasama Palembang" },
  { src: "/clients/logo_palembang.webp", alt: "Pemerintah Kota Palembang" },
];

export function ClientTicker() {
  return (
    <section className="relative py-16 bg-transparent">
      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8 text-center">
        <p className="font-mono text-[10px] tracking-[0.4em] text-[#22b4a6] uppercase mb-10 font-semibold">
          DIPERCAYA OLEH PERUSAHAAN & INSTANSI
        </p>

        {/* 4 Client Logos - Muted Dark Teal Tint by default, full original color on hover */}
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {clientLogos.map((client, i) => (
            <motion.div
              key={client.src}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer p-3 transition-transform duration-300 hover:scale-105"
            >
              <img
                src={client.src}
                alt={client.alt}
                className="h-10 md:h-14 w-auto max-w-[200px] object-contain transition-all duration-400 ease-out opacity-70 group-hover:opacity-100 [filter:sepia(1)_hue-rotate(130deg)_saturate(1.8)_brightness(0.65)] group-hover:[filter:none]"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
