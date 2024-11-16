import { ArrowUpRight, Download, LucideIcon, Mail, MoveDown, MoveUp } from "lucide-react";

export type IconsProps = {
  iconName: IconType;
  iconSize?: number;
};

type IconType = "ArrowUpRight" | "MoveUp" | "MoveDown" | "Mail" | "Download";

const iconMap: Record<IconType, LucideIcon> = {
  ArrowUpRight: ArrowUpRight,
  MoveUp: MoveUp,
  MoveDown: MoveDown,
  Mail: Mail,
  Download: Download
};

const Icon = ({ iconName, iconSize = 16 }: IconsProps) => {
  const Icon = iconMap[iconName];

  return <Icon size={iconSize} />;
};

export default Icon;
