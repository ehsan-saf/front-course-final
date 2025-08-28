import { Modal } from "@/components";

interface Props {
  onClose: () => void;
}

export function RegisterModal({ onClose }: Props) {
  return (
    <Modal title="register" onClose={onClose}>
      <form></form>
    </Modal>
  );
}
