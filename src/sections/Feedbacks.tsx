import Button from "@/components/ui/Button";
import Title from "@/components/ui/Title";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const Feedbacks = ({ className }: { className?: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const descricao = `Tive a oportunidade de trabalhar com a Luciane em vários projetos na
          Icatu e sempre fiquei impressionado com seu olhar apurado para a
          experiência do usuário, ajudando e muito no desenvolvimento e criação
          dos fluxos. Luciane não só domina as técnicas de frontend, mas também
          compreende profundamente como as interfaces devem ser intuitivas e
          agradáveis para os usuários. Além disso, é uma colega de equipe
          incrível. Ela contribuiu de forma proativa para o sucesso dos
          projetos, colaborando de maneira eficaz com outros membros da equipe.
          Sua capacidade de comunicação clara e aberta ajuda a manter todos no
          mesmo ritmo, o que resulta em entregas pontuais e de alta qualidade.
          Ela não apenas identifica problemas, mas também propõe soluções
          práticas e inovadoras. Sua mentalidade focada em soluções, aliada ao
          seu amplo conhecimento em desenvolvimento, é uma verdadeira vantagem
          para qualquer equipe de desenvolvimento.`;

  const descricaoTruncada = descricao.slice(0, 420);

  const handleLerMais = () => setIsExpanded(!isExpanded);

  return (
    <section className={twMerge("flex flex-col w-full gap-8 mt-28", className)}>
      <Title align="justify-center">Feedbacks</Title>
      <div className="flex flex-col">
        <h3 className="font-serif text-xl leading-6 font-medium text-center">
          Gabriel Tavares
        </h3>
        <p className="font-sans text-base text-center">
          Product Designer | UX/UI Designer
        </p>
      </div>
      <div className="flex flex-col gap-4 item-start max-w-632 mx-auto">
        <p className="font-sans text-base">
          {isExpanded ? descricao : descricaoTruncada}
        </p>
        <Button
          label={isExpanded ? "Ler menos" : "Ler mais"}
          onClick={() => handleLerMais()}
        />
      </div>
    </section>
  );
};

export default Feedbacks;
