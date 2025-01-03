import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { shimmer, toBase64 } from "@/utils/helpers";
import { ChevronRightIcon } from "lucide-react";
import { Link } from "next-view-transitions";
import Image from "next/image";

export default function SingleProjectItem() {
  return (
    <div key="portfolio-app-02" className="relative">
      <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] bg-white shadow-sm ring-1 ring-black/5 dark:bg-zinc-900 lg:rounded-[calc(2rem+1px)]">
        <div className="mx-auto px-8 pb-3 pt-8 text-center sm:px-10 sm:pb-0 sm:pt-10">
          <p className="my-2 text-base tracking-tight">September 2019</p>
          <h2 className="mb-2">Portfolio App 2.0</h2>
          <p className="mb-4 max-w-lg">
            This portfolio app, built with Kotlin and Jetpack, uses MVVM, Room,
            and Coroutines for efficient offline and network syncing.
          </p>

          <Button
            asChild
            variant="ghost"
            className="text-primaryColor group mx-auto flex h-10 w-fit items-center justify-center rounded-md bg-transparent px-3 py-2 transition-all duration-100 ease-in-out"
          >
            <Link href="/projects/portfolio-app-02">
              Read more
              <ChevronRightIcon />
            </Link>
          </Button>
        </div>
        {/* Screenshots of Portfolio App 2.0 */}
        <div className="relative mt-8 grid w-full grid-cols-1 gap-x-4 gap-y-8 px-8 pb-8 sm:grid-cols-3 sm:px-10 sm:pb-10">
          <div className="col-span-1 flex w-[256px] flex-col items-center justify-center">
            <AspectRatio ratio={655 / 1387}>
              <Image
                src="/images/projects/portfolio-02/screen-01.png"
                alt="Screenshot of Portfolio App 2.0"
                className="object-cover"
                fill={true}
              />
            </AspectRatio>
          </div>
          <div className="col-span-1 flex w-[256px] flex-col items-center justify-center">
            <AspectRatio ratio={655 / 1387}>
              <Image
                src="/images/projects/portfolio-02/screen-01.png"
                alt="Screenshot of Portfolio App 2.0"
                fill={true}
                className="object-cover"
              />
            </AspectRatio>
          </div>
          <div className="col-span-1 flex w-[256px] flex-col items-center justify-center">
            <AspectRatio ratio={655 / 1387}>
              <Image
                src="/images/projects/portfolio-02/screen-01.png"
                alt="Screenshot of Portfolio App 2.0"
                className="object-cover"
                fill={true}
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    </div>
  );
}
