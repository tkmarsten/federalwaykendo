import fs from "fs";
import { Image } from "@nextui-org/react";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "@/app/lib/get-post-metadata";

export default function Post({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const post = getPostContent(slug);

  return (
    <main>
      <p>{post.data.title}</p>
      <Markdown>{post.content}</Markdown>
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
