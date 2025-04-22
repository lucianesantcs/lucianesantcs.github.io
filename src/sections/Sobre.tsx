import SocialIcons from "@/components/ui/SocialIcons";
import Title from "@/components/ui/Title";
import { socialIcons } from "@/shared/constants";
import { twMerge } from "tailwind-merge";
import { motion } from "motion/react";

interface SobreProps {
  className?: string;
  id: string;
}

const Sobre = ({ className, id }: SobreProps) => {
  const animateVariantsLeft = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const animateVariantsRight = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <section
      id={id}
      className={twMerge("flex flex-col lg:flex-row", className)}
    >
      <motion.section
        variants={animateVariantsLeft}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col justify-between gap-8 w-full lg:w-[32.75rem]"
      >
        <div>
          <h1 className="font-serif text-4xl font-medium">Luciane Santos</h1>
          <h2 className="font-serif text-xl font-medium relative">
            Desenvolvedora{" "}
            <span className="after:content-circleDrawing after:absolute after:left-36 after:bottom-custom-negative-10 after:animate-pulse">
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
      </motion.section>

      <motion.section
        variants={animateVariantsRight}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full lg:w-[33.6875rem] flex flex-col gap-8"
      >
        <Title>Sobre</Title>
        <p className="font-sans text-base relative">
          Profissional Front-End com cerca de{" "}
          <span className="after:content-straightArrow after:absolute after:left-80 after:top-custom-negative-10 after:animate-bounce">
            4 anos
          </span>{" "}
          de experiência em desenvolvimento web. Atuo no desenvolvimento de
          layouts utilizando o Angular 12+ e biblioteca ReactJS. Possuo
          conhecimento de User Interface/User Experience para o design e
          prototipagem de interfaces utilizando a ferramenta Figma. Comecei como
          autodidata dominando as linguagens HTML, CSS/SASS,
          JavaScript/TypeScript e atualmente estou cursando graduação de Análise
          e Desenvolvimento de Sistemas na universidade Newton Paiva.
        </p>
      </motion.section>
    </section>
  );
};

export default Sobre;
