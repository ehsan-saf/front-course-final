import { useEffect } from "react";

interface Props {
  onClick: () => void;
  isOverflowHidden?: boolean;
}

export function useOverlay({ onClick, isOverflowHidden = false }: Props) {
  useEffect(() => {
    const clickHandler = () => onClick();

    document.addEventListener("click", clickHandler);

    if (isOverflowHidden) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    return () => {
      document.removeEventListener("click", clickHandler);
      document.body.style.overflowY = "auto";
    };
  }, [onClick, isOverflowHidden]);
}
