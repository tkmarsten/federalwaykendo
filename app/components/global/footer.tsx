import { Divider, Link } from "@nextui-org/react";
import { SiGmail, SiGooglecalendar } from "react-icons/si";
import NextImage from "next/image";
import dojoData from "@/app/data/dojo.json";

export default function Footer() {
  return (
    <footer className="bg-neutral-800 text-white py-10">
      <div className="max-w-screen-xl m-auto px-6">
        <div className="space-y-4 text-sm flex flex-col lg:flex-row">
          <div className="lg:basis-1/2">
            <p className="text-secondary">Location</p>
            <p>{dojoData.facilityName}</p>
            <p>{dojoData.address}</p>
          </div>
          <div className="lg:basis-1/2">
            <p className="text-secondary">Practice Hours</p>
            <p className="font-semibold">Tuesday</p>
            <p>Beginning 6:15-7pm</p>
            <p>Continuing 6:15-7pm</p>
            <p>Advanced 7-8:30pm</p>
          </div>
        </div>
        <Link
          href={`mailto:${dojoData.email}`}
          className="text-white text-sm mr-4 mt-4"
        >
          <div className="flex flex-col place-items-center">
            <SiGmail className="text-xl" />
            <p>Contact</p>
          </div>
        </Link>
        <Link href={dojoData.calendar} className="text-white text-sm">
          <div className="flex flex-col place-items-center">
            <SiGooglecalendar className="text-xl" />
            <p>Google Calendar</p>
          </div>
        </Link>
        <Divider className="bg-neutral-600 my-4" />
        <div className="flex justify-center my-2">
          <NextImage
            src="/logos/logo.png"
            alt={`${dojoData.name} Kendo logo`}
            width={50}
            height={50}
          />
        </div>
        <p className="text-center">&copy; 2025 {dojoData.name} Kendo Club</p>
      </div>
    </footer>
  );
}
