import { Download, Mail } from "lucide-react";
import github16 from "@/assets/images/svg/github16.svg";
import linkedin16 from "@/assets/images/svg/linkedin16.svg";
import dribbble16 from "@/assets/images/svg/dribbble16.svg";

interface SocialIconsProps {
  showLabel: boolean;
}

const SocialIcons = ({ showLabel }: SocialIconsProps) => {
  return (
    <nav className="sm:hidden md:flex gap-3">
      <a href="" className="flex gap-3 items-center">
        <Download color="#e5e5e5" size={16} />
        {showLabel && <span className="uppercase">Download CV</span>}
      </a>
      <a href="" className="flex gap-3 items-center">
        <img src={github16} style={{ height: 16, width: 16 }} />
        {showLabel && <span className="uppercase">Github</span>}
      </a>
      <a href="" className="flex gap-3 items-center">
        <img src={linkedin16} style={{ height: 16, width: 16 }} />
        {showLabel && <span className="uppercase">Linkedin</span>}
      </a>
      <a href="" className="flex gap-3 items-center">
        <img src={dribbble16} style={{ height: 16, width: 16 }} />
        {showLabel && <span className="uppercase">Dribbble</span>}
      </a>
      <a href="" className="flex gap-3 items-center">
        <Mail color="#e5e5e5" size={16} />
        {showLabel && <span className="uppercase">Email</span>}
      </a>
    </nav>
  );
};

export default SocialIcons;
