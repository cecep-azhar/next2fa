export type Locale = "en" | "id";

export const LOCALE_COOKIE_NAME = "NEXT_LOCALE";

export function normalizeLocale(input: unknown): Locale {
  if (typeof input !== "string") return "en";
  const lowered = input.toLowerCase();
  if (lowered === "id" || lowered.startsWith("id-")) return "id";
  if (lowered === "en" || lowered.startsWith("en-")) return "en";
  return "en";
}

const messages = {
  en: {
    metaTitle: "2FA Generator — Next.js + Turso",
    metaDescription: "Elegant TOTP generator with real-time stats and dark mode.",

    headerGithubAria: "View source on GitHub",

    srH1: "2FA Generator - Free Online TOTP Authenticator",

    cardTitle: "Two-Factor Authentication",
    cardDescription: "Enter a secret to generate a 6-digit code",
    secretPlaceholder: "Enter secret key...",
    generateButton: "Generate Code",

    newCodeIn: (seconds: number) => `New code in ${seconds}s`,

    copyCode: "Copy Code",
    shareLink: "Share Link",

    badgeViews: (n: number) => `👁️ Visits: ${n}x`,
    badgeCopies: (n: number) => `📋 Used: ${n}x`,

    toastSecretEmptyTitle: "Secret is empty",
    toastSecretEmptyDesc: "Enter a valid base32 secret.",

    toastCodeGeneratedTitle: "Code generated",
    toastCodeGeneratedDesc: "Use it before time runs out.",

    toastSecretInvalidTitle: "Invalid secret",
    toastSecretInvalidDesc: "Please re-check your base32 secret.",

    toastCopiedTitle: "Code copied",
    toastCopiedDesc: (code: string) => `${code} has been copied to clipboard.`,

    toastCopyFailedTitle: "Copy failed",
    toastCopyFailedDesc: "Clipboard permission denied.",

    toastShareNeedSecretTitle: "Secret is empty",
    toastShareNeedSecretDesc: "Enter a secret first.",

    toastShareCopiedTitle: "✅ Link copied!",
    toastShareCopiedDesc: "Share link is saved to clipboard.",

    toastShareFallbackTitle: "🔗 Share Link",

    loading: "Loading...",

    faqTitle: "Frequently Asked Questions",

    footerMadeWithPrefix: "Made with",
    footerIn: "in Bandung, Indonesia",
    footerCoffee: "Buy me a coffee",

    languageShort: (locale: Locale) => (locale === "id" ? "ID" : "EN"),
    languageAria: "Switch language",
  },
  id: {
    metaTitle: "2FA Generator — Next.js + Turso",
    metaDescription: "Generator TOTP elegan dengan statistik real-time dan dark mode.",

    headerGithubAria: "Lihat sumber di GitHub",

    srH1: "2FA Generator - TOTP Authenticator Online Gratis",

    cardTitle: "Autentikasi Dua Faktor",
    cardDescription: "Masukkan secret untuk menghasilkan kode 6 digit",
    secretPlaceholder: "Masukkan secret key...",
    generateButton: "Buat Kode",

    newCodeIn: (seconds: number) => `Kode baru dalam ${seconds}dtk`,

    copyCode: "Salin Kode",
    shareLink: "Bagikan Link",

    badgeViews: (n: number) => `👁️ Dikunjungi: ${n}x`,
    badgeCopies: (n: number) => `📋 Digunakan: ${n}x`,

    toastSecretEmptyTitle: "Secret kosong",
    toastSecretEmptyDesc: "Masukkan secret base32 yang valid.",

    toastCodeGeneratedTitle: "Kode digenerate",
    toastCodeGeneratedDesc: "Gunakan sebelum waktu habis.",

    toastSecretInvalidTitle: "Secret tidak valid",
    toastSecretInvalidDesc: "Periksa kembali secret base32 Anda.",

    toastCopiedTitle: "Kode disalin",
    toastCopiedDesc: (code: string) => `${code} telah disalin ke clipboard.`,

    toastCopyFailedTitle: "Gagal menyalin",
    toastCopyFailedDesc: "Izin clipboard ditolak.",

    toastShareNeedSecretTitle: "Secret kosong",
    toastShareNeedSecretDesc: "Masukkan secret terlebih dahulu.",

    toastShareCopiedTitle: "✅ Link disalin!",
    toastShareCopiedDesc: "Share link telah tersimpan di clipboard.",

    toastShareFallbackTitle: "🔗 Share Link",

    loading: "Memuat...",

    faqTitle: "Pertanyaan yang Sering Diajukan",

    footerMadeWithPrefix: "Dibuat dengan",
    footerIn: "di Bandung, Indonesia",
    footerCoffee: "Traktir kopi",

    languageShort: (locale: Locale) => (locale === "id" ? "ID" : "EN"),
    languageAria: "Ganti bahasa",
  },
} satisfies Record<Locale, Record<string, unknown>>;

export function getT(locale: Locale) {
  const dict = messages[locale] ?? messages.en;
  return function t<K extends keyof typeof dict>(key: K, ...args: any[]): any {
    const value = dict[key];
    if (typeof value === "function") return (value as any)(...args);
    return value;
  };
}
