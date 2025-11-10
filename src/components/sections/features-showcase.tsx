import { User, Banknote, Lock, Wallet, RotateCcw, Eye, TrendingUp, BarChart3 } from "lucide-react";

const FeaturesShowcase = () => {
  const borrowerSteps = [
    {
      icon: User,
      title: "Sign Up & Verify",
      description: "Register with your BVN/NIN and a selfie for fast, secure KYC.",
    },
    {
      icon: Banknote,
      title: "Request a Loan",
      description: "Enter how much you need and for how long. Choose your interest rate. Provide crypto collateral.",
    },
    {
      icon: Lock,
      title: "Secure Collateral",
      description: "You and your guarantors lock crypto (BTC, ETH, etc.) into a vault. The system ensures your collateral remains safe with real-time price monitoring.",
    },
    {
      icon: Wallet,
      title: "Receive Your Funds",
      description: "Your loan is funded in USDC for crypto-collateral and Naira for USD-collateral, with direct conversion into your virtual bank account.",
    },
    {
      icon: RotateCcw,
      title: "Repay & Unlock Collateral",
      description: "Repay on time, and your collateral is released automatically. If you’re short on cash, you can request a loan extension before the due date.",
    },
  ];

  const lenderSteps = [
    {
      icon: User,
      title: "Sign Up & Verify",
      description: "Register with your BVN/NIN and a selfie for fast, secure KYC.",
    },
    {
      icon: Eye,
      title: "Create or Browse Loan Book",
      description: "Explore active loan requests filtered by interest rates, tenor, and collateral coverage. Or create your own loan book.",
    },
    {
      icon: Banknote,
      title: "Fund Loans",
      description: "Select loans matching your risk profile and terms.",
    },
    {
      icon: TrendingUp,
      title: "Earn Yields",
      description: "Receive interest payments directly in USDC or Naira and withdraw at the end of the loan tenor.",
    },
    {
      icon: BarChart3,
      title: "Track Everything",
      description: "View your earnings, active loans, and real-time risk metrics on your dashboard.",
    },
  ];

  return (
    <section className="bg-background border-b">
      <div className="px-2 sm:container py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
            How it Works
          </h2>
          <p className="mt-4 text-muted-foreground">
            Simple steps to start lending or borrowing.
          </p>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              Borrowers:
            </h3>
            <div className="space-y-4">
              {borrowerSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="rounded-xl border bg-card p-4 shadow-sm flex gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <div className="font-semibold" style={{ fontFamily: "var(--font-heading)" }}>{step.title}</div>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              LENDERS:
            </h3>
            <div className="space-y-4">
              {lenderSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="rounded-xl border bg-card p-4 shadow-sm flex gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <div className="font-semibold" style={{ fontFamily: "var(--font-heading)" }}>{step.title}</div>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="h-px w-full bg-border"></div>
    </section>
  );
};

export default FeaturesShowcase;
