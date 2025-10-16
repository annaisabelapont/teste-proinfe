"use client";
import "./form.css";

import { Aluno } from "@/app/lib/types";
import FormSectionName from "../UI/FormSectionName";
import Input from "./FormInput";

export default function Form({
  action,
  aluno,
}: {
  action: string;
  aluno?: Aluno;
}) {
  return (
    <div>
      <form>
        <FormSectionName title="Dados Pessoais" />

        <Input
          placeholder="Ex: 000.000.000-00"
          label="CPF *"
          type="text"
          error={null}
        />
        <Input
          placeholder="Ex: João da Silva"
          label="Nome completo *"
          type="text"
          error={null}
        />
        <Input
          placeholder="Ex: 05/11/1998"
          label="Data de nascimento *"
          type="date"
          error={null}
        />
        <Input
          placeholder="Ex: 05/11/1998"
          label="Data de nascimento *"
          type="date"
          error={null}
        />

        <FormSectionName title="Endereço" />
        <FormSectionName title="Contato" />
      </form>
    </div>
  );
}
