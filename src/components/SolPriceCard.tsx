"use client";

import { motion, useReducedMotion } from "framer-motion";
import useSWR from "swr";
import { TrendingUp, TrendingDown } from "lucide-react";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function SolPriceCard() {
  const reduceMotion = useReducedMotion() ?? false;
  const { data, error } = useSWR(
    "https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd&include_24hr_change=true",
    fetcher,
    { refreshInterval: 60000 }
  );

  const price = data?.solana?.usd;
  const change = data?.solana?.usd_24h_change;

  return (
    <div className="flex h-full flex-col gap-4">
      <p className="mono-label">Live SOL Price</p>

      {error ? (
        <p className="text-sm text-zinc-500">Offline — price unavailable</p>
      ) : price === undefined ? (
        <div className="flex h-16 items-center justify-center">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-zinc-700 border-t-accent" />
        </div>
      ) : (
        <>
          <div className="flex items-center gap-3">
            <motion.span
              key={price}
              initial={reduceMotion ? false : { y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="text-3xl font-bold text-white tabular-nums"
            >
              ${price.toFixed(2)}
            </motion.span>
            {typeof change === "number" && (
              <span
                className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold ${
                  change >= 0
                    ? "bg-emerald-500/10 text-emerald-400"
                    : "bg-red-500/10 text-red-400"
                }`}
              >
                {change >= 0 ? (
                  <TrendingUp className="h-3 w-3" />
                ) : (
                  <TrendingDown className="h-3 w-3" />
                )}
                {change.toFixed(2)}%
              </span>
            )}
          </div>

          {/* Mini sparkline */}
          <div className="flex h-12 items-end gap-0.5">
            {[0.3, 0.45, 0.35, 0.55, 0.5, 0.65, 0.6, 0.75, 0.7, 0.85, 0.8, 1].map(
              (h, i) => (
                <motion.div
                  key={i}
                  className="w-full rounded-sm bg-accent/60"
                  initial={{ height: "10%" }}
                  animate={{
                    height: `${h * 100}%`,
                    transition: { delay: i * 0.05, duration: 0.4 },
                  }}
                />
              )
            )}
          </div>

          <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
            Auto-refreshes every 60s · CoinGecko
          </p>
        </>
      )}
    </div>
  );
}