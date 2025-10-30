import { Button } from "@/components/ui/button";

export default function CtaFinal() {
  return (
    <section className="border-b bg-gradient-to-br from-primary/5 to-primary/10 py-20 lg:py-32">
      <div className="container text-center">
        <h2 className="mx-auto max-w-3xl text-3xl lg:text-5xl font-semibold" style={{ fontFamily: "var(--font-heading)" }}>
          Ready to Join the Beta?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-body-lg text-muted-foreground">
          Limited spots available. Apply now to be part of our exclusive V1 beta program.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="h-12 rounded-xl bg-primary px-8 text-button hover:bg-primary/90">
            Apply for Beta Access
          </Button>
          <Button variant="outline" className="h-12 rounded-xl px-8 text-button">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}