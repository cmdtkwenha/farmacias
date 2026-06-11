import Image from "next/image";
import Link from "next/link";
import logoFarmacias from "@/logo/logo-farmacias.gif";

const navItems = [
  { label: "Início", href: "/" },
  { label: "Pesquisar Medicamentos", href: "#pesquisa" },
  { label: "Farmácias", href: "#farmacias" },
  { label: "Dicas de Saúde", href: "#dicas" },
  { label: "Sobre", href: "#sobre" },
];

export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="flex min-h-[72px] items-center justify-between gap-4 px-5 py-3 sm:px-8 lg:min-h-[74px] lg:px-12">
        <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="Farmácias Angola">
          <span className="relative block h-10 w-9 sm:h-12 sm:w-10">
            <Image
              src={logoFarmacias}
              alt="Farmácias Angola"
              fill
              unoptimized
              priority
              className="object-contain"
              sizes="48px"
            />
          </span>
          <span className="text-xl font-extrabold tracking-normal text-slate-950 sm:text-2xl">Farmácias</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-700 lg:flex">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className={`border-b-2 py-7 transition ${
                index === 0 ? "border-[#007a63] text-[#007a63]" : "border-transparent hover:text-[#007a63]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button className="hidden h-9 items-center gap-2 rounded-md border border-slate-200 bg-white px-3 text-xs font-bold text-slate-800 shadow-sm sm:flex">
            <PinIcon />
            Luanda, Angola
          </button>
          <button className="hidden h-9 rounded-md border border-slate-200 bg-white px-3 text-xs font-bold text-slate-800 shadow-sm md:block">
            PT
          </button>
          <a
            href="#pesquisa"
            className="rounded-md bg-[#007a63] px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-emerald-900/10 transition hover:bg-[#006651]"
          >
            Entrar
          </a>
        </div>
      </div>
    </header>
  );
}

function PinIcon() {
  return (
    <svg aria-hidden="true" className="size-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <path d="M12 21s7-5.1 7-11a7 7 0 1 0-14 0c0 5.9 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}
