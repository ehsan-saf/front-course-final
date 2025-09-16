import { IconBox } from "../iconBox";
import { Portal } from "@/components";

interface ModalProps {
  title?: string;
  onClose: () => void;
  children: React.ReactNode;
}

export function Modal({ title, onClose, children }: ModalProps) {
  const content = (
    <div
      className="fixed inset-0 z-50 flex max-w-[100vw] min-w-[50vw] items-center justify-center"
      role="dialog"
      aria-modal="true"
    >
      {/* Dark backdrop */}
      <div className="fixed inset-0 bg-black opacity-[50%]" onClick={onClose} />

      {/* Modal content */}
      <div className="relative mx-4 w-full max-w-[600px] rounded-lg bg-white">
        {/* Header with title and close button */}
        <div className="flex items-center justify-between border-b p-4">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close modal"
          >
            <IconBox icon="x" size={{ mobile: 20, nonMobile: 24 }} />
          </button>
        </div>

        {/* Gray content area */}
        <div className="rounded-lg bg-gray-100 p-4">{children}</div>
      </div>
    </div>
  );
  return <Portal>{content}</Portal>;
}
