import TransactionDetails from "@/components/TransactionDetails/TransactionDetails";
import { getTransactionById } from "@/lib/getTransactionById";

export default async function TransactionDetailsPage({
  params,
}: {
  params: { transactionId: string };
}) {
  console.log(params.transactionId);
  const transaction = await getTransactionById(params.transactionId);
  if (transaction) {
    return <TransactionDetails transaction={transaction} />;
  } else {
    return <div>No transaction</div>;
  }
}
