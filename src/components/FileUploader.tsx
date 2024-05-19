"use client";
import { useBreakOutTransactions } from "@/hooks/useBreakeOutTransactions";
import { Transaction } from "@/types/transactions";
import { useEffect, useState } from "react";
import AddCategory from "./AddCategory";
import { extractCategorizedTransactions } from "@/utils/extractCategorizedTransactions";
import { extractUncategorizedTransactions } from "@/utils/extractUncategorizedTransactions";
import { uploadTransactions } from "@/lib/uploadTransactions";

export default function FileUploader() {
  const [text, setText] = useState("");
  const { processTransactions } = useBreakOutTransactions();
  const [processedTransactions, setProcessedTransactions] = useState<
    Transaction[]
  >([]);
  const [uncategorizedTransactions, setUncategorizedTransactions] = useState<
    Transaction[]
  >([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFile = e.target.files[0];

      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target) {
          const text = event.target.result as string;
          setText(text);
        }
      };
      reader.readAsText(selectedFile);
    }
  };

  useEffect(() => {
    if (text) {
      const getTransactions = async () => {
        const allTransactions = await processTransactions(text);
        setProcessedTransactions(
          extractCategorizedTransactions(allTransactions)
        );
        setUncategorizedTransactions(
          extractUncategorizedTransactions(allTransactions)
        );
      };
      getTransactions();
    }
  }, [text]);

  const handleUpdateTransactions = (
    newCategorizedTransactions: Transaction[]
  ) => {
    setProcessedTransactions((prev) => [
      ...prev,
      ...newCategorizedTransactions,
    ]);

    setUncategorizedTransactions((prev) =>
      prev.filter((trans) => !newCategorizedTransactions.includes(trans))
    );
  };

  return (
    <>
      <form>
        <label htmlFor="file">Choose a file</label>
        <input type="file" id="file" name="file" onChange={handleFileChange} />
      </form>
      <section className="grid grid-cols-5 gap-3">
        {processedTransactions.map((transaction) => {
          return (
            <div key={transaction.id} className="border">
              <h2 className="text-xl font-bold">{transaction.description}</h2>
              <p>Amount: {transaction.amount}</p>
              <p>Datum: {transaction.date.toLocaleDateString()}</p>
              <p>Category: {transaction.category}</p>
            </div>
          );
        })}
      </section>
      {uncategorizedTransactions.length > 0 ? (
        <section>
          <h2 className="text-xl font-bold">Transactions without categories</h2>
          <AddCategory
            transactions={uncategorizedTransactions}
            onHandleUpdateTransactions={handleUpdateTransactions}
          />
        </section>
      ) : (
        <button onClick={() => uploadTransactions(processedTransactions)}>
          Done
        </button>
      )}
    </>
  );
}
