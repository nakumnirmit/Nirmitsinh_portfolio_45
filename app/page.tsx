import Hero from "@/components/Hero";
import LogoSection from "@/components/LogoSection";
import WorkShowcase from "@/components/WorkShowcase";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-ink text-paper">
      <Hero />
      <LogoSection />
      <WorkShowcase />
      <Footer />
    </main>
  );
}
