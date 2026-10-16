"use client";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";

export default function Providers({ children }) {
  const [client] = useState(() => new QueryClient({ defaultOptions: { queries: { staleTime: 60000 } } }));
  return <ThemeProvider attribute="class" defaultTheme="light" enableSystem><QueryClientProvider client={client}>{children}</QueryClientProvider></ThemeProvider>;
}
