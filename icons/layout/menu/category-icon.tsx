interface Props {
  className?: string;
}

export default function CategoryIcon({ className = "" }: Props) {
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
          opacity=".3"
          d="M17.5 20a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
          fill="currentColor"
        ></path>
        <path
          opacity=".3"
          d="M5 15.5h4v4H5v-4zm7-9.66L10.07 9h3.86L12 5.84z"
          fill="currentColor"
        ></path>
        <path
          d="M12 2l-5.5 9h11L12 2zm0 3.84L13.93 9h-3.87L12 5.84zM17.5 13c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 7a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5zM11 13.5H3v8h8v-8zm-2 6H5v-4h4v4z"
          fill="currentColor"
        ></path>
      </g>
    </svg>
  );
}
