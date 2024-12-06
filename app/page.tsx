import Description from "@/components/ui/description";
import Photo from "@/components/ui/photo";
import Title from "@/components/ui/title";
import Wrapper from "@/components/ui/wrapper";
import { profileConfig } from "@/config";
import React from "react";

export default async function HomePage() {
  return (
    <div>
      <Photo src={profileConfig.image.src} alt={profileConfig.image.alt} />
      <Wrapper>
        <Title title={profileConfig.title} />
        <Description content={profileConfig.content} />
      </Wrapper>
    </div>
  );
}
