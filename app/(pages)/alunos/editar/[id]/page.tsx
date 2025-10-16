"use server";

import Form from "@/app/components/alunos/Form";
import { alunosService } from "@/app/lib/alunos-service";

export default async function EditarPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const aluno = await alunosService.consultar(id);

  return (
    <>
      <Form action="editar" aluno={aluno} />
    </>
  );
}
