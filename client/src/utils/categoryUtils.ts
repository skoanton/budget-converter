import { getEntitiyById } from "@/lib/getEntityById";
import { Category } from "@/types/categories";
import { Transaction } from "@/types/transactions";

export const fetchAndAddCategory = async (
  transaction: Transaction,
  categoryID: string,
  transactions: Transaction[],
  updateTransaction: (id: string, categoryID: number) => void
) => {
  try {
    const category = await getEntitiyById<Category>(
      Number(categoryID),
      "/categories"
    );
    if (category) {
      addNewCategory(transaction, category, transactions, updateTransaction);
    } else {
      console.error("Fetched category is undefined");
    }
  } catch (error) {
    console.error("Could not fetch category by ID", error);
  }
};

const addNewCategory = (
  transaction: Transaction,
  category: Category,
  transactions: Transaction[],
  updateTransaction: (id: string, categoryID: number) => void
) => {
  const newCategorizedTransactions = transactions.filter((trans) => {
    return (
      trans.description_ID === transaction.description_ID &&
      Math.sign(trans.amount) === Math.sign(transaction.amount) // Lägger bara till descriptions med samma value (+ eller -)
    );
  });

  newCategorizedTransactions.forEach((trans) => {
    if (typeof trans.id === "string" && typeof category.id !== "string") {
      updateTransaction(trans.id, category.id!);
    } else {
      console.error("Transaction ID is not a string");
    }
  });
};
