import { ChevronUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="max-w-144 mx-auto flex w-full justify-between px-3 py-10 md:px-10 lg:px-20 md:gap-28 lg:gap-40 mt-16">
      <span className="font-serif">
      © 2025 <strong>Luciane Santos</strong>
      </span>
      <ChevronUp color="#e5e5e5" size={16} />
    </footer>
  );
};

export default Footer;
