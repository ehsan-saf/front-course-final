import { Modal } from "@/components";
import { useModal } from "@/store";

export function RegisterModal() {
  const { closeModal } = useModal();

  return (
    <Modal title="register" onClose={closeModal}>
      <form></form>
    </Modal>
  );
}
