"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function FAQ() {
  const data = [
    {
      title: "When can I join kendo?",
      body: "New student intake is during the first two weeks of every quarter. You may check our website or the parks department for starting dates. We typically start new quarters in January, March, June, and September.",
    },
    {
      title: "How much does kendo cost?",
      body: "Classes are priced at around $10 per session by the parks department. Quarters can typically range from $100-$130.",
    },
    {
      title: "What do I need before joining kendo?",
      body: "Nothing is needed before attending your first class. We provide swords (shinai) to all new students to purchase for $25. A shinai is the only required equipment for beginners.",
    },
    {
      title: "Can I do a free trial of kendo?",
      body: "No, we currently do not offer any free trials for kendo due to liability. All students must be registered in the class to participate. We always encourage prospective students to come observe the class, free of charge!",
    },
  ];

  return (
    <section className="py-16 bg-secondary/25 shadow-[0_0_0_100vmax_#adc7d943] [clip-path:inset(0_-100vmax)]">
      <p className="text-sm text-secondary">FAQ</p>
      <Accordion variant="splitted" className="mt-2">
        {data.map((content, index) => (
          <AccordionItem
            key={index}
            aria-label={"Accordion" + index}
            title={content.title}
          >
            {content.body}
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
