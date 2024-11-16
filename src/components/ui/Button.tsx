import { ArrowUpRight, LucideIcon, MoveDown, MoveUp } from "lucide-react";

interface ButtonProps {
  label?: string;
  showLabel?: boolean;
  showIcon?: boolean;
  iconName: IconType;
  style?: "outline";
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: () => void;
}

type IconType = "ArrowUpRight" | "MoveUp" | "MoveDown";

const iconMap: Record<IconType, LucideIcon> = {
  ArrowUpRight: ArrowUpRight,
  MoveUp: MoveUp,
  MoveDown: MoveDown,
};

const Button = ({
  label,
  showLabel = true,
  showIcon,
  iconName,
  style,
  onClick,
  type = "button",
  className = "",
}: ButtonProps) => {
  const Icon = iconMap[iconName];
  const baseStyles = "flex gap-1 font-serif text-xs font-semibold";
  const outlineStyles =
    style === "outline" ? "border border-current px-2 py-1 rounded" : "";
  const buttonStyles = `${baseStyles} ${outlineStyles} ${className}`.trim();

  return (
    <button type={type} onClick={onClick} className={buttonStyles}>
      {showLabel && label}

      {showIcon && Icon && <Icon size={16} />}
    </button>
  );
};

export default Button;
