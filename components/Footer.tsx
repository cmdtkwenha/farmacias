import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  "Farmácias parceiras",
  "Medicamentos populares",
  "Ajuda",
  "Contacto",
];

export function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-12">
        <div>
          <Link href="/" className="flex items-center gap-3" aria-label="Farmácias Angola">
            <span className="relative block h-9 w-9 sm:h-10 sm:w-10">
              <Image
                src="/images/logo-farmacias.png"
                alt="Farmácias Angola"
                fill
                unoptimized
                className="object-contain"
                sizes="40px"
              />
            </span>
            <span className="text-xl font-black text-slate-950">Farmácias</span>
          </Link>
          <p className="mt-5 max-w-md text-sm leading-6 text-slate-600">
            Uma forma simples e moderna de encontrar medicamentos, reservar em farmácias com stock e recolher quando lhe for conveniente.
          </p>
          <p className="mt-4 text-sm font-black text-[#0B7A5A]">Encontre. Reserve. Recolha.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <h2 className="text-sm font-black uppercase text-slate-950">Explorar</h2>
            <div className="mt-4 grid gap-3">
              {footerLinks.map((link) => (
                <a key={link} href="#pesquisa" className="text-sm font-semibold text-slate-600 transition hover:text-[#0B7A5A]">
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-black uppercase text-slate-950">Luanda primeiro</h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Visualização inicial com dados mockados para validar a experiência premium da homepage.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-100 px-4 py-5 text-center text-xs font-semibold text-slate-500">
        Farmácias Angola. Plataforma visual em desenvolvimento.
      </div>
    </footer>
  );
}
