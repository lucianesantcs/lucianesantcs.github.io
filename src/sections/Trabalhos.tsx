import ProjectSection from "@/components/layouts/Project/ProjectSection";
import Title from "@/components/ui/Title";
import { twMerge } from "tailwind-merge";
import { motion } from "motion/react";

interface TrabalhosProps {
  className?: string;
  id: string;
}

const Trabalhos = ({ className, id }: TrabalhosProps) => {
  const animateVariantsLeft = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <motion.section
      variants={animateVariantsLeft}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.8, delay: 0.2 }}
      id={id}
      className={twMerge("flex mt-20 flex-col gap-8", className)}
    >
      <Title>Trabalhos</Title>
      <ProjectSection />
    </motion.section>
  );
};

export default Trabalhos;
