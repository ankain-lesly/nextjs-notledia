import type { Metadata } from "next";
import "/public/styles/globals.css";
import "/public/styles/_fonts.css";
import SetupProviders from "@/providers/setup-providers";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";

// import localFont from "next/font/local";
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
export const metadata: Metadata = {
  title: {
    default: "NotLedia App",
    template: "%s | NotLedia",
  },
  description: "Create and shear AI powered notes",
  openGraph: {
    title: "NoteLedia Notebook",
    description: "Create and shear AI powered notes with Notledia notebook",
    // images: [`/api/og?title=Next.js App Router`],
  },
  // twitter: {
  //   card: "summary_large_image",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // suppressHydrationWarning={true}
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        className={`antialiased`}>
        <SetupProviders>
          <main className="stream">
            <main className="app">{children}</main>
            <Analytics />
          </main>
        </SetupProviders>
      </body>
    </html>
  );
}
