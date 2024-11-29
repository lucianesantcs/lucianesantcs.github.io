import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface TitleProps {
  children: ReactNode;
  className?: string;
  align?: "justify-center" | "justify-start";
}

const Title = ({ children, className, align = "justify-start" }: TitleProps) => {
  return (
    <div className={twMerge("w-full flex", align)}>
      <div className="flex flex-col gap-2">
        <h1
          className={twMerge(
            "font-medium font-serif text-xl md:text-2xl",
            className
          )}
        >
          {children}
        </h1>
        <div className="flex gap-2">
          <div className="h-[2px] w-10 bg-current"></div>
          <div className="h-[2px] w-2 bg-current"></div>
        </div>
      </div>
    </div>
  );
};

export default Title;
