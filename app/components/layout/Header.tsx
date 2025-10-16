import Image from "next/image";

export default function Header() {
  return (
    <header
      className="flex justify-between items-center p-5 px-8 bg-blue text-white font-semibold"
      id="header"
    >
      <h1>PROINFE</h1>

      <Image
        src={"/usuario.png"}
        width={"50"}
        height={"50"}
        alt="Foto do usuário."
      />
    </header>
  );
}
