import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Farmácias", href: "#farmacias" },
  { label: "Categorias", href: "#categorias" },
  { label: "Pesquisar", href: "#pesquisa" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Farmácias Angola">
          <span className="relative block h-9 w-9 sm:h-10 sm:w-10 lg:h-12 lg:w-12">
            <Image
              src="/images/logo-farmacias.png"
              alt="Farmácias Angola"
              fill
              unoptimized
              priority
              className="object-contain"
              sizes="48px"
            />
          </span>
          <span className="text-xl font-black tracking-normal text-slate-950 sm:text-2xl">Farmácias</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-700 md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="transition hover:text-[#0B7A5A]">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#pesquisa"
          className="rounded-full bg-[#0B7A5A] px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-emerald-900/10 transition hover:bg-[#09694d] sm:px-5"
        >
          Pesquisar
        </a>
      </div>
    </header>
  );
}
