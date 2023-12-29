import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "@/app/lib/post-metadata";

export default function getPostMetadata(): PostMetadata[] {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
    const matterResult = matter(fileContents);

    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      location: matterResult.data.location,
      tag: matterResult.data.tag,
      preview: matterResult.data.preview,
      unix: Date.parse(matterResult.data.date),
      slug: fileName.replace(".md", ""),
    };
  });

  return posts;
};