"use client"

import { queryClient } from "@/lib/query-client";
import { QueryClientProvider } from "@tanstack/react-query";

type Props = {
    children: React.ReactNode;
}

export const QueryProvider = ({ children }: Props) => {
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}