import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome to NotLedia | Make Notes Prettier",
  description:
    "NotLedia is one time place to Manage and make notes prettier in one place. NotLedia is here to sync all you data across the cloud",
};

export default function OnboardingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <html lang="en">
    //   <body className={``}>
    <main>
      <div className="main">
        <h1>Onboarding</h1>
      </div>

      <div className="app">{children}</div>
    </main>
    //   </body>
    // </html>
  );
}
