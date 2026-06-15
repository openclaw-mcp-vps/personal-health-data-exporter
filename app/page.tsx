export default function Home() {
  const faqs = [
    {
      q: "Which platforms are supported?",
      a: "We support Fitbit, Apple Health, Google Fit, Strava, Garmin, Oura, and more. New integrations are added regularly."
    },
    {
      q: "What export formats are available?",
      a: "You can export your unified health data as CSV, JSON, or a formatted PDF report with charts and insights."
    },
    {
      q: "Is my health data secure?",
      a: "Yes. We use OAuth 2.0 for all platform connections, never store raw credentials, and you can delete your data at any time."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Health Data Exporter
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Export &amp; Analyze Your{" "}
          <span className="text-[#58a6ff]">Health Data</span>{" "}
          Across Every Platform
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Connect Fitbit, Apple Health, Google Fit, Strava and more. Get unified CSV, JSON, and PDF exports with actionable insights — all in one dashboard.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Exporting — $7/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No lock-in.</p>
        <div className="mt-12 flex flex-wrap justify-center gap-3 text-sm text-[#8b949e]">
          {["Fitbit","Apple Health","Google Fit","Strava","Garmin","Oura"].map(p => (
            <span key={p} className="bg-[#161b22] border border-[#30363d] px-3 py-1 rounded-full">{p}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$7</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited platform connections",
              "CSV, JSON & PDF exports",
              "Automated weekly reports",
              "Insights dashboard",
              "Priority support"
            ].map(f => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-8">
        &copy; {new Date().getFullYear()} HealthExport. All rights reserved.
      </footer>
    </main>
  );
}
