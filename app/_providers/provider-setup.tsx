"use client";

import { ContextProvider } from "@/store/context-provider";
import React, { ReactNode } from "react";

export default function ProviderSetup({ children }: { children: ReactNode }) {
  return (
    <ContextProvider>
      {children}
      {/* <ThemeProvider attribute="class"> */}
      {/* </ThemeProvider> */}
    </ContextProvider>
  );
}
