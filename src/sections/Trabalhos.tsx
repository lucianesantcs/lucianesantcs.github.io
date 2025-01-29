import imagemSkeleton from "@/assets/images/svg/imagemSkeleton.svg";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import Link from "@/components/ui/Link";
import Title from "@/components/ui/Title";
import { Circle, MoveDown, MoveUp } from "lucide-react";
import { twMerge } from "tailwind-merge";

const Trabalhos = ({ className }: { className?: string }) => {
  return (
    <section className={twMerge("flex mt-20 flex-col gap-8", className)}>
      <Title>Trabalhos</Title>
      <section className="flex flex-col lg:flex-row gap-6">
        <img src={imagemSkeleton} className="lg:w-690 h-auto" />
        <aside className="flex gap-6 flex-col order-2 lg:order-1 lg:max-w-458">
          <h3 className="font-serif text-xl leading-6 font-medium">
            Site profissional 1.0
          </h3>
          <p className="font-sans text-base">
            Site pessoal desenvolvido com Angular 17. O design criado utilizando
            Figma; tipografia baseada no Material Design; ilustrações do site
            Storyset; ícones do Lucide Icons; utilizado tints.dev para criação
            da paleta de cores junto ao plugin Foundation; organizado com local
            variables e tokens.
          </p>
          <ul className="flex gap-1 flex-col">
            <li>#angular</li>
            <li>#typescript</li>
            <li>#sass</li>
            <li>#rxjs</li>
            <li>#figma</li>
            <li>#pessoal</li>
          </ul>
          <div className="flex justify-between items-end">
            <div className="flex flex-col gap-2">
              <Link url="#" label="Código">
                <Icon iconName="ArrowUpRight" />
              </Link>
              <Link url="#" label="Layout (Figma)">
                <Icon iconName="ArrowUpRight" />
              </Link>
            </div>

            <Button className="hidden lg:flex" label="Visualizar mais projetos" showLabel={true} />
          </div>
        </aside>
        <nav className="flex lg:flex-col gap-2 justify-between lg:justify-center sm:order-1 lg:order-2">
          <div className="flex lg:flex-col gap-2">
            <MoveUp color="#e5e5e5" size={16} />
            <a href="">
              <Circle color="#e5e5e5" size={16} />
            </a>
            <a href="">
              <Circle color="#e5e5e5" size={16} />
            </a>
            <a href="">
              <Circle color="#e5e5e5" size={16} />
            </a>
            <a href="">
              <Circle color="#e5e5e5" size={16} />
            </a>
            <MoveDown color="#e5e5e5" size={16} />
          </div>

          <Button className="lg:hidden" label="Visualizar mais projetos" showLabel={true} />
        </nav>
      </section>
    </section>
  );
};

export default Trabalhos;
