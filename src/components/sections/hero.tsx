"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, TrendingUp, Users, DollarSign, CheckCircle2, Clock, Sparkles } from "lucide-react";
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
    <div className="h-full w-full bg-white p-6">
      <div className="mb-6">
        <div className="flex items-center gap-2">
          <div className="flex size-10 items-center justify-center rounded-xl bg-blue-600 shadow-md">
            <Shield className="size-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Active Loan Overview</h3>
            <p className="text-sm text-muted-foreground">Monitor your collateral health in real-time</p>
          </div>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border bg-white p-4 shadow-sm">
          <p className="text-sm text-muted-foreground">Loan Amount</p>
          <p className="mt-1 text-2xl font-bold text-blue-600">₦100,000</p>
        </div>
        <div className="rounded-xl border bg-white p-4 shadow-sm">
          <p className="text-sm text-muted-foreground">Collateral Value</p>
          <p className="mt-1 text-2xl font-bold text-foreground">$140</p>
          <p className="text-xs text-muted-foreground">USDC</p>
        </div>
        <div className="rounded-xl border bg-white p-4 shadow-sm">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="size-4 text-green-600" />
            <p className="text-sm text-muted-foreground">LTV Ratio</p>
          </div>
          <p className="mt-1 text-2xl font-bold text-green-600">128%</p>
          <p className="text-xs text-muted-foreground">Healthy</p>
        </div>
      </div>
      <div className="mt-6 rounded-xl border bg-white p-4 shadow-sm">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-semibold">Collateral Health</span>
          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">128% LTV</span>
        </div>
        <div className="h-4 w-full overflow-hidden rounded-full bg-gray-100">
          <div className="h-full bg-blue-600 shadow-sm" style={{ width: '75%' }}></div>
        </div>
        <div className="mt-2 flex justify-between text-xs font-medium text-muted-foreground">
          <span>⚠️ Liquidation: 115%</span>
          <span>✨ Initial: 135%</span>
        </div>
      </div>
      <div className="mt-4 rounded-xl border bg-blue-50 p-4 shadow-sm">
        <p className="text-sm font-bold text-blue-900">🗓️ Repayment Due: 10 days</p>
        <p className="mt-1 text-xs text-blue-700">Total repayment: ₦104,000 (including 0.4% daily interest)</p>
      </div>
    </div>
  );

  const InstantMatchingDashboard = () => (
    <div className="h-full w-full bg-white p-6">
      <div className="mb-6">
        <div className="flex items-center gap-2">
          <div className="flex size-10 items-center justify-center rounded-xl bg-blue-600 shadow-md">
            <Zap className="size-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Loan Order Book</h3>
            <p className="text-sm text-muted-foreground">Real-time borrower requests and lender offers</p>
          </div>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border bg-white p-4 shadow-sm">
          <div className="mb-3 flex items-center justify-between">
            <h4 className="font-bold text-foreground">📉 Borrower Requests</h4>
            <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-bold text-blue-700">Active: 23</span>
          </div>
          <div className="space-y-2">
            {[
              { amount: '₦250,000', rate: '8.5%', tenor: '15d', collateral: '$450 USDC' },
              { amount: '₦500,000', rate: '10.2%', tenor: '20d', collateral: '$900 USDT' },
              { amount: '₦150,000', rate: '7.8%', tenor: '10d', collateral: '$270 USDC' },
            ].map((req, i) => (
              <div key={i} className="flex items-center justify-between rounded-lg border bg-gray-50 p-3 text-sm shadow-sm">
                <div>
                  <p className="font-bold text-foreground">{req.amount}</p>
                  <p className="text-xs text-muted-foreground">{req.collateral}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-blue-600">{req.rate}</p>
                  <p className="text-xs text-muted-foreground">{req.tenor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl border bg-white p-4 shadow-sm">
          <div className="mb-3 flex items-center justify-between">
            <h4 className="font-bold text-foreground">📈 Lender Offers</h4>
            <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-bold text-green-700">Available: 8</span>
          </div>
          <div className="space-y-2">
            {[
              { amount: '₦1,000,000', rate: '9.0%', tenor: '≤30d', available: '₦800k' },
              { amount: '₦750,000', rate: '8.2%', tenor: '≤25d', available: '₦750k' },
              { amount: '₦500,000', rate: '10.5%', tenor: '≤20d', available: '₦500k' },
            ].map((offer, i) => (
              <div key={i} className="flex items-center justify-between rounded-lg border bg-gray-50 p-3 text-sm shadow-sm">
                <div>
                  <p className="font-bold text-foreground">{offer.amount}</p>
                  <p className="text-xs text-muted-foreground">Available: {offer.available}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-blue-600">{offer.rate}</p>
                  <p className="text-xs text-muted-foreground">{offer.tenor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4 rounded-xl border bg-blue-50 p-4 text-center shadow-sm">
        <Clock className="mx-auto mb-2 size-8 text-blue-600" />
        <p className="text-sm font-bold text-blue-900">⚡ Average Match Time: 2.5 hours</p>
      </div>
    </div>
  );

  const CompetitiveRatesDashboard = () => (
    <div className="h-full w-full bg-white p-6">
      <div className="mb-6">
        <div className="flex items-center gap-2">
          <div className="flex size-10 items-center justify-center rounded-xl bg-blue-600 shadow-md">
            <TrendingUp className="size-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Interest Rate Analysis</h3>
            <p className="text-sm text-muted-foreground">Compare rates across loan amounts and tenors</p>
          </div>
        </div>
      </div>
      <div className="mb-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border bg-white p-4 text-center shadow-sm">
          <p className="text-sm text-muted-foreground">Average Rate</p>
          <p className="mt-1 text-3xl font-bold text-blue-600">8.9%</p>
          <p className="text-xs text-blue-500">Monthly</p>
        </div>
        <div className="rounded-xl border bg-white p-4 text-center shadow-sm">
          <p className="text-sm text-muted-foreground">Lowest Available</p>
          <p className="mt-1 text-3xl font-bold text-green-600">6.5%</p>
          <p className="text-xs text-green-500">Monthly</p>
        </div>
        <div className="rounded-xl border bg-white p-4 text-center shadow-sm">
          <p className="text-sm text-muted-foreground">Platform Cap</p>
          <p className="mt-1 text-3xl font-bold text-orange-600">12.5%</p>
          <p className="text-xs text-orange-500">Monthly Max</p>
        </div>
      </div>
      <div className="rounded-xl border bg-white p-4 shadow-sm">
        <h4 className="mb-4 font-bold">📊 Rate by Loan Amount</h4>
        <div className="space-y-3">
          {[
            { range: '₦10k - ₦100k', rate: '10-12%', bar: '85%', color: 'bg-orange-500' },
            { range: '₦100k - ₦500k', rate: '8-10%', bar: '65%', color: 'bg-amber-500' },
            { range: '₦500k - ₦1M', rate: '7-9%', bar: '55%', color: 'bg-blue-500' },
            { range: '₦1M - ₦5M', rate: '6-8%', bar: '45%', color: 'bg-green-500' },
          ].map((item, i) => (
            <div key={i}>
              <div className="mb-1 flex justify-between text-sm">
                <span className="font-bold">{item.range}</span>
                <span className="font-semibold text-blue-600">{item.rate}</span>
              </div>
              <div className="h-3 w-full overflow-hidden rounded-full bg-gray-100 shadow-inner">
                <div className={`h-full ${item.color} shadow-sm`} style={{ width: item.bar }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const P2PLendingDashboard = () => (
    <div className="h-full w-full bg-white p-6">
      <div className="mb-6">
        <div className="flex items-center gap-2">
          <div className="flex size-10 items-center justify-center rounded-xl bg-blue-600 shadow-md">
            <Users className="size-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Your Wallets</h3>
            <p className="text-sm text-muted-foreground">Manage NGN and crypto wallet balances</p>
          </div>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border bg-white p-6 shadow-md">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm font-semibold text-foreground">💰 NGN Wallet</span>
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700">Providus Bank</span>
          </div>
          <p className="text-3xl font-bold text-foreground">₦1,245,000</p>
          <p className="mt-1 text-sm text-muted-foreground">Available Balance</p>
          <div className="mt-4 flex gap-2">
            <button className="flex-1 rounded-xl bg-blue-600 px-4 py-2 text-sm font-bold text-white shadow-md hover:bg-blue-700 transition-all">
              Deposit
            </button>
            <button className="flex-1 rounded-xl border bg-white px-4 py-2 text-sm font-bold text-foreground hover:bg-gray-50 transition-all">
              Withdraw
            </button>
          </div>
        </div>
        <div className="rounded-xl border bg-white p-6 shadow-md">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm font-semibold text-foreground">💵 USDC Wallet</span>
            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">Polygon</span>
          </div>
          <p className="text-3xl font-bold text-foreground">$2,450.00</p>
          <p className="mt-1 text-sm text-muted-foreground">≈ ₦3,675,000</p>
          <div className="mt-4 flex gap-2">
            <button className="flex-1 rounded-xl bg-blue-600 px-4 py-2 text-sm font-bold text-white shadow-md hover:bg-blue-700 transition-all">
              Deposit
            </button>
            <button className="flex-1 rounded-xl border bg-white px-4 py-2 text-sm font-bold text-foreground hover:bg-gray-50 transition-all">
              Withdraw
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border bg-white p-4 shadow-sm">
          <p className="text-sm text-muted-foreground">💎 USDT Wallet (Tron)</p>
          <p className="mt-1 text-xl font-bold text-foreground">$850.00</p>
        </div>
        <div className="rounded-xl border bg-white p-4 shadow-sm">
          <p className="text-sm text-muted-foreground">✨ Total Portfolio Value</p>
          <p className="mt-1 text-xl font-bold text-blue-600">₦6,195,000</p>
        </div>
      </div>
      <div className="mt-4 rounded-xl border bg-blue-50 p-4 shadow-sm">
        <p className="text-xs font-medium text-blue-900">
          <strong>🔐 Withdrawal limits:</strong> NGN ₦1,000 min • USD $10 min • ₦1M+ requires 2FA
        </p>
      </div>
    </div>
  );

  const LenderEarningsDashboard = () => (
    <div className="h-full w-full bg-white p-6">
      <div className="mb-6">
        <div className="flex items-center gap-2">
          <div className="flex size-10 items-center justify-center rounded-xl bg-blue-600 shadow-md">
            <DollarSign className="size-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Lender Performance</h3>
            <p className="text-sm text-muted-foreground">Track your earnings and funded loans</p>
          </div>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-4">
        <div className="rounded-xl border bg-white p-4 shadow-sm">
          <p className="text-sm text-muted-foreground">Total Funded</p>
          <p className="mt-1 text-2xl font-bold text-blue-600">₦2.8M</p>
        </div>
        <div className="rounded-xl border bg-white p-4 shadow-sm">
          <p className="text-sm text-muted-foreground">Interest Earned</p>
          <p className="mt-1 text-2xl font-bold text-green-600">₦84,500</p>
        </div>
        <div className="rounded-xl border bg-white p-4 shadow-sm">
          <p className="text-sm text-muted-foreground">Active Loans</p>
          <p className="mt-1 text-2xl font-bold text-foreground">12</p>
        </div>
        <div className="rounded-xl border bg-white p-4 shadow-sm">
          <p className="text-sm text-muted-foreground">Avg. APY</p>
          <p className="mt-1 text-2xl font-bold text-orange-600">9.2%</p>
        </div>
      </div>
      <div className="mt-4 rounded-xl border bg-white p-4 shadow-sm">
        <h4 className="mb-4 font-bold">💸 Recent Funded Loans</h4>
        <div className="space-y-3">
          {[
            { borrower: 'User #5432', amount: '₦500,000', rate: '8.5%', status: 'Active', color: 'text-green-600', bg: 'bg-green-50' },
            { borrower: 'User #7821', amount: '₦250,000', rate: '10.0%', status: 'Active', color: 'text-blue-600', bg: 'bg-blue-50' },
            { borrower: 'User #2341', amount: '₦750,000', rate: '7.8%', status: 'Repaid', color: 'text-gray-600', bg: 'bg-gray-50' },
            { borrower: 'User #9123', amount: '₦400,000', rate: '9.5%', status: 'Active', color: 'text-blue-600', bg: 'bg-blue-50' },
          ].map((loan, i) => (
            <div key={i} className={`flex items-center justify-between rounded-xl border ${loan.bg} p-3 shadow-sm`}>
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
      <div className="mt-4 rounded-xl border bg-blue-50 p-4 shadow-sm">
        <p className="text-sm font-bold text-blue-900">💰 Platform Performance Fee: 27.5%</p>
        <p className="mt-1 text-xs text-blue-700">You keep 72.5% of all interest earned</p>
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
    <section className="relative border-b pt-16 pb-12 lg:pt-32 lg:pb-20">
      <div className="container">
        {/* Announcement Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 shadow-sm">
            <span className="flex items-center gap-1 rounded-full bg-blue-600 px-3 py-1 text-xs font-bold text-white">
              <Sparkles className="size-3" />
              New!
            </span>
            <span className="text-sm font-semibold text-foreground">
              Get approved in minutes, funded in hours! 🚀
            </span>
            <ArrowRight className="size-4 text-blue-600" />
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="mx-auto max-w-4xl text-center" style={{ fontFamily: "var(--font-heading)" }}>
          Get Cash Fast with{" "}
          <span className="text-blue-600">Your</span>{" "}
          <span className="text-orange-500">Crypto</span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-center text-body-lg text-muted-foreground">
          Need Naira now? Use your crypto as collateral and get instant loans at competitive rates. No credit checks, no paperwork, no waiting. 💰✨
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button className="h-12 rounded-xl bg-blue-600 px-8 text-button font-bold shadow-md hover:bg-blue-700 transition-all">
            ⚡ Get Your Loan Now
          </Button>
          <Button variant="outline" className="h-12 rounded-xl px-8 text-button font-semibold transition-all">
            Learn How It Works
          </Button>
        </div>

        {/* Feature Tabs */}
        <div className="mt-16">
          <div className="flex justify-center">
            <div className="inline-flex gap-2 overflow-x-auto rounded-xl border bg-white p-2 shadow-sm">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-all whitespace-nowrap ${
                      activeTab === tab.id
                        ? "bg-blue-600 text-white shadow-md"
                        : "text-muted-foreground hover:bg-gray-50 hover:text-foreground"
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
          <div className="mt-12 rounded-xl border bg-white p-4 md:p-8 shadow-lg">
            <div className="min-h-[400px] rounded-lg border bg-gray-50 overflow-hidden">
              {renderDashboard()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}