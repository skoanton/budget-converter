import { COLLECTION_NAMES } from "@/constants/collectionsNames";
import CategoryForm from "../CategoryForm/CategoryForm";
import { useGetAccountRef } from "@/hooks/useGetAccountRef";
import { useGetCategoryRef } from "@/hooks/useGetCategoryRef";
import { Transaction } from "@/types/transactionsType";

type TransactionDetailsProps = {
  transaction: Transaction;
};

export default async function TransactionDetails({
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
      <ul>
        <li>{transaction.id}</li>
        <li>{category?.name}</li>
        <li>{account?.name}</li>
        <li>{transaction.amount}</li>
        <li>{transaction.description}</li>
        <li>{transaction.date.toDateString()}</li>
      </ul>
      <CategoryForm
        categoryType={`${
          transaction.amount < 0
            ? COLLECTION_NAMES.EXPENSES_CATEGORIES
            : COLLECTION_NAMES.INCOME_CATEGORIES
        }`}
        changeCategory={true}
        transaction={transaction}
      />
    </>
  );
}
