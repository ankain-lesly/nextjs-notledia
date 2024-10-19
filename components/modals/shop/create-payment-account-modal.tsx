// import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import ButtonLoader from "../../buttons";
import FormControlMin from "../../inputs/form-control-min";
import { FormEvent, useState } from "react";
import {
  useGetPaymentMethods,
  useMutationCreatePaymentAccount,
} from "../../../api/services/payment-service";
import { AxiosError } from "axios";
import ModalContentWrapper from "../ui/modal-content-wrapper";
import { ErrorState, LoadingState } from "../../loaders/api-loaders";
import { OptionTypes } from "../../inputs/input";

interface Props extends ModalOptionTypes {
  data?: PaymentAccount;
}

const mapInputOptions = (methods: PaymentMethod[]) => {
  const options = methods.map((method) => ({
    value: method.method_uid,
    label: method.name,
  }));

  return options;
};
export default function CreatePaymentAccountModal(props: ModalOptionTypes) {
  const { data: account } = props as Props;
  const { data, isLoading, refetch, error } = useGetPaymentMethods();
  const [methodId, setMethodId] = useState("");
  const mutation = useMutationCreatePaymentAccount(methodId);

  const options = mapInputOptions((data?.data || []) as PaymentMethod[]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload = new FormData(e.currentTarget);

    const form = e.currentTarget.elements as typeof e.currentTarget.elements & {
      [key: string]: { value: string };
    };

    payload.append(
      "account_value",
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

  if (isLoading)
    return (
      <ModalContentWrapper>
        <LoadingState text={false} />
      </ModalContentWrapper>
    );
  if (error)
    return (
      <ModalContentWrapper>
        <ErrorState onRetry={refetch} />
      </ModalContentWrapper>
    );

  return (
    <ModalContentWrapper>
      <div className="mb-4">
        <h4>Payment account</h4>
        <p className="text-sm">
          {account?.description ? "Update" : "Create"} payment account
        </p>
      </div>
      <div className="shadow-lg mb-2">
        <form
          className="input-group form__dark-input  text-light space-y-2"
          onSubmit={handleSubmit}>
          <FormControlMin
            autoComplete="off"
            required
            label={"Account name"}
            name="name"
            value={account?.name || ""}
            placeholder="Enter your account name"
          />

          <FormControlMin
            autoComplete="off"
            required
            disabled={!!account?.method_uid}
            label={"Payment Method"}
            name="method_uid"
            onChange={(e) => setMethodId(e.target.value)}
            // value={""}
            type="select"
            // optionsList={["MTN Mobile Money", "Orange Money", ""]}
            options={options as OptionTypes}
            className={`${
              account?.name
                ? "bg-dark-l text-light pointer-events-none opacity-50"
                : "bg-dark text-light"
            } `}
            placeholder="Select payment method"
          />

          <FormControlMin
            autoComplete="off"
            required
            label={"Description"}
            name="description"
            value={account?.description || ""}
            type="textarea"
            placeholder="Give detailed about this payment account"
          />

          <FormControlMin
            autoComplete="off"
            required
            label={"Method label"}
            name="account_key"
            value={account?.account_key || ""}
            className="bg-dark text-light"
            optionsList={["phone_number"]}
            type="select"
            placeholder="Select payment label"
          />

          <div className="flex gap-2">
            <div className="max-w-24">
              <FormControlMin
                autoComplete="off"
                required
                label={"Code"}
                name="country_code"
                // value={account?.account_value || ""}
                value={
                  account?.account_value
                    ? account?.account_value.split(",")[0]
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
              // name="account_value"
              value={
                account?.account_value
                  ? account?.account_value.split(",").pop()
                  : ""
              }
              type="tel"
              placeholder="670000000"
            />
          </div>

          {/* <FormControlMin
              autoComplete="off"
              required
              label={"Create unique account code"}
              name="code"
              value={account?.code || ""}
              placeholder="Example MTN_MOMO | ORANGE_MONEY"
            /> */}

          <div className="flex max-w-xs_ py-2 justify-start gap-4">
            {/* <BiInfoCircle className="shrink-0" /> */}
            <input type="checkbox" name="concent" required id="concent" />
            <p className="text-muted text-sm">
              I have verified that all the account details are valid an I can
              only be update after a period of one (1) month.
            </p>
          </div>

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
    </ModalContentWrapper>
  );
}
