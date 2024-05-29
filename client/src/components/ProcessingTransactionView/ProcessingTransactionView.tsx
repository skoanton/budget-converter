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
import { useTransactionStore } from "@/lib/store/useTransactionStore";

type ProcessingTransactionViewProps = {
  text: string;
};

export default function ProcessingTransactionView({
  text,
}: ProcessingTransactionViewProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { categorizedTransactions, uncategorizedTransactions, addTransaction } =
    useTransactionStore.getState();
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
        allTransactions.forEach((transaction) => {
          addTransaction(transaction);
        });

        setIsLoading(false);
      };
      processTransactionsFromText();
    }
  }, [text]);

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
                <Button
                  size={"lg"}
                  onClick={() => uploadTransactions(categorizedTransactions)}
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
