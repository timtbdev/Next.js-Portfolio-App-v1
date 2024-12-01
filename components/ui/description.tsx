import { cn } from "@/lib/utils";
import { ContentType } from "@/types";
import { Button, Photo } from "components/ui";
import { Link } from "lucide-react";
import { FC } from "react";

interface Props {
  content: ContentType[];
  className?: string;
}

const Description: FC<Props> = ({ content, className }) => {
  return (
    <div
      className={cn(
        className,
        "mt-4 text-wrap text-lg leading-8 text-gray-600 dark:text-gray-400",
      )}
    >
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
};

export default Description;
