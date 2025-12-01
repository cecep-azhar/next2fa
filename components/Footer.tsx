"use client";

import { Heart, Coffee } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-background/60 backdrop-blur">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center justify-between gap-3 px-6 py-4 text-sm text-muted-foreground sm:flex-row">
        <p>
          Development with <Heart className="inline h-4 w-4 text-rose-500" /> in Bandung, Indonesia — Cecep Azhar © 2025
        </p>
        <a
          href="https://trakteer.id/cecep-azhar"
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 font-medium text-primary hover:underline"
        >
          <Coffee className="h-4 w-4" /> Dukung dengan kopi ☕
        </a>
      </div>
    </footer>
  );
}
