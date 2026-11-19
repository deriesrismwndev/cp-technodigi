import { motion } from "framer-motion";

const clientLogos = [
  { src: "/clients/logo_bogor.webp", alt: "Pemerintah Kota Bogor" },
  { src: "/clients/logo_kabbogor.webp", alt: "Pemerintah Kabupaten Bogor" },
  { src: "/clients/logo_kerjasama.webp", alt: "Sekretariat Bagian Kerjasama Palembang" },
  { src: "/clients/logo_palembang.webp", alt: "Pemerintah Kota Palembang" },
  { src: "/clients/logo-bapenda.jpeg?v=2", alt: "Bapenda Kabupaten Lahat" },
  { src: "/clients/logo_kabupaten_lahat.jpg?v=2", alt: "Pemerintah Kabupaten Lahat" },
];

export function ClientTicker() {
  return (
    <section className="relative py-20 bg-transparent overflow-hidden">
      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-transparent to-[#22b4a6]/40" />
          <p className="font-mono text-xs sm:text-sm tracking-[0.28em] text-[#22b4a6] uppercase font-semibold">
            DIPERCAYA OLEH PERUSAHAAN &amp; INSTANSI
          </p>
          <div className="h-px flex-1 max-w-[120px] bg-gradient-to-l from-transparent to-[#22b4a6]/40" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative w-full overflow-hidden py-3"
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
                        loading="lazy"
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
    </section>
  );
}
