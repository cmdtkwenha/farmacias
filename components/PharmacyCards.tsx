const pharmacies = [
  {
    name: "Farmácia Central",
    area: "Avenida 21 de Janeiro, Luanda",
    status: "Aberto até 20:00",
    stock: "Disponível em stock",
    price: "2.450 Kz",
    distance: "1,2 km",
    rating: "4.8 (128)",
    imageTone: "from-emerald-900 via-emerald-700 to-teal-500",
  },
  {
    name: "Farmácia Saúde",
    area: "Rua da Missão, Luanda",
    status: "Aberto até 19:00",
    stock: "Disponível em stock",
    price: "2.700 Kz",
    distance: "1,8 km",
    rating: "4.6 (86)",
    imageTone: "from-slate-700 via-emerald-600 to-lime-500",
  },
  {
    name: "Bem Estar Farmácia",
    area: "Avenida de Portugal, Luanda",
    status: "Pré-reserva",
    stock: "Poucas unidades",
    price: "2.950 Kz",
    distance: "2,4 km",
    rating: "4.4 (53)",
    imageTone: "from-slate-800 via-slate-600 to-emerald-500",
  },
  {
    name: "Farmácia Esperança",
    area: "Rua Comandante Gika, Luanda",
    status: "Aberto até 20:30",
    stock: "Disponível em stock",
    price: "2.500 Kz",
    distance: "2,9 km",
    rating: "4.7 (91)",
    imageTone: "from-lime-700 via-emerald-600 to-teal-400",
  },
];

export function PharmacyCards() {
  return (
    <section id="farmacias" className="min-w-0 bg-white">
      <div className="mb-5 flex items-center justify-between gap-4">
        <h2 className="text-xl font-black tracking-normal text-slate-950">Farmácias perto de si</h2>
        <a href="#pesquisa" className="text-xs font-bold text-slate-600 transition hover:text-[#007a63]">
          Ver todas
        </a>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {pharmacies.map((pharmacy) => (
          <article
            key={pharmacy.name}
            className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            <div className={`relative h-28 bg-gradient-to-br ${pharmacy.imageTone}`}>
              <div className="absolute inset-x-5 bottom-4 h-11 rounded-t-lg bg-white/20 ring-1 ring-white/30" />
              <div className="absolute bottom-4 left-5 right-5 flex items-center gap-2">
                <span className="grid size-8 place-items-center rounded-md bg-white text-[#007a63] shadow-sm">
                  <CrossIcon />
                </span>
                <span className="text-sm font-black uppercase tracking-wide text-white">Farmácia</span>
              </div>
              <span className="absolute right-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-black text-[#007a63] shadow-sm">
                {pharmacy.stock === "Disponível em stock" ? "Em stock" : "Pré-reserva"}
              </span>
            </div>

            <div className="p-4">
              <h3 className="text-sm font-black text-slate-950">{pharmacy.name}</h3>
              <div className="mt-2 flex items-center justify-between gap-3 text-xs font-semibold">
                <span className="text-amber-500">★ {pharmacy.rating}</span>
                <span className="text-slate-500">{pharmacy.distance}</span>
              </div>
              <p className="mt-2 text-sm font-bold text-[#007a63]">{pharmacy.status}</p>
              <p className="mt-2 min-h-9 text-xs font-medium leading-5 text-slate-500">{pharmacy.area}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500">Desde</span>
                <span className="text-sm font-black text-slate-950">{pharmacy.price}</span>
              </div>
              <button className="mt-4 w-full rounded-lg bg-[#007a63] px-4 py-3 text-xs font-black text-white shadow-lg shadow-emerald-900/10 transition hover:bg-[#006651]">
                Ver e reservar
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function CrossIcon() {
  return (
    <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
      <path d="M12 7v10M7 12h10" />
    </svg>
  );
}
