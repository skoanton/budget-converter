import { getCategories } from "@/lib/getCategories";
import { updateTransactions } from "@/lib/updateTransactions";
import { Transaction } from "@/types/transactions";
import { sortCategory } from "@/utils/sortCategory";
import CategoryForm from "../CategoryForm/CategoryForm";

type TransactionDetailsProps = {
  transaction: Transaction;
};

export default async function TransactionDetails({
  transaction,
}: TransactionDetailsProps) {
  return (
    <>
      <ul>
        <li>{transaction.id}</li>
        <li>{transaction.category}</li>
        <li>{transaction.amount}</li>
        <li>{transaction.description}</li>
        <li>{transaction.date.toDateString()}</li>
      </ul>
      <CategoryForm
        categoryType={`${transaction.amount < 0 ? "expenses" : "income"}`}
        changeCategory={true}
        transaction={transaction}
      />
    </>
  );
}
