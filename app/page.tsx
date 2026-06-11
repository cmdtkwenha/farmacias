import { Categories } from "@/components/Categories";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PharmacyCards } from "@/components/PharmacyCards";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <PharmacyCards />
      <Categories />
      <Footer />
    </main>
  );
}
