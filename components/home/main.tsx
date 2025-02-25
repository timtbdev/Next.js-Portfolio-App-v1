import { getPageBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import Avatar from "./avatar";
import Title from "./title";

// Custom components for MDXRemote.
const components = {
  p: (props: React.HTMLProps<HTMLParagraphElement>) => (
    <p
      className="my-2 text-pretty text-lg/7 text-gray-600 dark:text-zinc-400"
      {...props}
    />
  ),
  strong: (props: React.HTMLProps<HTMLElement>) => (
    <strong
      className="font-semibold text-gray-800/90 dark:text-zinc-300/90"
      {...props}
    />
  ),
};

const Profile = () => {
  const { content, data } = getPageBySlug("home");

  return (
    <div id="heading" className="px-6 pt-4 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <Avatar image={data.imageUrl} initials={data.initials} />
        <Title title={data.title} />
        <MDXRemote source={content} components={components} />
      </div>
    </div>
  );
};

export default Profile;
