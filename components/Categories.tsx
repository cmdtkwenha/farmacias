const categories = [
  { name: "Alívio da dor", icon: "pill", tone: "bg-cyan-50 text-cyan-600" },
  { name: "Antibióticos", icon: "capsule", tone: "bg-orange-50 text-orange-600" },
  { name: "Vitaminas e suplementos", icon: "vitamin", tone: "bg-amber-50 text-amber-600" },
  { name: "Bebé e criança", icon: "drop", tone: "bg-blue-50 text-blue-600" },
  { name: "Diabetes", icon: "shield", tone: "bg-violet-50 text-violet-600" },
  { name: "Coração", icon: "heart", tone: "bg-rose-50 text-rose-600" },
  { name: "Cuidados da pele", icon: "skin", tone: "bg-emerald-50 text-emerald-600" },
  { name: "Saúde feminina", icon: "female", tone: "bg-purple-50 text-purple-600" },
];

export function Categories() {
  return (
    <section id="categorias" className="min-w-0 bg-white">
      <div className="mb-5 flex items-center justify-between gap-4">
        <h2 className="text-xl font-black tracking-normal text-slate-950">Explorar por categoria</h2>
        <a href="#pesquisa" className="text-xs font-bold text-slate-600 transition hover:text-[#007a63]">
          Ver todas
        </a>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
        {categories.map((category) => (
          <button
            key={category.name}
            className={`group grid min-h-24 place-items-center rounded-xl p-4 text-center shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-0.5 hover:shadow-xl ${category.tone}`}
          >
            <CategoryIcon icon={category.icon} />
            <span className="mt-3 block text-xs font-black leading-4 text-slate-950">{category.name}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

function CategoryIcon({ icon }: { icon: string }) {
  const common = "size-8";
  if (icon === "heart") {
    return (
      <svg aria-hidden="true" className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
        <path d="M20.8 7.5c0 5-8.8 10.5-8.8 10.5S3.2 12.5 3.2 7.5A4.2 4.2 0 0 1 10 4.2l2 2 2-2a4.2 4.2 0 0 1 6.8 3.3Z" />
      </svg>
    );
  }
  if (icon === "shield") {
    return (
      <svg aria-hidden="true" className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
        <path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />
        <path d="M12 9v6M9 12h6" />
      </svg>
    );
  }
  if (icon === "drop") {
    return (
      <svg aria-hidden="true" className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
        <path d="M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11Z" />
      </svg>
    );
  }
  return (
    <svg aria-hidden="true" className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
      <path d="m9 15 6-6" />
      <rect x="4" y="12" width="16" height="7" rx="3.5" transform="rotate(-45 12 15.5)" />
    </svg>
  );
}
