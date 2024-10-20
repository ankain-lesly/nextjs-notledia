import { ThemeHandlerUI } from "@/components/others/theme-handler";
import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { BsArrowLeft } from "react-icons/bs";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Get started with NotLedia",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <main className="app min-h-screen">
      <header className="sticky top-0 main-header z-30 transition-all duration-300">
        <div className="absolute top-0 w-full border-b border-b-muted/20 bg-light text-dark">
          <div className="container-x h-16 flex items-center justify-start gap-4 ">
            <Link href={"/"} className="flex-center gap-4">
              <BsArrowLeft fontSize={24} /> Home
            </Link>

            <div className="ml-auto">
              <ThemeHandlerUI />
            </div>
          </div>
        </div>
      </header>
      <div className="register-forms">{children}</div>
    </main>
  );
}
