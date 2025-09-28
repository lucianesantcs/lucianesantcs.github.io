import Button from "@/components/ui/Button";
import Subtitle from "@/components/ui/Subtitle";
import Title from "@/components/ui/Title";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "motion/react";

interface FeedbacksProps {
  className?: string;
  id: string;
}

const Feedbacks = ({ className, id }: FeedbacksProps) => {
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

  const animateVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.section
      variants={animateVariants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.8, delay: 0.2 }}
      id={id}
      className={twMerge("flex flex-col w-full gap-8 mt-28", className)}
    >
      <motion.section
        variants={animateVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, delay: 0.2 }}
        id={id}
        className={twMerge("flex flex-col w-full gap-8 mt-28", className)}
      >
        <Title align="justify-center">Feedbacks</Title>

        <div className="flex flex-col md:flex-row gap-12 mt-8">
          <div className="w-90 flex flex-col gap-4">
            <div className="flex flex-col w-auto text-center">
              <Subtitle
                showDivider={false}
                className="relative grid place-items-center"
              >
                Gabriel Tavares
                <p className="font-sans text-base relative w-auto">
                  Product Designer |{" "}
                  <span className="after:content-line after:absolute after:left-36 after:top-4 after:animate-pulse">
                    UX/UI Designer
                  </span>
                </p>
              </Subtitle>
            </div>
            <div className="flex flex-col gap-4 item-start max-w-632 mx-auto">
              <p className="font-sans text-base">
                {isExpanded ? descricao : descricaoTruncada}
              </p>
              <Button
                className="text-amber-400"
                label={isExpanded ? "Ler menos" : "Ler mais"}
                onClick={() => handleLerMais()}
              />
            </div>
          </div>

          <div className="w-90 flex flex-col gap-4">
            <div className="flex flex-col w-auto text-center">
              <Subtitle
                showDivider={false}
                className="relative grid place-items-center"
              >
                Mariana Hentz
                <p className="font-sans text-base relative w-auto">
                  Product Manager
                </p>
              </Subtitle>
            </div>
            <div className="flex flex-col gap-4 item-start max-w-632 mx-auto">
              <p className="font-sans text-base">
                Tive a oportunidade de trabalhar com a Lu na sua trajetória na ed e ver seu crescimento de perto!
                Trabalhar com a Luciane é fácil: ótima comunicação, posicionamentos assertivos, foco em entregas de alta qualidade e muito comprometida com os projetos e com a empresa.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </motion.section >
  );
};

export default Feedbacks;
