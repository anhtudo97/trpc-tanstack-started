import { QueryClient } from '@tanstack/react-query';

import { createTRPCClient, httpBatchStreamLink, loggerLink } from "@trpc/client";
import { createTRPCOptionsProxy } from "@trpc/tanstack-react-query";
import superjson from "superjson";

import { TRPCProvider } from '@/trpc/react';
import type { TRPCRouter } from '@/trpc/router';

const queryClient = new QueryClient();


function getUrl() {
  const base = (() => {
    if (typeof window !== "undefined") return "";
    return `http://localhost:${process.env.PORT ?? 3000}`;
  })();
  return base + "/api/trpc";
}

export const trpcClient = createTRPCClient<TRPCRouter>({
  links: [
    loggerLink({
      enabled: (opts) =>
        (process.env.NODE_ENV === 'development' &&
          typeof window !== 'undefined') ||
        (opts.direction === 'down' && opts.result instanceof Error),
    }),
    httpBatchStreamLink({
      transformer: superjson,
      url: getUrl(),

    }),
  ]
});

const serverHelpers = createTRPCOptionsProxy({
  client: trpcClient,
  queryClient: queryClient,
});

export function getContext() {
  return {
    queryClient,
    trpc: serverHelpers,
  };
}

export function Provider({ children }: { children: React.ReactNode; }) {
  return (
    <TRPCProvider trpcClient={trpcClient} queryClient={queryClient}>
      {children}
    </TRPCProvider>
  );
}
