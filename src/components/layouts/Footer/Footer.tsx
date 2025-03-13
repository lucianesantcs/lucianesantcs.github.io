import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  const handleScroll = () => {
    if (
      document.body.scrollTop > 40 ||
      document.documentElement.scrollTop > 40
    ) {
      setShowFooter(true);
    } else {
      setShowFooter(false);
    }
  };

  const backToTop = () => {
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    showFooter && (
      <footer className="bg-zinc-950 sticky bottom-0 z-10 max-w-144 mx-auto flex w-full justify-between px-3 py-10 md:px-10 lg:px-20 md:gap-28 lg:gap-40 mt-16">
        <span className="font-serif">
          © 2025 <strong>Luciane Santos</strong>
        </span>
        <ChevronUp className="cursor-pointer" aria-description="Voltar para topo" color="#e5e5e5" size={16} onClick={backToTop} />
      </footer>
    )
  );
};

export default Footer;
