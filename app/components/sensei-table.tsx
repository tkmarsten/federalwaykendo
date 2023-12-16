"use client";
import React from "react";
import {
  Image,
  Tabs,
  Tab,
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import data from "@/app/data/sensei.json";

export default function SenseiTable() {
  return (
    <section className="space-y-8 mt-8">
      {data.map((sensei, index) => (
        <div key={index} className="flex flex-col gap-4">
          <div className="flex flex-col items-center">
            <Image
              src="#"
              width={150}
              height={150}
              fallbackSrc="https://via.placeholder.com/150x150"
              alt="Sensei"
            />
            <p className="text-lg">{sensei.name}</p>
            <p className="text-sm text-default-500">{sensei.rank}</p>
            <p className="text-sm text-default-500">{sensei.title}</p>
          </div>
          <div>
            <Tabs aria-label="tabs" size="sm" className="flex">
              <Tab title="Instruction">
                <Table removeWrapper layout="fixed">
                  <TableHeader>
                    <TableColumn>Role</TableColumn>
                    <TableColumn className="hidden lg:table-cell">
                      Dojo
                    </TableColumn>
                    <TableColumn>Year</TableColumn>
                  </TableHeader>
                  <TableBody>
                    {sensei.instruction.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">
                          {row.role}
                          <dl className="lg:hidden font-normal">
                            <dt className="sr-only">Dojo</dt>
                            <dd className="text-gray-500 mt-1">{row.dojo}</dd>
                          </dl>
                        </TableCell>
                        <TableCell className="hidden lg:table-cell">
                          {row.dojo}
                        </TableCell>
                        <TableCell>{row.time}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Tab>
              <Tab title="Tournament">
                <Table removeWrapper>
                  <TableHeader>
                    <TableColumn>Placement</TableColumn>
                    <TableColumn className="hidden lg:table-cell">
                      Division
                    </TableColumn>
                    <TableColumn>Tournament</TableColumn>
                    <TableColumn>Year</TableColumn>
                  </TableHeader>
                  <TableBody>
                    {sensei.tournament.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">
                          {row.place}
                          <dl className="lg:hidden font-normal">
                            <dt className="sr-only">Dojo</dt>
                            <dd className="text-gray-500 mt-1">
                              {row.division}
                            </dd>
                          </dl>
                        </TableCell>
                        <TableCell className="hidden lg:table-cell">
                          {row.division}
                        </TableCell>
                        <TableCell>{row.taikai}</TableCell>
                        <TableCell>{row.time}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Tab>
              <Tab title="Administration">
                <Table removeWrapper>
                  <TableHeader>
                    <TableColumn>Position</TableColumn>
                    <TableColumn className="hidden lg:table-cell">
                      Organization
                    </TableColumn>
                    <TableColumn>Year</TableColumn>
                  </TableHeader>
                  <TableBody>
                    {sensei.admin.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">
                          {row.role}{" "}
                          <dl className="lg:hidden font-normal">
                            <dt className="sr-only">Dojo</dt>
                            <dd className="text-gray-500 mt-1">
                              {row.organization}
                            </dd>
                          </dl>
                        </TableCell>
                        <TableCell className="hidden lg:table-cell">
                          {row.organization}
                        </TableCell>
                        <TableCell>{row.time}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Tab>
            </Tabs>
          </div>
        </div>
      ))}
    </section>
  );
}