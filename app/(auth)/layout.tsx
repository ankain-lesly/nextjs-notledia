import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NotLedia | SignUp",
  description: "Get started with NotLedia",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="app min-h-screen">{children}</main>;
}
