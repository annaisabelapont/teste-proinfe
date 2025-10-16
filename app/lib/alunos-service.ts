export const alunosService = {
  async cadastrar() {
    try {
      const res = await fetch("");
      if (!res.ok) {
        return null;
      }
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
};
