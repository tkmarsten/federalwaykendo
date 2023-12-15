import getPostMetadata from "@/app/lib/get-post-metadata";
import PostPreview from "@/app/components/post-preview";

export default function News() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return <main>{postPreviews}</main>;
}
