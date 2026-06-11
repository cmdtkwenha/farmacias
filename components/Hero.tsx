import Image from "next/image";
import { SearchBar } from "@/components/SearchBar";
import familyHero from "@/logo/Farmacias-banner.gif";

export function Hero() {
  return (
    // Approved Homepage Layout - Do Not Redesign
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-white to-[#edf7f5]">
      <div className="grid gap-8 px-6 py-10 sm:px-9 lg:min-h-[560px] lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.3fr)_minmax(0,0.3fr)] lg:items-stretch lg:gap-6 lg:px-10 lg:py-5">
        <div className="relative z-10 flex flex-col justify-center py-4 lg:py-12">
            <h1 className="max-w-[500px] text-5xl font-black leading-[1.05] tracking-normal text-slate-950 sm:text-6xl lg:text-[64px]">
              Encontre.
              <span className="block text-[#007a63]">Reserve.</span>
              <span className="block text-[#007a63]">Recolha.</span>
            </h1>
            <p className="mt-6 max-w-[430px] text-base font-medium leading-7 text-slate-600 sm:text-lg">
              Encontre medicamentos e produtos de saúde em farmácias de confiança perto de si.
              Reserve online e recolha na farmácia.
            </p>
          <SearchBar />
        </div>

        <div className="relative flex min-h-[360px] items-center justify-center lg:min-h-[480px] lg:self-end">
          <div className="absolute left-1/2 top-0 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-[#dff3ef] sm:h-[420px] sm:w-[420px] lg:h-[430px] lg:w-[430px]" />
          <div className="relative z-10 h-[360px] w-full max-w-[390px] drop-shadow-[0_26px_42px_rgba(15,23,42,0.16)] sm:h-[420px] sm:max-w-[460px] lg:h-[480px] lg:max-w-[430px]">
                <Image
                  src={familyHero}
                  alt="Família angolana saudável"
                  fill
                  unoptimized
                  priority
              className="object-contain object-center mix-blend-multiply"
              sizes="(max-width: 1024px) 100vw, 30vw"
                />
          </div>
        </div>

        <MapPanel />
      </div>
      <BenefitsBar />
    </section>
  );
}

function MapPanel() {
  return (
    // Approved Homepage Layout - Do Not Redesign
    <div className="relative min-h-[420px] overflow-hidden rounded-2xl bg-[#e7f0ed] shadow-[0_18px_50px_rgba(15,23,42,0.11)] ring-1 ring-slate-200 lg:min-h-[480px] lg:self-end">
      <div className="absolute inset-0 opacity-80">
        <div className="absolute inset-0 bg-[linear-gradient(35deg,transparent_23%,rgba(255,255,255,0.92)_24%,rgba(255,255,255,0.92)_26%,transparent_27%,transparent_64%,rgba(255,255,255,0.92)_65%,rgba(255,255,255,0.92)_67%,transparent_68%),linear-gradient(105deg,transparent_18%,rgba(255,255,255,0.75)_19%,rgba(255,255,255,0.75)_21%,transparent_22%,transparent_58%,rgba(255,255,255,0.75)_59%,rgba(255,255,255,0.75)_61%,transparent_62%)] bg-[length:150px_120px]" />
        <div className="absolute left-10 top-24 h-48 w-48 rounded-full bg-sky-100/80 blur-sm" />
        <div className="absolute bottom-8 right-24 h-56 w-56 rounded-full bg-emerald-100/80 blur-sm" />
      </div>

      <button
        data-map-search
        className="absolute left-4 top-5 z-20 flex w-[136px] items-center justify-center gap-2 rounded-xl bg-white px-3 py-3 text-xs font-black text-slate-900 shadow-lg ring-1 ring-slate-200 xl:left-5"
      >
        <SearchTinyIcon />
        Pesquisar nesta zona
      </button>

      <MapMarker className="left-[14%] top-[31%]" />
      <MapMarker className="left-[31%] top-[43%]" pin />
      <MapMarker className="left-[18%] top-[58%]" />
      <MapMarker className="left-[56%] top-[23%]" />
      <MapMarker className="left-[47%] top-[76%]" />
      <MapMarker className="left-[73%] top-[32%]" />

      <div
        data-map-card
        className="absolute right-1/2 top-[47%] z-30 w-[145px] rounded-xl bg-white p-3 shadow-[0_22px_55px_rgba(15,23,42,0.20)] ring-1 ring-slate-200"
      >
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xs font-black text-slate-950 xl:text-sm">Farmácia Central</h3>
            <p className="mt-2 text-xs font-bold text-[#007a63] xl:text-sm">Aberto agora</p>
            <p className="mt-2 text-xs text-slate-500">1,2 km de distância</p>
          </div>
          <span className="mt-1 size-2 rounded-full bg-emerald-400" />
        </div>
        <button className="mt-3 w-full rounded-lg bg-[#007a63] px-3 py-2.5 text-xs font-black text-white xl:py-3">Ver detalhes</button>
      </div>

      <aside
        data-map-filter
        className="absolute right-4 top-4 z-30 w-[145px] rounded-2xl bg-white/95 p-4 shadow-[0_18px_50px_rgba(15,23,42,0.13)] ring-1 ring-slate-200 backdrop-blur xl:right-5 xl:top-5"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-black text-slate-950">Filtro</h2>
          <button className="text-[10px] font-bold text-slate-400">Limpar</button>
        </div>
        <div className="mt-4 space-y-4 xl:mt-5 xl:space-y-5">
          <div>
            <p className="mb-2 text-xs font-black text-slate-800">Ordenar por</p>
            <div className="rounded-lg border border-slate-200 px-3 py-2.5 text-xs font-bold text-slate-600 xl:py-3">Mais perto</div>
          </div>
          <div>
            <p className="mb-3 text-xs font-black text-slate-800">Disponibilidade</p>
            <label className="flex items-center gap-2 text-xs font-semibold text-slate-700">
              <span className="grid size-4 place-items-center rounded bg-[#007a63] text-white">✓</span>
              Em stock
            </label>
            <label className="mt-3 flex items-center gap-2 text-xs font-semibold text-slate-700">
              <span className="size-4 rounded border border-slate-300" />
              Pré-reserva
            </label>
          </div>
          <div>
            <p className="mb-3 text-xs font-black text-slate-800">Distância</p>
            <div className="relative h-1 rounded-full bg-[#007a63]">
              <span className="absolute -top-1 left-0 size-3 rounded-full bg-[#007a63]" />
              <span className="absolute -top-1 right-0 size-3 rounded-full bg-[#007a63]" />
            </div>
            <div className="mt-2 flex justify-between text-[10px] font-bold text-slate-400">
              <span>0 km</span>
              <span>20+ km</span>
            </div>
          </div>
          <button className="w-full rounded-lg bg-[#007a63] py-3 text-xs font-black text-white shadow-lg">Aplicar filtros</button>
        </div>
      </aside>
    </div>
  );
}

function BenefitsBar() {
  const benefits = [
    ["1000+ Produtos", "Vasta gama de medicamentos e produtos de saúde", "basket"],
    ["Farmácias confiáveis", "Parceiros verificados perto de si", "pharmacy"],
    ["Poupe tempo", "Reserve sem ir de farmácia em farmácia", "clock"],
    ["Reserva segura", "A sua reserva fica confirmada", "shield"],
    ["Recolha na farmácia", "Rápida e simples", "store"],
  ];

  return (
    <div className="px-6 pb-8 lg:px-10">
      <div className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-2 lg:grid-cols-5">
        {benefits.map(([title, text, icon]) => (
          <div key={title} className="flex items-center gap-4">
            <span className="grid size-12 shrink-0 place-items-center rounded-full bg-emerald-50 text-[#007a63]">
              <BenefitIcon icon={icon} />
            </span>
            <div>
              <p className="text-sm font-black text-slate-950">{title}</p>
              <p className="mt-1 text-xs font-medium leading-5 text-slate-600">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MapMarker({ className, pin = false }: { className: string; pin?: boolean }) {
  return (
    <span className={`absolute z-20 grid size-9 place-items-center rounded-full bg-[#007a63] text-white shadow-lg ring-4 ring-white ${className}`}>
      {pin ? <PinMarkerIcon /> : <CrossIcon />}
    </span>
  );
}

function SearchTinyIcon() {
  return (
    <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.4">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
      <path d="M12 7v10M7 12h10" />
    </svg>
  );
}

function PinMarkerIcon() {
  return (
    <svg aria-hidden="true" className="size-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2a7 7 0 0 0-7 7c0 5.3 7 13 7 13s7-7.7 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
    </svg>
  );
}

function BenefitIcon({ icon }: { icon: string }) {
  const common = "size-5";
  if (icon === "clock") {
    return (
      <svg aria-hidden="true" className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v5l3 2" />
      </svg>
    );
  }
  if (icon === "shield") {
    return (
      <svg aria-hidden="true" className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />
        <path d="m9 12 2 2 4-5" />
      </svg>
    );
  }
  if (icon === "store") {
    return (
      <svg aria-hidden="true" className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path d="M4 10h16l-1-5H5l-1 5ZM6 10v9h12v-9" />
        <path d="M9 19v-5h6v5" />
      </svg>
    );
  }
  return (
    <svg aria-hidden="true" className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path d="M12 7v10M7 12h10" />
      <path d="M5 9h14v11H5z" />
    </svg>
  );
}
