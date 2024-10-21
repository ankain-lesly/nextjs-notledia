"use client";

import { AppLogo } from "@/public";
import Image from "next/image";
import Link from "next/link";
import { ThemeHandlerUI } from "../others/theme-handler";
import { useEffect, useRef, useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { BiX } from "react-icons/bi";
import ModalOverlay from "../modals/ui/modal-overlay";

export default function Header() {
  const [isMobileNav, setIsMobileNav] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const ngClass = "bg-dark-main";

  useEffect(() => {
    const handleScroll = (e: any) => {
      const currentOffset = e.target.scrollingElement.scrollTop;

      if (currentOffset > 67 && headerRef.current)
        headerRef.current.classList.add(ngClass);
      else headerRef.current?.classList.remove(ngClass);
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleThemeClick = (e: any) => {
    e.stopPropagation();
  };
  return (
    <>
      <header className="sticky top-0 main-header z-30 transition-all duration-300">
        <div ref={headerRef} className="absolute top-0 w-full text-light-main">
          <div className="container-x h-16 flex items-center justify-end gap-4">
            <Link href="/" className="flex-center gap-2 mr-auto">
              <Image src={AppLogo} alt="NotLedia" height="45" />
              <p className="hidden__sm:block font-krona text-[12px] leading-[15px]">
                <span className="block">NotLedia</span>
                <b className="block text-blue-400">Notebook</b>
              </p>
            </Link>

            <div className="hidden md:block nav-menu mr-auto">
              <nav className="hidden md:flex main-nav">
                <div className="py-4 md:py-0">
                  <ul className="flex flex-col items-center md:flex-row gap-6 px-8 md:p-0 min-w-max">
                    <li>
                      <Link
                        href="/#features"
                        className="text-sm font-bold hover:opacity-70">
                        Features
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/#how-it-works"
                        className="text-sm font-bold hover:opacity-70">
                        How it works
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/#pricing"
                        className="text-sm font-bold hover:opacity-70">
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/download"
                        className="text-sm font-bold hover:opacity-70">
                        Download
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>

            <div className="actions flex-center gap-2 md:gap-4">
              <ThemeHandlerUI />
              <Link
                href={"/register"}
                className="hidden md:inline-block btn btn-danger font-bold rounded-full p-2.5 px-4"
                title="mobile nav menu">
                Sign Up
                <span className="sr-only">sign up now</span>
              </Link>
              <button
                className="md:hidden"
                title="mobile nav menu"
                onClick={() => setIsMobileNav((prev) => !prev)}>
                <HiBars3 fontSize={26} />
                <span className="sr-only">mobile nav menu</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {isMobileNav && (
        <>
          <ModalOverlay
            onClick={() => setIsMobileNav(false)}
            className="z-50"
          />
          <nav className="mobile-nav flex flex-col fixed top-0 bottom-0 right-0 bg-light-d text-dark w-4/5 max-w-xs overflow-hidden transition-all z-50">
            <div className="grid place-items-end px-4">
              <button
                className="text-xl p-2 text-danger hover:opacity-50 nav-menu__btn-close"
                onClick={() => setIsMobileNav(false)}>
                <BiX fontSize={26} />
              </button>
            </div>

            <div className="py-8 md:py-0 h-full flex flex-col justify-between">
              <ul
                className="flex flex-col md:flex-row gap-6 px-8 md:p-0 min-w-max"
                onClick={() => setIsMobileNav(false)}>
                <li>
                  <Link
                    href="/#features"
                    className="font-bold hover:opacity-70">
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#how-it-works"
                    className="font-bold hover:opacity-70">
                    How it works
                  </Link>
                </li>
                <li>
                  <Link href="/#pricing" className="font-bold hover:opacity-70">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/download" className="font-bold hover:opacity-70">
                    Download
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="font-bold hover:opacity-70">
                    Top FAQ
                  </Link>
                </li>
                <li className="border-b border-b-muted/20"></li>
                <li>
                  <Link
                    href="/register"
                    className="btn btn-danger text-light-main rounded-full p-3 w-full font-bold hover:opacity-70">
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link
                    href="/login"
                    className="btn btn-primary text-light-main rounded-full p-3 w-full font-bold hover:opacity-70">
                    Log In
                  </Link>
                </li>
              </ul>
              <div
                onClick={handleThemeClick}
                className="mt-auto px-4 flex-center gap-4 border border-muted/20 shadow-md p-2 rounded-full mx-4 bg-light">
                <b>Theme</b>
                <ThemeHandlerUI menuPosition={"top"} />
              </div>
              <p className="text-center text-muted mt-8 font-mono">
                NotLedia <br /> Copyright &copy; 2024
              </p>
            </div>
          </nav>
        </>
      )}
    </>
  );
}
