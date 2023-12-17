import { Card, CardHeader, CardBody, Chip, Link } from "@nextui-org/react";
import clsx from "clsx";
import NextImage from "next/image";
import { PostMetadata } from "@/app/lib/post-meta-data";

export default function PostPreview(props: PostMetadata) {
  return (
    <Link href={`/news/${props.slug}`}>
      <Card className="max-w-sm rounded-xl">
        <CardHeader className="relative w-[300px] h-[200px] m-2">
          <NextImage
            src={`/news/` + props.preview}
            alt="placeholder"
            fill
            className="rounded-[4px] object-cover"
          />
        </CardHeader>
        <CardBody>
          <p className="text-lg font-semibold">{props.title}</p>
          <p className="text-sm text-neutral-400">{props.location}</p>
          <p>{props.date}</p>
          <Chip variant="flat" size="sm" className="bg-secondary">
            {props.tag}
          </Chip>
        </CardBody>
      </Card>
    </Link>
  );
}
