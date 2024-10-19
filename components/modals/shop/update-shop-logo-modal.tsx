// import { useParams } from "react-router-dom";
import { BiInfoCircle, BiTrash } from "react-icons/bi";
import { useState } from "react";
import FileFormHandler, { FileProps } from "../../forms/file-form-handler";
import { FileSizes } from "../../../constants/app-context";
import { useMutationUpdateShop } from "../../../api/services/shop-service";
import toast from "react-hot-toast";
import ButtonLoader from "../../buttons";

interface Props extends ModalOptionTypes {
  data: {
    shop_id: number;
  };
}
const UpdateShopLogoModal = (props: ModalOptionTypes) => {
  const { data } = props as Props;
  const mutation = useMutationUpdateShop(data.shop_id);

  const [image, setImage] = useState<FileProps | null>(null);

  const deleteImage = () => {
    setImage(null);
  };

  const handleSubmit = () => {
    const payload = new FormData();

    payload.append("mode", "logo");
    payload.append(`logo`, image as FileProps);

    mutation.mutate(payload, {
      onError: () => toast.error("Could not update shop logo. Try again later"),
      onSuccess: () => {
        props.onComplete?.();
        props.closeModal?.();
        toast.success("logo updated successfully");
      },
    });
  };

  return (
    <div className="w-[calc(100vw-60px)] max-w-xl">
      <div className="mb-4">
        <h4>Change Logo</h4>
        <p className="mt-1 text-sm">Upload new shop profile logo</p>
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
                  your profile image: Max size is 5MB (important)
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
          label="Update Logo"
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
      <div className="w-32 h-32 md:w-48 md:h-48 mx-auto border my-2 shadow-md transition-all rounded-full overflow-auto relative">
        <img
          src={loadFileBlob(image)}
          alt="Profile photo"
          className="img-cover"
        />
      </div>
    </div>
  );
};
export default UpdateShopLogoModal;
