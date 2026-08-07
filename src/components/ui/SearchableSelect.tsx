import { useState, useRef, useEffect } from "react";
import { ChevronDown, Search, Check } from "lucide-react";

interface SearchableSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder?: string;
  required?: boolean;
}

export function SearchableSelect({
  value,
  onChange,
  options,
  placeholder = "Pilih topik...",
  required = false,
}: SearchableSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredOptions = options.filter((opt) =>
    opt.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-3.5 text-sm text-left transition-all duration-300 flex items-center justify-between gap-2 cursor-pointer hover:border-white/20 focus:border-white/25 focus:bg-white/[0.08] focus:outline-none"
      >
        <span className={value ? "text-white" : "text-white/30"}>
          {value || placeholder}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-white/50 shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-2 w-full rounded-2xl border border-white/15 bg-[#0a0f1e] backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
            <Search className="w-4 h-4 text-white/40 shrink-0" />
            <input
              type="text"
              autoFocus
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari topik..."
              className="w-full bg-transparent text-sm text-white placeholder-white/30 focus:outline-none"
            />
          </div>

          <div className="max-h-56 overflow-y-auto">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => {
                    onChange(opt);
                    setIsOpen(false);
                    setSearch("");
                  }}
                  className={`w-full flex items-center justify-between gap-2 px-4 py-3 text-sm text-left transition-colors cursor-pointer ${
                    value === opt
                      ? "bg-[#22b4a6]/15 text-[#22b4a6]"
                      : "text-white/80 hover:bg-white/[0.06] hover:text-white"
                  }`}
                >
                  <span>{opt}</span>
                  {value === opt && <Check className="w-4 h-4 shrink-0" />}
                </button>
              ))
            ) : (
              <p className="px-4 py-3 text-sm text-white/40">
                Tidak ada topik yang cocok.
              </p>
            )}
          </div>
        </div>
      )}

      {required && !value && (
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          className="sr-only"
          required
          value={value}
          onChange={() => {}}
        />
      )}
    </div>
  );
}