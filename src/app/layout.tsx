import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Herman Donawan — AI Developer & Programmer",
  description:
    "AI Developer specializing in LLM Evaluation (RLHF), Autonomous Agents, AI Voice Data, Prompt Engineering, and Web3/DeFi.",
  keywords: [
    "Herman Donawan",
    "AI Developer",
    "LLM Evaluation",
    "RLHF",
    "Prompt Engineering",
    "Autonomous Agents",
    "Python",
    "Web3",
    "DeFi",
  ],
  openGraph: {
    title: "Herman Donawan — AI Developer & Programmer",
    description:
      "AI Developer specializing in LLM Evaluation (RLHF), Autonomous Agents, AI Voice Data, Prompt Engineering, and Web3/DeFi.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(inter.variable, jetbrains.variable, "font-sans")}>
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
