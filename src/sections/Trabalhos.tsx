import imagemSkeleton from "@/assets/images/svg/imagemSkeleton.svg";
import Button from "@/components/ui/Button";
import { Circle, MoveDown, MoveUp } from "lucide-react";

const Trabalhos = () => {
  return (
    <section className="flex mt-20 flex-col gap-8">
      <h2 className="font-serif text-2xl font-medium">Trabalhos</h2>
      <section className="flex gap-6">
        <img src={imagemSkeleton} style={{ width: 690 }} />
        <aside className="flex gap-4 flex-col max-w-458">
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
              <Button
                label="Código"
                showLabel={true}
                showIcon={true}
                iconName="ArrowUpRight"
              />
              <Button
                label="Layout (Figma)"
                showLabel={true}
                showIcon={true}
                iconName="ArrowUpRight"
              />
            </div>

            <Button
              label="Visualizar mais projetos"
              showLabel={true}
              showIcon={true}
              iconName="ArrowUpRight"
            />
          </div>
        </aside>
        <nav className="flex flex-col gap-2 justify-center">
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
        </nav>
      </section>
    </section>
  );
};

export default Trabalhos;
