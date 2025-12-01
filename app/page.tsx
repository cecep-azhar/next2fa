"use client";

// Halaman utama 2FA Generator
// - Menghasilkan kode TOTP 6 digit dari secret (otplib)
// - Countdown 30 detik dengan progress circle (conic-gradient)
// - Auto-fill secret dari query param ?secret=...
// - Statistik real-time (Dilihat / Dicopy) via API + Drizzle

import * as React from "react";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { authenticator } from "otplib";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Copy, Share2 } from "lucide-react";
import Footer from "@/components/Footer";
import { toast } from "@/components/ui/use-toast";

authenticator.options = { step: 30, window: 0 };

function HomePage2FA() {
  const searchParams = useSearchParams();
  const [secret, setSecret] = React.useState("");
  const [code, setCode] = React.useState<string>("------");
  const [remaining, setRemaining] = React.useState<number>(30);
  const [views, setViews] = React.useState<number>(0);
  const [copies, setCopies] = React.useState<number>(0);
  const [hasRecordedView, setHasRecordedView] = React.useState(false);

  // Auto-fill secret dari URL saat mount
  React.useEffect(() => {
    const s = searchParams.get("key");
    if (s) setSecret(s.trim());
  }, [searchParams]);

  // Record kunjungan pertama kali buka halaman (sekali per session)
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const key = "next2fa_view_recorded";
    if (!sessionStorage.getItem(key)) {
      fetch("/api/visits", { method: "POST" }).finally(() => {
        sessionStorage.setItem(key, "1");
        setHasRecordedView(true);
      });
    } else {
      setHasRecordedView(true);
    }
  }, []);

  // Ambil statistik awal dan polling ringan setiap 5 detik
  React.useEffect(() => {
    let active = true;
    async function load() {
      try {
        const res = await fetch("/api/stats", { cache: "no-store" });
        const data = await res.json();
        if (!active) return;
        setViews(data.views ?? 0);
        setCopies(data.copies ?? 0);
      } catch {}
    }
    load();
    const id = setInterval(load, 5000);
    return () => {
      active = false;
      clearInterval(id);
    };
  }, [hasRecordedView]);

  // Update kode + sisa waktu tiap detik
  React.useEffect(() => {
    const tick = () => {
      const rem = authenticator.timeRemaining();
      setRemaining(rem);
      if (secret && /^[A-Z2-7]+=*$/i.test(secret)) {
        try {
          const c = authenticator.generate(secret.replaceAll(" ", ""));
          setCode(c);
        } catch {
          setCode("------");
        }
      } else {
        setCode("------");
      }
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [secret]);

  const handleGenerate = React.useCallback(() => {
    if (!secret) {
      toast({ title: "Secret kosong", description: "Masukkan secret base32 yang valid." });
      return;
    }
    try {
      const c = authenticator.generate(secret.replaceAll(" ", ""));
      setCode(c);
      toast({ title: "Kode digenerate", description: "Gunakan sebelum waktu habis." });
    } catch {
      toast({ title: "Secret tidak valid", description: "Periksa kembali secret base32 Anda." });
    }
  }, [secret]);

  const handleCopyCode = React.useCallback(async () => {
    try {
      await navigator.clipboard.writeText(code);
      toast({ title: "Kode disalin", description: `${code} telah disalin ke clipboard.` });
      setCopies((c) => c + 1);
      fetch("/api/copies", { method: "POST" }).catch(() => {});
    } catch {
      toast({ title: "Gagal menyalin", description: "Izin clipboard ditolak." });
    }
  }, [code]);

  const handleShare = React.useCallback(async () => {
    if (!secret) {
      toast({ title: "Secret kosong", description: "Masukkan secret terlebih dahulu." });
      return;
    }
    const prodBase = "https://2fa.fath.my.id";
    const base = typeof window !== "undefined" && location.hostname.includes("localhost") ? location.origin : prodBase;
    const link = `${base}/?key=${encodeURIComponent(secret)}`;
    try {
      await navigator.clipboard.writeText(link);
      toast({ 
        title: "✅ Link disalin!", 
        description: "Share link telah tersimpan di clipboard." 
      });
    } catch (err) {
      // Fallback: tampilkan link di toast agar bisa disalin manual
      toast({ 
        title: "🔗 Share Link", 
        description: link
      });
    }
  }, [secret]);

  const pct = 1 - remaining / 30;

  return (
    <div className="mx-auto grid min-h-[calc(100vh-120px)] w-full max-w-2xl place-items-center px-4 py-8">
      <Card className="w-full border border-border/50 bg-card/95 shadow-lg backdrop-blur-sm">
        <CardHeader className="space-y-2 pb-8">
          <CardTitle className="text-center text-3xl font-bold">Two-Factor Authentication</CardTitle>
          <CardDescription className="text-center text-base">Masukkan secret untuk menghasilkan kode 6 digit</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8 pb-8">
          <div className="flex flex-col gap-3 sm:flex-row">
            <Input
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
              placeholder="Masukkan secret key..."
              className="h-12 text-base font-mono"
            />
            <Button onClick={handleGenerate} className="h-12 shrink-0 px-6">Generate Code</Button>
          </div>

          <div className="flex flex-col items-center gap-8 py-4">
            <div className="relative h-52 w-52 rounded-full bg-muted/20 p-4">
              <svg className="h-full w-full -rotate-90" viewBox="0 0 176 176">
                {(() => {
                  const r = 76;
                  const c = 2 * Math.PI * r;
                  const offset = c * (1 - pct);
                  return (
                    <>
                      <circle cx="88" cy="88" r={r} strokeWidth="8" className="text-muted/40" stroke="currentColor" fill="transparent" />
                      <circle
                        cx="88"
                        cy="88"
                        r={r}
                        strokeWidth="8"
                        className="text-primary transition-all duration-300"
                        stroke="currentColor"
                        fill="transparent"
                        strokeDasharray={c}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                      />
                    </>
                  );
                })()}
              </svg>
              <div className="absolute inset-0 grid place-items-center">
                <div className="flex flex-col items-center gap-1">
                  <div className="text-5xl font-bold tabular-nums tracking-wider">{code}</div>
                  <div className="text-xs text-muted-foreground">New code in {remaining}s</div>
                </div>
              </div>
            </div>

            <div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
              <Button onClick={handleCopyCode} size="lg" className="gap-2">
                <Copy className="h-4 w-4" /> Copy Code
              </Button>
              <Button variant="outline" onClick={handleShare} size="lg" className="gap-2">
                <Share2 className="h-4 w-4" /> Bagikan Link
              </Button>
            </div>
          </div>

          <Separator className="my-2" />

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Badge variant="secondary" className="px-4 py-1.5 text-sm">
              👁️ Dikunjungi: {views}x
            </Badge>
            <Badge variant="secondary" className="px-4 py-1.5 text-sm">
              📋 Digunakan: {copies}x
            </Badge>
          </div>
        </CardContent>
      </Card>

      <Footer />
    </div>
  );
}

export default function HomePage() {
  return (
    <Suspense fallback={<div className="mx-auto grid min-h-[calc(100vh-120px)] w-full max-w-2xl place-items-center px-4 py-8"><div>Loading...</div></div>}>
      <HomePage2FA />
    </Suspense>
  );
}
