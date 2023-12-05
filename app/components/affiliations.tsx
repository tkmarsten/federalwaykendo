import NextImage from "next/image";
import { Link } from "@nextui-org/react";

export default function Affiliations() {
  const data = [
    {
      src: "/kent.gif",
      alt: "Kent Kendo Club logo",
      url: "https://www.kentkendo.org/",
    },
    { src: "/pnkf.png", alt: "PNKF logo", url: "https://www.pnkf.org/" },
    { src: "/auskf.jpg", alt: "AUSKF logo", url: "https://www.auskf.org/" },
  ];

  return (
    <div className="flex justify-around p-4">
      {data.map((image, index) => (
        <Link key={index} href={image.url} isExternal>
          <NextImage width={50} height={50} src={image.src} alt={image.alt} />
        </Link>
      ))}
    </div>
  );
}
