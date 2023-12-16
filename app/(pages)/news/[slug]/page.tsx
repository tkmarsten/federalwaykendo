import fs from "fs";
import { Image, Link } from "@nextui-org/react";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "@/app/lib/get-post-metadata";
import { FiArrowLeft } from "react-icons/fi";

export default function Post({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const post = getPostContent(slug);

  return (
    <main className="min-h-screen max-w-screen-xl mt-16 mx-auto">
      <Link href="/news">
        <FiArrowLeft />
        All News
      </Link>
      <header className="flex flex-col lg:flex-row justify-between gap-4">
        <div>
          <p className="text-5xl">{post.data.title}</p>
          <p className="text-neutral-500">{post.data.date}</p>
        </div>
        <Image
          src={`/news/` + post.data.preview}
          alt="Preview image of the news post"
          width={450}
          radius="sm"
          fallbackSrc="https://placehold.co/450"
        />
      </header>
      <article className="prose lg:prose-xl max-w-screen-md mx-auto">
        <Markdown>{post.content}</Markdown>
      </article>
    </main>
  );
}

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};