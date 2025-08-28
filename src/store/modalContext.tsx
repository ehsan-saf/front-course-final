import { useState, createContext, ReactNode, useContext } from "react";

interface Props {
  children: ReactNode;
}

type ModalType = "login" | "register" | null;

interface ContextProps {
  currentModal: ModalType;
  openModal: (openModal: ModalType) => void;
  closeModal: () => void;
}

export const ModalContext = createContext<ContextProps>({
  currentModal: null,
  openModal: () => {},
  closeModal: () => {},
});

export const useModal = () => useContext(ModalContext);

export function ModalContextProvider({ children }: Props) {
  const [showModal, setShowModal] = useState<ModalType>(null);

  const openModal = (modalName: ModalType) => {
    setShowModal(modalName);
  };

  const closeModal = () => {
    setShowModal(null);
  };

  return (
    <ModalContext.Provider
      value={{ currentModal: showModal, openModal, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  );
}
