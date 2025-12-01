import * as React from "react";

export type ToastActionElement = React.ReactNode;

export interface Toast {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
}

const listeners: Array<(toast: Toast | null) => void> = [];
let toastQueue: Toast[] = [];

export function useToast() {
  const [toast, setToast] = React.useState<Toast | null>(null);

  React.useEffect(() => {
    const listener = (t: Toast | null) => setToast(t);
    listeners.push(listener);
    return () => {
      const idx = listeners.indexOf(listener);
      if (idx >= 0) listeners.splice(idx, 1);
    };
  }, []);

  return {
    toast,
  };
}

export function toast(input: Omit<Toast, "id"> & { id?: string }) {
  const t: Toast = {
    id: input.id ?? Math.random().toString(36).slice(2),
    title: input.title,
    description: input.description,
    action: input.action,
  };
  toastQueue.push(t);
  for (const l of listeners) l(t);
  setTimeout(() => {
    toastQueue = toastQueue.filter((x) => x.id !== t.id);
    for (const l of listeners) l(null);
  }, 2500);
}
