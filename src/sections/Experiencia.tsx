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

  const experiencia = {
    ed: {
      tags: [
        "Angular",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "SASS",
        "Module Federation",
        "Single-SPA",
        "Playwright",
        "GraphQL",
        "Node.js",
      ],
    },
    icatu: {
      tags: [
        "Angular 18+",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "SASS",
        "Module Federation",
        "Microfrontends",
        "Multitenant",
        "GraphQL",
        "C#",
        "Node.js",
        "Figma",
      ],
    },
  };

  return (
    <motion.section
      variants={animateVariantsLeft}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.8, delay: 0.2 }}
      id={id}
      className={twMerge(
        "flex md:mt-20 flex-col gap-8 animate-fadeindown",
        className,
      )}
    >
      <Title>Experiência</Title>
      {/* <Link
        url="https://www.linkedin.com/in/lucianesantcs/"
        label="linkedin"
        className="transition-all duration-300 ease-in-out text-amber-400"
      >
        <Icon iconName="ArrowUpRight" />
      </Link> */}
      <section className="flex flex-col justify-between gap-16 md:gap-20 md:flex-row">
        <motion.section
          variants={animateVariantsLeft}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-[60rem] flex flex-col gap-8"
        >
          <div className="flex flex-col gap-2">
            <Subtitle showDivider={false} className="relative">
              Desenvolvedora FrontEnd @ icatu seguros
            </Subtitle>
            <div>
              <p className="font-serif text-sm font-semibold">
                Rio de Janeiro, Brasil (Remoto)
              </p>
              <p className="font-sans text-xs">Junho 2025 - atualmente</p>
            </div>
          </div>
          <p className="flex flex-col font-sans text-base gap-2">
            Atuação como referência técnica em Front-end, participando de
            decisões arquiteturais e definição de boas práticas em aplicações
            Angular 18+ com arquitetura de Microfrontends (Module Federation) em
            ambiente multitenant. Desenvolvimento de interfaces a partir de
            Figma em colaboração com UX, evolução de Design System e criação de
            componentes reutilizáveis. Integração com APIs REST em C#, além de
            contribuições pontuais em Node.js e GraphQL.
          </p>
          <div className="flex flex-col gap-4">
            <ul className="flex gap-3 lg:max-w-96 flex-wrap transition-all duration-300 ease-in-out">
              {experiencia.icatu.tags.map((tag, index) => (
                <li
                  key={index}
                  className="bg-zinc-900 font-bold border p-1 rounded transition-all duration-300 ease-in-out"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        <motion.div
          variants={animateVariantsLeft}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block w-0.5 md:h-auto bg-zinc-900"
        ></motion.div>

        <motion.section
          variants={animateVariantsLeft}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-[60rem] flex flex-col gap-8"
        >
          <div className="flex flex-col gap-2">
            <Subtitle showDivider={false} className="relative">
              Desenvolvedora FrontEnd @ somos ed
            </Subtitle>
            <div>
              <p className="font-serif text-sm font-semibold">
                Rio de Janeiro, Brasil (Remoto)
              </p>
              <p className="font-sans text-xs">Maio 2021 - Junho 2025</p>
            </div>
          </div>
          <p className="flex flex-col font-sans text-base gap-2">
            Desenvolvimento de aplicações Angular (12–19) com interfaces
            responsivas e acessíveis, implementadas a partir de protótipos do
            Figma. Experiência com arquitetura de Microfrontends utilizando
            Module Federation e Single-SPA, consumo de APIs REST em C# e
            manutenção pontual em Node.js e GraphQL. Implementação de testes E2E
            com Playwright e Page Object Model para garantir estabilidade das
            aplicações.
          </p>
          <div className="flex flex-col gap-4">
            <p className="font-serif text-sm">
              <ul className="flex gap-3 lg:max-w-96 flex-wrap transition-all duration-300 ease-in-out">
                {experiencia.ed.tags.map((tag, index) => (
                  <li
                    key={index}
                    className="bg-zinc-900 font-bold border p-1 rounded transition-all duration-300 ease-in-out"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </p>
          </div>
        </motion.section>
      </section>
    </motion.section>
  );
};

export default Experiencia;
