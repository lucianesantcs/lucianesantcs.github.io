import logo24 from "@/assets/images/svg/logo24.svg";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className=" max-w-144 mx-auto flex justify-between md:justify-start px-3 py-4 md:px-10 lg:px-20 md:gap-28 lg:gap-40">
      <img
        src={logo24}
        alt="Logo com símbolo de código e camadas representando design"
      />
      <nav className="hidden md:flex md:gap-16">
        <a href="#sobre">Sobre</a>
        <a href="#experiencia">Experiência</a>
        <a href="#trabalhos">Trabalhos</a>
        <a href="#feedbacks">Feedbacks</a>
        <a href="#contato">Contato</a>
      </nav>
      <button className="lg:hidden">
        <Menu color="#e5e5e5" size={16} />
      </button>
    </header>
  );
};

export default Header;
