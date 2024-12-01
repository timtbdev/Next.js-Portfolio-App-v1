import { Description, Divider, Photo, Title, Wrapper } from "@/components/ui";
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
