import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" flex min-h-screen bg-backgroundBlue">
        <Link href="/dashboard">Clique aqui para entrar</Link>
    </main>
  );
}
