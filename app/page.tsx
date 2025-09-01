import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem";
import { ShiftSection } from "@/components/sections/shift";
import { FeaturesSection } from "@/components/sections/features";
import { WaitlistForm } from "@/components/sections/waitlist-form";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        <Hero />
        <div id="problem">
          <ProblemSection />
        </div>
        <div id="vision">
          <ShiftSection />
        </div>
        <FeaturesSection />
        <WaitlistForm />
      </main>
      <Footer />
    </>
  );
}
