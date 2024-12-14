interface Props {
  title: string;
}
export default function Title({ title }: Props) {
  return (
    <p className="scroll-m-20 pb-1 text-3xl font-semibold tracking-tight text-gray-900 first:mt-0 dark:text-gray-100">
      {title}
    </p>
  );
}
