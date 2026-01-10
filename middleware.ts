import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { LOCALE_COOKIE_NAME, normalizeLocale, type Locale } from "./lib/i18n";

function detectCountry(req: NextRequest): string | undefined {
  // Vercel Edge Runtime
  const geo = (req as any).geo?.country;
  if (typeof geo === "string" && geo) return geo.toUpperCase();

  // Common proxy/CDN headers
  const candidates = [
    req.headers.get("x-vercel-ip-country"),
    req.headers.get("cf-ipcountry"),
    req.headers.get("x-country"),
    req.headers.get("x-country-code"),
    req.headers.get("x-appengine-country"),
  ];

  for (const c of candidates) {
    if (c && typeof c === "string") return c.toUpperCase();
  }

  return undefined;
}

function detectLocale(req: NextRequest): Locale {
  const country = detectCountry(req);
  if (country === "ID") return "id";

  // Fallback: Accept-Language (useful for local dev)
  const accept = req.headers.get("accept-language") ?? "";
  if (/^id\b/i.test(accept)) return "id";

  return "en";
}

export function middleware(req: NextRequest) {
  const existing = req.cookies.get(LOCALE_COOKIE_NAME)?.value;
  if (existing) {
    const normalized = normalizeLocale(existing);
    // Keep user preference, but normalize the cookie value.
    if (normalized === existing) return NextResponse.next();
    const res = NextResponse.next();
    res.cookies.set({
      name: LOCALE_COOKIE_NAME,
      value: normalized,
      path: "/",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 365,
    });
    return res;
  }

  const locale = detectLocale(req);
  const res = NextResponse.next();
  res.cookies.set({
    name: LOCALE_COOKIE_NAME,
    value: locale,
    path: "/",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365,
  });
  return res;
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
