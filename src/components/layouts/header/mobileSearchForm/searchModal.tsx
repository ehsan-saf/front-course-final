import { IconBox } from "@/components/shared";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

export function SearchModal({ onClose, children }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex" role="dialog" aria-modal="true">
      {/* Dark backdrop */}
      <div className="fixed inset-0 bg-black opacity-[50%]" onClick={onClose} />

      {/* Modal content */}
      <div className="relative w-full rounded-lg bg-white">
        {/* Header with title and close button */}
        <div className="flex items-center justify-between p-2">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close modal"
          >
            <IconBox icon="x" size={{ mobile: 24, nonMobile: 24 }} />
          </button>
        </div>

        {/* Gray content area */}
        <div className="p-1">{children}</div>
      </div>
    </div>
  );
}
