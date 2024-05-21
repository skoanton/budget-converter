import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="h-full bg-slate-600 flex justify-center min-w-max  p-8">
      <ul className="flex flex-col items-center text-xl gap-5">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/add-transactions">Lägg till transaktioner</Link>
        </li>
        <li>
          <Link href="/transactions">Transaktioner</Link>
        </li>
        <li>
          <Link href="/budget">Budget</Link>
        </li>
        <li>
          <Link href="/accounts">Accounts</Link>
        </li>
      </ul>
    </nav>
  );
}
