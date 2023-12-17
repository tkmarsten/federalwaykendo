"use client";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Accordion,
  AccordionItem,
} from "@nextui-org/react";
import data from "@/app/data/terms.json";

export default function Page() {
  return (
    <main>
      <p className="text-4xl place-self-center font-semibold text-center">
        Terminology
      </p>
      <Accordion>
        {data.map((group, index) => (
          <AccordionItem key={index} title={group.section}>
            <Table removeWrapper>
              <TableHeader>
                <TableColumn>Romaji</TableColumn>
                <TableColumn>Kanji</TableColumn>
                <TableColumn>Translation</TableColumn>
              </TableHeader>
              <TableBody>
                {group.terms.map((term, index) => (
                  <TableRow key={index}>
                    <TableCell>{term.romaji}</TableCell>
                    <TableCell>{term.kanji}</TableCell>
                    <TableCell>{term.translation}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  );
}
