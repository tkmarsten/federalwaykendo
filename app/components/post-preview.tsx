import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Chip,
  Link,
} from "@nextui-org/react";
import { PostMetadata } from "@/app/lib/post-meta-data";

export default function PostPreview(props: PostMetadata) {
  return (
    <Link href={`/news/${props.slug}`}>
      <Card className="max-w-sm">
        <CardHeader>
          <Image
            src={`/news/` + props.preview}
            alt="placeholder"
            width={300}
            radius="sm"
            fallbackSrc="https://placehold.co/300x200"
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
