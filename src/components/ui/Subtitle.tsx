import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface SubtitleProps {
  children: ReactNode;
  className?: string;
  fontSize?: "text-xl" | "text-base" | "text-xs";
  type?: "h2" | "h3" | "h4";
  showDivider?: boolean;
}

const Subtitle = ({
  children,
  className,
  type: Component = "h2",
  fontSize = "text-xl",
  showDivider = true,
}: SubtitleProps) => {
  return (
    <div className="flex flex-col gap-2">
      <Component
        className={twMerge("font-medium font-serif", fontSize, className)}
      >
        {children}
      </Component>
      {showDivider && (
        <div className="flex gap-2">
          <div className="h-[2px] w-10 bg-current"></div>
          <div className="h-[2px] w-2 bg-current"></div>
        </div>
      )}
    </div>
  );
};

export default Subtitle;
