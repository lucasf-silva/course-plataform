"use client"

import { ProgressProvider } from "@bprogress/next/app";

type Props = {
    children?: React.ReactNode;
}

export const BProgressProvider = ({ children }: Props) => {
    return <ProgressProvider height="5px" color="#1C6BFD">{children}</ProgressProvider>
}