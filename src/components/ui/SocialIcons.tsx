import Link from "./Link";
import Icon, { IconsProps } from "./Icon";
import { twMerge } from "tailwind-merge";

export type SocialIconsProps = {
  label?: string;
  url: string;
  iconName: IconsProps["iconName"];
  showLabel?: boolean;
  position?: "vertical";
  showExternalLinkIcon?: boolean;
  className?: string;
};

const SocialIcons = ({
  label,
  url,
  iconName = "ArrowUpRight",
  showLabel = true,
  position,
  showExternalLinkIcon = true,
  className,
}: SocialIconsProps) => {
  const setPosition = position === "vertical" ? "flex-col" : "";

  return (
    <Link
      key={label}
      showLabel={showLabel}
      url={url}
      label={label}
      className={twMerge(
        `font-serif text-sm font-semibold lowercase ${setPosition}`,
        className
      )}
    >
      <Icon iconName={iconName} />
      {showExternalLinkIcon && <Icon iconName="ArrowUpRight" />}
    </Link>
  );
};

export default SocialIcons;
