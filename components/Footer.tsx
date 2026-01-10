"use client";

import { Heart, Coffee } from "lucide-react";

import { getT, type Locale } from "@/lib/i18n";

export default function Footer({ locale }: { locale: Locale }) {
  const t = getT(locale);

  return (
    <footer className="">
  <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-3 px-6 py-4 text-center text-sm text-muted-foreground">
    <p>
      {t("footerMadeWithPrefix")} <Heart className="inline h-4 w-4 text-rose-500" /> {t("footerIn")} — <a
        href="https://cecepazhar.com"
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
      {t("footerCoffee")} <Coffee className="h-4 w-4" />
    </a>
  </div>
</footer>
  );
}
