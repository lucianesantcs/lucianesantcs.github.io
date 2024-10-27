import { Download, Mail } from "lucide-react";
import github16 from "@/assets/images/svg/github16.svg";
import linkedin16 from "@/assets/images/svg/linkedin16.svg";
import dribbble16 from "@/assets/images/svg/dribbble16.svg";

interface SocialIconsProps {
  showLabel?: boolean;
  position?: 'vertical';
}

const SocialIcons = ({ showLabel, position }: SocialIconsProps) => {
  const setPosition = position === 'vertical' ? 'flex-col' : '';

  return (
    <nav className={`sm:hidden md:flex gap-3 ${setPosition}`}>
      <a href="" className="flex gap-3 items-center">
        <Download color="#e5e5e5" size={16} />
        {showLabel && <span className="font-serif text-xs font-semibold uppercase">Download CV</span>}
      </a>
      <a href="" className="flex gap-3 items-center">
        <img src={github16} style={{ height: 16, width: 16 }} />
        {showLabel && <span className="font-serif text-xs font-semibold uppercase">Github</span>}
      </a>
      <a href="" className="flex gap-3 items-center">
        <img src={linkedin16} style={{ height: 16, width: 16 }} />
        {showLabel && <span className="font-serif text-xs font-semibold uppercase">Linkedin</span>}
      </a>
      <a href="" className="flex gap-3 items-center">
        <img src={dribbble16} style={{ height: 16, width: 16 }} />
        {showLabel && <span className="font-serif text-xs font-semibold uppercase">Dribbble</span>}
      </a>
      <a href="" className="flex gap-3 items-center">
        <Mail color="#e5e5e5" size={16} />
        {showLabel && <span className="font-serif text-xs font-semibold uppercase">Email</span>}
      </a>
    </nav>
  );
};

export default SocialIcons;
