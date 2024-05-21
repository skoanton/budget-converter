import TransactionTable from "@/components/TransactionTable/TransactionTable";
import { getTransactions } from "@/lib/getTransactions";

export default async function TransactionsPage() {
  return <TransactionTable />;
}
