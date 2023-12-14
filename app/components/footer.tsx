import { Divider, Link } from "@nextui-org/react";
import { SiGmail, SiGooglecalendar } from "react-icons/si";
import NextImage from "next/image";

export default function Footer() {
  return (
    <footer className="bg-neutral-800 text-white py-10">
      <div className="max-w-screen-xl m-auto px-6">
        <div className="space-y-4 text-sm">
          <div className="basis-1/2">
            <p className="text-secondary">Location</p>
            <p>Federal Way Community Center</p>
            <p>876 S 333rd St, Federal Way, WA 98003</p>
          </div>
          <div className="basis-1/2">
            <p className="text-secondary">Practice Hours</p>
            <p className="font-semibold">Tuesday</p>
            <p>Beginning 6:15-7pm</p>
            <p>Continuing 6:15-7pm</p>
            <p>Advanced 7-8:30pm</p>
          </div>
        </div>
        <Link
          href="mailto:federalwaykendoclub@gmail.com"
          className="text-white text-sm mr-4 mt-4"
        >
          <div className="flex flex-col place-items-center">
            <SiGmail className="text-xl" />
            <p>Contact</p>
          </div>
        </Link>
        <Link
          href="https://calendar.google.com/calendar/u/1?cid=ZmVkZXJhbHdheWtlbmRvY2x1YkBnbWFpbC5jb20"
          className="text-white text-sm"
        >
          <div className="flex flex-col place-items-center">
            <SiGooglecalendar className="text-xl" />
            <p>Google Calendar</p>
          </div>
        </Link>
        <Divider className="bg-neutral-600 my-4" />
        <div className="flex justify-center my-2">
          <NextImage
            src="/logo.png"
            alt="Federal Way Kendo logo"
            width={50}
            height={50}
          />
        </div>
        <p className="text-center">&copy; 2023 Federal Way Kendo Club</p>
      </div>
    </footer>
  );
}
