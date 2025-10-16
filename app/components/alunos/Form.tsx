"use client";
import "./form.css";

import { Aluno } from "@/app/lib/types";
import FormSectionName from "../UI/FormSectionName";
import Input from "./FormInput";
import Select from "./FormSelect";
import { SubmitHandler, useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Save from "../icons/Save";
import CancelIcon from "../icons/Cancel";
import Link from "next/link";

export default function Form({
  action,
  aluno,
}: {
  action: string;
  aluno?: Aluno;
}) {
  const schema = z.object({
    cpf: z.string().nonempty("CPF é obrigatório!"),
    nome: z.string().nonempty("Nome é obrigatório!"),
    nascimento: z.string().nonempty("Nascimento é obrigatório!"),
    sexo: z.string().nonempty("Sexo é obrigatório!"),
    nacionalidade: z.string().nonempty("Nacionalidade é obrigatória!"),
    // endereco: {
    cep: z.string().nonempty("CEP é obrigatório!"),
    logradouro: z.string().nonempty("Logradouro é obrigatório!"),
    numero: z.number().min(0),
    bairro: z.string().nonempty("Bairro é obrigatório!"),
    cidade: z.string().nonempty("Cidade é obrigatória!"),
    estado: z.string().nonempty("Estado é obrigatório!"),
    // // },
    // // contatos: [
    // //   {
    contato: z.string(),
    email: z.email(),
    // contato: z.array(z.string()),
    // email: z.array(z.email()),
    //   },
    // ],
  });

  type FormFields = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({
    defaultValues: {},
    resolver: zodResolver(schema),
  });

  return (
    <div>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <FormSectionName title="Dados Pessoais" />

        <div className="grid grid-cols-4 gap-5 py-10">
          <Input
            register={register("cpf")}
            placeholder="Ex: 000.000.000-00"
            label="CPF *"
            type="text"
            error={errors.cpf}
          />

          <Input
            register={register("nome")}
            className="col-span-3"
            placeholder="Ex: João da Silva"
            label="Nome completo *"
            type="text"
            error={errors.nome}
          />

          <Input
            register={register("nascimento")}
            placeholder="Ex: 05/11/1998"
            label="Data de nascimento *"
            type="date"
            error={errors.nascimento}
          />

          <Select
            placeholder="Selecione"
            label="Sexo *"
            options={[
              { name: "Masculino", value: "Masculino" },
              { name: "Feminino", value: "Feminino" },
            ]}
            register={register("sexo")}
            error={errors.sexo}
          />

          <fieldset>
            Nacionalidade
            <div className="flex gap-4">
              <label>
                <input
                  type="radio"
                  {...register("nacionalidade")}
                  value={"Brasileira"}
                />
                Brasileira
              </label>

              <label>
                <input
                  type="radio"
                  value={"Naturalizada"}
                  {...register("nacionalidade")}
                />
                Naturalizada
              </label>

              <label>
                <input
                  type="radio"
                  {...register("nacionalidade")}
                  value={"Estrangeira"}
                />
                Estrangeira
              </label>
            </div>
            {errors.nacionalidade && (
              <span className="text-red-500 text-sm font-normal mt-1">
                {errors.nacionalidade.message}
              </span>
            )}
          </fieldset>
        </div>

        <FormSectionName title="Endereço" />
        <div className="grid grid-cols-4 gap-5 py-10">
          <Input
            register={register("cep")}
            placeholder="Ex: 00000-000"
            label="CEP *"
            type="text"
            error={errors.cep}
          />
          <Input
            className="col-span-3"
            register={register("logradouro")}
            placeholder="Ex: Avenida ou Rua Fulano de Tal"
            label="Logradouro *"
            type="text"
            error={errors.logradouro}
          />
          <Input
            register={register("bairro")}
            placeholder="Ex: Centro"
            label="Bairro *"
            type="text"
            error={errors.bairro}
          />
          <Input
            register={register("numero")}
            placeholder="Ex: 1154"
            label="Número *"
            type="number"
            error={errors.numero}
          />
          <Input
            register={register("cidade")}
            placeholder="Ex: Ji-Paraná"
            label="Município *"
            type="text"
            error={errors.cidade}
          />

          <Select
            placeholder="Selecione"
            label="UF *"
            options={[{ name: "Masculino", value: "Masculino" }]}
            register={register("estado")}
            error={errors.estado}
          />
        </div>

        <FormSectionName title="Contato" />

        <div className="grid grid-cols-4 gap-5 py-10">
          <Input
            className="col-span-4"
            register={register("contato")}
            placeholder="(00) 00000-0000"
            label="Contato *"
            type="text"
            error={errors.contato}
          />
          <Input
            className="col-span-4"
            register={register("email")}
            placeholder="Ex: seuemail@provedor.com"
            label="E-mail *"
            type="text"
            error={errors.contato}
          />
        </div>

        <br />
        <br />
        <br />

        <div className="flex gap-5 justify-end">
          <Link
          href="./"
            className="flex p-2.5 border-2 border-blue gap-2 text-blue rounded-md shadow-lg bg-white"
          >
            <CancelIcon />
            Cancelar
          </Link>

          <button
            type="submit"
            className="flex p-2.5 border-2 border-blue gap-2 rounded-md shadow-lg text-white bg-blue"
          >
            <Save />
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
}
