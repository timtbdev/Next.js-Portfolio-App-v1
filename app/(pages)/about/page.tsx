import Description from "@/components/ui/description";
import Photo from "@/components/ui/photo";
import Wrapper from "@/components/ui/wrapper";
import { aboutMeConfig } from "@/config";

export default async function AboutPage() {
  return (
    <div>
      <Photo src={aboutMeConfig.image.src} alt={aboutMeConfig.image.alt} />
      <Wrapper>
        <Description content={aboutMeConfig.content} />
      </Wrapper>
    </div>
  );
}
