import { Link, Button } from "@nextui-org/react";
import { SiGooglemaps } from "react-icons/si";
import NextImage from "next/image";
import dojoData from "@/app/data/dojo.json";

export default function Location() {
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
