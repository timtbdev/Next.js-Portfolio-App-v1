import PagePostItem from "@/components/pages/page-post-item";
import aboutContentLong from "@/config/pages/about-content-long";

export default async function AboutPage() {
  return <PagePostItem content={aboutContentLong} />;
}
