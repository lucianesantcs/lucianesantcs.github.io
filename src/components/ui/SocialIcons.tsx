import { Download, Mail, ArrowUpRight } from "lucide-react";
import github16 from "@/assets/images/svg/github16.svg";
import linkedin16 from "@/assets/images/svg/linkedin16.svg";
import dribbble16 from "@/assets/images/svg/dribbble16.svg";

interface SocialIconsProps {
  showLabel?: boolean;
  position?: "vertical";
  showExternalLinkIcon?: boolean;
}

const SocialIcons = ({
  showLabel,
  position,
  showExternalLinkIcon = true,
}: SocialIconsProps) => {
  const setPosition = position === "vertical" ? "flex-col" : "";

  return (
    <nav className={`sm:hidden md:flex gap-3 ${setPosition}`}>
      <a href="" className="flex gap-3 items-center">
        <Download color="#e5e5e5" size={16} />
        {showLabel && (
          <span className="font-serif text-xs font-semibold uppercase">
            Download CV
          </span>
        )}

        {showExternalLinkIcon && <ArrowUpRight color="#e5e5e5" size={16} />}
      </a>
      <a href="" className="flex gap-3 items-center">
        <img src={github16} style={{ height: 16, width: 16 }} />
        {showLabel && (
          <span className="font-serif text-xs font-semibold uppercase">
            Github
          </span>
        )}
        {showExternalLinkIcon && <ArrowUpRight color="#e5e5e5" size={16} />}
      </a>
      <a href="" className="flex gap-3 items-center">
        <img src={linkedin16} style={{ height: 16, width: 16 }} />
        {showLabel && (
          <span className="font-serif text-xs font-semibold uppercase">
            Linkedin
          </span>
        )}

        {showExternalLinkIcon && <ArrowUpRight color="#e5e5e5" size={16} />}
      </a>
      <a href="" className="flex gap-3 items-center">
        <img src={dribbble16} style={{ height: 16, width: 16 }} />
        {showLabel && (
          <span className="font-serif text-xs font-semibold uppercase">
            Dribbble
          </span>
        )}

        {showExternalLinkIcon && <ArrowUpRight color="#e5e5e5" size={16} />}
      </a>
      <a href="" className="flex gap-3 items-center">
        <Mail color="#e5e5e5" size={16} />
        {showLabel && (
          <span className="font-serif text-xs font-semibold uppercase">
            Email
          </span>
        )}

        {showExternalLinkIcon && <ArrowUpRight color="#e5e5e5" size={16} />}
      </a>
    </nav>
  );
};

export default SocialIcons;
