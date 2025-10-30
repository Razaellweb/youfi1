"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, TrendingUp, Users, DollarSign, AlertTriangle, CheckCircle2, Clock, Sparkles } from "lucide-react";
import { useState } from "react";

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState("collateral");

  const tabs = [
    { id: "collateral", label: "Collateral Security", icon: Shield, color: "from-purple-500 to-pink-500" },
    { id: "instant", label: "Instant Matching", icon: Zap, color: "from-cyan-500 to-blue-500" },
    { id: "rates", label: "Competitive Rates", icon: TrendingUp, color: "from-orange-500 to-amber-500" },
    { id: "p2p", label: "P2P Lending", icon: Users, color: "from-pink-500 to-rose-500" },
    { id: "earnings", label: "Lender Earnings", icon: DollarSign, color: "from-emerald-500 to-green-500" },
  ];

  const CollateralDashboard = () => (
    <div className="h-full w-full bg-gradient-to-br from-purple-50 via-white to-pink-50 p-6">
      <div className="mb-6">
        <div className="flex items-center gap-2">
          <div className="flex size-10 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg">
            <Shield className="size-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Active Loan Overview</h3>
            <p className="text-sm text-muted-foreground">Monitor your collateral health in real-time</p>
          </div>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-white p-4 shadow-sm">
          <p className="text-sm text-muted-foreground">Loan Amount</p>
          <p className="mt-1 text-2xl font-bold text-purple-600">₦100,000</p>
        </div>
        <div className="rounded-2xl border-2 border-pink-200 bg-gradient-to-br from-pink-50 to-white p-4 shadow-sm">
          <p className="text-sm text-muted-foreground">Collateral Value</p>
          <p className="mt-1 text-2xl font-bold text-pink-600">$140</p>
          <p className="text-xs text-muted-foreground">USDC</p>
        </div>
        <div className="rounded-2xl border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-4 shadow-sm">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="size-4 text-emerald-600" />
            <p className="text-sm text-muted-foreground">LTV Ratio</p>
          </div>
          <p className="mt-1 text-2xl font-bold text-emerald-600">128%</p>
          <p className="text-xs text-muted-foreground">Healthy</p>
        </div>
      </div>
      <div className="mt-6 rounded-2xl border-2 border-purple-200 bg-white p-4 shadow-sm">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-semibold">Collateral Health</span>
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">128% LTV</span>
        </div>
        <div className="h-4 w-full overflow-hidden rounded-full bg-purple-100">
          <div className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-emerald-500 shadow-lg" style={{ width: '75%' }}></div>
        </div>
        <div className="mt-2 flex justify-between text-xs font-medium text-muted-foreground">
          <span>⚠️ Liquidation: 115%</span>
          <span>✨ Initial: 135%</span>
        </div>
      </div>
      <div className="mt-4 rounded-2xl border-2 border-purple-300 bg-gradient-to-r from-purple-100 to-pink-100 p-4 shadow-sm">
        <p className="text-sm font-bold text-purple-900">🗓️ Repayment Due: 10 days</p>
        <p className="mt-1 text-xs text-purple-700">Total repayment: ₦104,000 (including 0.4% daily interest)</p>
      </div>
    </div>
  );

  const InstantMatchingDashboard = () => (
    <div className="h-full w-full bg-gradient-to-br from-cyan-50 via-white to-blue-50 p-6">
      <div className="mb-6">
        <div className="flex items-center gap-2">
          <div className="flex size-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 shadow-lg">
            <Zap className="size-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Loan Order Book</h3>
            <p className="text-sm text-muted-foreground">Real-time borrower requests and lender offers</p>
          </div>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border-2 border-rose-200 bg-gradient-to-br from-rose-50 to-white p-4 shadow-sm">
          <div className="mb-3 flex items-center justify-between">
            <h4 className="font-bold text-rose-600">📉 Borrower Requests</h4>
            <span className="rounded-full bg-rose-100 px-2 py-1 text-xs font-bold text-rose-700">Active: 23</span>
          </div>
          <div className="space-y-2">
            {[
              { amount: '₦250,000', rate: '8.5%', tenor: '15d', collateral: '$450 USDC' },
              { amount: '₦500,000', rate: '10.2%', tenor: '20d', collateral: '$900 USDT' },
              { amount: '₦150,000', rate: '7.8%', tenor: '10d', collateral: '$270 USDC' },
            ].map((req, i) => (
              <div key={i} className="flex items-center justify-between rounded-xl border-2 border-rose-100 bg-gradient-to-r from-rose-50 to-white p-3 text-sm shadow-sm">
                <div>
                  <p className="font-bold text-rose-700">{req.amount}</p>
                  <p className="text-xs text-muted-foreground">{req.collateral}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-rose-600">{req.rate}</p>
                  <p className="text-xs text-muted-foreground">{req.tenor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border-2 border-cyan-200 bg-gradient-to-br from-cyan-50 to-white p-4 shadow-sm">
          <div className="mb-3 flex items-center justify-between">
            <h4 className="font-bold text-cyan-600">📈 Lender Offers</h4>
            <span className="rounded-full bg-cyan-100 px-2 py-1 text-xs font-bold text-cyan-700">Available: 8</span>
          </div>
          <div className="space-y-2">
            {[
              { amount: '₦1,000,000', rate: '9.0%', tenor: '≤30d', available: '₦800k' },
              { amount: '₦750,000', rate: '8.2%', tenor: '≤25d', available: '₦750k' },
              { amount: '₦500,000', rate: '10.5%', tenor: '≤20d', available: '₦500k' },
            ].map((offer, i) => (
              <div key={i} className="flex items-center justify-between rounded-xl border-2 border-cyan-100 bg-gradient-to-r from-cyan-50 to-white p-3 text-sm shadow-sm">
                <div>
                  <p className="font-bold text-cyan-700">{offer.amount}</p>
                  <p className="text-xs text-muted-foreground">Available: {offer.available}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-cyan-600">{offer.rate}</p>
                  <p className="text-xs text-muted-foreground">{offer.tenor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4 rounded-2xl border-2 border-blue-200 bg-gradient-to-r from-blue-100 to-cyan-100 p-4 text-center shadow-sm">
        <Clock className="mx-auto mb-2 size-8 text-blue-600" />
        <p className="text-sm font-bold text-blue-900">⚡ Average Match Time: 2.5 hours</p>
      </div>
    </div>
  );

  const CompetitiveRatesDashboard = () => (
    <div className="h-full w-full bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6">
      <div className="mb-6">
        <div className="flex items-center gap-2">
          <div className="flex size-10 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 shadow-lg">
            <TrendingUp className="size-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Interest Rate Analysis</h3>
            <p className="text-sm text-muted-foreground">Compare rates across loan amounts and tenors</p>
          </div>
        </div>
      </div>
      <div className="mb-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-white p-4 text-center shadow-sm">
          <p className="text-sm text-muted-foreground">Average Rate</p>
          <p className="mt-1 text-3xl font-bold text-orange-600">8.9%</p>
          <p className="text-xs text-orange-500">Monthly</p>
        </div>
        <div className="rounded-2xl border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-4 text-center shadow-sm">
          <p className="text-sm text-muted-foreground">Lowest Available</p>
          <p className="mt-1 text-3xl font-bold text-emerald-600">6.5%</p>
          <p className="text-xs text-emerald-500">Monthly</p>
        </div>
        <div className="rounded-2xl border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-white p-4 text-center shadow-sm">
          <p className="text-sm text-muted-foreground">Platform Cap</p>
          <p className="mt-1 text-3xl font-bold text-amber-600">12.5%</p>
          <p className="text-xs text-amber-500">Monthly Max</p>
        </div>
      </div>
      <div className="rounded-2xl border-2 border-orange-200 bg-white p-4 shadow-sm">
        <h4 className="mb-4 font-bold">📊 Rate by Loan Amount</h4>
        <div className="space-y-3">
          {[
            { range: '₦10k - ₦100k', rate: '10-12%', bar: '85%', color: 'from-red-400 to-orange-500' },
            { range: '₦100k - ₦500k', rate: '8-10%', bar: '65%', color: 'from-orange-400 to-amber-500' },
            { range: '₦500k - ₦1M', rate: '7-9%', bar: '55%', color: 'from-amber-400 to-yellow-500' },
            { range: '₦1M - ₦5M', rate: '6-8%', bar: '45%', color: 'from-emerald-400 to-green-500' },
          ].map((item, i) => (
            <div key={i}>
              <div className="mb-1 flex justify-between text-sm">
                <span className="font-bold">{item.range}</span>
                <span className="font-semibold text-orange-600">{item.rate}</span>
              </div>
              <div className="h-3 w-full overflow-hidden rounded-full bg-orange-100 shadow-inner">
                <div className={`h-full bg-gradient-to-r ${item.color} shadow-md`} style={{ width: item.bar }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const P2PLendingDashboard = () => (
    <div className="h-full w-full bg-gradient-to-br from-pink-50 via-white to-rose-50 p-6">
      <div className="mb-6">
        <div className="flex items-center gap-2">
          <div className="flex size-10 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 shadow-lg">
            <Users className="size-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Your Wallets</h3>
            <p className="text-sm text-muted-foreground">Manage NGN and crypto wallet balances</p>
          </div>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border-2 border-purple-300 bg-gradient-to-br from-purple-100 via-purple-50 to-pink-50 p-6 shadow-lg">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm font-semibold text-purple-700">💰 NGN Wallet</span>
            <span className="rounded-full bg-purple-200 px-3 py-1 text-xs font-bold text-purple-700">Providus Bank</span>
          </div>
          <p className="text-3xl font-bold text-purple-900">₦1,245,000</p>
          <p className="mt-1 text-sm text-purple-600">Available Balance</p>
          <div className="mt-4 flex gap-2">
            <button className="flex-1 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 text-sm font-bold text-white shadow-lg hover:shadow-xl transition-all">
              Deposit
            </button>
            <button className="flex-1 rounded-xl border-2 border-purple-300 bg-white px-4 py-2 text-sm font-bold text-purple-700 hover:bg-purple-50 transition-all">
              Withdraw
            </button>
          </div>
        </div>
        <div className="rounded-2xl border-2 border-emerald-300 bg-gradient-to-br from-emerald-100 via-emerald-50 to-cyan-50 p-6 shadow-lg">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm font-semibold text-emerald-700">💵 USDC Wallet</span>
            <span className="rounded-full bg-emerald-200 px-3 py-1 text-xs font-bold text-emerald-700">Polygon</span>
          </div>
          <p className="text-3xl font-bold text-emerald-900">$2,450.00</p>
          <p className="mt-1 text-sm text-emerald-600">≈ ₦3,675,000</p>
          <div className="mt-4 flex gap-2">
            <button className="flex-1 rounded-xl bg-gradient-to-r from-emerald-500 to-green-500 px-4 py-2 text-sm font-bold text-white shadow-lg hover:shadow-xl transition-all">
              Deposit
            </button>
            <button className="flex-1 rounded-xl border-2 border-emerald-300 bg-white px-4 py-2 text-sm font-bold text-emerald-700 hover:bg-emerald-50 transition-all">
              Withdraw
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border-2 border-cyan-200 bg-gradient-to-br from-cyan-50 to-white p-4 shadow-sm">
          <p className="text-sm text-muted-foreground">💎 USDT Wallet (Tron)</p>
          <p className="mt-1 text-xl font-bold text-cyan-600">$850.00</p>
        </div>
        <div className="rounded-2xl border-2 border-pink-200 bg-gradient-to-br from-pink-50 to-white p-4 shadow-sm">
          <p className="text-sm text-muted-foreground">✨ Total Portfolio Value</p>
          <p className="mt-1 text-xl font-bold text-pink-600">₦6,195,000</p>
        </div>
      </div>
      <div className="mt-4 rounded-2xl border-2 border-pink-200 bg-gradient-to-r from-pink-100 to-purple-100 p-4 shadow-sm">
        <p className="text-xs font-medium text-pink-900">
          <strong>🔐 Withdrawal limits:</strong> NGN ₦1,000 min • USD $10 min • ₦1M+ requires 2FA
        </p>
      </div>
    </div>
  );

  const LenderEarningsDashboard = () => (
    <div className="h-full w-full bg-gradient-to-br from-emerald-50 via-white to-green-50 p-6">
      <div className="mb-6">
        <div className="flex items-center gap-2">
          <div className="flex size-10 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-green-500 shadow-lg">
            <DollarSign className="size-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Lender Performance</h3>
            <p className="text-sm text-muted-foreground">Track your earnings and funded loans</p>
          </div>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-4">
        <div className="rounded-2xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white p-4 shadow-sm">
          <p className="text-sm text-muted-foreground">Total Funded</p>
          <p className="mt-1 text-2xl font-bold text-blue-600">₦2.8M</p>
        </div>
        <div className="rounded-2xl border-2 border-emerald-200 bg-gradient-to-br from-emerald-100 to-emerald-50 p-4 shadow-sm">
          <p className="text-sm text-muted-foreground">Interest Earned</p>
          <p className="mt-1 text-2xl font-bold text-emerald-600">₦84,500</p>
        </div>
        <div className="rounded-2xl border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-white p-4 shadow-sm">
          <p className="text-sm text-muted-foreground">Active Loans</p>
          <p className="mt-1 text-2xl font-bold text-purple-600">12</p>
        </div>
        <div className="rounded-2xl border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-white p-4 shadow-sm">
          <p className="text-sm text-muted-foreground">Avg. APY</p>
          <p className="mt-1 text-2xl font-bold text-amber-600">9.2%</p>
        </div>
      </div>
      <div className="mt-4 rounded-2xl border-2 border-emerald-200 bg-white p-4 shadow-sm">
        <h4 className="mb-4 font-bold">💸 Recent Funded Loans</h4>
        <div className="space-y-3">
          {[
            { borrower: 'User #5432', amount: '₦500,000', rate: '8.5%', status: 'Active', color: 'text-emerald-600', bg: 'from-emerald-50 to-white', border: 'border-emerald-200' },
            { borrower: 'User #7821', amount: '₦250,000', rate: '10.0%', status: 'Active', color: 'text-cyan-600', bg: 'from-cyan-50 to-white', border: 'border-cyan-200' },
            { borrower: 'User #2341', amount: '₦750,000', rate: '7.8%', status: 'Repaid', color: 'text-purple-600', bg: 'from-purple-50 to-white', border: 'border-purple-200' },
            { borrower: 'User #9123', amount: '₦400,000', rate: '9.5%', status: 'Active', color: 'text-pink-600', bg: 'from-pink-50 to-white', border: 'border-pink-200' },
          ].map((loan, i) => (
            <div key={i} className={`flex items-center justify-between rounded-xl border-2 ${loan.border} bg-gradient-to-r ${loan.bg} p-3 shadow-sm`}>
              <div>
                <p className="text-sm font-bold">{loan.borrower}</p>
                <p className="text-xs text-muted-foreground">{loan.amount}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold">{loan.rate}</p>
                <p className={`text-xs font-bold ${loan.color}`}>{loan.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 rounded-2xl border-2 border-emerald-300 bg-gradient-to-r from-emerald-100 to-green-100 p-4 shadow-sm">
        <p className="text-sm font-bold text-emerald-900">💰 Platform Performance Fee: 27.5%</p>
        <p className="mt-1 text-xs text-emerald-700">You keep 72.5% of all interest earned</p>
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
    <section className="relative border-b bg-gradient-to-br from-purple-50 via-white to-pink-50 pt-16 pb-12 lg:pt-32 lg:pb-20">
      <div className="container">
        {/* Announcement Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-purple-300 bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 shadow-lg">
            <span className="flex items-center gap-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-1 text-xs font-bold text-white shadow-md">
              <Sparkles className="size-3" />
              New!
            </span>
            <span className="text-sm font-semibold text-purple-900">
              Get approved in minutes, funded in hours! 🚀
            </span>
            <ArrowRight className="size-4 text-purple-600" />
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="mx-auto max-w-4xl text-center" style={{ fontFamily: "var(--font-heading)" }}>
          Get Cash Fast with{" "}
          <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">Your Crypto</span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-center text-body-lg text-muted-foreground">
          Need Naira now? Use your crypto as collateral and get instant loans at competitive rates. No credit checks, no paperwork, no waiting. 💰✨
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button className="h-12 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 px-8 text-button font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105">
            🚀 Get Your Loan Now
          </Button>
          <Button variant="ghost" className="h-12 rounded-2xl px-8 text-button font-semibold text-purple-700 hover:bg-purple-50 transition-all">
            Learn How It Works
          </Button>
        </div>

        {/* Feature Tabs */}
        <div className="mt-16">
          <div className="flex justify-center">
            <div className="inline-flex gap-2 overflow-x-auto rounded-3xl border-2 border-purple-200 bg-white p-2 shadow-lg">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-bold transition-all whitespace-nowrap ${
                      activeTab === tab.id
                        ? `bg-gradient-to-r ${tab.color} text-white shadow-lg scale-105`
                        : "text-muted-foreground hover:bg-purple-50 hover:text-foreground"
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
          <div className="mt-12 rounded-3xl border-2 border-purple-200 bg-gradient-to-br from-purple-100/50 to-pink-100/50 p-4 md:p-8 shadow-xl">
            <div className="min-h-[400px] rounded-2xl border-2 border-white bg-white shadow-2xl overflow-hidden">
              {renderDashboard()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}