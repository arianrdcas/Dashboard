import { FC } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    id: "item-1",
    question: "Is it accessible?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    id: "item-2",
    question: "How do I get started?",
    answer: "You can start by reading the documentation.",
  },
  {
    id: "item-3",
    question: "Can I use it on multiple projects?",
    answer: "Yes. It's licensed under the MIT license.",
  },
  {
    id: "item-4",
    question: "Can I use it on multiple projects?",
    answer: "Yes. It's licensed under the MIT license.",
  },
];

const FAQPage: FC = () => {
  return (
    <div className="text-white mt-14">
      <h1 className="text-3xl mb-8">Preguntas Frecuentes</h1>
      <Accordion type="single" className="w-full" collapsible>
        {items.map((item) => (
          <AccordionItem value={item.id} key={item.id}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
export default FAQPage;
