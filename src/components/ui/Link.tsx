import React, { ReactNode } from "react";

type LinkProps = {
  label?: string;
  showLabel?: boolean;
  url: string;
  className?: string;
  children?: ReactNode;
  disabled?: boolean;
};

const Link = ({
  label,
  showLabel = true,
  className,
  url,
  children,
  disabled
}: LinkProps) => {
  const childrenArray = React.Children?.toArray(children);
  const baseStyles = "flex gap-3 font-serif text-sm font-semibold";
  const isDisabledClass = disabled ? 'text-zinc-500 cursor-not-allowed' : "";
  const linkStyles = `${baseStyles} ${className} max-w-max ${isDisabledClass}`.trim();

  return (
    <a href={disabled ? '' : url} title={label} target="_blank" className={linkStyles} referrerPolicy="no-referrer">
      {childrenArray?.length > 1 ? childrenArray[0] : ""}
      {showLabel && label}
      {childrenArray?.length > 1 ? childrenArray[1] : childrenArray[0]}
    </a>
  );
};

export default Link;
