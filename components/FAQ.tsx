"use client";

import { ChevronDown } from "lucide-react";
import * as React from "react";

import { getT, type Locale } from "@/lib/i18n";

const faqsByLocale: Record<Locale, Array<{ q: string; a: string }>> = {
  id: [
    {
      q: "Apa itu 2FA Generator?",
      a: "2FA Generator adalah tool online untuk menghasilkan kode TOTP (Time-based One-Time Password) yang digunakan untuk two-factor authentication. Tool ini berfungsi seperti Google Authenticator tetapi berbasis web, sehingga tidak perlu install aplikasi.",
    },
    {
      q: "Apakah aman digunakan?",
      a: "Ya, sangat aman. Secret key Anda tersimpan di URL browser dan diproses secara lokal di perangkat Anda. Kami tidak menyimpan atau mengirim secret key ke server, menjaga privasi dan keamanan Anda sepenuhnya.",
    },
    {
      q: "Bagaimana cara menggunakannya?",
      a: "Cukup masukkan secret key dari layanan yang ingin Anda lindungi (misalnya dari setup 2FA Google atau GitHub), klik Buat Kode, dan kode 6 digit akan muncul. Kode ini berlaku selama 30 detik dan otomatis di-refresh.",
    },
    {
      q: "Apakah bisa digunakan untuk semua layanan?",
      a: "Ya, 2FA Generator mendukung semua layanan yang menggunakan standar TOTP (RFC 6238), termasuk Google, Microsoft, GitHub, AWS, Cloudflare, Discord, dan ratusan layanan lainnya.",
    },
    {
      q: "Apakah gratis?",
      a: "100% gratis dan open-source. Anda dapat menggunakan, memodifikasi, dan bahkan deploy sendiri tanpa biaya apapun. Source code tersedia di GitHub.",
    },
  ],
  en: [
    {
      q: "What is this 2FA Generator?",
      a: "2FA Generator is an online tool to generate TOTP (Time-based One-Time Password) codes for two-factor authentication. It works like Google Authenticator, but in the browser—so you don't need to install an app.",
    },
    {
      q: "Is it safe to use?",
      a: "Yes. Your secret key stays in your browser (URL) and is processed locally on your device. We don't store or send your secret key to the server, so your privacy remains intact.",
    },
    {
      q: "How do I use it?",
      a: "Paste the secret key from the service you're protecting (for example, from Google or GitHub 2FA setup), click Generate Code, and a 6-digit code will appear. The code is valid for 30 seconds and refreshes automatically.",
    },
    {
      q: "Does it work for all services?",
      a: "Yes. It supports any service that uses the TOTP standard (RFC 6238), including Google, Microsoft, GitHub, AWS, Cloudflare, Discord, and many more.",
    },
    {
      q: "Is it free?",
      a: "It's 100% free and open-source. You can use it, modify it, and even self-host it at no cost. The source code is available on GitHub.",
    },
  ],
};

export default function FAQ({ locale }: { locale: Locale }) {
  const t = React.useMemo(() => getT(locale), [locale]);
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = faqsByLocale[locale] ?? faqsByLocale.en;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="w-full space-y-4">
        <h2 className="text-2xl font-semibold">{t("faqTitle")}</h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-lg border bg-card">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between p-4 text-left font-medium transition hover:bg-muted/50"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="border-t px-4 py-3 text-sm text-muted-foreground">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
