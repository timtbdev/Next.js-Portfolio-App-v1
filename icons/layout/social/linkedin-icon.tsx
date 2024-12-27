import { cn } from "@/utils/helpers";

interface Props {
  className?: string;
}

export default function LinkedinIcon({ className = "" }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22 22"
      className={className}
      width="22"
      height="22"
    >
      <path
        fill="currentColor"
        d="M11,0C4.92,0,0,4.92,0,11s4.92,11,11,11,11-4.92,11-11S17.08,0,11,0ZM8.31,15.56h-2.23v-7.17h2.23v7.17ZM7.18,7.51c-.7,0-1.16-.5-1.16-1.11s.47-1.11,1.19-1.11,1.16.48,1.17,1.11c0,.62-.45,1.11-1.2,1.11ZM16.44,15.56h-2.23v-3.97c0-.92-.32-1.55-1.13-1.55-.62,0-.98.43-1.14.83-.06.15-.07.35-.07.56v4.13h-2.23v-4.88c0-.89-.03-1.64-.06-2.29h1.94l.1,1h.04c.29-.47,1.01-1.16,2.21-1.16,1.47,0,2.56.98,2.56,3.09v4.24Z"
      />
    </svg>
  );
}
