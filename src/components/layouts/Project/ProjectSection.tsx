import imagemSkeleton from "@/assets/images/svg/imagemSkeleton.svg";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import Link from "@/components/ui/Link";
import { Circle, MoveDown, MoveLeft, MoveRight, MoveUp } from "lucide-react";
import { useState } from "react";
import { projects } from "./data";

const ProjectSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  return (
    <section className="flex flex-col xl:flex-row gap-6">
      <img
        src={imagemSkeleton}
        className="lg:w-690 h-auto transition-opacity duration-300"
      />
      <aside className="flex gap-6 flex-col justify-between order-2 xl:order-1 xl:max-w-458">
        <div className="flex flex-col gap-6">
          <h3 className="font-serif text-xl leading-6 font-medium transition-all duration-300 ease-in-out">
            {currentProject.title}
          </h3>
          <p className="font-sans text-base lg:max-w-540 transition-all duration-300 ease-in-out">
            {currentProject.description}
          </p>
          <ul className="flex gap-3 max-w-56 flex-wrap transition-all duration-300 ease-in-out">
            {currentProject.tags.map((tag, index) => (
              <li
                key={index}
                className="transition-all duration-300 ease-in-out"
              >
                #{tag}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-between items-end">
          <div className="flex flex-col gap-2">
            <Link
              url={currentProject.codeUrl}
              label="Código"
              className="transition-all duration-300 ease-in-out"
            >
              <Icon iconName="ArrowUpRight" />
            </Link>
            <Link
              url={currentProject.figmaUrl}
              label="Layout (Figma)"
              className="transition-all duration-300 ease-in-out"
            >
              <Icon iconName="ArrowUpRight" />
            </Link>
          </div>

          <Button
            className="hidden xl:flex"
            label="Visualizar mais projetos"
            showLabel={true}
          />
        </div>
      </aside>
      <nav className="flex xl:flex-col gap-2 justify-between xl:justify-center sm:order-1 xl:order-2">
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
          className="xl:hidden"
          label="Visualizar mais projetos"
          showLabel={true}
        />
      </nav>
    </section>
  );
};

export default ProjectSection;
