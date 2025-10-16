export type Aluno = {
  id: string | null;
  nome: string;
  nascimento: string;
  sexo: "masculino" | "feminino";
  nacionalidade: "brasileira" | "brasileira-naturalizada" | "estrangeira";
  cpf: string;
  cep: string;
  cidade: string;
  estado: string;
  logradouro: string;
  bairro: string;
  numero: number;
  contato: string[];
  email: string[];
};
