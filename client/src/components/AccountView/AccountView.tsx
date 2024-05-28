"use client";
import { useEffect, useState } from "react";
import AccountCard from "./AccountCard";
import { Account } from "@/types/accounts";
import { useGetEntities } from "@/hooks/useGetEntities";
import Loading from "../Loading/Loading";

export default function AccountView() {
  const { entities: accounts, loading } = useGetEntities<Account>("/accounts");

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {accounts.map((account) => {
        return <AccountCard key={account.id} account={account} />;
      })}
    </div>
  );
}
