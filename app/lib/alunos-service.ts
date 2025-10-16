import { Aluno } from "./types";

export const alunosService = {
  async cadastrar() {
    try {
      const res = await fetch("");
    } catch (e) {
      console.log(e);
      return null;
    }
  },

  async listar(): Promise<any | null> {
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
};
