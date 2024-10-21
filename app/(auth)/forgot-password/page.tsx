"use client";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormControlFormik from "@/components/inputs/form-control-formik";
import { ScreenWrapper } from "@/components/wrappers/screen-wrapper";
import { AppLogo } from "@/public";
import Image from "next/image";
import Link from "next/link";
import ButtonLoader from "@/components/buttons";

export default function ForgotPassword() {
  // const { setUser, setToken } = useContextProvider();
  // const router = useRouter();

  const handleSubmit = async () => {
    // const { error, data } = await register(values);
    // if (error) return setErrors(error.errors);
    // setUser({ ...data.user });
    // setToken(data.token);
    // navigate("/dashboard");
    alert("Forms not ready...");
  };

  // Yup Validation Schema
  const YubSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email address is required!"),
  });
  return (
    <ScreenWrapper className="bg-light text-dark min-h-screen flex-center">
      <div className="mx-auto max-w-md">
        {/* Panel Info */}
        <div className="my-8 text-center">
          <div className="flex-center items-center gap-4 mb-4">
            <Image
              src={AppLogo}
              alt="shopit logo"
              className="block h-[50px] w-auto"
            />
            <h3 className="relative z-10 text-xl">NotLedia</h3>
          </div>
          <h3 className="relative z-10 text-xl">Forgot Account Password</h3>
          <p className="mt-1">No worries. Enter your email below to reset</p>
        </div>

        {/* Formik Form */}
        <Formik
          initialValues={{
            email: "",
          }}
          validationSchema={YubSchema}
          onSubmit={handleSubmit}>
          {({ isSubmitting }) => {
            return (
              <div className="w-full">
                {/* // Creating Form Inputs */}
                <Form>
                  <div className="space-y-4 mb-8">
                    <FormControlFormik
                      label="Email address"
                      id="email_address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required={true}
                      placeholder="Enter your email address"
                    />
                  </div>

                  {/* Actions */}
                  <ButtonLoader
                    label="Reset Password"
                    isLoading={isSubmitting}
                    type="submit"
                  />

                  <div
                    className={`text-center mt-4 space-y-3 text-sm ${
                      isSubmitting ? "opacity-30 pointer-events-none" : ""
                    }`}>
                    <Link
                      href="/register"
                      className="text-primary inline-block hover:opacity-80 font-bold">
                      Sign up Instead
                    </Link>
                  </div>
                </Form>
              </div>
            );
          }}
        </Formik>
      </div>
    </ScreenWrapper>
  );
}
