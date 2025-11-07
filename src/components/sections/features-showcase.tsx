import type { SVGProps } from "react";
import { ArrowUp, Clock, TrendingUp, AlertTriangle, CheckCircle2, Users, Sparkles } from "lucide-react";

const FeaturesShowcase = () => {
  const loanStatusData = [
    { label: 'Active', value: 45, width: '75%', color: 'bg-primary' },
    { label: 'Pending Match', value: 23, width: '40%', color: 'bg-cyan-500' },
    { label: 'Grace Period', value: 8, width: '15%', color: 'bg-orange-500' },
    { label: 'Due Soon', value: 12, width: '20%', color: 'bg-amber-500' },
    { label: 'Repaid', value: 156, width: '100%', color: 'bg-emerald-500' },
  ];

  return (
    <section className="bg-background">
      <div className="px-2 sm:container">
        <div className="relative grid">
          <div className="absolute inset-y-0 block w-px bg-border"></div>
          <div className="absolute inset-y-0 right-0 w-px bg-border"></div>

          <div className="py-20">
            <div className="text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-card px-4 py-2 shadow-sm">
                <Sparkles className="size-4 text-primary" />
                <span className="text-sm font-medium">Platform Features</span>
              </div>
              <h2 className="text-3xl font-bold text-foreground md:text-5xl">
                Built for P2P Lending
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-center text-muted-foreground">
                YouFi connects crypto holders with borrowers in emerging markets. 
                Secure, transparent, and designed for the mobile-first generation. 🚀
              </p>
            </div>
            <div className="mt-20 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="rounded-xl border bg-card p-6 shadow-sm md:col-span-1">
                <div className="mb-2 flex items-center gap-2">
                  <div className="rounded-xl bg-primary p-2 shadow-sm">
                    <TrendingUp className="size-5 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-bold">💰 Active Loans</h3>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Real-time overview of platform loan activity
                </p>
                <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Total Volume
                      </p>
                      <p className="text-3xl font-bold text-primary">₦124.5M</p>
                    </div>
                    <div className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-2 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200">
                      <ArrowUp className="size-4" />
                      <span>+28.5%</span>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-xl border bg-background p-3 shadow-sm">
                      <p className="text-xs text-muted-foreground">Avg. Loan</p>
                      <p className="text-lg font-bold text-cyan-600">₦450k</p>
                    </div>
                    <div className="rounded-xl border bg-background p-3 shadow-sm">
                      <p className="text-xs text-muted-foreground">Avg. Rate</p>
                      <p className="text-lg font-bold text-orange-600">9.2%</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border bg-card p-6 shadow-sm md:col-span-1">
                <div className="mb-2 flex items-center gap-2">
                  <div className="rounded-xl bg-cyan-500 p-2 shadow-sm">
                    <CheckCircle2 className="size-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold">📊 Loan Status</h3>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Track loan lifecycle stages across the platform
                </p>
                <div className="mt-4 flex flex-col gap-4">
                  {loanStatusData.map((item) => (
                    <div key={item.label} className="flex items-center justify-between gap-4">
                      <p className="w-28 text-sm font-semibold text-foreground">{item.label}</p>
                      <div className="h-3 flex-1 rounded-full bg-muted shadow-inner">
                        <div
                          className={`h-full rounded-full ${item.color} shadow-sm`}
                          style={{ width: item.width }}
                        ></div>
                      </div>
                      <p className="w-8 text-right text-sm font-bold">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border bg-card p-6 shadow-sm md:col-span-2">
                <div className="mb-2 flex items-center gap-2">
                  <div className="rounded-xl bg-orange-500 p-2 shadow-sm">
                    <TrendingUp className="size-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold">📈 Collateral Analytics</h3>
                </div>
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
                          <stop offset="0%" stopColor="#2563eb" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path d="M0 50 C 50 45, 100 55, 150 48 S 250 52, 300 45 S 350 50, 400 48" fill="none" stroke="#2563eb" strokeWidth="3" />
                      <path d="M0 50 C 50 45, 100 55, 150 48 S 250 52, 300 45 S 350 50, 400 48 L 400 100 L 0 100 Z" fill="url(#analytics-gradient)" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border bg-card p-6 shadow-sm md:col-span-1">
                <div className="mb-2 flex items-center gap-2">
                  <div className="rounded-xl bg-amber-500 p-2 shadow-sm">
                    <AlertTriangle className="size-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold">⚠️ Liquidation Alerts</h3>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Real-time monitoring with automated notifications
                </p>
                <div className="mt-4 flex flex-col gap-3">
                  <div className="flex items-center gap-3 rounded-xl border border-amber-200 bg-amber-50 p-3 shadow-sm">
                    <div className="flex size-10 items-center justify-center rounded-xl border border-amber-300 bg-amber-100 shadow-sm">
                      <AlertTriangle className="size-5 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-amber-900">LTV Warning: 120%</p>
                      <p className="text-xs text-muted-foreground">Loan #4521 approaching threshold</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-3 shadow-sm">
                    <div className="flex size-10 items-center justify-center rounded-xl border border-emerald-300 bg-emerald-100 shadow-sm">
                      <CheckCircle2 className="size-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-emerald-900">All Systems Healthy</p>
                      <p className="text-xs text-muted-foreground">182 loans monitored</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border bg-card p-6 shadow-sm md:col-span-1">
                <div className="mb-2 flex items-center gap-2">
                  <div className="rounded-xl bg-primary p-2 shadow-sm">
                    <Users className="size-5 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-bold">✨ Platform Metrics</h3>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Key performance indicators across the network
                </p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border bg-background p-3 shadow-sm">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Users className="size-3" />
                      <span>Borrowers</span>
                    </div>
                    <p className="mt-1 text-2xl font-bold text-primary">190</p>
                  </div>
                  <div className="rounded-xl border bg-background p-3 shadow-sm">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <TrendingUp className="size-3" />
                      <span>Lenders</span>
                    </div>
                    <p className="mt-1 text-2xl font-bold text-emerald-600">10</p>
                  </div>
                  <div className="rounded-xl border bg-background p-3 shadow-sm">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="size-3" />
                      <span>Avg. Match</span>
                    </div>
                    <p className="mt-1 text-lg font-bold text-cyan-600">2.5h</p>
                  </div>
                  <div className="rounded-xl border bg-background p-3 shadow-sm">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <CheckCircle2 className="size-3" />
                      <span>Success Rate</span>
                    </div>
                    <p className="mt-1 text-lg font-bold text-orange-600">98.5%</p>
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