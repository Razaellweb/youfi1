import { Lock, Clock, Globe } from "lucide-react";

export default function ProblemsSection() {
  const problems = [
    {
      icon: Lock,
      title: "Secure Collateral Management",
      description: "Your crypto assets are held in secure custodial escrow with 135% initial LTV and automated liquidation protection at 115% threshold.",
    },
    {
      icon: Clock,
      title: "Instant Loan Matching",
      description: "Get matched with lenders in minutes. Loans are funded quickly through our efficient order book matching system.",
    },
    {
      icon: Globe,
      title: "Cross-Border Access",
      description: "Access credit in emerging markets with crypto collateral. Borrow in Naira or USDC, backed by USDT/USDC on multiple chains.",
    },
  ];

  return (
    <section className="border-b bg-background py-20 lg:py-32">
      <div className="container">
        <h2 className="mx-auto max-w-3xl text-center text-3xl lg:text-5xl font-semibold" style={{ fontFamily: "var(--font-heading)" }}>
          Why Choose{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-primary">YouFi</span>
          </span>
        </h2>

        <div className="mt-16 grid gap-0 border-t lg:grid-cols-3">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="border-b px-8 py-12 lg:border-b-0 lg:border-r last:border-b-0 last:border-r-0"
                style={{ borderStyle: "dashed" }}
              >
                <div className="mb-7 flex size-12 items-center justify-center rounded-2xl border bg-background shadow-sm">
                  <Icon className="size-6 text-primary" />
                </div>
                <h4 className="text-lg font-semibold" style={{ fontFamily: "var(--font-heading)" }}>
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