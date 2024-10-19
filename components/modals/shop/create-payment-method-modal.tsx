// import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import ButtonLoader from "../../buttons";
import FormControlMin from "../../inputs/form-control-min";
import { FormEvent } from "react";
import { useMutationCreatePaymentMethod } from "../../../api/services/payment-service";
import { AxiosError } from "axios";

interface Props extends ModalOptionTypes {
  data?: PaymentMethod;
}

export default function CreatePaymentMethodModal(props: ModalOptionTypes) {
  const { data: method } = props as Props;
  const mutation = useMutationCreatePaymentMethod(method?.method_uid || "");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload = new FormData(e.currentTarget);

    const form = e.currentTarget.elements as typeof e.currentTarget.elements & {
      [key: string]: { value: string };
    };

    payload.append(
      "method_value",
      form.country_code.value + "," + form.phone_number.value
    );

    mutation.mutate(payload, {
      onError: (err) => {
        const error = err as AxiosError;
        if (error.response!.status == 422) {
          const data = error.response?.data as object & { message: string };
          toast.error(data.message);
        } else {
          toast.error("Something went wrong.");
        }
      },
      onSuccess: () => {
        props.onComplete?.();
        props.closeModal?.();
        toast.success("Created successfully");
      },
    });
  };

  return (
    <>
      <div className="w-[calc(100vw-60px)] max-w-xl">
        <div className="mb-4">
          <h4>Payment method</h4>
          <p className="text-sm">
            {method?.name ? "Update" : "Create"} payment method
          </p>
        </div>
        <div className="shadow-lg mb-2">
          <form
            className="input-group form__dark-input  text-light space-y-2"
            onSubmit={handleSubmit}>
            <FormControlMin
              autoComplete="off"
              required
              disabled={!!method?.name}
              label={"Method name"}
              name="name"
              value={method?.name || ""}
              type="select"
              optionsList={["MTN Mobile Money", "Orange Money", ""]}
              className={`${
                method?.name
                  ? "bg-dark-l text-light pointer-events-none opacity-50"
                  : "bg-dark text-light"
              } `}
              placeholder="Select local payment methods"
            />

            <FormControlMin
              autoComplete="off"
              required
              label={"Method type"}
              name="type"
              value={method?.type || ""}
              type="select"
              className="bg-dark text-light"
              optionsList={["Local", "Online"]}
              placeholder="Enter method type"
            />

            <FormControlMin
              autoComplete="off"
              required
              label={"Description"}
              name="description"
              value={method?.description || ""}
              type="textarea"
              placeholder="Give detailed about this payment method"
            />

            <FormControlMin
              autoComplete="off"
              required
              label={"Method label"}
              name="method_key"
              value={method?.method_key || ""}
              className="bg-dark text-light"
              optionsList={["phone_number"]}
              type="select"
              placeholder="Select label"
            />

            <div className="flex gap-2">
              <div className="max-w-24">
                <FormControlMin
                  autoComplete="off"
                  required
                  label={"Code"}
                  name="country_code"
                  // value={method?.method_value || ""}
                  value={
                    method?.method_value
                      ? method?.method_value.split(",")[0]
                      : ""
                  }
                  className="bg-dark text-light"
                  optionsList={["", "+237", ""]}
                  type="select"
                  placeholder="+ 00"
                />
              </div>

              <FormControlMin
                autoComplete="off"
                required
                label={"Mobile Money number"}
                name="phone_number"
                // name="method_value"
                value={
                  method?.method_value
                    ? method?.method_value.split(",").pop()
                    : ""
                }
                type="tel"
                placeholder="670000000"
              />
            </div>

            {/* <FormControlMin
              autoComplete="off"
              required
              label={"Create unique method code"}
              name="code"
              value={method?.code || ""}
              placeholder="Example MTN_MOMO | ORANGE_MONEY"
            /> */}

            <div className="pt-5">
              <ButtonLoader
                type="submit"
                label="Save Changes"
                isLoading={mutation.isPending}
                className="!bg-dark-l"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
