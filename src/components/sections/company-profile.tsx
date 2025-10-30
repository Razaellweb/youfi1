import { CheckCircle2 } from "lucide-react";

export default function CompanyProfile() {
  const features = [
    "Tier 1 & Tier 2 KYC verification",
    "BVN and ID verification",
    "4-digit transaction PIN security",
    "Real-time price feed monitoring",
    "Automated liquidation protection",
    "Complete transaction logging",
  ];

  return (
    <section className="border-b bg-background py-20 lg:py-32">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left: Image Placeholder */}
          <div className="rounded-2xl border bg-gradient-to-br from-primary/10 to-primary/5 p-12 lg:p-16">
            <div className="aspect-square rounded-xl bg-background/50 backdrop-blur-sm border flex items-center justify-center">
              <div className="text-center">
                <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-2xl bg-primary">
                  <CheckCircle2 className="size-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                  Secure & Verified
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Multi-tier verification system
                </p>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <h2 className="text-3xl lg:text-5xl font-semibold" style={{ fontFamily: "var(--font-heading)" }}>
              Built for Security and Compliance
            </h2>
            <p className="mt-4 text-body-lg text-muted-foreground">
              YouFi implements comprehensive KYC verification, secure collateral management, and regulatory compliance to ensure safe lending and borrowing.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-body-md">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}