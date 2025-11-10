import { Wallet, UserPlus, Banknote, Clock } from "lucide-react";

export default function ProblemsSection() {
  const benefits = [
    {
      icon: Wallet,
      title: "No need to sell your crypto",
      description: "Get cash while keeping your assets invested",
    },
    {
      icon: UserPlus,
      title: "Invite friends as guarantors",
      description: "Don’t have enough collateral? Your trusted network can help.",
    },
    {
      icon: Banknote,
      title: "Quick cashouts in local currency",
      description: "Convert your USD loan into Naira instantly via our secure P2P marketplace.",
    },
    {
      icon: Clock,
      title: "Flexible tenors",
      description: "Borrow from 1 day up to 180 days.",
    },
  ];

  return (
    <section className="border-b bg-background py-20 lg:py-32">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl lg:text-5xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
            Why YouFi?
          </h2>
          <p className="mt-3 text-body-lg text-muted-foreground">
            Empowering financial freedom through peer-to-peer lending
          </p>
          <p className="mt-6 text-sm uppercase tracking-wide text-muted-foreground">For Borrowers:</p>
        </div>

        <div className="mt-12 grid gap-0 border-t lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="border-b bg-card px-8 py-12 lg:border-b-0 lg:border-r last:border-b-0 last:border-r-0 hover:bg-accent transition-colors"
                style={{ borderStyle: "dashed" }}
              >
                <div className="mb-7 flex size-12 items-center justify-center rounded-2xl border bg-background shadow-sm">
                  <Icon className="size-6 text-primary" />
                </div>
                <h4 className="text-lg font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                  {benefit.title}
                </h4>
                <p className="mt-3 text-body-md text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
