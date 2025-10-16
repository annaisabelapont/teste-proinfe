"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

const ModalContext = createContext<{
  showModal: { open: boolean; id: string };
  setShowModal: Dispatch<SetStateAction<{ open: boolean; id: string }>>;
} | null>(null);

export default function ExcludeModalContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showModal, setShowModal] = useState({ open: false, id: "" });

  return (
    <ModalContext.Provider value={{ showModal, setShowModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export const useExcludeModalContext = () => useContext(ModalContext)!;
