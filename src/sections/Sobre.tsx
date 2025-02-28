import SocialIcons from "@/components/ui/SocialIcons";
import Title from "@/components/ui/Title";
import { socialIcons } from "@/shared/constants";
import { twMerge } from "tailwind-merge";

const Sobre = ({ className }: { className?: string }) => {
  return (
    <section className={twMerge("flex flex-col lg:flex-row", className)}>
      <section className="flex flex-col justify-between gap-8 w-full lg:w-[32.75rem]">
        <div>
          <h1 className="font-serif text-4xl font-medium">Luciane Santos</h1>
          <h2 className="font-serif text-xl font-medium relative">
            Desenvolvedora{" "}
            <span className="after:content-circleDrawing after:absolute after:left-36 after:bottom-custom-negative-10">
              Front-End
            </span>
          </h2>
          <h2 className="font-serif text-base font-semibold">& UI Designer</h2>
        </div>
        <div className="flex flex-col gap-3">
          {socialIcons.map((socialIcon) => (
            <SocialIcons
              key={socialIcon.label}
              label={socialIcon.label}
              iconName={socialIcon.iconName}
              url={socialIcon.url}
            />
          ))}
        </div>
      </section>

      <section className="w-full lg:w-[33.6875rem] flex flex-col gap-8">
        <Title>Sobre</Title>
        <p className="font-sans text-base relative">
          Profissional Front-End com mais de{" "}
          <span className="after:content-straightArrow after:absolute after:left-80 after:top-custom-negative-10">
            três anos
          </span>{" "}
          de experiência em desenvolvimento web dominando as linguagens HTML,
          CSS/Sass, JavaScript e TypeScript. Atualmente cursando graduação de Análise e Desenvolvimento de Sistemas. 
          Atuo na criação de layouts utilizando o Angular
          e biblioteca ReactJS. Possuo conhecimento de User Interface/User Experience
          para o design de interfaces utilizando a ferramenta Figma.
        </p>
      </section>
    </section>
  );
};

export default Sobre;
