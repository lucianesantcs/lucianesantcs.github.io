import logo24 from "@/assets/images/svg/logo24.svg";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { useMediaQuery } from "usehooks-ts";

const Header = ({ className }: { className?: string }) => {
  const smBreakPoint = useMediaQuery("(max-width: 640px)");
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  function setNavClasses(nav: boolean) {
    if (nav) {
      return "flex flex-col gap-5 absolute bg-zinc-900 p-4 rounded w-5/6 box-border top-custom-10 right-3 z-10";
    } else if (smBreakPoint) {
      return "hidden";
    }
    return "flex";
  }

  const navClasses = setNavClasses(nav);

  return (
    <header
      className={twMerge(
        "max-w-144 mx-auto flex justify-between md:justify-start px-3 py-10 md:px-10 lg:px-20 md:gap-14 lg:gap-40",
        className
      )}
    >
      <img
        src={logo24}
        alt="Logo com símbolo de código e camadas representando design"
      />
      <nav className={twMerge(`${navClasses} md:flex-row md:gap-16`)}>
        <a href="#sobre">Sobre</a>
        <a href="#experiencia">Experiência</a>
        <a href="#trabalhos">Trabalhos</a>
        <a href="#feedbacks">Feedbacks</a>
        <a href="#contato">Contato</a>
      </nav>
      <button
        className="block md:hidden p-2 relative"
        onClick={handleNav}
      >
        {nav ? (
          <X color="#e5e5e5" size={16} />
        ) : (
          <Menu color="#e5e5e5" size={16} />
        )}
      </button>
    </header>
  );
};

export default Header;
