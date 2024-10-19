"use client";

import { ScreenWrapper } from "@/components/wrappers/screen-wrapper";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="relative flex flex-col justify-around min-h-screen items-center sm:pt-0">
      <ScreenWrapper ngClass="flex-center flex-col gap-4">
        <div>
          {/* <Image
              src={EmptyCardImage}
              alt="item not fount"
              className="max-w-48"
            /> */}
        </div>
        <div className="flex items-center pt-8  sm:pt-0">
          <div className="px-4 text-lg text-muted border-r border-muted tracking-wider">
            404
          </div>

          <div className="ml-4 text-lg text-muted tracking-wider">
            Not Found
          </div>
        </div>
        <p className="max-w-sm text-center">
          Looks like the page you are trying to access is not yet available.
          Updates will be published soon
        </p>
        <div className="flex-center flex-col gap-4">
          <button
            className="btn btn-dark text-light rounded-full text-sm py-3 px-5"
            onClick={() => router.back()}>
            Go Back
          </button>
          <Link className="text-center block text-primary mx-auto" href={"/"}>
            Continue Browsing
          </Link>
        </div>
      </ScreenWrapper>
      <div className="border-2 p-10 rounded-full invisible"></div>
    </div>
  );
}

export const NotFoundMin = () => {
  const router = useRouter();

  return (
    <div className="relative flex flex-col justify-around min-h-screen items-center sm:pt-0">
      <div className="flex flex-col items-center gap-5">
        {/* <div>
          <img src={EmptyCardImage} alt="item not fount" className="max-w-48" />
        </div> */}
        <div className="flex items-center pt-8  sm:pt-0">
          <div className="px-4 text-lg text-muted border-r border-muted tracking-wider">
            404
          </div>

          <div className="ml-4 text-lg text-muted uppercase tracking-wider">
            Not Found
          </div>
        </div>
        <p className="max-w-sm text-center">
          Looks like the page you are trying to access is not available. Proceed
          with
        </p>
        <div className="flex-center flex-col gap-4">
          <button
            className="btn btn-dark text-light rounded-full text-sm py-3 px-5"
            onClick={() => router.back()}>
            Go Back
          </button>
        </div>
      </div>
      <div className="border-2 p-10 rounded-full invisible"></div>
    </div>
  );
};
