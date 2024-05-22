import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Account } from "@/types/accountType";
import Link from "next/link";

type AccountCardProps = {
  account: Account;
};

export default function AccountCard({ account }: AccountCardProps) {
  return (
    <>
      <Card>
        <Link href={`accounts/${account.id}`}>
          <CardHeader>
            <CardTitle>{account.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-bold">{account.balance} kr</p>
          </CardContent>
        </Link>
      </Card>
    </>
  );
}
