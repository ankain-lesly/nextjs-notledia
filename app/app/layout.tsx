import AuthWrapper from "@/components/wrappers/auth-wrapper";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "NotLedia | Mange your notes",
  description:
    "Manage and make notes prettier in one place. NotLedia is here to sync all you data across the cloud",
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const user = false;
  if (!user) redirect("/login");

  return (
    <AuthWrapper>
      <main>
        <div className="main">
          <h1>My App</h1>
        </div>

        <div className="app">{children}</div>
      </main>
    </AuthWrapper>
  );
}
