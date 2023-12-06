import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Link,
  Button,
} from "@nextui-org/react";
import NextImage from "next/image";

export default function Classes() {
  const cardData = [
    {
      image: "beginning",
      title: "Beginning",
      link: "#",
      time: "6:15-7pm",
      body: "The starting point for all that are interested in kendo.",
    },
    {
      image: "continuing",
      title: "Continuing",
      link: "#",
      time: "6:15-7pm",
      body: "For those that have completed the beginning quarter.",
    },
    {
      image: "advanced",
      title: "Advanced",
      link: "#",
      time: "7-8:30pm",
      body: "Students that have earned uniform and armor are permitted to join the advanced class.",
    },
  ];

  return (
    <section>
      <p className="text-sm text-secondary">Classes</p>
      <div className="grid mt-2 gap-6 md:grid-cols-3">
        {cardData.map((data) => {
          return (
            <Card key={data.title}>
              <CardHeader>
                <NextImage
                  src={"/" + data.image + ".png"}
                  alt="Image"
                  width={80}
                  height={80}
                  className="aspect-square object-contain"
                />
                <div className="flex flex-col pl-4 text-start">
                  <p>{data.title}</p>
                  <p className="text-sm text-default-500">Tuesday</p>
                  <p className="text-sm text-default-500">{data.time}</p>
                </div>
              </CardHeader>
              <CardBody>
                <p>{data.body}</p>
              </CardBody>
              <CardFooter>
                <Button
                  href={data.link}
                  as={Link}
                  radius="sm"
                  size="md"
                  className="text-white font-medium p-2 bg-primary shadow mx-auto"
                >
                  Learn more
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
