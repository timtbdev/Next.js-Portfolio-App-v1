interface Props {
  className?: string;
}

export default function BlogIcon({ className = "" }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={className}
    >
      <g fill="none">
        <path
          opacity=".2"
          d="M5 5h4v4H5V5zm10 10h4v4h-4v-4zM5 15h4v4H5v-4zM16.66 4.52l-2.83 2.82 2.83 2.83 2.83-2.83-2.83-2.82z"
          fill="currentColor"
        ></path>
        <path
          d="M16.66 1.69L11 7.34 16.66 13l5.66-5.66-5.66-5.65zm-2.83 5.65l2.83-2.83 2.83 2.83-2.83 2.83-2.83-2.83zM3 3v8h8V3H3zm6 6H5V5h4v4zM3 21h8v-8H3v8zm2-6h4v4H5v-4zm8-2v8h8v-8h-8zm6 6h-4v-4h4v4z"
          fill="currentColor"
        ></path>
      </g>
    </svg>
  );
}
