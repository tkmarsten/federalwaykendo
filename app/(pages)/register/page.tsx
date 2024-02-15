import { Card, CardHeader, CardBody, Button, Link } from "@nextui-org/react";
import NextImage from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
};

export default function Page() {
  const data = [
    {
      src: "beginning",
      title: "Beginning",
      time: "6:15-7pm",
      url: "https://rec.cityoffederalway.com/wbwsc/webtrac.wsc/iteminfo.html?Module=AR&FMID=19710558&InterfaceParameter=WebTrac_1",
    },
    {
      src: "continuing",
      title: "Continuing",
      time: "6:15-7pm",
      url: "https://rec.cityoffederalway.com/wbwsc/webtrac.wsc/iteminfo.html?Module=AR&FMID=19710583&InterfaceParameter=WebTrac_1",
    },
    {
      src: "advanced",
      title: "Advanced",
      time: "7-8:30pm",
      url: "https://rec.cityoffederalway.com/wbwsc/webtrac.wsc/iteminfo.html?Module=AR&FMID=19710608&InterfaceParameter=WebTrac_1",
    },
  ];

  return (
    <main className="min-h-screen space-y-20">
      <div className="w-full flex flex-col md:flex-row text-black bg-secondary p-4 rounded-lg gap-4 justify-around">
        <div>
          <p className="text-sm">Current quarter</p>
          <p>Autumn, 2023</p>
          <p>September 19 - December 12</p>
        </div>
        <div>
          <p className="text-sm">Next quarter</p>
          <p>Winter, 2024</p>
          <p>January 9 - March 12</p>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-10">
        {data.map((data, index) => (
          <Card key={index} className="relative overflow-visible">
            <NextImage
              src={"/icons/" + data.src + ".png"}
              alt="Shinai"
              width={60}
              height={20}
              className="aspect-square object-contain absolute left-1/2 translate-x-[-50%] translate-y-[-50%] bg-slate-200 shadow-sm rounded-full"
            />
            <CardHeader className="justify-center pt-10">
              <p className="text-lg">{data.title}</p>
            </CardHeader>
            <CardBody>
              <p>Tuesday</p>
              <p>{data.time}</p>
              <Button
                href={data.url}
                as={Link}
                radius="sm"
                size="md"
                isExternal
                className="text-white font-medium p-2 bg-primary shadow mx-auto"
              >
                Register
              </Button>
            </CardBody>
          </Card>
        ))}
      </div>
    </main>
  );
}
