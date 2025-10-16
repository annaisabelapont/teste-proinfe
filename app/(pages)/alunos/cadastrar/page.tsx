"use server";

import Form from "@/app/components/alunos/Form";
import PageHeader from "@/app/components/UI/PageHeader";

export default async function CadastrarPage() {

  return (
    <>
      <PageHeader title={"Cadastrar aluno"} description={"Aluno"} />

      <Form action="cadastrar" />
    </>
  );
}
