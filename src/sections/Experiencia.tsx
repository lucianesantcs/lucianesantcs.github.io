import Subtitle from "@/components/ui/Subtitle";
import Title from "@/components/ui/Title";
import { twMerge } from "tailwind-merge";
import { motion } from "motion/react";

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
      <section className="flex flex-col lg:flex-row justify-between gap-16 md:gap-8">
        <motion.section
          variants={animateVariantsLeft}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-[32.5625rem] flex flex-col gap-8"
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
              <p className="font-sans text-xs">Maio 2021 - atualmente</p>
            </div>
          </div>
          <p className="font-sans text-base">
            Atuo no desenvolvimento de interfaces responsivas e acessíveis,
            transformando designs do Figma em código em projetos Angular (12 a
            19). Tenho experiência no consumo de APIs REST em C#, além de já ter
            realizado manutenção em Back-End com Node.js e GraphQL. Trabalhei
            com arquitetura de Microfrontend (Module Federation) e atualmente
            com Single SPA para modularidade e reaproveitamento de código.
            Também implementei testes automatizados E2E com Playwright e Page
            Object Model, garantindo a estabilidade das aplicações.
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

        <motion.section
          variants={animateVariantsRight}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-[32.5625rem] flex flex-col gap-8"
        >
          <div className="flex flex-col gap-2">
            <Subtitle showDivider={false}>Desenvolvedora FrontEnd</Subtitle>
            <div>
              <p className="font-serif text-sm font-semibold">
                Belo Horizonte, Brasil
              </p>
              <p className="font-sans text-xs">2014 - atualmente</p>
            </div>
          </div>
          <p className="font-sans text-base">
            Dedicação na jornada profissional em desenvolvimento web adquirindo
            conhecimento para base de tecnologia como autodidata, criando
            projetos pessoais utilizando frameworks como Angular e React, além
            de desenhar interfaces utilizando o Figma. Mantenho o conhecimento
            contínuo em busca de obter o máximo para desenvolvimento de carreira
            e metas para o futuro.
          </p>
          <div className="flex flex-col gap-4">
            <Subtitle className="text-xs" type="h3">
              Skills e tecnologias
            </Subtitle>
            <p className="font-sans text-sm">
              HTML5 › CSS › SASS › Figma › Adobe Photoshop › Illustrator ›
              Design de Interfaces › Web Design Responsivo › JavaScript ›
              TypeScript › Angular Framework › Node.js › JQuery › PHP › MySQL ›
              WordPress
            </p>
          </div>
        </motion.section>
      </section>
    </motion.section>
  );
};

export default Experiencia;
