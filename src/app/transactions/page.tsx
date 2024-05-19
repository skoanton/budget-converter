import TransactionTable from "@/components/TransactionTable/TransactionTable";
import { getTransactions } from "@/lib/getTransactions";

export default async function TransactionsPage() {
  const transaction = await getTransactions();

  console.log(transaction);

  return <TransactionTable transactions={transaction} />;
}
