import { ArrowUpRight, MoveDown, MoveUp } from "lucide-react";


interface ButtonProps {
    label?: string;
    showLabel?: boolean;
    showIcon?: boolean;
    iconName?: any;
    style?: "outline"
  }

const Button = ({label, showLabel, showIcon, iconName, style }: ButtonProps) => {
    const icons = {
        ArrowUpRight: ArrowUpRight,
        MoveUp: MoveUp,
        MoveDown: MoveDown,
      }
      const Icon = (icons as any)[iconName];

  return (
    <button className="flex gap-1 font-serif text-xs font-semibold">
      {showLabel && label}

      {showIcon && <Icon size={16} />}
    </button>
  )
}

export default Button
