import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HealthExport – Export & Analyze Your Health Data",
  description: "Connect fitness apps and wearables to create unified health data exports and insights. Supports Fitbit, Apple Health, Google Fit, Strava and more."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="9e008cd4-ad73-44af-926c-4caa6c25d4ef"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
