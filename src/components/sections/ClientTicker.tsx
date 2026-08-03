import { motion } from "framer-motion";

const clientLogos = [
  { src: "/clients/logo_kerjasama.webp", alt: "Mitra Kerjasama" },
  { src: "/clients/logo_palembang.webp", alt: "Pemerintah Kota Palembang" },
];

export function ClientTicker() {
  return (
    <section className="relative py-16 bg-transparent">
      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8 text-center">
        <p className="font-mono text-[10px] tracking-[0.4em] text-[#22b4a6] uppercase mb-10 font-semibold">
          TRUSTED BY LEADING ENTERPRISES & INSTITUTIONS
        </p>

        {/* 2 Clean Client Logos - Grayscale by default, color on hover */}
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
          {clientLogos.map((client, i) => (
            <motion.div
              key={client.src}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer p-4 transition-transform duration-300 hover:scale-105"
            >
              <img
                src={client.src}
                alt={client.alt}
                className="h-12 md:h-16 w-auto max-w-[220px] object-contain filter grayscale opacity-50 contrast-125 brightness-125 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-400 ease-out"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
