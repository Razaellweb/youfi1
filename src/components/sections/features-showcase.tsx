import type { SVGProps } from "react";
import { ArrowUp, Clock, TrendingUp, AlertTriangle, CheckCircle2, Users } from "lucide-react";

const FeaturesShowcase = () => {
  const loanStatusData = [
    { label: 'Active', value: 45, width: '75%', color: 'bg-[--color-chart-1]' },
    { label: 'Pending Match', value: 23, width: '40%', color: 'bg-[--color-chart-2]' },
    { label: 'Grace Period', value: 8, width: '15%', color: 'bg-[--color-chart-4]' },
    { label: 'Due Soon', value: 12, width: '20%', color: 'bg-[--color-chart-3]' },
    { label: 'Repaid', value: 156, width: '100%', color: 'bg-[--color-chart-5]' },
  ];

  return (
    <section>
      <div className="px-2 sm:container">
        <div className="relative grid">
          <div className="absolute inset-y-0 block w-px bg-border"></div>
          <div className="absolute inset-y-0 right-0 w-px bg-border"></div>

          <div className="py-20">
            <div className="text-center">
              <h2 className="text-3xl font-semibold md:text-5xl">
                Built for P2P Lending
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-center text-muted-foreground">
                YouFi connects crypto holders with borrowers in emerging markets. 
                Secure, transparent, and designed for the mobile-first generation.
              </p>
            </div>
            <div className="mt-20 grid grid-cols-1 gap-2 md:grid-cols-2">
              <div className="rounded-xl border bg-background p-6 shadow-sm md:col-span-1">
                <h3 className="text-lg font-semibold">Active Loans</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Real-time overview of platform loan activity
                </p>
                <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Total Volume
                      </p>
                      <p className="text-3xl font-semibold">₦124.5M</p>
                    </div>
                    <div className="hidden items-center gap-1 rounded-md bg-green-100 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 dark:bg-green-900/50 dark:text-green-400 sm:inline-flex">
                      <ArrowUp className="size-4" />
                      <span>+28.5%</span>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-lg bg-muted/50 p-3">
                      <p className="text-xs text-muted-foreground">Avg. Loan</p>
                      <p className="text-lg font-semibold">₦450k</p>
                    </div>
                    <div className="rounded-lg bg-muted/50 p-3">
                      <p className="text-xs text-muted-foreground">Avg. Rate</p>
                      <p className="text-lg font-semibold text-primary">9.2%</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border bg-background p-6 shadow-sm md:col-span-1">
                <h3 className="text-lg font-semibold">Loan Status</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Track loan lifecycle stages across the platform
                </p>
                <div className="mt-4 flex flex-col gap-4">
                  {loanStatusData.map((item) => (
                    <div key={item.label} className="flex items-center justify-between gap-4">
                      <p className="w-28 text-sm text-muted-foreground">{item.label}</p>
                      <div className="h-2 flex-1 rounded-full bg-muted">
                        <div
                          className={`h-full rounded-full ${item.color}`}
                          style={{ width: item.width }}
                        ></div>
                      </div>
                      <p className="w-8 text-right text-sm font-medium">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border bg-background p-6 shadow-sm md:col-span-2">
                <h3 className="text-lg font-semibold">Collateral Analytics</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Monitor platform-wide collateral health and LTV ratios
                </p>
                <div className="mt-4 h-40 w-full [mask-image:linear-gradient(to_top,transparent,black_16px)]">
                  <div
                    className="h-full w-full"
                    style={{
                      backgroundSize: '32px 32px',
                      backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--border)), transparent 1px)',
                    }}
                  >
                    <svg viewBox="0 0 400 100" className="h-full w-full" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="analytics-gradient" x1="0" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="hsl(var(--foreground))" stopOpacity="0.2" />
                          <stop offset="100%" stopColor="hsl(var(--foreground))" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path d="M0 50 C 50 45, 100 55, 150 48 S 250 52, 300 45 S 350 50, 400 48" fill="none" stroke="hsl(var(--foreground))" strokeWidth="2" />
                      <path d="M0 50 C 50 45, 100 55, 150 48 S 250 52, 300 45 S 350 50, 400 48 L 400 100 L 0 100 Z" fill="url(#analytics-gradient)" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border bg-background p-6 shadow-sm md:col-span-1">
                <h3 className="text-lg font-semibold">Liquidation Alerts</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Real-time monitoring with automated notifications
                </p>
                <div className="mt-4 flex flex-col gap-3">
                  <div className="flex items-center gap-3 rounded-lg border border-amber-200 bg-amber-50 p-3 dark:border-amber-800 dark:bg-amber-950/30">
                    <div className="flex size-8 items-center justify-center rounded-md border border-amber-300 bg-amber-100 dark:border-amber-700 dark:bg-amber-900">
                      <AlertTriangle className="size-4 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">LTV Warning: 120%</p>
                      <p className="text-xs text-muted-foreground">Loan #4521 approaching threshold</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg border border-green-200 bg-green-50 p-3 dark:border-green-800 dark:bg-green-950/30">
                    <div className="flex size-8 items-center justify-center rounded-md border border-green-300 bg-green-100 dark:border-green-700 dark:bg-green-900">
                      <CheckCircle2 className="size-4 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">All Systems Healthy</p>
                      <p className="text-xs text-muted-foreground">182 loans monitored</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border bg-background p-6 shadow-sm md:col-span-1">
                <h3 className="text-lg font-semibold">Platform Metrics</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Key performance indicators across the network
                </p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-lg border bg-muted/50 p-3">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Users className="size-3" />
                      <span>Borrowers</span>
                    </div>
                    <p className="mt-1 text-2xl font-semibold">190</p>
                  </div>
                  <div className="rounded-lg border bg-muted/50 p-3">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <TrendingUp className="size-3" />
                      <span>Lenders</span>
                    </div>
                    <p className="mt-1 text-2xl font-semibold text-primary">10</p>
                  </div>
                  <div className="rounded-lg border bg-muted/50 p-3">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="size-3" />
                      <span>Avg. Match</span>
                    </div>
                    <p className="mt-1 text-lg font-semibold">2.5h</p>
                  </div>
                  <div className="rounded-lg border bg-muted/50 p-3">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <CheckCircle2 className="size-3" />
                      <span>Success Rate</span>
                    </div>
                    <p className="mt-1 text-lg font-semibold text-primary">98.5%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-px w-full bg-border"></div>
    </section>
  );
};

export default FeaturesShowcase;