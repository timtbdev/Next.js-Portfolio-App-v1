import { getPostBySlug } from "@/lib/mdx";
import { format } from "date-fns";
import { MDXRemote } from "next-mdx-remote/rsc";
import { serialize } from "next-mdx-remote/serialize";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  const mdxSource = await serialize(post.content);

  return (
    <article className="prose mx-auto p-6">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-gray-500">
        {format(new Date(post.date), "MMMM dd, yyyy")}
      </p>
      <MDXRemote source={mdxSource} />
    </article>
  );
}
