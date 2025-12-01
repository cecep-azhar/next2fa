import type { Metadata } from "next";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "2FA Generator — Next.js + Turso",
  description: "Generator TOTP elegan dengan statistik real-time dan dark mode.",
  metadataBase: new URL("https://2fa.fath.my.id"),
  openGraph: {
    title: "2FA Generator",
    description: "Generator TOTP dengan statistik real-time dan dark mode.",
    url: "https://2fa.fath.my.id",
    siteName: "2FA Generator",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "2FA Generator",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "2FA Generator",
    description: "Generator TOTP dengan statistik real-time dan dark mode.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={cn("min-h-screen")}> 
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-10 border-b bg-background/60 backdrop-blur">
              <div className="mx-auto flex w-full max-w-3xl items-center justify-between px-6 py-3">
                <div className="text-sm font-semibold opacity-80">2FA Generator</div>
                <ModeToggle />
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
