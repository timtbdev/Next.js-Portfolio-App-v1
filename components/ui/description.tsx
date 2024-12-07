import Button from "@/components/ui/button";
import Photo from "@/components/ui/photo";
import { ContentType } from "@/types";

interface Props {
  content: ContentType[];
}

export default function Description({ content }: Props) {
  return (
    <div className="mt-4 text-wrap text-lg leading-8 text-gray-600 dark:text-gray-400">
      {content.map((content: ContentType, index: number) => (
        <div key={index} className="mt-4">
          <p>{content.text}</p>
          {content.image && (
            <Photo
              src={content.image.src}
              alt={content.image.alt}
              className="mt-4"
            />
          )}
          {content.url && <Button url={content.url} className="mt-4" />}
        </div>
      ))}
    </div>
  );
}
