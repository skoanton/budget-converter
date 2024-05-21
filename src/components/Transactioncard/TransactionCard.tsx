import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useGetAccountRef } from "@/hooks/useGetAccountRef";
import { useGetCategoryRef } from "@/hooks/useGetCategoryRef";
import { Transaction } from "@/types/transactionsType";

type TransactionCardProps = {
  transaction: Transaction;
};

export default function TransactionCard({ transaction }: TransactionCardProps) {
  const {
    account,
    error: accountError,
    loading: accountLoading,
  } = useGetAccountRef(transaction.account);

  const {
    category,
    error: categoryError,
    loading: categoryLoading,
  } = useGetCategoryRef(transaction.category);

  if (accountLoading || categoryLoading) {
    return <div>Loading....</div>;
  }

  if (accountError) {
    return <div>Error loading account: {accountError}</div>;
  }

  if (categoryError) {
    return <div>Error loading category: {categoryError}</div>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{category.name}</CardTitle>
        <CardDescription>{account.name}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Description: {transaction.description}</p>
        <p> Amount: {transaction.amount}</p>
      </CardContent>
      <CardFooter>
        <p>Date: {transaction.date.toDateString()}</p>
      </CardFooter>
    </Card>
  );
}
