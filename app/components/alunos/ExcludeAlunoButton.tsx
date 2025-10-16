"use client";

import TrashIcon from "../icons/Trash";
import { useExcludeModalContext } from "./ExcludeModalContext";

export default function ExcludeButton({ id }: { id: string | null }) {
  const context = useExcludeModalContext();

  return (
    <button
      onClick={() => {
        context.setShowModal({ open: true, id: id ?? "" });
      }}
    >
      <TrashIcon />
    </button>
  );
}
