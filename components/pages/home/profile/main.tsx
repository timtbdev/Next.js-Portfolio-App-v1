import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SelectedProjectsButton from "./selected-projects-button";

export default function Profile() {
  return (
    <div id="heading" className="px-6 py-12 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <Avatar className="mx-auto mb-2 h-32 w-32 rounded-full shadow-md ring-1 ring-gray-300 dark:ring-zinc-700">
          <AvatarImage src="/images/profile.jpg" />
          <AvatarFallback>TM</AvatarFallback>
        </Avatar>
        <h6 className="mb-2">Welcome to my portfolio</h6>
        <h1 className="mb-2">Hello, I'm Tim.</h1>
        <h4 className="mt-8">
          I’m an Android developer based in the Bay Area who loves building
          user-friendly apps.
        </h4>
        <SelectedProjectsButton />
      </div>
    </div>
  );
}
