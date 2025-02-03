import Link from "./Link";
import Icon, { IconsProps } from "./Icon";

export type SocialIconsProps = {
  label?: string;
  url: string;
  iconName: IconsProps['iconName'];
  showLabel?: boolean;
  position?: "vertical";
  showExternalLinkIcon?: boolean;
};

const SocialIcons = ({ label, url, iconName = "ArrowUpRight", showLabel = true, position, showExternalLinkIcon = true }: SocialIconsProps) => {
  const setPosition = position === "vertical" ? "flex-col" : "";

  return (
    <Link
      key={label}
      showLabel={showLabel}
      url={url}
      label={label}
      className={`font-serif text-sm font-semibold lowercase ${setPosition}`}
    >
      <Icon iconName={iconName} />
      {showExternalLinkIcon && <Icon iconName="ArrowUpRight" />}
    </Link>
  );
};

export default SocialIcons;
