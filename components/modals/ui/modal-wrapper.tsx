import { FiX } from "react-icons/fi";
import ModalOverlay from "./modal-overlay";

// type Props = ModalPropsMain & {
//   children: (props: ModalChildrenTypes) => JSX.Element;
//   closeModal: () => void;
// };

// type Props = ModalOptionTypes & {
//   closeModal: () => void;
// };

const ModalWrapper = ({
  closeModal,
  overlay = true,
  label,
  className = "",
  children: ModalBody,
  options,
  closeBtn = true,
  onCloseModal,
}: ModalProps) => {
  // console.log("OVERLAY ", overlay);
  const handleClick = () => {
    if (onCloseModal) return onCloseModal?.();
    else return closeModal?.();
  };
  return (
    <div className="fixed z-[1000] inset-0 top-0 left-0">
      {/* Overlay */}
      <ModalOverlay onClick={overlay ? handleClick : () => {}} />

      {/* Modal Body */}
      <div
        className="flex-center h-full p-2 md:p-4"
        aria-modal="true"
        tabIndex={1}>
        <main
          data-modal="preference"
          className={`ring-1_ bg-dark text-light relative rounded-2xl md:w-auto px-4 py-6 md:px-6 md:py-9 flex flex-col  self-center md:self-center_ border border-muted/30 ${className}`}>
          {label && (
            <div className="mb-2 text-lg font-medium tracking-tight">
              {label}
            </div>
          )}
          <section className="h-full max-h-[80vh] overflow-auto no-scrollbar">
            {<ModalBody {...options} closeModal={handleClick} />}
          </section>
          <div className="modal-actions">
            {closeBtn && (
              <button
                className="pin-0 absolute right-2 top-1 z-10 flex px-1 py-1 items-center justify-center text-light transition-colors duration-300 hover:text-danger"
                onClick={handleClick}>
                <FiX fontSize={22} />
              </button>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ModalWrapper;
