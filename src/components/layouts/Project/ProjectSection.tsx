import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import Link from "@/components/ui/Link";
import { Circle, MoveDown, MoveLeft, MoveRight, MoveUp } from "lucide-react";
import { useState } from "react";
import { projects } from "./data";
import { motion } from "motion/react";

const ProjectSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  const animateVariantsLeft = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const animateVariantsRight = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };
  return (
    <motion.section
      variants={animateVariantsLeft}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.8, delay: 0.2 }}
      className="flex flex-col xl:flex-row gap-6"
    >
      <motion.img
        variants={animateVariantsLeft}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, delay: 0.2 }}
        src={currentProject.image}
        className="xl:max-w-3xl h-auto transition-opacity duration-300 relative overflow-hidden rounded border border-zinc-800"
      />
      <motion.aside
        variants={animateVariantsRight}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full flex gap-8 lg:gap-6 flex-col justify-between order-2 xl:order-1 xl:max-w-458"
      >
        <div className="flex flex-col gap-6 relative">
          <h3 className="font-serif text-xl leading-6 font-medium transition-all duration-300 ease-in-out after:content-line after:absolute after:left-2 after:top-4 after:animate-pulse">
            {currentProject.title}
          </h3>
          <p className="font-sans text-base lg:max-w-540 transition-all duration-300 ease-in-out">
            {currentProject.description}
          </p>
          <ul className="flex gap-3 lg:max-w-72 flex-wrap transition-all duration-300 ease-in-out">
            {currentProject.tags.map((tag, index) => (
              <li
                key={index}
                className="bg-zinc-900 border p-1 rounded transition-all duration-300 ease-in-out"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-between items-end">
          <div className="flex flex-col gap-2">
            {currentProject?.primaryButton?.label && (
              <Link
                url={currentProject.primaryButton.url}
                label={currentProject.primaryButton.label}
                className="transition-all duration-300 ease-in-out"
              >
                <Icon iconName="ArrowUpRight" />
              </Link>
            )}
            {currentProject?.secondaryButton?.label && (
              <Link
                url={currentProject.secondaryButton.url}
                label={currentProject.secondaryButton.label}
                className="transition-all duration-300 ease-in-out"
              >
                <Icon iconName="ArrowUpRight" />
              </Link>
            )}
          </div>

          <Button
            disabled={true}
            className="hidden xl:flex"
            label="Visualizar mais projetos"
            showLabel={true}
          />
        </div>
      </motion.aside>
      <motion.nav
        variants={animateVariantsRight}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex xl:flex-col gap-2 justify-between xl:justify-center sm:order-1 xl:order-2"
      >
        <div className="flex xl:flex-col gap-2">
          <button onClick={handlePrevious} className="hidden xl:flex">
            <MoveUp color="#e5e5e5" size={16} />
          </button>
          <button onClick={handlePrevious} className="xl:hidden">
            <MoveLeft color="#e5e5e5" size={16} />
          </button>

          {projects.map((_, index) => (
            <a
              key={index}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setCurrentIndex(index);
              }}
            >
              <Circle
                color="#e5e5e5"
                size={16}
                fill={currentIndex === index ? "#e5e5e5" : "none"}
              />
            </a>
          ))}

          <button onClick={handleNext} className="hidden xl:flex">
            <MoveDown color="#e5e5e5" size={16} />
          </button>
          <button onClick={handleNext} className="xl:hidden">
            <MoveRight color="#e5e5e5" size={16} />
          </button>
        </div>

        <Button
          disabled={true}
          className="xl:hidden"
          label="Visualizar mais projetos"
          showLabel={true}
        />
      </motion.nav>
    </motion.section>
  );
};

export default ProjectSection;
