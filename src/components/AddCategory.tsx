import { useAddDescriptionToCategory } from "@/hooks/useAddDescriptionToCategory";
import { useFetchCategories } from "@/hooks/useFetchCategories";
import { Transaction } from "@/types/transactions";
import { useState } from "react";

type AddCategoryProps = {
  transactions: Transaction[];
  onHandleUpdateTransactions: (
    newCategorizedTransactions: Transaction[]
  ) => void;
};
export default function AddCategory({
  transactions,
  onHandleUpdateTransactions,
}: AddCategoryProps) {
  const categories = useFetchCategories();
  const [currentForm, setCurrentForm] = useState(0);

  const addDescriptionToCategory = useAddDescriptionToCategory();
  const sortedCategories = categories.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  const handlesubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    transaction: Transaction
  ) => {
    e.preventDefault();
    const categoryId = (
      e.currentTarget.elements.namedItem("categories") as HTMLSelectElement
    ).value;

    const currentCategory = categories.find(
      (category) => category.id === categoryId
    );

    if (currentCategory) {
      await addDescriptionToCategory(transaction.description, currentCategory);

      const newCategorizedTransactions = transactions.filter(
        (trans) => trans.description === transaction.description
      );

      newCategorizedTransactions.forEach((trans) => {
        trans.category = currentCategory.name;
      });

      onHandleUpdateTransactions(newCategorizedTransactions);
    } else {
      console.log("no such category");
    }
    setCurrentForm(currentForm + 1);
  };
  return (
    <>
      {transactions.map((transaction, index) => {
        return (
          currentForm === index && (
            <div key={transaction.id}>
              <h2>{transaction.description}</h2>
              <p>Amount: {transaction.amount}</p>
              <p>Datum: {transaction.date.toLocaleDateString()}</p>
              <form onSubmit={(e) => handlesubmit(e, transaction)}>
                <label htmlFor="">Add to Category</label>
                <select name="categories">
                  {sortedCategories.map((category) => {
                    return (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    );
                  })}
                </select>
                <button type="submit">add</button>
              </form>
            </div>
          )
        );
      })}
    </>
  );
}
