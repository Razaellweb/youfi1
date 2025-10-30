"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, TrendingUp, Users, DollarSign, AlertTriangle, CheckCircle2, Clock } from "lucide-react";
import { useState } from "react";

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState("collateral");

  const tabs = [
    { id: "collateral", label: "Collateral Security", icon: Shield },
    { id: "instant", label: "Instant Matching", icon: Zap },
    { id: "rates", label: "Competitive Rates", icon: TrendingUp },
    { id: "p2p", label: "P2P Lending", icon: Users },
    { id: "earnings", label: "Lender Earnings", icon: DollarSign },
  ];

  const CollateralDashboard = () => (
    <div className="h-full w-full bg-background p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Active Loan Overview</h3>
        <p className="text-sm text-muted-foreground">Monitor your collateral health in real-time</p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border bg-card p-4">
          <p className="text-sm text-muted-foreground">Loan Amount</p>
          <p className="mt-1 text-2xl font-semibold">₦100,000</p>
        </div>
        <div className="rounded-lg border bg-card p-4">
          <p className="text-sm text-muted-foreground">Collateral Value</p>
          <p className="mt-1 text-2xl font-semibold text-primary">$140</p>
          <p className="text-xs text-muted-foreground">USDC</p>
        </div>
        <div className="rounded-lg border bg-card p-4">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="size-4 text-primary" />
            <p className="text-sm text-muted-foreground">LTV Ratio</p>
          </div>
          <p className="mt-1 text-2xl font-semibold text-primary">128%</p>
          <p className="text-xs text-muted-foreground">Healthy</p>
        </div>
      </div>
      <div className="mt-6 rounded-lg border bg-muted/50 p-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-medium">Collateral Health</span>
          <span className="text-sm text-muted-foreground">128% LTV</span>
        </div>
        <div className="h-3 w-full overflow-hidden rounded-full bg-muted">
          <div className="h-full bg-gradient-to-r from-primary to-emerald-500" style={{ width: '75%' }}></div>
        </div>
        <div className="mt-2 flex justify-between text-xs text-muted-foreground">
          <span>Liquidation: 115%</span>
          <span>Initial: 135%</span>
        </div>
      </div>
      <div className="mt-4 rounded-lg border-l-4 border-primary bg-accent p-4">
        <p className="text-sm font-medium">Repayment Due: 10 days</p>
        <p className="mt-1 text-xs text-muted-foreground">Total repayment: ₦104,000 (including 0.4% daily interest)</p>
      </div>
    </div>
  );

  const InstantMatchingDashboard = () => (
    <div className="h-full w-full bg-background p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Loan Order Book</h3>
        <p className="text-sm text-muted-foreground">Real-time borrower requests and lender offers</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border bg-card p-4">
          <div className="mb-3 flex items-center justify-between">
            <h4 className="font-semibold text-destructive">Borrower Requests</h4>
            <span className="text-xs text-muted-foreground">Active: 23</span>
          </div>
          <div className="space-y-2">
            {[
              { amount: '₦250,000', rate: '8.5%', tenor: '15d', collateral: '$450 USDC' },
              { amount: '₦500,000', rate: '10.2%', tenor: '20d', collateral: '$900 USDT' },
              { amount: '₦150,000', rate: '7.8%', tenor: '10d', collateral: '$270 USDC' },
            ].map((req, i) => (
              <div key={i} className="flex items-center justify-between rounded-md bg-muted/50 p-3 text-sm">
                <div>
                  <p className="font-medium">{req.amount}</p>
                  <p className="text-xs text-muted-foreground">{req.collateral}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-destructive">{req.rate}</p>
                  <p className="text-xs text-muted-foreground">{req.tenor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg border bg-card p-4">
          <div className="mb-3 flex items-center justify-between">
            <h4 className="font-semibold text-primary">Lender Offers</h4>
            <span className="text-xs text-muted-foreground">Available: 8</span>
          </div>
          <div className="space-y-2">
            {[
              { amount: '₦1,000,000', rate: '9.0%', tenor: '≤30d', available: '₦800k' },
              { amount: '₦750,000', rate: '8.2%', tenor: '≤25d', available: '₦750k' },
              { amount: '₦500,000', rate: '10.5%', tenor: '≤20d', available: '₦500k' },
            ].map((offer, i) => (
              <div key={i} className="flex items-center justify-between rounded-md bg-muted/50 p-3 text-sm">
                <div>
                  <p className="font-medium">{offer.amount}</p>
                  <p className="text-xs text-muted-foreground">Available: {offer.available}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-primary">{offer.rate}</p>
                  <p className="text-xs text-muted-foreground">{offer.tenor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4 rounded-lg border bg-accent p-4 text-center">
        <Clock className="mx-auto mb-2 size-6 text-primary" />
        <p className="text-sm font-medium">Average Match Time: 2.5 hours</p>
      </div>
    </div>
  );

  const CompetitiveRatesDashboard = () => (
    <div className="h-full w-full bg-background p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Interest Rate Analysis</h3>
        <p className="text-sm text-muted-foreground">Compare rates across loan amounts and tenors</p>
      </div>
      <div className="mb-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border bg-card p-4 text-center">
          <p className="text-sm text-muted-foreground">Average Rate</p>
          <p className="mt-1 text-3xl font-semibold text-primary">8.9%</p>
          <p className="text-xs text-muted-foreground">Monthly</p>
        </div>
        <div className="rounded-lg border bg-card p-4 text-center">
          <p className="text-sm text-muted-foreground">Lowest Available</p>
          <p className="mt-1 text-3xl font-semibold text-emerald-600">6.5%</p>
          <p className="text-xs text-muted-foreground">Monthly</p>
        </div>
        <div className="rounded-lg border bg-card p-4 text-center">
          <p className="text-sm text-muted-foreground">Platform Cap</p>
          <p className="mt-1 text-3xl font-semibold">12.5%</p>
          <p className="text-xs text-muted-foreground">Monthly Max</p>
        </div>
      </div>
      <div className="rounded-lg border bg-card p-4">
        <h4 className="mb-4 font-semibold">Rate by Loan Amount</h4>
        <div className="space-y-3">
          {[
            { range: '₦10k - ₦100k', rate: '10-12%', bar: '85%' },
            { range: '₦100k - ₦500k', rate: '8-10%', bar: '65%' },
            { range: '₦500k - ₦1M', rate: '7-9%', bar: '55%' },
            { range: '₦1M - ₦5M', rate: '6-8%', bar: '45%' },
          ].map((item, i) => (
            <div key={i}>
              <div className="mb-1 flex justify-between text-sm">
                <span className="font-medium">{item.range}</span>
                <span className="text-muted-foreground">{item.rate}</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                <div className="h-full bg-gradient-to-r from-primary to-emerald-500" style={{ width: item.bar }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const P2PLendingDashboard = () => (
    <div className="h-full w-full bg-background p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Your Wallets</h3>
        <p className="text-sm text-muted-foreground">Manage NGN and crypto wallet balances</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border bg-gradient-to-br from-primary/10 to-primary/5 p-6">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm font-medium text-muted-foreground">NGN Wallet</span>
            <span className="rounded-full bg-primary/20 px-2 py-1 text-xs font-medium text-primary">Providus Bank</span>
          </div>
          <p className="text-3xl font-semibold">₦1,245,000</p>
          <p className="mt-1 text-sm text-muted-foreground">Available Balance</p>
          <div className="mt-4 flex gap-2">
            <button className="flex-1 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
              Deposit
            </button>
            <button className="flex-1 rounded-lg border bg-background px-4 py-2 text-sm font-medium">
              Withdraw
            </button>
          </div>
        </div>
        <div className="rounded-lg border bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 p-6">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm font-medium text-muted-foreground">USDC Wallet</span>
            <span className="rounded-full bg-emerald-500/20 px-2 py-1 text-xs font-medium text-emerald-700">Polygon</span>
          </div>
          <p className="text-3xl font-semibold">$2,450.00</p>
          <p className="mt-1 text-sm text-muted-foreground">≈ ₦3,675,000</p>
          <div className="mt-4 flex gap-2">
            <button className="flex-1 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white">
              Deposit
            </button>
            <button className="flex-1 rounded-lg border bg-background px-4 py-2 text-sm font-medium">
              Withdraw
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border bg-card p-4">
          <p className="text-sm text-muted-foreground">USDT Wallet (Tron)</p>
          <p className="mt-1 text-xl font-semibold">$850.00</p>
        </div>
        <div className="rounded-lg border bg-card p-4">
          <p className="text-sm text-muted-foreground">Total Portfolio Value</p>
          <p className="mt-1 text-xl font-semibold">₦6,195,000</p>
        </div>
      </div>
      <div className="mt-4 rounded-lg bg-muted p-4">
        <p className="text-xs text-muted-foreground">
          <strong>Withdrawal limits:</strong> NGN ₦1,000 min • USD $10 min • ₦1M+ requires 2FA
        </p>
      </div>
    </div>
  );

  const LenderEarningsDashboard = () => (
    <div className="h-full w-full bg-background p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Lender Performance</h3>
        <p className="text-sm text-muted-foreground">Track your earnings and funded loans</p>
      </div>
      <div className="grid gap-4 md:grid-cols-4">
        <div className="rounded-lg border bg-card p-4">
          <p className="text-sm text-muted-foreground">Total Funded</p>
          <p className="mt-1 text-2xl font-semibold">₦2.8M</p>
        </div>
        <div className="rounded-lg border bg-gradient-to-br from-primary/10 to-primary/5 p-4">
          <p className="text-sm text-muted-foreground">Interest Earned</p>
          <p className="mt-1 text-2xl font-semibold text-primary">₦84,500</p>
        </div>
        <div className="rounded-lg border bg-card p-4">
          <p className="text-sm text-muted-foreground">Active Loans</p>
          <p className="mt-1 text-2xl font-semibold">12</p>
        </div>
        <div className="rounded-lg border bg-card p-4">
          <p className="text-sm text-muted-foreground">Avg. APY</p>
          <p className="mt-1 text-2xl font-semibold text-primary">9.2%</p>
        </div>
      </div>
      <div className="mt-4 rounded-lg border bg-card p-4">
        <h4 className="mb-4 font-semibold">Recent Funded Loans</h4>
        <div className="space-y-3">
          {[
            { borrower: 'User #5432', amount: '₦500,000', rate: '8.5%', status: 'Active', color: 'text-primary' },
            { borrower: 'User #7821', amount: '₦250,000', rate: '10.0%', status: 'Active', color: 'text-primary' },
            { borrower: 'User #2341', amount: '₦750,000', rate: '7.8%', status: 'Repaid', color: 'text-emerald-600' },
            { borrower: 'User #9123', amount: '₦400,000', rate: '9.5%', status: 'Active', color: 'text-primary' },
          ].map((loan, i) => (
            <div key={i} className="flex items-center justify-between rounded-md bg-muted/50 p-3">
              <div>
                <p className="text-sm font-medium">{loan.borrower}</p>
                <p className="text-xs text-muted-foreground">{loan.amount}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">{loan.rate}</p>
                <p className={`text-xs font-medium ${loan.color}`}>{loan.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 rounded-lg border-l-4 border-primary bg-accent p-4">
        <p className="text-sm font-medium">Platform Performance Fee: 27.5%</p>
        <p className="mt-1 text-xs text-muted-foreground">You keep 72.5% of all interest earned</p>
      </div>
    </div>
  );

  const renderDashboard = () => {
    switch (activeTab) {
      case "collateral":
        return <CollateralDashboard />;
      case "instant":
        return <InstantMatchingDashboard />;
      case "rates":
        return <CompetitiveRatesDashboard />;
      case "p2p":
        return <P2PLendingDashboard />;
      case "earnings":
        return <LenderEarningsDashboard />;
      default:
        return <CollateralDashboard />;
    }
  };

  return (
    <section className="relative border-b bg-background pt-16 pb-12 lg:pt-32 lg:pb-20">
      <div className="container">
        {/* Announcement Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-accent px-4 py-2 shadow-sm">
            <span className="rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground">
              V1 Beta
            </span>
            <span className="text-sm text-muted-foreground">
              Closed Beta Now Open for 200 Selected Users
            </span>
            <ArrowRight className="size-4 text-muted-foreground" />
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="mx-auto max-w-4xl text-center" style={{ fontFamily: "var(--font-heading)" }}>
          Your Gateway to{" "}
          <span className="text-primary">Crypto-Backed</span>{" "}
          Lending
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-center text-body-lg text-muted-foreground">
          Connect with lenders and borrowers in emerging markets. Secure loans with crypto collateral, instant disbursement in USDC or Naira.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button className="h-10 rounded-xl bg-primary px-6 text-button hover:bg-primary/90">
            Apply to Borrow
          </Button>
          <Button variant="outline" className="h-10 rounded-xl px-6 text-button">
            Become a Lender
          </Button>
        </div>

        {/* Feature Tabs */}
        <div className="mt-16">
          <div className="flex justify-center">
            <div className="inline-flex gap-2 overflow-x-auto rounded-2xl border bg-muted/50 p-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap ${
                      activeTab === tab.id
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Icon className="size-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Feature Dashboard */}
          <div className="mt-12 rounded-2xl border bg-muted/30 p-4 md:p-8">
            <div className="min-h-[400px] rounded-xl border bg-background shadow-lg overflow-hidden">
              {renderDashboard()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}