"use client";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormControlFormik, {
  FormFieldTypes,
} from "@/components/inputs/form-control-formik";
import { ScreenWrapper } from "@/components/wrappers/screen-wrapper";
import { AppLogo } from "@/public";
import Image from "next/image";
import Link from "next/link";
import ButtonLoader from "@/components/buttons";

const loginFields: FormFieldTypes[] = [
  {
    label: "Email address",
    id: "email_address",
    name: "email",
    type: "email",
    autoComplete: "email",
    required: true,
    placeholder: "Email address",
  },
  {
    label: "Password",
    id: "password",
    name: "password",
    type: "password",
    autoComplete: "current-password",
    required: true,
    placeholder: "Password",
  },
];

export default function Register() {
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
    password: Yup.string()
      .required("Your Password is required!")
      .min(4, "Password is too short, Try somethings else!")
      .max(30, "Password is too long, Try somethings else!"),
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
          <h3 className="relative z-10 text-xl">Log in to your Account</h3>
          <p className="mt-1">Welcome Back! Login to continue</p>
        </div>

        {/* Formik Form */}
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={YubSchema}
          onSubmit={handleSubmit}>
          {({ isSubmitting }) => {
            return (
              <div className="w-full">
                {/* // Creating Form Inputs */}
                <Form>
                  <div className="space-y-4 mb-8">
                    {loginFields.map((field, index) => (
                      <FormControlFormik key={index} {...field} />
                    ))}
                  </div>

                  {/* Actions */}
                  <ButtonLoader
                    label="Log In"
                    isLoading={isSubmitting}
                    type="submit"
                  />

                  <div
                    className={`text-center mt-4 space-y-3 text-sm ${
                      isSubmitting ? "opacity-30 pointer-events-none" : ""
                    }`}>
                    <p>
                      Don&apos;t have account?{" "}
                      <Link
                        href="/register"
                        className="text-primary inline-block hover:opacity-80 font-bold">
                        Create Account
                      </Link>
                    </p>

                    <p>
                      Forgot Password?{" "}
                      <Link
                        href={`/forgot-password`}
                        className="text-primary inline-block hover:opacity-80 font-bold">
                        Reset Password
                      </Link>
                    </p>
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
