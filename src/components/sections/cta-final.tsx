import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

export default function CtaFinal() {
  return (
    <section className="border-b bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 py-20 lg:py-32">
      <div className="container text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-purple-300 bg-white px-4 py-2 shadow-lg">
          <Sparkles className="size-4 text-purple-600" />
          <span className="text-sm font-bold text-purple-900">Limited Beta Spots Available</span>
        </div>
        <h2 className="mx-auto max-w-3xl bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-3xl font-bold text-transparent lg:text-5xl" style={{ fontFamily: "var(--font-heading)" }}>
          Need Cash Now? 💰
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-body-lg text-foreground font-medium">
          Turn your crypto into instant Naira. Join 200+ borrowers already getting funded in hours, not days. 
          <span className="block mt-2 text-purple-700 font-bold">No credit checks. No paperwork. No BS. 🚀</span>
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="h-12 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 px-8 text-button font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
            🚀 Apply for Your Loan Now
            <ArrowRight className="ml-2 size-4" />
          </Button>
          <Button variant="outline" className="h-12 rounded-2xl border-2 border-purple-300 bg-white px-8 text-button font-bold text-purple-700 hover:bg-purple-50 transition-all">
            See How It Works
          </Button>
        </div>
        <p className="mx-auto mt-6 text-sm text-muted-foreground">
          ✨ Average approval time: <strong className="text-purple-700">2.5 hours</strong> • Get funded in <strong className="text-purple-700">minutes</strong>
        </p>
      </div>
    </section>
  );
}