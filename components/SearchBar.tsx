const quickSearches = ["Paracetamol", "Vitamina C", "Ibuprofeno"];

export function SearchBar() {
  return (
    <div id="pesquisa" className="mt-8">
      <form className="rounded-[2rem] bg-white p-3 shadow-2xl shadow-emerald-950/10 ring-1 ring-slate-100">
        <div className="grid gap-3 lg:grid-cols-[1fr_0.72fr_auto]">
          <label className="flex min-h-16 items-center gap-3 rounded-3xl bg-[#F7FAF9] px-4">
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white text-[#0B7A5A] shadow-sm">
              <SearchIcon />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-xs font-bold uppercase text-slate-500">Produto</span>
              <input
                className="mt-1 w-full bg-transparent text-base font-semibold text-slate-950 outline-none placeholder:text-slate-400"
                placeholder="Pesquisar medicamento ou produto"
                type="search"
              />
            </span>
          </label>

          <label className="flex min-h-16 items-center gap-3 rounded-3xl bg-[#F7FAF9] px-4">
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white text-[#0B7A5A] shadow-sm">
              <LocationIcon />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-xs font-bold uppercase text-slate-500">Localização</span>
              <input
                className="mt-1 w-full bg-transparent text-base font-semibold text-slate-950 outline-none placeholder:text-slate-400"
                placeholder="Luanda, Talatona..."
                type="search"
              />
            </span>
          </label>

          <button className="min-h-16 rounded-3xl bg-[#0B7A5A] px-7 text-base font-black text-white shadow-xl shadow-emerald-900/15 transition hover:bg-[#09694d]">
            Encontrar
          </button>
        </div>
      </form>

      <div className="mt-5 flex flex-wrap gap-2">
        {quickSearches.map((item) => (
          <button
            key={item}
            className="rounded-full border border-emerald-100 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm transition hover:border-[#0B7A5A] hover:text-[#0B7A5A]"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

function SearchIcon() {
  return (
    <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
      <path strokeLinecap="round" d="m21 21-4.3-4.3" />
      <circle cx="11" cy="11" r="7" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-5.1 7-11a7 7 0 1 0-14 0c0 5.9 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}
