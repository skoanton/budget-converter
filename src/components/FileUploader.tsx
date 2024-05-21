"use client";
import { useEffect, useState } from "react";
import AddCategory from "./AddCategory";
import { extractCategorizedTransactions } from "@/utils/extractCategorizedTransactions";
import { extractUncategorizedTransactions } from "@/utils/extractUncategorizedTransactions";
import { uploadTransactions } from "@/lib/uploadTransactions";
import { useProcessTransactions } from "@/hooks/useProcessTransactions";
import CreateNewAccountModal from "./CreateNewAccountForm/CreateNewAccountForm";
import CreateNewAccountForm from "./CreateNewAccountForm/CreateNewAccountForm";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import TransactionCard from "./Transactioncard/TransactionCard";
import { Transaction } from "@/types/transactionsType";

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
          setText(text);
        }
      };
      reader.readAsArrayBuffer(selectedFile);
    }
  };

  useEffect(() => {
    if (text) {
      const processTransactionsFromText = async () => {
        const allTransactions = await processTextTransactions(text);
        const categorizedTransactions = await extractCategorizedTransactions(
          allTransactions
        );
        setProcessedTransactions(categorizedTransactions);
        const uncategorizedTransactions =
          await extractUncategorizedTransactions(allTransactions);

        setUncategorizedTransactions(uncategorizedTransactions);
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
    <section className="w-full h-full flex flex-col items-center gap-2">
      <div>
        <form>
          <Input
            type="file"
            id="file"
            name="file"
            onChange={handleFileChange}
          />
        </form>
      </div>
      <section className="grid grid-cols-5 gap-3">
        {processedTransactions.map((transaction) => {
          return (
            <TransactionCard key={transaction.id} transaction={transaction} />
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
        <Button onClick={() => uploadTransactions(processedTransactions)}>
          Upload to database
        </Button>
      )}
      {newTransaction && newAccountInfo && (
        <>
          <div>Detta ska synas nu</div>
          <CreateNewAccountForm
            onSubmit={handleNewAccountSubmit}
            accountName={newAccountInfo.name}
          />
        </>
      )}
    </section>
  );
}
