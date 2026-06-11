import Image from "next/image";
import Link from "next/link";
import logoFarmacias from "@/logo/logo-farmacias.gif";

export function Footer() {
  return (
    <footer id="sobre" className="px-6 pb-6 lg:px-10">
      <div className="grid items-center gap-5 rounded-2xl bg-gradient-to-r from-[#edf7f5] to-[#e3f2f0] p-5 sm:grid-cols-[1fr_auto] lg:grid-cols-[0.9fr_1fr_auto]">
        <div className="hidden items-end gap-3 lg:flex">
          <span className="relative h-16 w-14">
            <Image src={logoFarmacias} alt="" fill unoptimized className="object-contain" sizes="56px" />
          </span>
          <div className="h-12 w-24 rounded-t-2xl bg-white/70 shadow-inner" />
        </div>

        <div>
          <Link href="/" className="inline-flex items-center gap-3" aria-label="Farmácias Angola">
            <span className="relative block h-10 w-9">
              <Image src={logoFarmacias} alt="Farmácias Angola" fill unoptimized className="object-contain" sizes="40px" />
            </span>
            <span className="text-lg font-black text-slate-950">Farmácias</span>
          </Link>
          <h2 className="mt-3 text-lg font-black text-slate-950">Leve a Farmácias consigo</h2>
          <p className="mt-2 text-sm font-medium text-slate-600">
            Pesquise, reserve e acompanhe a sua recolha com uma experiência simples e segura.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-5 text-sm font-bold text-[#007a63]">
          <div className="flex items-center gap-2">
            <BellIcon />
            Notificações rápidas
          </div>
          <div className="flex items-center gap-2">
            <CalendarIcon />
            Reservas fáceis
          </div>
          <div className="flex items-center gap-2">
            <ClockIcon />
            Histórico
          </div>
        </div>

        <button className="rounded-lg bg-[#005d52] px-7 py-3 text-sm font-black text-white shadow-lg transition hover:bg-[#004b42]">
          Descarregar app
        </button>
      </div>
    </footer>
  );
}

function BellIcon() {
  return (
    <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path d="M18 8a6 6 0 1 0-12 0c0 7-3 7-3 7h18s-3 0-3-7" />
      <path d="M10 19a2 2 0 0 0 4 0" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M8 3v4M16 3v4M4 10h16M9 15l2 2 4-5" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v5l3 2" />
    </svg>
  );
}
