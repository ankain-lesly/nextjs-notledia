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

const registerFields: FormFieldTypes[] = [
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
          <h3 className="relative z-10 text-xl">Create an Account</h3>
          <p className="mt-1">
            Register and start your Notledia&apos;s journey
          </p>
        </div>

        {/* Formik Form */}
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
                  <div className="space-y-4 mb-8">
                    {registerFields.map((field, index) => (
                      <FormControlFormik
                        key={index}
                        {...field}
                        className="bg-muted/10 p-3 border border-muted/30"
                      />
                    ))}
                    <div className="flex gap-4 px-4">
                      <input
                        type="checkbox"
                        name="notledia-terms"
                        id="notledia-terms"
                        required
                      />
                      <label htmlFor="notledia-terms">
                        By signing up, you agree to our terms of <b>service</b>{" "}
                        and <b>privacy policy</b>.
                      </label>
                    </div>
                  </div>
                  {/* Actions */}
                  <ButtonLoader
                    label="Create Account"
                    isLoading={isSubmitting}
                    type="submit"
                  />

                  <div
                    className={`text-center mt-4 space-y-3 text-sm ${
                      isSubmitting ? "opacity-30 pointer-events-none" : ""
                    }`}>
                    <p>
                      Already have Account?{" "}
                      <Link
                        href="/login"
                        className="text-primary inline-block hover:opacity-80 font-bold">
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
