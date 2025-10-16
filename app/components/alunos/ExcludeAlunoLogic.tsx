import { alunosService } from "@/app/lib/alunos-service";
import { Dispatch, SetStateAction } from "react";

export default function ExcludeAlunoLogic({
  showModal,
  setShowModal,
}: {
  showModal: {
    open: boolean;
    id: string;
  };
  setShowModal: Dispatch<
    SetStateAction<{
      open: boolean;
      id: string;
    }>
  >;
}) {
  return (
    <button
      className="bg-red-400 text-white rounded-md px-7 py-2"
      onClick={async () => {
        const deleteAluno = await alunosService.excluir(showModal.id);

        console.log(deleteAluno);

        setShowModal({
          id: showModal.id,
          open: false,
        });
      }}
    >
      Sim
    </button>
  );
}
