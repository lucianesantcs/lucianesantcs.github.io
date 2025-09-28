import { ArrowUpRight, Download, LucideIcon, Mail, MoveDown, MoveUp } from "lucide-react";
import github16 from "@/assets/images/svg/github16.svg";
import linkedin16 from "@/assets/images/svg/linkedin16.svg";
import dribbble16 from "@/assets/images/svg/dribbble16.svg";

export type IconsProps = {
  iconName: IconType;
  iconSize?: number;
};

type LucideIconType = "ArrowUpRight" | "MoveUp" | "MoveDown" | "Mail" | "Download";
type StaticIconType = "Github16" | "Linkedin16" | "Dribbble16";
type IconType = LucideIconType | StaticIconType

const lucideIconMap: Record<LucideIconType, LucideIcon> = {
  ArrowUpRight: ArrowUpRight,
  MoveUp: MoveUp,
  MoveDown: MoveDown,
  Mail: Mail,
  Download: Download
};

const staticIconMap: Record<StaticIconType, string> = {
  Github16: github16,
  Linkedin16: linkedin16,
  Dribbble16: dribbble16
}

const Icon = ({ iconName, iconSize = 16 }: IconsProps) => {
  if (iconName in lucideIconMap) {
    const Icon = lucideIconMap[iconName as LucideIconType];
    return <Icon size={iconSize} />;
  } else {
    return <img src={staticIconMap[iconName as StaticIconType]} width={iconSize} height={iconSize}  alt={iconName}/>;
  }
};

export default Icon;
