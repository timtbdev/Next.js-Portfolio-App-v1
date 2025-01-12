"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import React, { FC, useCallback, useEffect, useMemo, useState } from "react";

interface Props {
  screenshots: string[];
}

const Screenshots: FC<Props> = ({ screenshots = [] }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [state, setState] = useState({ current: 0, updateState: false });

  const count = useMemo(() => screenshots.length, [screenshots]);

  const toggleUpdateState = useCallback(
    () =>
      setState((prevState) => ({
        ...prevState,
        updateState: !prevState.updateState,
      })),
    [],
  );

  useEffect(() => {
    if (!api) return;

    setState((prevState) => ({
      ...prevState,
      current: api.selectedScrollSnap() + 1,
    }));
  }, [api, screenshots]);

  const numberOfSlides = api?.scrollSnapList().length || 0;
  const currentSlide = api?.selectedScrollSnap() || 0;

  const renderImage = (image: string, index: number, ratio: number) => (
    <AspectRatio key={index} ratio={ratio}>
      <Image
        src={image}
        alt={`Screenshot ${index + 1}`}
        className="object-cover"
        fill={true}
      />
    </AspectRatio>
  );

  return (
    <>
      {/* Desktop view */}
      <div className="relative mt-8 hidden w-full grid-cols-1 gap-x-4 gap-y-8 px-8 pb-8 sm:grid sm:grid-cols-3 sm:px-10 sm:pb-10">
        {screenshots.map((image, index) => (
          <div
            key={index}
            className="col-span-1 flex flex-col items-center justify-center"
          >
            {renderImage(image, index, 10 / 21)}
          </div>
        ))}
      </div>
      {/* Mobile view */}
      <div className="mx-auto mt-8 w-full max-w-xs px-8 pb-8 sm:px-10 sm:pb-10 md:hidden">
        <Carousel setApi={setApi} className="w-full max-w-xs">
          <CarouselContent>
            {screenshots.map((image, index) => (
              <CarouselItem key={index}>
                {renderImage(image, index, 9.5 / 20)}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-2" />
          <CarouselNext className="mr-2" />
        </Carousel>
        {numberOfSlides > 1 && (
          <div className="flex justify-center">
            {Array.from({ length: numberOfSlides }, (_, i) => (
              <Button
                key={i}
                className={`mx-1 mt-5 h-1.5 w-1.5 rounded-full p-0 ${
                  i === currentSlide
                    ? "scale-125 transform bg-gray-500 dark:bg-gray-400"
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => api?.scrollTo(i)}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Screenshots;
