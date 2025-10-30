import React from 'react';

export default function TrustedBy() {
  return (
    <section className="border-b bg-background py-12 lg:py-16">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Text */}
          <div className="max-w-xs text-center lg:text-left">
            <p className="text-sm text-muted-foreground">
              Secured by leading blockchain infrastructure
            </p>
          </div>

          {/* Logos */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 items-center">
            <div className="flex items-center justify-center">
              <span className="text-2xl font-bold text-neutral-700" style={{ fontFamily: "var(--font-heading)" }}>
                Polygon
              </span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-2xl font-bold text-neutral-700" style={{ fontFamily: "var(--font-heading)" }}>
                BNB Chain
              </span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-2xl font-bold text-neutral-700" style={{ fontFamily: "var(--font-heading)" }}>
                TRON
              </span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-2xl font-bold text-neutral-700" style={{ fontFamily: "var(--font-heading)" }}>
                Providus
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}