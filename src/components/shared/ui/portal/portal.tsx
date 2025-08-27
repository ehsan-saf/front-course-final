import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

interface Props {
  children: ReactNode;
}

export function Portal({ children }: Props) {
  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "auto";
    };
  });

  return createPortal(children, document.getElementById("portal")!);
}
