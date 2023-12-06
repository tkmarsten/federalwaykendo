import { Button, Link, Divider } from "@nextui-org/react";
import NextImage from "next/image";
import Affiliations from "@/app/components/affiliations";

export default function Header() {
  return (
    <header className="min-h-screen grid lg:grid-cols-3 items-center max-lg:space-y-16">
      <div className="space-y-4 col-span-full lg:col-span-2 lg:max-w-lg max-lg:pt-4">
        <p className="text-3xl md:text-6xl leading-tight">
          Start your kendo journey here
        </p>
        <p className="text-sm">
          Learn and practice physical and mental discipline through the
          traditional Japanese martial art of kendo, the way of the sword.
        </p>
        <Button
          href="#"
          as={Link}
          radius="sm"
          size="md"
          variant="light"
          className="mr-4 font-medium ring-2 ring-inset ring-primary text-primary"
        >
          Learn more
        </Button>
        <Button
          href="#"
          as={Link}
          radius="sm"
          size="md"
          className="text-white font-medium bg-primary shadow"
        >
          Register
        </Button>
      </div>
      <div className="relative w-full max-w-[300px] h-[350px] mx-auto">
        <NextImage
          fill
          src="/header.jpg"
          alt="Picture of kendo"
          className="object-cover rounded-lg"
        />
        <div className="w-[70%] text-neutral-700 bg-secondary overflow-hidden p-3 absolute rounded-3xl bottom-1 shadow-md z-10 left-1/2 translate-x-[-50%] translate-y-[50%]">
          <p>🍁 Autumn Quarter</p>
          <p>📅 Sept - Dec</p>
        </div>
      </div>
      <div className="col-span-full">
        <p className="text-sm text-secondary">Affiliations</p>
        <Divider />
        <Affiliations />
        <Divider />
      </div>
    </header>
  );
}
