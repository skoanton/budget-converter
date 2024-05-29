"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import BudgetForm from "./BudgetForm";
import BudgetList from "./BudgetList";

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
      <Accordion type="single" collapsible>
        <AccordionItem value={categoryType.id.toString()}>
          <AccordionTrigger className="text-2xl font-bold">
            {title}
          </AccordionTrigger>
          <AccordionContent>
            <BudgetList categoryType={categoryType} />
            <BudgetForm categoryType={categoryType} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
