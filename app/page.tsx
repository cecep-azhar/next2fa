import { Suspense } from "react";
import { cookies } from "next/headers";

import HomePageClient from "@/app/HomePageClient";
import { getT, LOCALE_COOKIE_NAME, normalizeLocale } from "@/lib/i18n";

export default async function HomePage() {
  const cookieStore = await cookies();
  const locale = normalizeLocale(cookieStore.get(LOCALE_COOKIE_NAME)?.value);
  const t = getT(locale);

  return (
    <Suspense
      fallback={
        <div className="mx-auto grid min-h-[calc(100vh-120px)] w-full max-w-2xl place-items-center px-4 py-8">
          <div>{t("loading")}</div>
        </div>
      }
    >
      <HomePageClient locale={locale} />
    </Suspense>
  );
}
