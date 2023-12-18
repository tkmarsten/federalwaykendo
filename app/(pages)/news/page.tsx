import getPostMetadata from "@/app/lib/get-post-metadata";
import PostPreview from "@/app/components/post-preview";

export default function Page() {
  const postMetadata = getPostMetadata().sort((a, b) => b.unix - a.unix);
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <main className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center">
      {postPreviews}
    </main>
  );
}
