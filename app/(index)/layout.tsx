import Header from "@/components/menus/header";
import Footer from "@/components/menus/footer";

export default function IndexLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
