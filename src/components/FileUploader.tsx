"use client";
import { Transaction } from "@/types/transactions";
import { useEffect, useState } from "react";
import AddCategory from "./AddCategory";
import { extractCategorizedTransactions } from "@/utils/extractCategorizedTransactions";
import { extractUncategorizedTransactions } from "@/utils/extractUncategorizedTransactions";
import { uploadTransactions } from "@/lib/uploadTransactions";
import { useProcessTransactions } from "@/hooks/useProcessTransactions";
import CreateNewAccountModal from "./CreateNewAccountForm/CreateNewAccountForm";
import CreateNewAccountForm from "./CreateNewAccountForm/CreateNewAccountForm";

export default function FileUploader() {
  const [text, setText] = useState("");
  const {
    processTextTransactions,
    loading,
    error,
    newTransaction,
    handleNewAccountSubmit,
    newAccountInfo,
  } = useProcessTransactions();
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
          const arrayBuffer = event.target.result as ArrayBuffer;
          const decoder = new TextDecoder("iso-8859-1");
          const text = decoder.decode(arrayBuffer);
          console.log("File content decoded:", text);
          setText(text);
        }
      };
      reader.readAsArrayBuffer(selectedFile);
    }
  };

  useEffect(() => {
    console.log("useEffect triggered with text:", text);
    if (text) {
      console.log("Text is not empty, processing transactions...");
      const processTransactionsFromText = async () => {
        const allTransactions = await processTextTransactions(text);
        setProcessedTransactions(
          extractCategorizedTransactions(allTransactions)
        );
        setUncategorizedTransactions(
          extractUncategorizedTransactions(allTransactions)
        );
      };

      processTransactionsFromText();
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

  if (error) {
    return <div>{error}</div>;
  }

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
        <button
          className="border"
          onClick={() => uploadTransactions(processedTransactions)}
        >
          Upload to database
        </button>
      )}
      {newTransaction && newAccountInfo && (
        <CreateNewAccountForm
          onSubmit={handleNewAccountSubmit}
          accountName={newAccountInfo.name}
        />
      )}
    </>
  );
}
