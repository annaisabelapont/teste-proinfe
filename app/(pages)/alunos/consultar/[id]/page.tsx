"use server";

import { alunosService } from "@/app/lib/alunos-service";
import ConsultaInfo from "./ConsultaInfo";
import Link from "next/link";
import ArrowIcon from "@/app/components/icons/Arrow";

export default async function ConsultarPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const aluno = await alunosService.consultar(id);

  return (
    <>
      {aluno !== null && (
        <>
          <div className="grid grid-cols-2 gap-5">
            <div className="grid grid-cols-3 col-span-2 bg-white p-5 rounded-lg gap-5 ">
              <div>
                <ConsultaInfo title="CPF:" info={String(aluno.cpf)} />
              </div>

              <div className="grid grid-cols-2">
                <ConsultaInfo
                  title="Data de Nascimento:"
                  info={String(aluno.dataNascimento)}
                />
              </div>

              <div className="grid grid-cols-2">
                <ConsultaInfo title="Sexo:" info={String(aluno.sexo)} />
              </div>

              <div className="grid grid-cols-2">
                <ConsultaInfo title="Nom:" info={String(aluno.nome)} />
              </div>

              <div className="grid grid-cols-2">
                <ConsultaInfo
                  title="Naturalidade:"
                  info={String(aluno.naturalidade)}
                />
              </div>
            </div>

            <div className="grid grid-cols-3 col-span-2 bg-white p-5 rounded-lg gap-5 ">
              <ConsultaInfo title="Rua:" info={String(aluno.endereco.rua)} />
              <ConsultaInfo
                title="Número:"
                info={String(aluno.endereco.numero)}
              />
              <ConsultaInfo
                title="Bairro:"
                info={String(aluno.endereco.bairro)}
              />
              <ConsultaInfo title="CEP:" info={String(aluno.endereco.cep)} />
              <ConsultaInfo
                title="Município:"
                info={String(aluno.endereco.municipio)}
              />
              <ConsultaInfo
                title="Estado:"
                info={String(aluno.endereco.estado)}
              />
            </div>

            <div className="grid grid-cols-1  bg-white p-5 rounded-lg gap-5 ">
              <ConsultaInfo
                title="E-mail:"
                info={aluno.contatos[0].email}
              />              
            </div>
            <div className="grid grid-cols-1  bg-white p-5 rounded-lg gap-5 ">
              <ConsultaInfo
                title="E-mail:"
                info={aluno.contatos[0].numero}
              />              
            </div>
          </div>

          <Link
            href="../"
            className="flex p-2.5 w-max border-2 border-blue gap-2 text-blue rounded-md shadow-lg bg-white mt-5 px-7"
          >
            <ArrowIcon />
            Voltar
          </Link>
        </>
      )}

      {aluno === null && "não foi possível carregar as informações deste aluno"}
    </>
  );
}
