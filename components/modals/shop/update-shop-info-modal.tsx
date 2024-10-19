// import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { useMutationUpdateShop } from "../../../api/services/shop-service";
import ButtonLoader from "../../buttons";
import FormControlMin from "../../inputs/form-control-min";
import { FormEvent, useState } from "react";
import ShopSocialMedia, {
  MediaType,
  SocialMedia,
} from "../../cards/shop-social-media";
import AddSocialMediaType from "../../forms/add-social-media-type";
import ModalOverlay from "../ui/modal-overlay";

interface Props extends ModalOptionTypes {
  data: ShopProps;
}

const UpdateShopInfoModal = (props: ModalOptionTypes) => {
  const { data: shop } = props as Props;
  const mutation = useMutationUpdateShop(shop.id);
  // const [socialMedia, setSocialMedia] = useState<SocialMedia[]>([]);
  const [isMediaForm, setIsMediaForm] = useState(false);
  const [socialMedia, setSocialMedia] = useState<SocialMedia[]>(
    shop.socialMedia
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload = new FormData(e.currentTarget);
    payload.append("social_media", JSON.stringify(socialMedia));
    payload.append("mode", "info");

    mutation.mutate(payload, {
      onError: () => toast.error("Could not update details. Try again later"),
      onSuccess: () => {
        props.onComplete?.();
        props.closeModal?.();
        toast.success("Details updated successfully");
      },
    });
  };

  //
  const handleSetMedia = (media: SocialMedia) => {
    setIsMediaForm(false);
    setSocialMedia((prev) => [...prev, media]);
  };

  const handleDeleteMedia = (label: MediaType) => {
    setSocialMedia((prev) => prev.filter((a) => a.label !== label));
  };
  return (
    <>
      <div className="w-[calc(100vw-60px)] max-w-xl">
        <div className="mb-4">
          <h4>Update Shop Info</h4>
        </div>
        <div className="shadow-lg mb-2">
          <form
            className="input-group form__dark-input  text-light space-y-2"
            onSubmit={handleSubmit}>
            <FormControlMin
              required
              label={"Shop name"}
              name="name"
              className="pointer-events-none bg-muted/20"
              disabled
              value={shop.name || ""}
              placeholder="Enter your shop/brand name"
            />

            <FormControlMin
              required
              label={"About your Brand"}
              name="description"
              value={shop.description || ""}
              type="textarea"
              placeholder="Give detailed information about your shop brand and what service or products you sell."
            />

            <FormControlMin
              required
              label={"Contact email"}
              name="email"
              value={shop.email || ""}
              type="email"
              placeholder="Your shop email"
            />

            <FormControlMin
              required
              label={"Contact mobile"}
              name="phone"
              value={shop.phone || ""}
              type="tel"
              placeholder="Your shop phone number"
            />

            <FormControlMin
              required
              label={"Shop Location"}
              name="location"
              value={shop.location || ""}
              placeholder="Your shop location & address"
            />

            {/* Add Social Media */}
            <div className="relative">
              <FormControlMin
                label={
                  <p className="flex justify-between items-center">
                    <span>
                      Add{" "}
                      <span
                        className="text-primary font-bold cursor-pointer"
                        onClick={() => setIsMediaForm(true)}>
                        social media
                      </span>{" "}
                      accounts
                    </span>
                    <button
                      type="button"
                      title="add social media"
                      className="size-8 border rounded-full transition hover:bg-white hover:text-dark text-lg text-light"
                      onClick={() => setIsMediaForm(true)}>
                      +
                    </button>
                  </p>
                }
                name="__media__"
                className="hidden"
              />
              {isMediaForm && (
                <div className="absolute z-20 bottom-10 left-0 right-0">
                  <AddSocialMediaType
                    socialMedia={socialMedia}
                    handleSetMedia={handleSetMedia}
                  />
                </div>
              )}
              {!!socialMedia.length && (
                <ShopSocialMedia
                  sellerId={shop.sellerId}
                  socialMedia={socialMedia}
                  handleDeleteMedia={handleDeleteMedia}
                />
              )}
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
      </div>
      {isMediaForm && <ModalOverlay onClick={() => setIsMediaForm(false)} />}
    </>
  );
};

export default UpdateShopInfoModal;
