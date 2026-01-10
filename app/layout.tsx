import { Metadata } from "next";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import { Github } from "lucide-react";

import { cookies } from "next/headers";
import LanguageToggle from "@/components/LanguageToggle";
import { getT, LOCALE_COOKIE_NAME, normalizeLocale } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const locale = normalizeLocale(cookieStore.get(LOCALE_COOKIE_NAME)?.value);
  const t = getT(locale);

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    metadataBase: new URL("https://2fa.suite.my.id"),
    manifest: "/manifest.json",
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
    alternates: {
      canonical: "https://2fa.suite.my.id",
    },
    keywords:
      locale === "id"
        ? [
            "2FA generator",
            "TOTP",
            "authenticator",
            "one time password",
            "OTP",
            "two factor authentication",
            "keamanan akun",
            "Next.js 2FA",
            "Google Authenticator alternative",
            "web-based authenticator",
          ]
        : [
            "2FA generator",
            "TOTP",
            "authenticator",
            "one time password",
            "OTP",
            "two factor authentication",
            "account security",
            "Next.js 2FA",
            "Google Authenticator alternative",
            "web-based authenticator",
          ],
    authors: [{ name: "Cecep Azhar", url: "https://2fa.suite.my.id" }],
    creator: "Cecep Azhar",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title: "2FA Generator",
      description: t("metaDescription"),
      url: "https://2fa.suite.my.id",
      siteName: "2FA Generator",
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: "2FA Generator",
        },
      ],
      locale: locale === "id" ? "id_ID" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "2FA Generator",
      description: t("metaDescription"),
      images: ["/og.png"],
    },
    other: {
      "msapplication-TileColor": "#2563eb",
      "theme-color": "#2563eb",
    },
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const locale = normalizeLocale(cookieStore.get(LOCALE_COOKIE_NAME)?.value);
  const t = getT(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "2FA Generator",
    description: "Generator TOTP elegan dengan statistik real-time dan dark mode",
    url: "https://2fa.suite.my.id",
    applicationCategory: "SecurityApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Person",
      name: "Cecep Azhar",
      url: "https://2fa.suite.my.id",
    },
  };

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={cn("min-h-screen")}> 
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-10 border-b border-transparent bg-transparent">
              <script defer src="https://analytics.xpc.my.id/script.js" data-website-id="c2906c6f-6009-4f39-8fd1-e31d5226ae36"></script>
              <div className="mx-auto flex w-full max-w-3xl items-center justify-between px-6 py-3">
                <div className="text-sm font-semibold opacity-80">2FA</div>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/cecep-azhar/next2fa"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="rounded-full p-2 text-muted-foreground transition hover:bg-muted/50 hover:text-foreground"
                    aria-label={t("headerGithubAria")}
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <LanguageToggle locale={locale} ariaLabel={t("languageAria")} />
                  <ModeToggle />
                </div>
              </div>
            </header>
            <main className="flex-1">{children}</main>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
