import { Button, Link, Divider } from "@nextui-org/react";
import NextImage from "next/image";

export default function Header() {
  return (
    <header className="min-h-[calc(100vh-64px)] grid md:grid-cols-2 gap-8 items-center max-md:mt-8">
      <div className="flex flex-col space-y-4 justify-center md:col-span-1 lg:p-4">
        <p className="text-4xl lg:text-6xl leading-tight font-bold">
          Start your kendo journey here
        </p>
        <p>
          Learn and practice physical and mental discipline through the
          traditional Japanese martial art of kendo, the way of the sword.
        </p>
        <div>
          <Button
            href="#location"
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
      <div className="md:col-span-1 relative w-full h-80 lg:h-3/5">
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
