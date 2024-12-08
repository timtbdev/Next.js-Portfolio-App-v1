import Button from "@/components/ui/button";
import Photo from "@/components/ui/photo";
import { ContentType } from "@/types";

interface Props {
  content: ContentType[];
}

export default function Description({ content }: Props) {
  return (
    <div className="mt-4 text-wrap text-lg leading-8 text-gray-600 dark:text-gray-400">
      {content.map((item, index) => (
        <div key={index} className="mt-4">
          {/* Render the text content */}
          <p>{item.text}</p>
          {/* Render the Photo component if image is present */}
          {item.image && <Photo src={item.image.src} alt={item.image.alt} />}
          {/* Render the Button component if url is present */}
          {item.url && <Button url={item.url} />}
        </div>
      ))}
    </div>
  );
}
