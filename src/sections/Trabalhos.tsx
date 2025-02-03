import ProjectSection from "@/components/layouts/Project/ProjectSection";
import Title from "@/components/ui/Title";
import { twMerge } from "tailwind-merge";

const Trabalhos = ({ className }: { className?: string }) => {
  return (
    <section className={twMerge("flex mt-20 flex-col gap-8", className)}>
      <Title>Trabalhos</Title>
      <ProjectSection />
    </section>
  );
};

export default Trabalhos;
