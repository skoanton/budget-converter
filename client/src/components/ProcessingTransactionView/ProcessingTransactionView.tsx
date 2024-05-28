import { useProcessTransactions } from "@/hooks/useProcessTransactions";
import { extractCategorizedTransactions } from "@/utils/extractCategorizedTransactions";
import { extractUncategorizedTransactions } from "@/utils/extractUncategorizedTransactions";
import { useEffect, useState } from "react";
import TransactionCard from "../Transactioncard/TransactionCard";
import AddCategory from "../AddCategory";
import { Button } from "../ui/button";
import { uploadTransactions } from "@/lib/uploadTransactions";
import CreateNewAccountForm from "../CreateNewAccountForm/CreateNewAccountForm";
import Loading from "../Loading/Loading";
import { Transaction } from "@/types/transactions";

type ProcessingTransactionViewProps = {
  text: string;
};

export default function ProcessingTransactionView({
  text,
}: ProcessingTransactionViewProps) {
  const [processedTransactions, setProcessedTransactions] = useState<
    Transaction[]
  >([]);
  const [uncategorizedTransactions, setUncategorizedTransactions] = useState<
    Transaction[]
  >([]);

  const [isLoading, setIsLoading] = useState(false);

  const {
    processTextTransactions,
    error,
    newTransaction,
    handleNewAccountSubmit,
    newAccountInfo,
  } = useProcessTransactions();

  useEffect(() => {
    if (text) {
      const processTransactionsFromText = async () => {
        setIsLoading(true);
        const allTransactions = await processTextTransactions(text);
        console.log("All transcations:", allTransactions);
        const categorizedTransactions = await extractCategorizedTransactions(
          allTransactions
        );
        setProcessedTransactions(categorizedTransactions);
        const uncategorizedTransactions =
          await extractUncategorizedTransactions(allTransactions);

        setUncategorizedTransactions(uncategorizedTransactions);
        console.log("Uncategorized", uncategorizedTransactions);
        setIsLoading(false);
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

  return (
    <>
      {isLoading && (
        <div className="flex justify-center items-center">
          <Loading />
        </div>
      )}

      {!isLoading && (
        <>
          <section className="grid grid-cols-5 gap-3">
            {processedTransactions.map((transaction) => {
              return (
                <TransactionCard
                  key={transaction.id}
                  transaction={transaction}
                />
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
            text.length > 0 && (
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
        </>
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
