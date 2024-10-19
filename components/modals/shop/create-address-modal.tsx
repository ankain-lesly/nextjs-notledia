// import { useParams } from "react-router-dom";
import { FiLoader } from "react-icons/fi";
import FormControlMin from "../../inputs/form-control-min";
import { FormEvent } from "react";
import { useMutationCreateAddress } from "../../../api/services/profile-service";
import toast from "react-hot-toast";

type Props = ModalOptionTypes & {
  data?: AddressProps & { shop_id?: number };
  others?: { shop_id?: number };
};
const CreateAddressForm = (props: ModalOptionTypes) => {
  const { data, others, onComplete, closeModal } = props as Props;
  // const [state, setState] = useState<API_STATES>("IDLE");
  const addId = data?.id || "";
  const mutation = useMutationCreateAddress(addId as string);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget.elements as typeof e.currentTarget.elements & {
      [key: string]: { value: string };
    };

    const payload = {
      country: form.country.value.trim(),
      city: form.city.value.trim(),
      street1: form.street1.value.trim(),
      street2: form.street2.value.trim(),
      zip: form.zip.value.trim(),
      shop_id: others?.shop_id,
    };
    // API
    mutation.mutate(payload, {
      onError: () => toast.error("Network error: Try again later"),
      onSuccess: (res) => {
        toast.success(
          data ? "Address updated successfully" : "Address added successfully"
        );
        onComplete?.(res);
        closeModal?.();
      },
    });
  };

  return (
    <div className="w-[calc(100vw-60px)] max-w-xl">
      <div className="mb-4">
        {others?.shop_id ? <h5 className="text-muted">Shop</h5> : null}
        <h4> {data ? <span>Update</span> : <span>Create</span>} address</h4>
      </div>
      <div className="shadow-lg mb-2">
        <form
          className="input-group form__dark-input  text-light space-y-2"
          onSubmit={handleSubmit}>
          <FormControlMin
            required
            label={"Country"}
            value={data?.country || ""}
            name="country"
          />
          <FormControlMin
            required
            label={"City/Town"}
            value={data?.city || ""}
            name="city"
          />
          <FormControlMin
            required
            label={"Street One"}
            value={data?.street1 || ""}
            name="street1"
          />
          <FormControlMin
            label={"Street Two"}
            value={data?.street2 || ""}
            name="street2"
          />
          <FormControlMin
            required
            label={"Zip code"}
            value={data?.zip || ""}
            name="zip"
          />

          <div className="separator pt-4"></div>
          {/* Actions */}
          {mutation.isPending && (
            <div className="flex items-center  justify-center text-danger mt-4">
              <FiLoader className="text-3xl animate-spin" />
            </div>
          )}
          {/* <div
            id="errorText"
            className={`flex items-center justify-center text-danger mt-4 ${
              state == "ERROR" ? "block" : "hidden"
            }`}></div> */}

          {!mutation.isPending && (
            <div className="control text-center">
              <button
                className="btn flex-center btn-blue mx-auto w-full p-3 rounded-md text-light font-bold"
                type="submit">
                {data ? <span>Update</span> : <span>Create</span>}
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default CreateAddressForm;
