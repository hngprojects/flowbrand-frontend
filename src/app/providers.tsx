"use client";

import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactLenis } from "lenis/react";
import { AppProgressBar } from "next-nprogress-bar";
import { type ReactNode } from "react";
import { Toaster } from "sonner";

type ProvidersProps = {
  children: ReactNode;
};

const MINUTE = 1000 * 60;

let browserClient: QueryClient | undefined;

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        gcTime: 10 * MINUTE,
        staleTime: 1 * MINUTE,
      },
    },
  });
}

function getQueryClient() {
  if (typeof window === "undefined") {
    return makeQueryClient();
  }
  browserClient ??= makeQueryClient();
  return browserClient;
}

export function Providers({ children }: ProvidersProps) {
  const queryClient = getQueryClient();

  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <ReactLenis root>{children}</ReactLenis>
        <Toaster richColors closeButton />
        <AppProgressBar
          height="3px"
          color="var(--primary)"
          options={{ showSpinner: false }}
          shallowRouting
        />
      </QueryClientProvider>
    </SessionProvider>
  );
}
