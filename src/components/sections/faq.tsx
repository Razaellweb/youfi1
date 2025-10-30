"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqSection() {
  const faqs = [
    {
      question: "What is YouFi and how does it work?",
      answer: "YouFi is a peer-to-peer lending marketplace that connects crypto holders with borrowers in emerging markets. Borrowers secure loans by depositing crypto collateral (USDC/USDT), and loans are disbursed in USDC or Naira.",
    },
    {
      question: "What are the loan terms and interest rates?",
      answer: "Loans can be up to 30 days with interest rates up to 12.5% monthly. Borrowers specify their desired amount, tenor, and interest rate, which are then matched with lenders on the platform.",
    },
    {
      question: "How is my collateral protected?",
      answer: "All collateral is held in secure custodial escrow with 135% initial LTV. Real-time price feeds monitor collateral health, and automated liquidation triggers at 115% LTV to protect lenders.",
    },
    {
      question: "What are the KYC requirements?",
      answer: "Tier 1 (Basic) requires BVN, phone, email, and selfie verification for up to ₦1M/$500 borrowing. Tier 2 (Full) adds ID and proof of address for up to ₦5M/$2,500 and enables lending privileges.",
    },
    {
      question: "How do withdrawals work?",
      answer: "Withdrawals have ₦1,000/$10 minimums with 0.001% (USD) or ₦60 (NGN) fees. Amounts over ₦1M require admin 2FA verification. NGN uses Providus Bank virtual accounts, crypto uses multi-chain wallets.",
    },
    {
      question: "What happens if I can't repay on time?",
      answer: "There's a 5-day grace period after the due date. If not repaid within this period or if LTV drops to 115%, collateral is liquidated with a 5% fee. Proceeds repay the lender, and any remainder goes to you.",
    },
    {
      question: "What fees does YouFi charge?",
      answer: "Borrowers pay a 1.25% origination fee. Lenders have a 27.5% performance fee on earnings. The platform charges ₦1,000 flat fee per loan. There's also a 5% fee on liquidations.",
    },
  ];

  return (
    <section className="border-b bg-background py-20 lg:py-32">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl lg:text-5xl font-semibold" style={{ fontFamily: "var(--font-heading)" }}>
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-body-lg text-muted-foreground">
              Can't find what you're looking for? Contact our support team at support@youfi.app
            </p>
          </div>

          <div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}