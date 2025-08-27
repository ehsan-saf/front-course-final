import { Modal } from "@/components";
import { createPortal } from "react-dom";

interface Props {
  onClose: () => void;
}

export function LoginModal({ onClose }: Props) {
  return (
    <Modal title="Login" onClose={onClose}>
      <form></form>
      <h1>Open</h1>
    </Modal>
  );
}
