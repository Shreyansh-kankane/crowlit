import { Suspense } from "react";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Features from "@/components/features";
import HowItWorks from "@/components/how-it-works";
import UseCases from "@/components/use-cases";
import Testimonials from "@/components/testimonials";
import Pricing from "@/components/pricing";
import Cta from "@/components/cta";
import Footer from "@/components/footer";
import { Loader } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black" />
      </div>

      <Navbar />

      <main className="relative z-10 pt-16">
        <Suspense
          fallback={
            <div className="flex h-screen items-center justify-center">
              <Loader className="h-8 w-8 animate-spin text-primary" />
            </div>
          }
        >
          <div className="mx-4 md:mx-20">
            <Hero />
            <Features />
            <HowItWorks />
            <UseCases />
            <Testimonials />
            <Pricing />
            <Cta />
          </div>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
