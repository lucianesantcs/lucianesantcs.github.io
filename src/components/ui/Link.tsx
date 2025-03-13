import React, { ReactNode } from "react";

type LinkProps = {
  label?: string;
  showLabel?: boolean;
  url: string;
  className?: string;
  children?: ReactNode;
};

const Link = ({
  label,
  showLabel = true,
  className,
  url,
  children,
}: LinkProps) => {
  const childrenArray = React.Children?.toArray(children);
  const baseStyles = "flex gap-3 font-serif text-sm font-semibold";
  const linkStyles = `${baseStyles} ${className} max-w-max`.trim();

  return (
    <a href={url} title={label} target="_blank" className={linkStyles} referrerPolicy="no-referrer">
      {childrenArray?.length > 1 ? childrenArray[0] : ""}
      {showLabel && label}
      {childrenArray?.length > 1 ? childrenArray[1] : childrenArray[0]}
    </a>
  );
};

export default Link;
