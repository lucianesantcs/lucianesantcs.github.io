import { ReactNode } from "react";

type ButtonProps = {
  label?: string;
  showLabel?: boolean;
  style?: "outline";
  type?: "button" | "submit" | "reset";
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
};

const Button = ({
  label,
  showLabel = true,
  style,
  onClick,
  type = "button",
  className = "",
  children,
}: ButtonProps) => {
  const baseStyles = "flex gap-1 font-serif text-xs font-semibold";
  const outlineStyles =
    style === "outline" ? "border border-current px-2 py-1 rounded" : "";
  const buttonStyles = `${baseStyles} ${outlineStyles} ${className} max-w-max`.trim();

  return (
    <button type={type} onClick={onClick} className={buttonStyles}>
      {showLabel && label}
      {children}
    </button>
  );
};

export default Button;
