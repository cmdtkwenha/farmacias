import Image from "next/image";
import { SearchBar } from "@/components/SearchBar";

export function Hero() {
  return (
    <section className="overflow-hidden bg-[#F7FAF9]">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:px-8 lg:py-18">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-[#0B7A5A] shadow-sm">
            Encontre. Reserve. Recolha.
          </p>
          <h1 className="max-w-2xl text-4xl font-black leading-[1.03] tracking-normal text-slate-950 sm:text-5xl lg:text-6xl">
            Medicamentos disponíveis em farmácias perto de si.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            Pesquise o produto, compare farmácias em Luanda e reserve para recolher com tranquilidade.
          </p>
          <SearchBar />
        </div>

        <div className="relative">
          <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-emerald-950/10 ring-1 ring-slate-100 sm:min-h-[500px] lg:min-h-[620px]">
            <Image
              src="/images/family-hero.png"
              alt="Família angolana saudável"
              fill
              unoptimized
              priority
              className="object-contain p-3"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute bottom-4 left-4 right-4 rounded-[1.5rem] bg-white/95 p-4 shadow-xl backdrop-blur">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-black text-slate-950">Farmácias perto de si</p>
                  <p className="mt-1 text-sm text-slate-500">Stock confirmado para recolha</p>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-black text-[#0B7A5A]">12 abertas</span>
              </div>
              <div className="mt-4 h-24 overflow-hidden rounded-2xl bg-[#F7FAF9] p-3">
                <div className="relative h-full rounded-xl bg-white">
                  <span className="absolute left-[18%] top-[35%] size-3 rounded-full bg-[#0B7A5A] ring-4 ring-emerald-100" />
                  <span className="absolute left-[53%] top-[22%] size-3 rounded-full bg-[#0B7A5A] ring-4 ring-emerald-100" />
                  <span className="absolute left-[72%] top-[58%] size-3 rounded-full bg-[#0B7A5A] ring-4 ring-emerald-100" />
                  <span className="absolute inset-x-5 top-1/2 h-px bg-emerald-100" />
                  <span className="absolute bottom-4 left-8 h-px w-24 rotate-[-18deg] bg-emerald-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
