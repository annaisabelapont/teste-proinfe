"use server";

export default async function ConsultarPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <div>consultar aluno {id}</div>;
}
