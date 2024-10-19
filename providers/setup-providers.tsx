"use client";

import { ContextProvider } from "@/providers/context-provider";
import React, { ReactNode } from "react";

export default function SetupProviders({ children }: { children: ReactNode }) {
  return (
    <ContextProvider>
      {children}
      {/* <ThemeProvider attribute="class"> */}
      {/* </ThemeProvider> */}
    </ContextProvider>
  );
}
