import { ReactNode } from "react";

type ButtonProps = {
  label?: string;
  showLabel?: boolean;
  style?: "outline";
  type?: "button" | "submit" | "reset";
  className?: string;
  children?: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
};

const Button = ({
  label,
  showLabel = true,
  style,
  onClick,
  type = "button",
  className = "",
  disabled = false,
  children,
}: ButtonProps) => {
  const baseStyles =
    "flex gap-1 font-serif text-xs font-semibold hover:text-amber-400 transition-colors duration-300 ease-in-out";
  const outlineStyles =
    style === "outline" ? "border border-current px-2 py-1 rounded" : "";
  const isDisabledClass = disabled ? "disabled:text-zinc-500" : "";
  const buttonStyles =
    `${baseStyles} ${outlineStyles} ${className} ${isDisabledClass} max-w-max`.trim();

  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonStyles}
      disabled={disabled}
    >
      {showLabel && label}
      {children}
    </button>
  );
};

export default Button;
