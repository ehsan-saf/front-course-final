import {
  useState,
  createContext,
  ReactNode,
  useContext,
  useEffect,
} from "react";

interface Props {
  children: ReactNode;
}

type ModalType = "login" | "register" | null;

interface ModalContextType {
  currentModal: ModalType;
  openModal: (openModal: ModalType) => void;
  closeModal: () => void;
}

export const ModalContext = createContext<ModalContextType>({
  currentModal: null,
  openModal: () => {},
  closeModal: () => {},
});

export const useModal = () => useContext(ModalContext);

export function ModalContextProvider({ children }: Props) {
  const [showModal, setShowModal] = useState<ModalType>(null);

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash.includes("-modal")) {
      const modalName = hash.split("-")[0] as ModalType;
      setShowModal(modalName);
    }
  }, []);

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
