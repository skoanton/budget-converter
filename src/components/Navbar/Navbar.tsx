import Link from "next/link";
import { Button } from "../ui/button";
import {
  ArrowRightLeft,
  CircleDollarSign,
  CloudUpload,
  CreditCard,
  LayoutDashboard,
} from "lucide-react";

export default function Navbar() {
  return (
    <div className="h-full bg-primary flex flex-col gap-10 min-w-max p-8">
      <h1 className="text-primary-foreground text-4xl">Budget App</h1>
      <nav>
        <ul className="flex flex-col text-xl gap-5">
          <li className="text-2xl text-primary-foreground flex gap-2 items-center hover:underline">
            <LayoutDashboard />
            <Link href="/">Dashboard</Link>
          </li>
          <li className="text-2xl text-primary-foreground flex gap-2 items-center hover:underline">
            <CloudUpload />
            <Link href="/add-transactions">Upload transaktioner</Link>
          </li>
          <li className="text-2xl text-primary-foreground flex gap-2 items-center hover:underline">
            <ArrowRightLeft />
            <Link href="/transactions">Transaktioner</Link>
          </li>
          <li className="text-2xl text-primary-foreground flex gap-2 items-center hover:underline">
            <CircleDollarSign />
            <Link href="/budget">Budget</Link>
          </li>
          <li className="text-2xl text-primary-foreground flex gap-2 items-center hover:underline">
            <CreditCard />
            <Link href="/accounts">Accounts</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
