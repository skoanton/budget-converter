"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TransactionRow from "@/components/TransactionTable/TransactionRow";
import { useGetTransactionsByAccount } from "@/hooks/useGetTransactionsByAccount";
import TransactionTable from "@/components/TransactionTable/TransactionTable";

export default function AccountInformationPage({
  params,
}: {
  params: { accountId: string };
}) {
  return (
    <>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Transactions</AccordionTrigger>
          <AccordionContent>
            <TransactionTable
              allTransactions={false}
              accountId={params.accountId}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
