import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

type GenericAccordionProps = {
  title: string;
  children: React.ReactNode;
};

export default function GenericAccordion({
  title,
  children,
}: GenericAccordionProps) {
  return (
    <>
      <Accordion type="single" collapsible>
        <AccordionItem value={title}>
          <AccordionTrigger className="text-2xl font-bold">
            {title}
          </AccordionTrigger>
          <AccordionContent>{children}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
