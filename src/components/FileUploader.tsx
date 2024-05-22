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
import { Loader } from "lucide-react";

export default function FileUploader() {
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const {
    processTextTransactions,
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
        setIsLoading(true);
        const allTransactions = await processTextTransactions(text);
        const categorizedTransactions = await extractCategorizedTransactions(
          allTransactions
        );
        setProcessedTransactions(categorizedTransactions);
        const uncategorizedTransactions =
          await extractUncategorizedTransactions(allTransactions);
        setIsLoading(false);
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
    <section className="w-full h-full flex flex-col gap-2">
      <div className="flex justify-center flex-col gap-2 items-center">
        <form>
          <Input
            type="file"
            id="file"
            name="file"
            onChange={handleFileChange}
          />
        </form>

        {isLoading && (
          <div className="flex justify-center items-center">
            <Loader className="animate-spin" />
          </div>
        )}
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
          <h2 className="text-2xl font-bold">
            Transactions without categories
          </h2>
          <AddCategory
            transactions={uncategorizedTransactions}
            onHandleUpdateTransactions={handleUpdateTransactions}
          />
        </section>
      ) : (
        uncategorizedTransactions.length <= 0 &&
        text.length > 0 &&
        !isLoading && (
          <div className="flex justify-center">
            <Button
              size={"lg"}
              onClick={() => uploadTransactions(processedTransactions)}
            >
              Upload to database
            </Button>
          </div>
        )
      )}

      {newTransaction && newAccountInfo && (
        <>
          <CreateNewAccountForm
            onSubmit={handleNewAccountSubmit}
            accountName={newAccountInfo.name}
          />
        </>
      )}
    </section>
  );
}
