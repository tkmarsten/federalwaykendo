import { Link, Button } from "@nextui-org/react";
import NextImage from "next/image";
import { FaArrowRight } from "react-icons/fa6";

export default function Classes() {
  const data = [
    {
      image: "beginning",
      title: "Beginning",
      link: "#",
      time: "6:15-7pm",
      body: "Learn the basic etiquette, manners, and foundations of kendo.",
    },
    {
      image: "continuing",
      title: "Continuing",
      link: "#",
      time: "6:15-7pm",
      body: "Build upon what you have learned from the beginning quarter, combining techniques and applying them further.",
    },
    {
      image: "advanced",
      title: "Advanced",
      link: "#",
      time: "7-8:30pm",
      body: "Utilize advanced techniques in real scenarios such as sparring, tournaments, and grade testings.",
    },
  ];

  return (
    <section>
      <p className="text-sm text-secondary font-semibold">Classes</p>
      <div className="flex flex-col lg:flex-row gap-4">
        <p className="text-3xl font-semibold basis-1/2">
          Kendo for All Skill Levels
        </p>
        <p className="text-sm lg:text-base basis-1/2">
          We offer classes for any skill level for prospective and current
          students of kendo. Those with no kendo experience will always start in
          the beginning class, and will continue on provided they have
          demonstrated the neccessary skill. For all levels, we emphasize the
          importance of basics and strong foundations.
        </p>
      </div>
      <div className="grid md:grid-cols-3 mt-8 lg:mt-16 gap-8">
        {data.map((data) => (
          <div key={data.title} className="flex flex-col">
            <NextImage
              src={"/" + data.image + ".png"}
              alt="Image"
              width={80}
              height={80}
              className="aspect-square object-contain"
            />
            <p className="text-lg font-medium">{data.title}</p>
            <p className="text-sm text-default-500">Tuesday</p>
            <p className="text-sm text-default-500">{data.time}</p>
            <p className="text-sm">{data.body}</p>
            <Button
              as={Link}
              href={data.link}
              variant="light"
              disableAnimation
              endContent={<FaArrowRight />}
              className="p-0 text-primary justify-start mt-auto"
              data-hover="disable"
            >
              Learn more
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
