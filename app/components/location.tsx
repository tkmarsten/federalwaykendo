import { Link, Button } from "@nextui-org/react";
import { SiGooglemaps } from "react-icons/si";
import NextImage from "next/image";

export default function Location() {
  return (
    <section id="location">
      <p className="text-sm text-secondary">Location</p>
      <p className="text-xl">Federal Way Dojo</p>
      <p className="text-sm">
        Our dojo is located right off of Pacific Highway, near Celebration park
        at the{" "}
        <Link
          href="https://itallhappenshere.org/"
          className="underline text-black text-sm"
        >
          Federal Way Community Center.
        </Link>{" "}
        Our club has been meeting in the community center&apos;s multipurpose
        rooms for the past couple years.
      </p>
      <NextImage
        src="/location.jpg"
        width={1000}
        height={1000}
        alt="An image of the main entrance of Federal Way Community Center"
        className="mt-4 rounded-lg"
      />
      <Link
        href="https://www.absherco.com/project/federal-way-community-center/"
        className="text-black text-xs italic underline block"
      >
        Image source
      </Link>
      <div className="flex justify-center">
        <Button
          href="https://maps.app.goo.gl/P5N9cpwbbk7Jvgvw9"
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
