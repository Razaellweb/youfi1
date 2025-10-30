export default function Stats() {
  const stats = [
    { number: "200", label: "Beta Users Selected" },
    { number: "135%", label: "Initial LTV Ratio" },
    { number: "≤30", label: "Days Max Loan Term" },
    { number: "3", label: "Blockchain Networks" },
  ];

  return (
    <section className="border-b bg-accent/30 py-16 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-stats-lg font-bold text-primary" style={{ fontFamily: "var(--font-heading)" }}>
                {stat.number}
              </div>
              <div className="mt-2 text-body-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}