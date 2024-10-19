"use client";

import { useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FiLoader } from "react-icons/fi";
import FormControlFormik, {
  FormFieldTypes,
} from "@/components/inputs/form-control-formik";
// import { useContextProvider } from "@/store/context-provider";
import { ScreenWrapper } from "@/components/wrappers/screen-wrapper";
import { AppLogo } from "@/public";
import Image from "next/image";
import Link from "next/link";

export const signUpFields: FormFieldTypes[] = [
  {
    label: "Full name",
    id: "full_name",
    name: "full_name",
    type: "text",
    autoComplete: "full_name",
    required: true,
    placeholder: "Enter full name",
  },
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
    label: "Mobile Number",
    id: "phone",
    name: "phone",
    type: "tel",
    autoComplete: "phone",
    required: true,
    placeholder: "phone",
  },
  {
    label: "Your Password",
    id: "password",
    name: "password",
    type: "password",
    autoComplete: "password",
    required: true,
    placeholder: "Password",
  },
  // {
  //   label: "Confirm Password",
  //   id: "confirm-password",
  //   name: "confirm-password",
  //   type: "password",
  //   autoComplete: "confirm-password",
  //   required: true,
  //   placeholder: "Confirm Password",
  // },
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

  // Auto Focus
  useEffect(() => {
    document.getElementById("full_name")?.focus();
  }, []);

  // Yup Validation Schema
  const YubSchema = Yup.object({
    full_name: Yup.string()
      .required("Your full name is required!")
      .min(3, "Full name must be at least 5 letters")
      .max(30, "Full name is too long"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email address is required!"),
    phone: Yup.string().required("Phone number is required address"),
    password: Yup.string()
      .required("Your Password is required!")
      .min(4, "Password is too short, Try somethings else!")
      .max(30, "Password is too long, Try somethings else!"),
    // "confirm-password": Yup.string().required("Confirm Password is required!"),
  });
  return (
    <ScreenWrapper className="bg-light text-dark min-h-screen">
      <Image
        src={AppLogo}
        alt="shopit logo"
        className="block max-w-[190px] mx-auto mb-10"
      />
      {/* Panel Info */}
      <div className="mx-auto max-w-xl p-6 text-center shadow-md rounded-md mb-8">
        <h3 className="relative z-10 text-xl">Create Account</h3>
        <p className="mt-1">Register and start NotLedia&apos;s journey</p>
      </div>
      {/* CODE(Form): */}
      <div className="mx-auto max-w-xl">
        {/* <RegisterForm /> */}
        <Formik
          initialValues={{
            full_name: "",
            email: "",
            phone: "",
            password: "",
          }}
          validationSchema={YubSchema}
          onSubmit={handleSubmit}>
          {({ isSubmitting }) => {
            return (
              <div className="w-full">
                {/* // Creating Form Inputs */}
                <Form>
                  <div className="space-y-4">
                    {signUpFields.map((field, index) => (
                      <FormControlFormik
                        key={index}
                        {...field}
                        className="bg-muted/10 p-3 border border-muted/30"
                      />
                    ))}
                  </div>

                  {/* <FormControl /> */}
                  {/* Actions */}
                  {isSubmitting && (
                    <div className="flex items-center  justify-center text-danger mt-4">
                      <FiLoader className="text-3xl animate-spin" />
                    </div>
                  )}
                  {!isSubmitting && (
                    <div className="control mt-10 text-center">
                      <button
                        className="btn flex-center btn-primary mx-auto w-full p-4 rounded-full text-light-main font-bold"
                        type="submit">
                        <span className="inline-block flex-shrink-0 text-wrap">
                          Create Account
                        </span>
                      </button>
                    </div>
                  )}
                  <div
                    className={`text-center mt-4 space-y-3 text-sm ${
                      isSubmitting ? "opacity-50 pointer-events-none" : ""
                    }`}>
                    <p>
                      Already Have an Account?{" "}
                      <Link
                        href="/login"
                        className="text-primary inline-block hover:opacity-80 font-bold underline underline-offset-4">
                        Login
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
