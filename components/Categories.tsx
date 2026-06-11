import Image from "next/image";

const categories = [
  "Dor e febre",
  "Vitaminas",
  "Bebé e maternidade",
  "Cuidados pessoais",
  "Gripe e tosse",
  "Primeiros socorros",
];

export function Categories() {
  return (
    <section id="categorias" className="bg-[#F7FAF9] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-black uppercase text-[#0B7A5A]">Categorias</p>
          <h2 className="mt-2 text-3xl font-black tracking-normal text-slate-950 sm:text-4xl">
            Produtos essenciais para cada momento
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-6">
          {categories.map((category) => (
            <button
              key={category}
              className="group min-h-36 rounded-[1.25rem] bg-white p-4 text-left shadow-lg shadow-slate-900/5 ring-1 ring-slate-100 transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              <span className="relative mb-4 grid size-12 place-items-center overflow-hidden rounded-2xl bg-[#F7FAF9]">
                <Image
                  src="/images/medicine-placeholder.jpg"
                  alt=""
                  fill
                  unoptimized
                  className="object-cover opacity-80"
                  sizes="48px"
                />
              </span>
              <span className="block text-sm font-black leading-5 text-slate-950 group-hover:text-[#0B7A5A]">{category}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
