import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

export default function CtaFinal() {
  return (
    <section className="border-b bg-background py-20 lg:py-32">
      <div className="container text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-card px-4 py-2 shadow-sm">
          <Sparkles className="size-4 text-primary" />
          <span className="text-sm font-medium">Limited Beta Spots Available</span>
        </div>
        <h2 className="mx-auto max-w-3xl text-3xl font-bold text-foreground lg:text-5xl" style={{ fontFamily: "var(--font-heading)" }}>
          Need Cash Now? 💰
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-body-lg text-foreground">
          Turn your crypto into instant Naira. Join 200+ borrowers already getting funded in hours, not days. 
          <span className="block mt-2 font-semibold text-primary">No credit checks. No paperwork. No BS. 🚀</span>
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="h-12 rounded-xl bg-primary px-8 text-button font-medium shadow-sm hover:bg-primary/90 transition-colors">
            🚀 Apply for Your Loan Now
            <ArrowRight className="ml-2 size-4" />
          </Button>
          <Button variant="outline" className="h-12 rounded-xl border bg-card px-8 text-button font-medium hover:bg-accent transition-colors">
            See How It Works
          </Button>
        </div>
        <p className="mx-auto mt-6 text-sm text-muted-foreground">
          ✨ Average approval time: <strong className="text-primary">2.5 hours</strong> • Get funded in <strong className="text-primary">minutes</strong>
        </p>
      </div>
    </section>
  );
}