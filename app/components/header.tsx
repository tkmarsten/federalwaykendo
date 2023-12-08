import { Button, Link, Divider } from "@nextui-org/react";
import NextImage from "next/image";
import Affiliations from "@/app/components/affiliations";

export default function Header() {
  return (
    <header className="min-h-[calc(100vh-64px)] grid md:grid-cols-2 gap-8 items-center max-md:mt-8">
      <div className="flex flex-col space-y-4 justify-center md:col-span-1 md:h-4/5 lg:p-4">
        <p className="text-3xl lg:text-6xl leading-tight">
          Start your kendo journey here
        </p>
        <p className="text-sm">
          Learn and practice physical and mental discipline through the
          traditional Japanese martial art of kendo, the way of the sword.
        </p>
        <div>
          <Button
            href="#location"
            as={Link}
            radius="sm"
            className="mr-4 font-medium text-white bg-primary"
          >
            Learn more
          </Button>
          <Button
            href="/register"
            as={Link}
            radius="sm"
            variant="light"
            className="font-medium ring-2 ring-inset ring-primary text-primary"
          >
            Register
          </Button>
        </div>
      </div>
      <div className="md:col-span-1 relative w-full h-80 lg:h-4/5">
        <NextImage
          src="/header.jpg"
          alt="Picture of kendo"
          fill
          className="object-cover rounded-lg"
        />
      </div>
      {/*<div className="w-[70%] text-neutral-700 bg-secondary overflow-hidden p-3 absolute rounded-3xl bottom-1 shadow-md z-10 left-1/2 translate-x-[-50%] translate-y-[50%]">
          <p>🍁 Autumn Quarter</p>
          <p>📅 Sept - Dec</p>
  </div>*/}
      {/*<div className="col-span-full">
        <p className="text-sm text-secondary">Affiliations</p>
        <Divider />
        <Affiliations />
        <Divider />
</div>*/}
    </header>
  );
}
