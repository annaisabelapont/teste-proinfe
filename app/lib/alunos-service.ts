import { Aluno } from "./types";

export const alunosService = {
  async cadastrar(aluno: Aluno) {
    try {
      const res = await fetch("https://api-desafio.jetspace.dev/aluno", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: aluno.nome,
          cpf: aluno.cpf,
          dataNascimento: aluno.dataNascimento,
          sexo: aluno.sexo,
          nacionalidade: aluno.nacionalidade,
          endereco: {
            cep: aluno.endereco.cep,
            logradouro: aluno.endereco.logradouro,
            numero: aluno.endereco.numero,
            bairro: aluno.endereco.bairro,
            cidade: aluno.endereco.municipio,
            estado: aluno.endereco.estado,
          },
          contatos: [
            {
              numero: aluno.contatos[0].contato,
              email: aluno.contatos[0].email,
            },
          ],
        }),
      });

      if (!res.ok) {
        throw new Error();
      }

      const data = await res.json();

      return data;
    } catch (e) {
      console.log(e);
      return null;
    }
  },

  async editar(aluno: Aluno) {
    try {
      const res = await fetch("https://api-desafio.jetspace.dev/aluno", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: aluno.nome,
          cpf: aluno.cpf,
          dataNascimento: aluno.dataNascimento,
          sexo: aluno.sexo,
          nacionalidade: aluno.nacionalidade,
          endereco: {
            cep: aluno.endereco.cep,
            logradouro: aluno.endereco.logradouro,
            numero: aluno.endereco.numero,
            bairro: aluno.endereco.bairro,
            cidade: aluno.endereco.municipio,
            estado: aluno.endereco.estado,
          },
          contatos: [
            {
              numero: aluno.contatos[0].contato,
              email: aluno.contatos[0].email,
            },
          ],
        }),
      });

      if (!res.ok) {
        throw new Error();
      }

      const data = await res.json();

      return data;
    } catch (e) {
      console.log(e);
      return null;
    }
  },

  async listar(): Promise<any | null> { // eslint-disable-line @typescript-eslint/no-explicit-any
    try {
      const res = await fetch("https://api-desafio.jetspace.dev/aluno");

      if (!res.ok) {
        throw new Error();
      }

      const data = await res.json();

      return data;
    } catch (e) {
      console.log(e);
      return null;
    }
  },

  async consultar(id: string): Promise<any | null> { // eslint-disable-line @typescript-eslint/no-explicit-any
    try {
      const res = await fetch(`https://api-desafio.jetspace.dev/aluno/${id}`);

      if (!res.ok) {
        throw new Error();
      }

      const data = await res.json();

      return data;
    } catch (e) {
      console.log(e);
      return null;
    }
  },

  async excluir(id: string): Promise<any | null> { // eslint-disable-line @typescript-eslint/no-explicit-any
    try {
      const res = await fetch(`https://api-desafio.jetspace.dev/aluno/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error();
      }

      const data = await res.json();

      return data;
    } catch (e) {
      console.log(e);
      return null;
    }
  },
};
