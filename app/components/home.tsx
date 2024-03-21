"use client";
import { Button, Link, Accordion, AccordionItem } from "@nextui-org/react";
import NextImage from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { SiGooglemaps } from "react-icons/si";
import dojoData from "@/app/data/dojo.json";

export function Header() {
  return (
    <header className="min-h-[calc(100vh-64px)] mt-8 lg:mt-16 space-y-8 lg:space-y-16">
      <div className="max-w-screen-sm text-center mx-auto space-y-4">
        <p className="text-4xl lg:text-6xl leading-tight font-bold">
          Start Your Kendo Journey Here
        </p>
        <p>
          Learn the traditional Japanese martial art of kendo, the way of the
          sword.
        </p>
        <div>
          <Button
            href="#scrollto"
            as={Link}
            radius="sm"
            className="mr-4 font-medium text-white bg-primary shadow"
          >
            Learn more
          </Button>
          <Button
            href="/register"
            as={Link}
            radius="sm"
            variant="light"
            className="font-medium ring-2 ring-inset ring-primary text-primary shadow"
          >
            Register
          </Button>
        </div>
      </div>
      <div className="relative w-full h-[75vh]">
        <NextImage
          src="/header.jpg"
          alt="Picture of kendo"
          fill
          className="object-cover rounded-lg"
        />
      </div>
    </header>
  );
}

export function Classes() {
  const data = [
    {
      image: "beginning",
      title: "Beginning",
      link: "/curriculum#beginning",
      time: "6:15-7pm",
      body: "Learn the basic etiquette, manners, and foundations of kendo.",
    },
    {
      image: "continuing",
      title: "Continuing",
      link: "/curriculum#continuing",
      time: "6:15-7pm",
      body: "Build upon what you have learned from the beginning quarter, combining techniques and applying them further.",
    },
    {
      image: "advanced",
      title: "Advanced",
      link: "/curriculum#advanced",
      time: "7-8:30pm",
      body: "Utilize advanced techniques in real scenarios such as sparring, tournaments, and grade testings.",
    },
  ];

  return (
    <section id="scrollto">
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
              src={"/icons/" + data.image + ".png"}
              alt="Image"
              width={80}
              height={80}
              className="aspect-square object-contain"
            />
            <p className="text-xl font-medium">{data.title}</p>
            <p className="text-sm text-default-500">Tuesday</p>
            <p className="text-sm text-default-500">{data.time}</p>
            <p className="mt-2">{data.body}</p>
            <Button
              as={Link}
              href={data.link}
              variant="light"
              size="lg"
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

export function Location() {
  return (
    <section>
      <p className="text-sm text-secondary font-semibold">Location</p>
      <div className="flex flex-col lg:flex-row-reverse gap-4 mt-2">
        <div className="lg:basis-2/5">
          <p className="text-xl lg:text-2xl font-medium">{`${dojoData.name} Dojo`}</p>
          <p className="text-sm lg:text-base">
            Our dojo is located right off of Pacific Highway, near Celebration
            park at the{" "}
            <Link
              href={dojoData.facilityWebsite}
              className="underline text-black text-sm"
              isExternal
            >
              Federal Way Community Center.
            </Link>{" "}
            Our club has been meeting in the community center&apos;s
            multipurpose rooms for the past couple years.
          </p>
        </div>
        <div>
          <NextImage
            src="/location.jpg"
            width={1000}
            height={1000}
            alt="An image of the main entrance of Federal Way Community Center"
            className="rounded-lg"
          />
          <Link
            href="https://www.absherco.com/project/federal-way-community-center/"
            className="text-black text-xs italic underline block"
          >
            Image source
          </Link>
        </div>
      </div>
      <div className="flex justify-center">
        <Button
          href={dojoData.maps}
          as={Link}
          isExternal
          radius="sm"
          size="md"
          startContent={<SiGooglemaps />}
          className="text-white font-medium bg-primary shadow mt-6"
        >
          Google Maps
        </Button>
      </div>
    </section>
  );
}

export function Register() {
  return (
    <section>
      <p className="text-sm text-secondary font-semibold">Register</p>
      <p className="text-2xl lg:text-4xl leading-tight font-bold mt-2">
        Ready to start?
      </p>
      <p>
        Sign up for one of our classes today or check when the next enrollment
        period begins!
      </p>
      <Button
        href="/register"
        as={Link}
        radius="sm"
        className="w-full h-[50px] text-xl text-white font-medium bg-primary shadow place-self-center mt-4"
      >
        Register
      </Button>
    </section>
  );
}

export function FAQ() {
  const data = [
    {
      title: "When am I able to start kendo?",
      body: "New student intake is during the first two weeks of every quarter. You may check our website or the parks department for starting dates. We typically start new quarters in January, March, June, and September.",
    },
    {
      title: "How much does kendo cost?",
      body: "Classes are priced at around $10 per session by the parks department. Quarters can typically range from $100-$130.",
    },
    {
      title: "What do I need before joining kendo?",
      body: "Nothing is needed before attending your first class. We provide swords (shinai) to all new students to purchase for $30. A shinai is the only required equipment for beginners.",
    },
    {
      title: "Can I do a free trial of kendo?",
      body: "No, we currently do not offer any free trials for kendo due to liability. All students must be registered in the class to participate. We always encourage prospective students to come observe the class, free of charge!",
    },
  ];

  return (
    <section className="py-16">
      <p className="text-sm text-secondary font-semibold">FAQs</p>
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
      <div className="mt-8">
        <p className="text-xl lg:text-2xl font-semibold text-center">
          Still have questions?
        </p>
        <p className="text-sm lg:text-base text-center">
          View our full FAQ page or contact us with any further questions.
        </p>
        <div className="flex justify-center gap-8 mt-4">
          <Button
            as={Link}
            href="/faq"
            radius="sm"
            size="md"
            variant="light"
            className="font-medium ring-2 ring-inset ring-primary text-primary shadow"
          >
            FAQ
          </Button>
          <Button
            as={Link}
            href={`mailto:${dojoData.email}`}
            radius="sm"
            size="md"
            className="text-white font-medium bg-primary shadow"
          >
            Contact
          </Button>
        </div>
      </div>
    </section>
  );
}
