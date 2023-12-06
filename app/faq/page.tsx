"use client";
import data from "@/app/data/faq.json";
import { Accordion, AccordionItem, Divider } from "@nextui-org/react";

export default function FAQ() {
  return (
    <main>
      <div className="flex justify-center gap-6">
        <p className="text-3xl p-2 border-2 rounded-md border-black break-keep place-self-center">
          剣道
        </p>
        <p className="text-3xl place-self-center">Frequently Asked Questions</p>
      </div>
      <div className="space-y-10 my-16">
        {data.map((section, index) => (
          <section key={index} className="">
            <p className="text-xl mb-2">{section.header}</p>
            <Divider />
            <Accordion isCompact variant="splitted" className="mt-6">
              {section.questions.map((items, index) => (
                <AccordionItem
                  key={index}
                  aria-label={"Accordion" + index}
                  title={items.question}
                  className="p-2"
                >
                  {items.answer}
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        ))}
      </div>
    </main>
  );
}
