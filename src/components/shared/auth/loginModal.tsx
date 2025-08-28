import { Modal } from "@/components";
import { Dispatch, SetStateAction } from "react";

interface Props {
  setShowModal: Dispatch<SetStateAction<"login" | "register" | null>>;

  onClose: () => void;
}

export function LoginModal({ setShowModal, onClose }: Props) {
  return (
    <Modal title="Login" onClose={onClose}>
      <form></form>
      <span>Don&apos;t have an account? </span>
      <button
        onClick={() => setShowModal("register")}
        className="cursor-pointer hover:text-blue-700"
      >
        Sign up
      </button>
    </Modal>
  );
}
