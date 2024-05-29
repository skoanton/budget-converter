"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Transaction } from "@/types/transactions";
import { Account } from "@/types/accounts";
import { Category } from "@/types/categories";
import { useGetEntityById } from "@/hooks/useGetEntityById";
import { Description } from "@/types/descriptions";
import CategoryForm from "@/components/CategoryForm/CategoryForm";
type TransactionDetailsProps = {
  transaction: Transaction;
};

export default function TransactionDetails({
  transaction,
}: TransactionDetailsProps) {
  const { entity: account, loading: accountLoading } =
    useGetEntityById<Account>(transaction.account_ID, "/accounts");

  const { entity: category, loading: categoryLoading } =
    useGetEntityById<Category>(transaction.category_ID, "/categories");

  const { entity: description, loading: descriptionLoading } =
    useGetEntityById<Description>(
      transaction.description_ID,
      "/categories/descriptions"
    );

  if (accountLoading || categoryLoading) {
    return <div>Loading....</div>;
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{category?.name}</CardTitle>
          <CardDescription>{description?.name}</CardDescription>
          <CardDescription>{account?.name}</CardDescription>
        </CardHeader>
        <CardContent>
          <ul>
            <li className="font-bold">{transaction.amount} kr</li>
            <li className="font-bold">
              {transaction.date.toLocaleDateString()}
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <CategoryForm changeCategory={true} transaction={transaction} />
        </CardFooter>
      </Card>
    </>
  );
}
