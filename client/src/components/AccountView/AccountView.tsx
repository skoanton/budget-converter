"use client";
import { getAccounts } from "@/lib/getAccounts";
import { Account } from "@/typesss/accountType";
import { useEffect, useState } from "react";
import AccountCard from "./AccountCard";

export default function AccountView() {
  const [accounts, setAccounts] = useState<Account[]>([]);

  useEffect(() => {
    const fetchAccounts = async () => {
      const fetchedAccounts = await getAccounts();
      setAccounts(fetchedAccounts);
    };

    fetchAccounts();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-2">
      {accounts.map((account) => {
        return <AccountCard key={account.id} account={account} />;
      })}
    </div>
  );
}
