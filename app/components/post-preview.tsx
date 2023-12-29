import { Card, CardHeader, CardBody, Chip, Link } from "@nextui-org/react";
import NextImage from "next/image";
import { PostMetadata } from "@/app/lib/post-metadata";

export default function PostPreview(props: PostMetadata) {
  return (
    <Link href={`/news/${props.slug}`}>
      <Card className="rounded-xl w-full">
        <CardHeader className="relative h-[300px]">
          <NextImage
            src={`/news/` + props.preview}
            alt="placeholder"
            fill
            className="rounded-[4px] object-cover p-2"
          />
        </CardHeader>
        <CardBody>
          <p className="text-lg font-semibold">{props.title}</p>
          <p className="text-sm text-neutral-400">{props.date}</p>
          <Chip variant="flat" size="sm" className="bg-neutral-300">
            {props.tag}
          </Chip>
        </CardBody>
      </Card>
    </Link>
  );
}
