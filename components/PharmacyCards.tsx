import Image from "next/image";

const pharmacies = [
  {
    name: "Farmácia Kilamba Vida",
    area: "Kilamba, Luanda",
    status: "Aberto agora",
    stock: "Disponível em stock",
    price: "2.450 Kz",
    distance: "1,8 km",
  },
  {
    name: "Farmácia Maianga",
    area: "Maianga, Luanda",
    status: "Aberto agora",
    stock: "Disponível em stock",
    price: "2.700 Kz",
    distance: "3,2 km",
  },
  {
    name: "Farmácia Talatona",
    area: "Talatona, Luanda",
    status: "Fecha às 21:00",
    stock: "Poucas unidades",
    price: "2.950 Kz",
    distance: "5,4 km",
  },
];

export function PharmacyCards() {
  return (
    <section id="farmacias" className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-black uppercase text-[#0B7A5A]">Farmácias perto de si</p>
            <h2 className="mt-2 text-3xl font-black tracking-normal text-slate-950 sm:text-4xl">
              Reserve para recolha hoje
            </h2>
          </div>
          <a href="#pesquisa" className="text-sm font-black text-[#0B7A5A] hover:text-[#09694d]">
            Ver mais farmácias
          </a>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {pharmacies.map((pharmacy) => (
            <article
              key={pharmacy.name}
              className="overflow-hidden rounded-[1.5rem] bg-white shadow-xl shadow-slate-900/7 ring-1 ring-slate-100"
            >
              <div className="relative h-48 bg-[#F7FAF9]">
                <Image
                  src="/images/pharmacy-placeholder.jpg"
                  alt={pharmacy.name}
                  fill
                  unoptimized
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-black text-[#0B7A5A] shadow-sm">
                  {pharmacy.status}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-black text-slate-950">{pharmacy.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-slate-500">{pharmacy.area}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-[#F7FAF9] px-3 py-1 text-sm font-black text-slate-700">
                    {pharmacy.distance}
                  </span>
                </div>

                <div className="mt-5 rounded-2xl bg-[#F7FAF9] p-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-bold text-slate-600">{pharmacy.stock}</span>
                    <span className="text-base font-black text-slate-950">{pharmacy.price}</span>
                  </div>
                </div>

                <button className="mt-5 w-full rounded-2xl bg-[#0B7A5A] px-5 py-3.5 text-sm font-black text-white shadow-lg shadow-emerald-900/10 transition hover:bg-[#09694d]">
                  Reservar para recolha
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
