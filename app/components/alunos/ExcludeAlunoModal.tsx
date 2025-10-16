"use client";

import { useExcludeModalContext } from "./ExcludeModalContext";

export default function ExcludeAlunoModal() {
  const modalContext = useExcludeModalContext();
  return (
    <>
      {modalContext.showModal.open && (
        <div className="fixed h-screen w-screen bg-black/50 flex items-center justify-center">
          {/* modal */}
          <div className="p-6 flex flex-col items-center bg-white  rounded-lg">
            <h1 className="text-2xl font-semibold mb-10 mt-2">Deseja excluir o aluno?</h1>

            <div className="flex gap-8">
              <button
                className="bg-red-400 text-white rounded-md px-7 py-2"
                onClick={() => {
                  console.log("excluído!");
                  modalContext.setShowModal({
                    id: modalContext.showModal.id,
                    open: false,
                  });
                }}
              >
                Sim
              </button>

              <button
                className="bg-blue text-white rounded-md px-7 py-2"
                onClick={() =>
                  modalContext.setShowModal({
                    id: modalContext.showModal.id,
                    open: false,
                  })
                }
              >
                Não
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
