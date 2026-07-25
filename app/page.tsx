import Hero from "@/components/Hero";
import WorkShowcase from "@/components/WorkShowcase";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-ink text-paper">
      <Hero />
      <WorkShowcase />
      <Footer />
    </main>
  );
}
