import { useContextProvider } from "../../providers/context-provider";

// Helpers
import ConfirmModal from "./ui/confirm-modal";
import ModalWrapper from "./ui/modal-wrapper";
import AlertModal from "./ui/alert-modal";
import ModalWrapperCustom from "./ui/modal-wrapper-custom";
import ModalWrapperProcess from "./ui/modal-wrapper-process";

const Empty = () => <>please provide {"content"} here</>;

const ModalHandler = () => {
  const { modal, setModal } = useContextProvider();

  document.body.style.overflow = modal ? "hidden" : "unset";
  if (!modal) return null;

  const { content = Empty, type, ...others } = modal;

  // close modal
  const closeModal = () => {
    if (type != "process") setModal(null);
  };

  // process or custom modal logic
  if (type == "process" || type == "custom")
    return (
      <ModalWrapperCustom
        {...others}
        closeModal={type == "custom" ? closeModal : () => {}}>
        {type == "custom" ? content : ModalWrapperProcess}
      </ModalWrapperCustom>
    );

  const modalBody =
    type == "alert" ? AlertModal : type == "confirm" ? ConfirmModal : content;

  return (
    <ModalWrapper {...others} closeModal={closeModal}>
      {modalBody}
    </ModalWrapper>
  );
};

export default ModalHandler;
/**
  type == "alert" &&  AlertModal 
  type == "dialog" &&  ConfirmModal 
  type &&  ModalContent 
*/
