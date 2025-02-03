import { Project } from "./interface";
import imagemSkeleton from "@/assets/images/svg/imagemSkeleton.svg";

export const projects: Project[] = [
  {
    image: imagemSkeleton,
    title: "Site profissional 1.0",
    description: `Site pessoal desenvolvido com Angular 17. O design criado utilizando
          Figma; tipografia baseada no Material Design; ilustrações do site
          Storyset; ícones do Lucide Icons; utilizado tints.dev para criação
          da paleta de cores junto ao plugin Foundation; organizado com local
          variables e tokens.`,
    tags: ["angular", "typescript", "sass", "rxjs", "figma", "pessoal"],
    codeUrl: "#",
    figmaUrl: "#",
  },
  {
    image: imagemSkeleton,
    title: "Buy it",
    description: `Design da página inicial de uma loja de variedade de produtos online`,
    tags: ["figma", "ui design", "pessoal"],
    codeUrl: "#",
    figmaUrl: "#",
  },
  {
    image: imagemSkeleton,
    title: "Blog Cards",
    description: `Blog preview Card com filtro por input, desenvolvido com typeScript e sass`,
    tags: ["vitejs", "typescript", "sass", "challenges", "font-end", "pessoal"],
    codeUrl: "#",
    figmaUrl: "#",
  },
  {
    image: imagemSkeleton,
    title: "Proffy",
    description: `Aplicação que conecta alunos e professores`,
    tags: [
      "javascript",
      "nodejs",
      "reactjs",
      "font-end",
      "back-end",
      "sqlite",
      "react-native",
      "typescript",
      "express",
      "contributed",
      "responsive",
    ],
    codeUrl: "#",
    figmaUrl: "#",
  },
];
