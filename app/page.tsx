import { Categories } from "@/components/Categories";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PharmacyCards } from "@/components/PharmacyCards";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f3f7f7] px-3 py-4 text-slate-950 sm:px-5 lg:px-6">
      <div className="mx-auto max-w-[1508px] overflow-hidden rounded-xl bg-white shadow-[0_18px_70px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/70">
        <Header />
        <Hero />
        <section className="grid gap-8 px-6 pb-7 pt-2 lg:grid-cols-[1.18fr_0.82fr] lg:px-9 xl:px-10">
          <PharmacyCards />
          <Categories />
        </section>
        <Footer />
      </div>
    </main>
  );
}
