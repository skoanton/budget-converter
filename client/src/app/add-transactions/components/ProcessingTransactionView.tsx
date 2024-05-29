import { useProcessTransactions } from "@/hooks/useProcessTransactions";
import { useEffect, useState } from "react";

import { uploadTransactions } from "@/lib/uploadTransactions";

import { useTransactionStore } from "@/lib/store/useTransactionStore";
import Loading from "@/components/Loading/Loading";
import TransactionCard from "./TransactionCard";
import AddCategory from "@/components/AddCategory";
import { Button } from "@/components/ui/button";
import CreateNewAccountForm from "./CreateNewAccountForm";

type ProcessingTransactionViewProps = {
  text: string;
};

export default function ProcessingTransactionView({
  text,
}: ProcessingTransactionViewProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { addTransaction, clearTransactions } = useTransactionStore();

  const categorizedTransactions = useTransactionStore(
    (state) => state.categorizedTransactions
  );
  const uncategorizedTransactions = useTransactionStore(
    (state) => state.uncategorizedTransactions
  );

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
        console.log("All transactions:", allTransactions);
        allTransactions.forEach((transaction) => {
          addTransaction(transaction);
        });

        setIsLoading(false);
      };
      processTransactionsFromText();
    }
  }, [text]);

  const handleUploads = () => {
    uploadTransactions(categorizedTransactions);
    clearTransactions();
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
            {categorizedTransactions.map((transaction) => {
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
              <AddCategory />
            </section>
          ) : (
            uncategorizedTransactions.length <= 0 &&
            text.length > 0 && (
              <div className="flex justify-center">
                <Button size={"lg"} onClick={() => handleUploads()}>
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
