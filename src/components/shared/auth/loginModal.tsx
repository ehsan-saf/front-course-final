import { Modal } from "@/components";
import { useModal } from "@/store";

export function LoginModal() {
  const { openModal, closeModal } = useModal();

  return (
    <Modal title="Login" onClose={closeModal}>
      <form></form>
      <span>Don&apos;t have an account? </span>
      <button
        onClick={() => openModal("register")}
        className="cursor-pointer hover:text-blue-700"
      >
        Sign up
      </button>
    </Modal>
  );
}
