"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC, useCallback, useEffect, useState } from "react";

interface Props {
  screenshots: string[];
  className?: string;
}

const Screenshots: FC<Props> = ({ screenshots = [], className }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [updateState, setUpdateState] = useState(false);

  const toggleUpdateState = useCallback(
    () => setUpdateState((prevState) => !prevState),
    [],
  );

  useEffect(() => {
    if (!api) return;

    setCount(screenshots.length);
    setCurrent(api.selectedScrollSnap() + 1);

    const handleSelect = () => setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect);
    };
  }, [api, screenshots.length]);

  useEffect(() => {
    if (!api) return;

    api.on("select", toggleUpdateState);
    api.on("reInit", toggleUpdateState);

    return () => {
      api.off("select", toggleUpdateState);
      api.off("reInit", toggleUpdateState);
    };
  }, [api, toggleUpdateState]);

  const numberOfSlides = api?.scrollSnapList().length || 0;
  const currentSlide = api?.selectedScrollSnap() || 0;

  const renderImage = (image: string, index: number, ratio: number) => (
    <Image
      src={image}
      alt={`Screenshot ${index + 1}`}
      title={`Screenshot ${index + 1}`}
      className="rounded-xl"
      width={700}
      height={700}
      priority={true}
      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, (max-width: 1536px) 20vw"
    />
  );

  return (
    <div className={cn("relative w-full", className)}>
      <Carousel setApi={setApi}>
        <CarouselContent>
          {screenshots.map((image, index) => (
            <CarouselItem key={index}>
              {renderImage(image, index, 20 / 14)}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 hidden size-10 sm:flex" />
        <CarouselNext className="absolute right-4 top-1/2 hidden size-10 sm:flex" />
      </Carousel>
      {numberOfSlides > 1 && (
        <div className="absolute bottom-4 mx-auto flex w-full flex-row items-center justify-center text-center sm:bottom-5">
          {Array.from({ length: numberOfSlides }, (_, i) => (
            <div
              key={i}
              className={`mx-1 mt-5 h-1.5 w-1.5 rounded-full p-0 ${
                i === currentSlide
                  ? "scale-125 transform bg-gray-800"
                  : "bg-white"
              }`}
              aria-label={`Go to screenshot ${i + 1}`}
              onClick={() => api?.scrollTo(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Screenshots;
