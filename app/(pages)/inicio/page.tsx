import Image from "next/image";

export default function InicioPage() {
  return (
    <div className="px-60 pt-20">
      <div className="bg-white p-15 flex items-center justify-center rounded-xl shadow-lg">
        <Image
          src={"/bem-vindo.png"}
          width={"200"}
          height={"200"}
          alt="Bem-vindo"
        />
      </div>
    </div>
  );
}
