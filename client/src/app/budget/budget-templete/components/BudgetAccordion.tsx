"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import BudgetForm from "./BudgetForm";
import BudgetList from "./BudgetList";
import GenericAccordion from "@/components/Accordion/GenericAccordion";

type BudgetAccordionProps = {
  title: string;
  categoryType: {
    name: string;
    id: number;
  };
};

export default function BudgetAccordion({
  title,
  categoryType,
}: BudgetAccordionProps) {
  return (
    <>
      <GenericAccordion title={title}>
        <BudgetList categoryType={categoryType} />
        <BudgetForm categoryType={categoryType} />
      </GenericAccordion>
    </>
  );
}
