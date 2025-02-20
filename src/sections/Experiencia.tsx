import Subtitle from "@/components/ui/Subtitle";
import Title from "@/components/ui/Title";
import { twMerge } from "tailwind-merge";

const Experiencia = ({ className }: { className?: string }) => {
  return (
    <section className={twMerge("flex mt-20 flex-col gap-8", className)}>
      <Title>Experiência</Title>
      <section className="flex flex-col lg:flex-row justify-between gap-16 md:gap-8">
        <section className="w-full lg:w-[32.5625rem] flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <Subtitle showDivider={false} className="relative">
              Desenvolvedora FrontEnd @{" "}
              <span className="after:content-line after:absolute after:left-60 after:top-4">
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
            Atuo no desenvolvimento e manutenção de layouts a partir do Figma,
            utilizando HTML, SCSS e Typescript com Angular 12+ e os princípios
            de design de software SOLID, DRY, KISS. Manutenção de código
            Back-End em NodeJs + GraphQL, e com consumo de API's Rest. Criação
            de testes automatizados E2E com Playwright em Typescript, seguindo o
            padrão Page Object Model.
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
        </section>

        <section className="w-full lg:w-[32.5625rem] flex flex-col gap-8">
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
            Dedicação na jornada profissional em desenvolvimento web como
            autodidata. Criação de projetos pessoais utilizando HTML, CSS e
            JavaScript, além de frameworks como Angular e React. Criação de
            interfaces utilizando o Figma.
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
        </section>
      </section>
    </section>
  );
};

export default Experiencia;
