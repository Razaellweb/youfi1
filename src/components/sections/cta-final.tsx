import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

export default function CtaFinal() {
  return (
    <section className="border-b bg-background py-20 lg:py-32">
      <div className="container text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-card px-4 py-2 shadow-sm">
          <Sparkles className="size-4 text-primary" />
          <span className="text-sm font-medium">Join the Future of Finance</span>
        </div>
        <h2 className="mx-auto max-w-3xl text-3xl font-bold text-foreground lg:text-5xl" style={{ fontFamily: "var(--font-heading)" }}>
          Join the Future of Finance
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-body-lg text-foreground">
          Finance should work for you, not the other way around.
          <span className="block">Borrow smarter. Lend confidently. Grow together.</span>
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="h-12 rounded-xl bg-primary px-8 text-button font-medium shadow-sm hover:bg-primary/90 transition-colors">
            Get Started Now →
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
        <p className="mx-auto mt-6 text-sm text-muted-foreground">
          24/7 Available Support  99.9% Platform Uptime  256-bit Bank-Grade Encryption
        </p>
      </div>
    </section>
  );
}
