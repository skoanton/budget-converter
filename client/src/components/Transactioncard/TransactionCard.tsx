import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useGetEntityById } from "@/hooks/useGetEntityById";
import { Account } from "@/types/accounts";
import { Category } from "@/types/categories";
import { Description } from "@/types/descriptions";
import { Transaction } from "@/types/transactions";

type TransactionCardProps = {
  transaction: Transaction;
};

export default function TransactionCard({ transaction }: TransactionCardProps) {
  const { entity: account, loading: accountLoading } =
    useGetEntityById<Account>(transaction.account_ID, "/accounts");

  const { entity: category, loading: categoryLoading } =
    useGetEntityById<Category>(transaction.category_ID, "/categories");

  const { entity: description, loading: descriptionLoading } =
    useGetEntityById<Description>(transaction.description_ID, "/descriptions");

  if (accountLoading || categoryLoading || descriptionLoading) {
    return <div>Loading....</div>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{category?.name}</CardTitle>
        <CardDescription>{account?.name}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          Description: <span className="font-bold"> {description?.name}</span>
        </p>
        <p> Amount: {transaction.amount}</p>
      </CardContent>
      <CardFooter>
        <p>Date: {transaction.date.toDateString()}</p>
      </CardFooter>
    </Card>
  );
}
