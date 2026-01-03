"use client";

import { ChevronDown } from "lucide-react";
import * as React from "react";

const faqs = [
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
    a: "Cukup masukkan secret key dari layanan yang ingin Anda lindungi (misalnya dari setup 2FA Google atau GitHub), klik Generate Code, dan kode 6 digit akan muncul. Kode ini berlaku selama 30 detik dan otomatis di-refresh.",
  },
  {
    q: "Apakah bisa digunakan untuk semua layanan?",
    a: "Ya, 2FA Generator mendukung semua layanan yang menggunakan standar TOTP (RFC 6238), termasuk Google, Microsoft, GitHub, AWS, Cloudflare, Discord, dan ratusan layanan lainnya.",
  },
  {
    q: "Apakah gratis?",
    a: "100% gratis dan open-source. Anda dapat menggunakan, memodifikasi, dan bahkan deploy sendiri tanpa biaya apapun. Source code tersedia di GitHub.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

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
        <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
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
