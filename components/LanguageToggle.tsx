"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LOCALE_COOKIE_NAME, type Locale } from "@/lib/i18n";

export default function LanguageToggle({
  locale,
  ariaLabel,
}: {
  locale: Locale;
  ariaLabel: string;
}) {
  const router = useRouter();

  const nextLocale: Locale = locale === "id" ? "en" : "id";

  const onClick = React.useCallback(() => {
    document.cookie = `${LOCALE_COOKIE_NAME}=${nextLocale}; Path=/; Max-Age=${60 * 60 * 24 * 365}; SameSite=Lax`;
    document.documentElement.lang = nextLocale;
    router.refresh();
  }, [nextLocale, router]);

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={onClick}
      aria-label={ariaLabel}
      className="h-9 px-3"
    >
      {locale.toUpperCase()}
    </Button>
  );
}
