import Link from "next/link";
import House from "../icons/House";
import PeopleIcon from "../icons/People";

export default function Sidebar() {
  return (
    <nav id="sidebar" className="bg-white flex flex-col gap-1 p-6 pt-12 border-r-2 w-70 border-gray-200">
      <Link
        href={"/inicio"}
        className="flex items-center gap-4 p-4 rounded-md shadow-lg font-semibold"
      >
        <House />
        Início
      </Link>

      <Link
        href={"/alunos"}
        className="flex items-center gap-4 p-4 rounded-md shadow-lg font-semibold"
      >
        <PeopleIcon />
        Alunos
      </Link>
    </nav>
  );
}
