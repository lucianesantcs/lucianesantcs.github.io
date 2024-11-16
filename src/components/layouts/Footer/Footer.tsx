import { ChevronUp } from "lucide-react";
import assinatura from "@/assets/images/svg/assinatura.svg";
import SocialIcons from "@/components/ui/SocialIcons";
import { socialIcons } from "@/shared/constants";

const Footer = () => {
  return (
    <footer className="max-w-144 mx-auto flex w-full justify-between px-3 py-4 md:px-10 lg:px-20 md:gap-28 lg:gap-40 mt-12">
      {socialIcons.map((socialIcon) => (
        <SocialIcons
          key={socialIcon.label}
          label={socialIcon.label}
          iconName={socialIcon.iconName}
          url={socialIcon.url}
          position="vertical"
          showExternalLinkIcon={false}
          showLabel={false}
        />
      ))}
      <img src={assinatura} />
      <ChevronUp color="#e5e5e5" size={16} />
    </footer>
  );
};

export default Footer;
