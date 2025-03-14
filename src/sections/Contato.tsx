import SocialIcons from "@/components/ui/SocialIcons";
import Title from "@/components/ui/Title";
import { socialIcons } from "@/shared/constants";
import { twMerge } from "tailwind-merge";
import { useMediaQuery } from "usehooks-ts";
import { motion } from "motion/react";

interface ContatoProps {
  className?: string;
  id: string;
}

const Contato = ({ className, id }: ContatoProps) => {
  const lgBreakPoint = useMediaQuery("(min-width: 1024px)");

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
      className={twMerge("flex flex-col w-full gap-6 mt-28", className)}
    >
      <Title>Entre em contato</Title>
      <section className="flex flex-col lg:flex-row gap-4 lg:gap-56">
        <motion.section
          variants={animateVariantsLeft}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-632"
        >
          <p className="font-sans text-base">
            Fique a vontade para entrar em contato através das minhas redes
            sociais ou email{" "}
            <strong>
              <a href="mailto:lucianesantcs@gmail.com">
                lucianesantcs@gmail.com
              </a>
            </strong>{" "}
            para assuntos sobre freelance em projetos de curto prazo,
            colaborações, ou até mesmo se precisar de assistência em algum
            projeto seja como design ou desenvolvimento front-end.
          </p>
        </motion.section>
        <motion.section
          variants={animateVariantsRight}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex lg:flex-col gap-4"
        >
          {socialIcons.map((socialIcon) => (
            <SocialIcons
              key={socialIcon.label}
              label={lgBreakPoint ? socialIcon.label : ""}
              iconName={socialIcon.iconName}
              url={socialIcon.url}
              showExternalLinkIcon={lgBreakPoint ?? true}
            />
          ))}
        </motion.section>
      </section>
    </motion.section>
  );
};

export default Contato;
