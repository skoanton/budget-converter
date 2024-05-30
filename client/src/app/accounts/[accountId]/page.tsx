"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TransactionTable from "@/app/transactions/components/TransactionTable/TransactionTable";
import GenericAccordion from "@/components/Accordion/GenericAccordion";

export default function AccountInformationPage({
  params,
}: {
  params: { accountId: string };
}) {
  return (
    <>
      <GenericAccordion title="Transactions">
        <TransactionTable
          allTransactions={false}
          accountId={params.accountId}
        />
      </GenericAccordion>
    </>
  );
}
