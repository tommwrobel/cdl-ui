type ModalProps = {
  open: boolean;
  onClose: () => void;
}

export const Modal = ({open, onClose}: ModalProps) => {

  return (
    <dialog open={open} className="border-2 border-secondary p-6 bg-bgColor z-50 w-[90%] h-[90%] backdrop:bg-bgColor-dark/50" onClose={onClose}>
      costam napisane
    </dialog>
  );
}
