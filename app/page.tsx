import { Description, Photo, Title, Wrapper } from "@/components/ui";
import { profileConfig } from "@/config";
import React from "react";

interface HomePageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function HomePage({ searchParams }: HomePageProps) {
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
