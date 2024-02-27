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
      url: "https://rec.cityoffederalway.com/wbwsc/webtrac.wsc/iteminfo.html?Module=AR&FMID=19711199&InterfaceParameter=WebTrac_1",
    },
    {
      src: "continuing",
      title: "Continuing",
      time: "6:15-7pm",
      url: "https://rec.cityoffederalway.com/wbwsc/webtrac.wsc/iteminfo.html?Module=AR&FMID=19711212&InterfaceParameter=WebTrac_1",
    },
    {
      src: "advanced",
      title: "Advanced",
      time: "7-8:30pm",
      url: "https://rec.cityoffederalway.com/wbwsc/webtrac.wsc/iteminfo.html?Module=AR&FMID=19711242&InterfaceParameter=WebTrac_1",
    },
  ];

  return (
    <main className="min-h-screen space-y-20">
      <section>
        <p className="text-4xl mb-16">Sign Up for Spring Quarter Now!</p>
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
      </section>
      <section className="space-y-4">
        <p className="text-4xl mb-4">2024 Schedule</p>
        <div className="bg-white rounded-md p-4 border-s-8 border-indigo-700">
          <p className="text-sm">Current quarter</p>
          <p>Winter</p>
          <p>January 9 - March 12</p>
        </div>
        <div className="bg-white rounded-md p-4 border-s-8 border-green-600">
          <p>Spring</p>
          <p>March 19 - May 28</p>
        </div>
        <div className="bg-white rounded-md p-4 border-s-8 border-amber-400">
          <p>Summer</p>
          <p>June 4 - August 17</p>
        </div>
        <div className="bg-white rounded-md p-4 border-s-8 border-orange-500">
          <p>Autumn</p>
          <p>October 1 - December 17 (Beginning)</p>
          <p>September 17 - December 17 (Continuing, Advanced)</p>
        </div>
      </section>
    </main>
  );
}
