import logo24 from "@/assets/images/svg/logo24.svg";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { useMediaQuery } from "usehooks-ts";
import { motion } from "motion/react";

const Header = ({ className }: { className?: string }) => {
  const smBreakPoint = useMediaQuery("(max-width: 767px)");
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (nav) {
      setNav(false);
    }

    event.preventDefault();

    const targetId = event.currentTarget.getAttribute("href")?.replace("#", "");
    const targetElement = document.getElementById(targetId ?? "");

    if (targetElement) {
      const headerHeight = document.querySelector("header")?.offsetHeight ?? 0;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;

      const offsetPosition = elementPosition + scrollPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      window.history.pushState({}, "", `#${targetId}`);
    }
  };

  function setNavClasses(nav: boolean) {
    if (nav) {
      return "flex flex-col gap-5 absolute text-zinc-950 bg-zinc-50 p-4 rounded w-5/6 box-border top-custom-10 right-5 z-10";
    } else if (smBreakPoint) {
      return "hidden";
    }
    return "flex";
  }

  const navClasses = setNavClasses(nav);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={twMerge(
        "bg-zinc-950 sticky top-0 z-10 max-w-144 mx-auto flex justify-between md:justify-start px-3 py-10 md:px-10 lg:px-20 md:gap-14 lg:gap-40",
        className
      )}
    >
      <img
        src={logo24}
        alt="Logo com símbolo de código e camadas representando design"
      />
      <nav className={twMerge(`${navClasses} md:flex-row md:gap-16`)}>
        <a
          className="hover:text-amber-400 transition-colors duration-300 ease-in-out"
          href="#sobre"
          onClick={(event) => handleScroll(event)}
        >
          Sobre
        </a>
        <a
          className="hover:text-amber-400 transition-colors duration-300 ease-in-out"
          href="#experiencia"
          onClick={(event) => handleScroll(event)}
        >
          Experiência
        </a>
        <a
          className="hover:text-amber-400 transition-colors duration-300 ease-in-out"
          href="#trabalhos"
          onClick={(event) => handleScroll(event)}
        >
          Trabalhos
        </a>
        <a
          className="hover:text-amber-400 transition-colors duration-300 ease-in-out"
          href="#feedbacks"
          onClick={(event) => handleScroll(event)}
        >
          Feedbacks
        </a>
        <a
          className="hover:text-amber-400 transition-colors duration-300 ease-in-out"
          href="#contato"
          onClick={(event) => handleScroll(event)}
        >
          Contato
        </a>
      </nav>
      <button className="block md:hidden p-2 relative" onClick={handleNav}>
        {nav ? (
          <X color="#e5e5e5" size={16} />
        ) : (
          <Menu color="#e5e5e5" size={16} />
        )}
      </button>
    </motion.header>
  );
};

export default Header;
