import { Button, Link } from "@nextui-org/react";
import NextImage from "next/image";

export default function Header() {
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
