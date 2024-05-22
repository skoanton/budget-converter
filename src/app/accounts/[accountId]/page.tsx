"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TransactionRow from "@/components/TransactionTable/TransactionRow";
import { useGetTransactionsByAccount } from "@/hooks/useGetTransactionsByAccount";

export default function AccountInformationPage({
  params,
}: {
  params: { accountId: string };
}) {
  const transactions = useGetTransactionsByAccount(params.accountId);
  return (
    <>
      <div>{params.accountId}</div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Transactions</AccordionTrigger>
          <AccordionContent>
            <table className="w-full">
              <thead>
                <tr className="border">
                  <th className="border">Description</th>
                  <th className="border">Account</th>
                  <th className="border">Category</th>
                  <th className="border">Date</th>
                  <th className="border">Amount</th>
                </tr>
              </thead>
              <tbody>
                {transactions &&
                  transactions.map((transaction) => {
                    return (
                      <TransactionRow
                        key={transaction.id}
                        transaction={transaction}
                      />
                    );
                  })}
              </tbody>
            </table>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
