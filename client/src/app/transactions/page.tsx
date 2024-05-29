import TransactionTable from "@/app/transactions/components/TransactionTable/TransactionTable";

export default async function TransactionsPage() {
  return <TransactionTable allTransactions={true} />;
}
