const Experiencia = () => {
  return (
    <section className="flex mt-20 flex-col gap-8">
      <h2 className="font-serif text-2xl font-medium">Experiência</h2>
      <section className="flex justify-between">
        <section className="w-[32.5625rem] flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h3 className="font-serif text-xl font-medium">
              Desenvolvedora FrontEnd @ somos ed
            </h3>
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
          <div className="flex flex-col gap-2">
            <h4 className="font-serif text-xs font-semibold">
              Skills e tecnologias
            </h4>
            <p className="font-sans text-sm">
              HTML5 › CSS › SASS › Frontend Development › Figma › Google
              Analytics › Web Design Responsivo › Desenvolvimento Web ›
              TypeScript › JavaScript › GraphQL › Angular Framework 12+ › Module
              Federation › Microfrontend com Angular › Node.js › Playwright
            </p>
          </div>
        </section>

        <section className="w-[32.5625rem] flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h3 className="font-serif text-xl font-medium">
              Desenvolvedora FrontEnd
            </h3>
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
          <div className="flex flex-col gap-2">
            <h4 className="font-serif text-xs font-semibold">
              Skills e tecnologias
            </h4>
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
