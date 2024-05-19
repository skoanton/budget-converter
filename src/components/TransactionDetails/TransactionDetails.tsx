import { getCategories } from "@/lib/getCategories";
import { updateTransactions } from "@/lib/updateTransactions";
import { Transaction } from "@/types/transactions";
import { sortCategory } from "@/utils/sortCategory";

type TransactionDetailsProps = {
  transaction: Transaction;
};

export default async function TransactionDetails({
  transaction,
}: TransactionDetailsProps) {
  const categories = await getCategories();

  const sortedCategories = sortCategory(categories!);
  const changeCategory = async (formdata: FormData) => {
    "use server";
    const newTransactionData: Transaction = {
      ...transaction,
      category: formdata.get("categories") as string,
    };

    updateTransactions(newTransactionData);
  };

  return (
    <>
      <ul>
        <li>{transaction.id}</li>
        <li>{transaction.category}</li>
        <li>{transaction.amount}</li>
        <li>{transaction.description}</li>
        <li>{transaction.date.toDateString()}</li>
      </ul>
      <form action={changeCategory}>
        <select name="categories" id="categories">
          {sortedCategories ? (
            sortedCategories.map((category) => {
              return (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              );
            })
          ) : (
            <option>No Categories found</option>
          )}
        </select>
        <button type="submit">Change</button>
      </form>
    </>
  );
}
