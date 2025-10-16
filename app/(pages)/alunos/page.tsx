"use server";

import EyeIcon from "@/app/components/icons/Eye";
import PencilIcon from "@/app/components/icons/Pencil";
import SearchIcon from "@/app/components/icons/Search";
import TrashIcon from "@/app/components/icons/Trash";
import { alunosService } from "@/app/lib/alunos-service";
import { Aluno } from "@/app/lib/types";
import Link from "next/link";

export default async function AlunosPage() {
  const listagemAlunos = await alunosService.listar();

  return (
    <>
      <div className="flex items-center justify-between border-b-2 border-gray-200 pb-7">
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold">Consultar Alunos</h1>
          <span className="opacity-60 mt-1">
            Acompanhe ou edite as informações
          </span>
        </div>

        <Link
          href="/alunos/cadastrar"
          className="bg-white shadow-lg rounded-md px-4 py-3 flex items-center justify-center h-max"
        >
          Novo +
        </Link>
      </div>

      <div className="pt-15 flex flex-col gap-5">
        <div className="flex justify-between items-center pr-5 bg-white rounded-md border-1 border-gray-200">
          <input
            className="p-2 pl-5 flex-1 focus:outline-none"
            type="text"
            placeholder="Digite o nome do aluno para pesquisar"
          />

          <SearchIcon />
        </div>

        <div className="flex flex-col border-2 border-gray-200 rounded-t-lg bg-white">
          <div className="grid grid-cols-[repeat(5,1fr)_5.375rem] p-4 px-14 w-full border-b-2 border-gray-200">
            <span>Nome</span>
            <span>CPF</span>
            <span>Contato</span>
            <span>Cidade</span>
            <span>E-mail</span>
            <span>Ações</span>
          </div>

          {listagemAlunos !== null && (
            <>
              {listagemAlunos.data.map((aluno: Aluno, index: number) => (
                <div
                  key={index}
                  className="grid grid-cols-[repeat(5,1fr)_5.375rem] p-4 px-14 w-full not-last:border-b-2 border-gray-200"
                >
                  <span>{aluno.nome ?? "-"}</span>
                  <span>{aluno.cpf ?? "-"}</span>
                  <span>{aluno.contato ? aluno.contato[0] : "-"}</span>
                  <span>{aluno.cidade ?? "-"}</span>
                  <span>{aluno.email ? aluno.email : "-"}</span>

                  <div className="flex gap-2 w-21.5">
                    <Link href={`/alunos/consultar/${aluno.id}`}>
                      <EyeIcon />
                    </Link>
                    <Link href={`/alunos/editar/${aluno.id}`}>
                      <PencilIcon />
                    </Link>

                    <button>
                      <TrashIcon />
                    </button>
                  </div>
                </div>
              ))}

              {listagemAlunos.data.length === 0 && (
                <span>Ainda não há nenhum aluno cadastrado.</span>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
