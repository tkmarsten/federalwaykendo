import NextImage from "next/image";
import { Link, Divider } from "@nextui-org/react";

export default function Affiliations() {
  const data = [
    {
      src: "/kent.png",
      alt: "Kent Kendo Club logo",
      url: "https://www.kentkendo.org/",
    },
    { src: "/pnkf.png", alt: "PNKF logo", url: "https://www.pnkf.org/" },
    { src: "/auskf.jpg", alt: "AUSKF logo", url: "https://www.auskf.org/" },
  ];

  return (
    <section className="col-span-full">
      <p className="text-sm text-secondary font-semibold">Affiliations</p>
      <Divider />
      <div className="flex justify-around p-4">
        {data.map((image, index) => (
          <Link key={index} href={image.url} isExternal>
            <NextImage width={50} height={50} src={image.src} alt={image.alt} />
          </Link>
        ))}
      </div>
    </section>
  );
}
