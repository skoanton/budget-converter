"use client";
import { COLLECTION_NAMES } from "@/constants/collectionsNames";
import CategoryForm from "../CategoryForm/CategoryForm";
import { useGetAccountRef } from "@/hooks/useGetAccountRef";
import { useGetCategoryRef } from "@/hooks/useGetCategoryRef";
import { Transaction } from "@/types/transactionsType";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
type TransactionDetailsProps = {
  transaction: Transaction;
};

export default function TransactionDetails({
  transaction,
}: TransactionDetailsProps) {
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
    <>
      <Card>
        <CardHeader>
          <CardTitle>{category?.name}</CardTitle>
          <CardDescription>{transaction.description}</CardDescription>
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
          <CategoryForm
            categoryType={`${
              transaction.amount < 0
                ? COLLECTION_NAMES.EXPENSES_CATEGORIES
                : COLLECTION_NAMES.INCOME_CATEGORIES
            }`}
            changeCategory={true}
            transaction={transaction}
          />
        </CardFooter>
      </Card>
    </>
  );
}
