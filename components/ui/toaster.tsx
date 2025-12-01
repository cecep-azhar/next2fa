"use client";

import * as React from "react";
import { ToastProvider, ToastViewport, Toast, ToastTitle, ToastDescription } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

export function Toaster() {
  const { toast } = useToast();

  return (
    <ToastProvider>
      {toast && (
        <Toast>
          {toast.title ? <ToastTitle>{toast.title}</ToastTitle> : null}
          {toast.description ? <ToastDescription>{toast.description}</ToastDescription> : null}
        </Toast>
      )}
      <ToastViewport />
    </ToastProvider>
  );
}
