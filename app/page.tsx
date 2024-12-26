import PagePostItem from "@/components/pages/page-post-item";
import aboutContentShort from "@/config/pages/about-content-short";

export default async function HomePage() {
  return <PagePostItem content={aboutContentShort} />;
}
