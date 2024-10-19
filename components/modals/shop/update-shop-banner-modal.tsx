// import { useParams } from "react-router-dom";
import { BiInfoCircle, BiTrash } from "react-icons/bi";
import { useState } from "react";
import FileFormHandler, { FileProps } from "../../forms/file-form-handler";
import { FileSizes } from "../../../constants/app-context";
import ButtonLoader from "../../buttons";
import { useMutationUpdateShop } from "../../../api/services/shop-service";
import toast from "react-hot-toast";

interface Props extends ModalOptionTypes {
  data: {
    shop_id: number;
  };
}
const UpdateShopBannerModal = (props: ModalOptionTypes) => {
  const { data } = props as Props;
  const mutation = useMutationUpdateShop(data.shop_id);
  // const uuid = data?.uuid || "";
  // console.log(data);

  const [image, setImage] = useState<FileProps | null>(null);

  const deleteImage = () => {
    setImage(null);
  };

  const handleSubmit = () => {
    const payload = new FormData();

    payload.append("mode", "banner");
    payload.append(`banner`, image as FileProps);

    mutation.mutate(payload, {
      onError: () =>
        toast.error("Could not update shop banner. Try again later"),
      onSuccess: () => {
        props.onComplete?.();
        props.closeModal?.();
        toast.success("Banner updated successfully");
      },
    });
  };

  return (
    <div className="w-[calc(100vw-60px)] max-w-xl">
      <div className="mb-4">
        <h4>Change Banner</h4>
        <p className="mt-1 text-sm">Upload new shop banner</p>
      </div>
      <div className="shadow-lg mb-2">
        {/* Images */}
        <div className="p-2 md:p-4 relative mb-3">
          {/* upload and display */}
          {!image && (
            <>
              <div className={`mb-4`}>
                <FileFormHandler
                  maxSize={FileSizes.MAX_PRODUCT_IMAGE}
                  mode="single"
                  // fileTypes={"image/*"}
                  fileTypes={[".jpeg", ".png", ".jpg", ".webp"]}
                  setFiles={(files: FileProps[]) => setImage(files[0])}
                  theme="dark"
                />
              </div>
              {/* Info */}
              <div className="flex justify-start gap-2">
                <BiInfoCircle className="mt-2 shrink-0" />
                <p className="text-muted text-xs">
                  Take note of the quantity, ratio and brand identity of the
                  your profile banner: Max size is 5MB (important)
                </p>
              </div>
            </>
          )}
          {image && (
            <div className="mb-2">
              <div className={`${image ? "flex gap-2" : ""}`}>
                <ShowImages deleteImage={deleteImage} image={image} />
              </div>
            </div>
          )}
        </div>
      </div>
      {image && (
        <ButtonLoader
          onClick={handleSubmit}
          type="button"
          label="Update Banner"
          isLoading={mutation.isPending}
        />
      )}
    </div>
  );
};

interface ViewProps {
  image: FileProps;
  deleteImage: () => void;
}
const ShowImages = ({ image, deleteImage }: ViewProps) => {
  const loadFileBlob = (file: FileProps) => {
    return URL.createObjectURL(file);
  };

  return (
    <div className="w-full max-h-48 relative border-2 rounded-xl overflow-hidden">
      <button
        type="button"
        className="absolute top-2 right-2 size-6 flex-center rounded-md bg-white text-dark border"
        onClick={deleteImage}>
        <BiTrash />
      </button>
      <img
        src={loadFileBlob(image)}
        className="img-cover"
        alt="product image"
      />
    </div>
  );
};
export default UpdateShopBannerModal;
