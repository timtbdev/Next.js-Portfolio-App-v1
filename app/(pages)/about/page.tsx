import { Description, Photo, Wrapper } from "@/components/ui";
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
