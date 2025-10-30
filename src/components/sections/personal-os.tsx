import { CheckCircle2 } from "lucide-react";

const VercelLogo = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="size-6">
    <path d="M12 2.25L22.5 21H1.5L12 2.25Z" fill="currentColor"></path>
  </svg>
);

const features = [
  "AI-driven insights",
  "Smart automation",
  "Adaptive workflows",
  "Predictive analytics",
  "Natural language processing",
  "Auto task prioritization",
];

const companyInfo = [
  { label: "Domain", value: "https://vercel.com", isLink: true },
  { label: "CEO", value: "Guillermo Rauch" },
  { label: "Founded", value: "2015" },
  { label: "Est. ARR", value: "$100-120M" },
  { label: "Location", value: "California, USA" },
  { label: "Tags", value: "SaaS, B2B" },
  { label: "Funding", value: "$250M Series E" },
];

const PersonalOsSection = () => {
  return (
    <section>
      <div className="px-2 sm:container">
        <div className="relative grid">
          <div className="grid grid-cols-1 items-center gap-x-16 gap-y-8 py-20 lg:grid-cols-2">
            <div className="order-2 w-full max-w-[550px] justify-self-end rounded-xl border bg-background shadow-sm lg:order-1">
              <div className="divide-y divide-border">
                <div className="flex items-start justify-between p-8">
                  <div className="flex items-center gap-4">
                    <VercelLogo />
                    <h3 className="text-xl font-semibold">Vercel</h3>
                  </div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                    AI Advisor
                  </div>
                </div>
                <div className="grid grid-cols-2 divide-x divide-border">
                  <div className="space-y-4 p-8">
                    {companyInfo.map((item) => (
                      <div
                        key={item.label}
                        className="grid grid-cols-[80px_1fr] items-start gap-x-2 text-sm"
                      >
                        <span className="text-muted-foreground">{item.label}</span>
                        {item.isLink ? (
                          <a
                            href={item.value}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-primary hover:underline"
                          >
                            {new URL(item.value).hostname}
                          </a>
                        ) : (
                          <span className="font-medium">{item.value}</span>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="p-8">
                    <p className="text-sm text-muted-foreground">
                      Vercel has been contacted 4 times in the past year.
                      Suggested next contact is in 3 days.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 w-full max-w-lg justify-self-start lg:order-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold md:text-5xl">
                  Your personal operating system
                </h2>
                <p className="text-muted-foreground">
                  Harness the power of AI to transform your business and automate
                  almost everything with workflows.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 shrink-0 text-emerald-500" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-px w-full bg-border"></div>
    </section>
  );
};

export default PersonalOsSection;