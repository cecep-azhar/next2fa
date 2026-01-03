"use client";

import { Heart, Coffee } from "lucide-react";

export default function Footer() {
  return (
    <footer className="">
  <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-3 px-6 py-4 text-center text-sm text-muted-foreground">
    <p>
      Made with <Heart className="inline h-4 w-4 text-rose-500" /> in Bandung, Indonesia — <a
        href="https://cecepazhar.fath.my.id"
        target="_blank"
        rel="noreferrer noopener"
        className="inline-flex items-center gap-2 font-medium text-primary hover:underline"
      >
        Cecep Azhar
      </a> © {new Date().getFullYear()}
    </p>

    <a
      href="https://trakteer.id/cecepazhar/tip"
      target="_blank"
      rel="noreferrer noopener"
      className="inline-flex items-center gap-2 font-medium text-primary hover:underline"
    >
      Buy me a coffee <Coffee className="h-4 w-4" />
    </a>
  </div>
</footer>
  );
}
