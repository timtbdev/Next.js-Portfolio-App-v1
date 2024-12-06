import Description from "@/components/ui/description";
import Divider from "@/components/ui/divider";
import Photo from "@/components/ui/photo";
import Title from "@/components/ui/title";
import Wrapper from "@/components/ui/wrapper";
import { blogConfig } from "@/config";

export default async function BlogPage() {
  const length = blogConfig.length - 1;
  return (
    <div>
      {blogConfig.map((blog, index) => (
        <div key={blog.id}>
          <Photo src={blog.image.src} alt={blog.image.alt} />
          <Wrapper>
            <Title title={blog.title} />
            <Description content={blog.content} />
          </Wrapper>
          {index != length && <Divider />}
        </div>
      ))}
    </div>
  );
}
