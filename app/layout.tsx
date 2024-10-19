import type { Metadata } from "next";
// import localFont from "next/font/local";
import "/public/styles/globals.css";
import "/public/styles/_fonts.css";
import SetupProviders from "@/providers/setup-providers";

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
  title: "NotLedia App",
  description: "Create and shear AI powered notes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // suppressHydrationWarning={true}
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        className={`antialiased`}>
        <SetupProviders>
          <main className="app">{children}</main>
        </SetupProviders>
      </body>
    </html>
  );
}
