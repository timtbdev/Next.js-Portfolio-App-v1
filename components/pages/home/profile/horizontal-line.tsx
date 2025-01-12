const HorizontalLine: React.FC = () => (
  <div className="absolute inset-0 flex items-center" aria-hidden="true">
    <div className="h-[1px] w-full bg-gradient-to-r from-white via-gray-600/50 to-white opacity-80 dark:from-zinc-900/5 dark:via-white/20 dark:to-zinc-900/5"></div>
  </div>
);

export default HorizontalLine;
