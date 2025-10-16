export type Aluno = {
  id: string | null;
  nome: string;
  nascimento: string;
  sexo: "masculino" | "feminino";
  nacionalidade: "brasileira" | "brasileira-naturalizada" | "estrangeira";
  cpf: string;
  cep: string;
  contato: string[];
  email: string[];
};
