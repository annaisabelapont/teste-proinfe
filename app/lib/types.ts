export type Aluno = {
  id?: string | null;
  cpf: string;
  nome: string;
  dataNascimento: string;
  sexo: string;
  nacionalidade: string;
  endereco: {
    cep: string;
    logradouro: string;
    numero: string;
    bairro: string;
    municipio: string;
    estado: string;
  };
  contatos: [{ contato: string[]; email: string[] }];
};

/*
{
  "nome": "João da Silva Santos",
  "cpf": "123.456.789-00",
  "dataNascimento": "2010-05-15",
  "sexo": "Masculino",
  "nacionalidade": "Brasileira",
  "endereco": {
    "cep": "76801-974",
    "logradouro": "Rua das Flores",
    "numero": "123",
    "bairro": "Centro",
    "cidade": "Porto Velho",
    "estado": "RO"
  },
  "contatos": [
    {
      "numero": "(69) 99200-0001",
      "email": "joao@escola.com.br"
    }
  ]
}
*/
