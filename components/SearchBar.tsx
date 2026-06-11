const quickSearches = ["Paracetamol", "Amoxicilina", "Vitamina C", "Panadol Extra"];

export function SearchBar() {
  return (
    <div id="pesquisa" className="mt-7">
      <form className="max-w-[430px] rounded-xl bg-white p-2 shadow-[0_16px_45px_rgba(15,23,42,0.12)] ring-1 ring-slate-200">
        <label className="flex min-h-[54px] items-center gap-3">
          <span className="grid size-10 shrink-0 place-items-center rounded-full text-slate-600">
              <SearchIcon />
          </span>
          <span className="min-w-0 flex-1">
              <input
              className="w-full bg-transparent text-sm font-semibold text-slate-950 outline-none placeholder:text-slate-500"
              placeholder="Pesquisar medicamento ou produto..."
                type="search"
              />
          </span>
          <button className="h-11 rounded-lg bg-[#007a63] px-5 text-sm font-black text-white shadow-lg shadow-emerald-900/15 transition hover:bg-[#006651]">
            Pesquisar
          </button>
        </label>
      </form>

      <div className="mt-5 flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-600">
        <span className="mr-1 text-slate-600">Pesquisas populares:</span>
        {quickSearches.map((item) => (
          <button
            key={item}
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-700 shadow-sm transition hover:border-[#007a63] hover:text-[#007a63]"
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
