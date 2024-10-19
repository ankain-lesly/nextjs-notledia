interface Props {
  onClick: () => void;
  className?: string;
}

const ModalOverlay = ({ onClick, className }: Props) => {
  return (
    <div
      data-label="modal-overlay"
      className={`fixed inset-0 bg-black/80 ${className}`}
      onClick={onClick}></div>
  );
};

export default ModalOverlay;
