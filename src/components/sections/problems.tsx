import { Ban, Zap, TrendingDown } from "lucide-react";

export default function ProblemsSection() {
  const problems = [
    {
      icon: Ban,
      title: "No Credit History? No Problem! 🎉",
      description: "Traditional banks reject you without credit history. With YouFi, your crypto is your credit score. Get approved instantly based on your collateral, not your past.",
    },
    {
      icon: Zap,
      title: "Get Money Lightning Fast ⚡",
      description: "Stop waiting days for loan approvals. With YouFi, you're matched with lenders in under 3 hours and get your Naira within minutes of approval. Emergency cash when you need it most!",
    },
    {
      icon: TrendingDown,
      title: "Lower Rates, More Savings 💸",
      description: "Say goodbye to predatory interest rates! Our competitive P2P marketplace keeps rates fair (6.5%-12.5% monthly). Your crypto works for you while you access the cash you need.",
    },
  ];

  return (
    <section className="border-b bg-background py-20 lg:py-32">
      <div className="container">
        <h2 className="mx-auto max-w-3xl text-center text-3xl lg:text-5xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
          Why Borrowers{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-primary">Love YouFi</span>
          </span>
        </h2>

        <div className="mt-16 grid gap-0 border-t lg:grid-cols-3">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="border-b bg-card px-8 py-12 lg:border-b-0 lg:border-r last:border-b-0 last:border-r-0 hover:bg-accent transition-colors"
                style={{ borderStyle: "dashed" }}
              >
                <div className="mb-7 flex size-12 items-center justify-center rounded-2xl border bg-background shadow-sm">
                  <Icon className="size-6 text-primary" />
                </div>
                <h4 className="text-lg font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                  {problem.title}
                </h4>
                <p className="mt-3 text-body-md text-muted-foreground">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}