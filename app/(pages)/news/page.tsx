import getPostMetadata from "@/app/lib/get-post-metadata";
import PostPreview from "@/app/components/post-preview";

export default function News() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <main className="my-16 flex flex-col items-center gap-4">
      {postPreviews}
    </main>
  );
}
