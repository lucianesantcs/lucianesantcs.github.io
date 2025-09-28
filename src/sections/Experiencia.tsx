import Subtitle from "@/components/ui/Subtitle";
import Title from "@/components/ui/Title";
import { twMerge } from "tailwind-merge";
import { motion } from "motion/react";
import Link from "@/components/ui/Link";
import Icon from "@/components/ui/Icon";

interface ExperienciaProps {
  className?: string;
  id: string;
}

const Experiencia = ({ className, id }: ExperienciaProps) => {
  const animateVariantsLeft = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const animateVariantsRight = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <motion.section
      variants={animateVariantsLeft}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.8, delay: 0.2 }}
      id={id}
      className={twMerge(
        "flex mt-20 flex-col gap-8 animate-fadeindown",
        className
      )}
    >
      <Title>Experiência</Title>
      <section className="flex flex-col justify-between gap-16 md:gap-20">
        <motion.section
            variants={animateVariantsLeft}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-[60rem] flex flex-col gap-8"
        >
          <div className="flex flex-col gap-2">
            <Subtitle showDivider={false} className="relative">
              Desenvolvedora FrontEnd @{" "}
              <span className="after:content-line after:absolute after:left-60 after:top-4 after:animate-pulse">
                icatu seguros
              </span>{" "}
            </Subtitle>
            <div>
              <p className="font-serif text-sm font-semibold">
                Rio de Janeiro, Brasil (Remoto)
              </p>
              <p className="font-sans text-xs">Junho 2025 - atualmente</p>
            </div>
          </div>
          <p className="flex flex-col font-sans text-base gap-2">
            
          </p>
          {/*<div className="flex flex-col gap-4">*/}
          {/*  <Subtitle className="text-xs" type="h3">*/}
          {/*    Skills e tecnologias*/}
          {/*  </Subtitle>*/}
          {/*  <p className="font-sans text-sm">*/}
          {/*    HTML5 › CSS › SASS › Frontend Development › Figma › Google*/}
          {/*    Analytics › Web Design Responsivo › Desenvolvimento Web ›*/}
          {/*    TypeScript › JavaScript › GraphQL › Angular Framework 12+ › Module*/}
          {/*    Federation › Microfrontend com Angular › Node.js › Playwright*/}
          {/*  </p>*/}
          {/*</div>*/}
        </motion.section>

        <motion.section
          variants={animateVariantsLeft}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-[60rem] flex flex-col gap-8"
        >
          <div className="flex flex-col gap-2">
            <Subtitle showDivider={false} className="relative">
              Desenvolvedora FrontEnd @{" "}
              <span className="after:content-line after:absolute after:left-60 after:top-4 after:animate-pulse">
                somos ed
              </span>{" "}
            </Subtitle>
            <div>
              <p className="font-serif text-sm font-semibold">
                Rio de Janeiro, Brasil (Remoto)
              </p>
              <p className="font-sans text-xs">Maio 2021 - Junho 2025</p>
            </div>
          </div>
          <p className="flex flex-col font-sans text-base gap-2">
            Atuei no desenvolvimento de interfaces responsivas e acessíveis,
            transformando designs do Figma em código em projetos Angular (12 a
            19). Experiência no consumo de APIs REST em C#, além de já ter
            realizado manutenção em Back-End com Node.js e GraphQL. Trabalhei
            com arquitetura de Microfrontend (Module Federation) e Single SPA para modularidade e reaproveitamento de código.
            Também implementei testes automatizados E2E com Playwright e Page
            Object Model, garantindo a estabilidade das aplicações.
            <Link
              url="https://www.linkedin.com/in/lucianesantcs/"
              label="Ler mais"
              className="transition-all duration-300 ease-in-out text-amber-400"
            >
              <Icon iconName="ArrowUpRight" />
            </Link>
          </p>
          <div className="flex flex-col gap-4">
            <Subtitle className="text-xs" type="h3">
              Skills e tecnologias
            </Subtitle>
            <p className="font-sans text-sm">
              HTML5 › CSS › SASS › Frontend Development › Figma › Google
              Analytics › Web Design Responsivo › Desenvolvimento Web ›
              TypeScript › JavaScript › GraphQL › Angular Framework 12+ › Module
              Federation › Microfrontend com Angular › Node.js › Playwright
            </p>
          </div>
        </motion.section>
      </section>
    </motion.section>
  );
};

export default Experiencia;
