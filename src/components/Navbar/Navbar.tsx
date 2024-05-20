import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="h-full bg-slate-600 flex justify-center w-48 p-4">
      <ul className="flex flex-col items-center">
        <Link href="/">
          <li>Home</li>
        </Link>

        <Link href="/add-transactions">
          <li>Lägg till transaktioner</li>
        </Link>
        <Link href="/transactions">
          <li>Transaktioner</li>
        </Link>

        <li>Budget</li>
        <Link href="/accounts">
          <li>Accounts</li>
        </Link>
      </ul>
    </nav>
  );
}
