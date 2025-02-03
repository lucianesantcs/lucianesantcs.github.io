import { Project } from "./interface";
import siteFull from "@/assets/images/projects/site-full.png";
import buyItFull from "@/assets/images/projects/buy-it-full.png";
import blogCardsFull from "@/assets/images/projects/blog-cards-full.png";
import dekan from "@/assets/images/projects/dekan-landing-page.png";

export const projects: Project[] = [
  {
    image: siteFull,
    title: "Site Pessoal - Angular 17",
    description: `Site pessoal utilizando Angular 17, combinando uma experiência moderna e responsiva com boas práticas 
      de design e desenvolvimento. O layout foi criado no Figma, tipografia baseada no Material Design e organizado 
      com Local Variables e Design Tokens. Utilizei tints.dev e o plugin Foundation para definir a paleta de cores. 
      As ilustrações são do Storyset, e os ícones do Lucide Icons. A aplicação faz uso de Sass para estilização e 
      RxJS para gerenciamento reativo.`,
    tags: [
      "angular",
      "typescript",
      "sass",
      "rxjs",
      "figma",
      "design",
      "uiux",
      "webdevelopment",
      "pessoal",
    ],
    primaryButton: {
      url: "https://github.com/lucianesantcs/lucianesantcs.github.io",
      label: "Código",
    },
    secondaryButton: {
      url: "https://www.figma.com/design/sK8Rcd2lf0WDyLe2HDHQ4m/projetos-%2F-site-v.01",
      label: "Layout (Figma)",
    },
  },
  {
    image: buyItFull,
    title: "Buy It – UI Design",
    description: `Design da página inicial para uma loja online de produtos variados, com uma abordagem moderna e 
      minimalista. O projeto foi estruturado para permitir expansão futura, incluindo novas páginas e a criação do 
      fluxo completo da experiência do usuário. Ilustrações usadas do site Overflow Design para manter o estilo de
      um site minimalista`,
    tags: ["figma", "uiux", "webdesign", "ecommerce", "design", "pessoal"],
    secondaryButton: {
      url: "https://www.figma.com/design/AfUQbKpjFLUqoadJxxUU2y/projetos-%2F-designs?node-id=1-2&t=37aJKYuy8m5nvfcz-1",
      label: "Layout (Figma)",
    },
  },
  {
    image: blogCardsFull,
    title: "Blog Cards – Desafio Frontend Mentor",
    description: `Implementação do desafio Blog Preview Card do Frontend Mentor, com aprimoramentos como a adição de 
      múltiplos cards, um filtro dinâmico via input e melhorias no layout com customizações para uma experiência mais refinada.
      O projeto foi desenvolvido com Vite, TypeScript e Sass, utilizando o template ViteTs-Sass para uma estrutura otimizada. 
      O design foi ajustado para maior consistência visual e melhor usabilidade. O deploy foi realizado no GitHub Pages.`,
    tags: [
      "vitejs",
      "typescript",
      "sass",
      "frontend",
      "uiux",
      "webdevelopment",
      "challenge",
      "pessoal",
    ],
    primaryButton: {
      url: "https://github.com/lucianesantcs/blog-cards",
      label: "Código",
    },
    secondaryButton: {
      url: "https://lucianesantcs.github.io/blog-cards/",
      label: "Pré visualização",
    },
  },
  {
    image: dekan,
    title: "Dekan – Landing Page Design",
    description: `Criação do design de uma landing page completa no Figma, focada em usabilidade, identidade visual 
      coesa e experiência do usuário otimizada. O layout foi desenvolvido com uma abordagem estruturada, garantindo 
      uma navegação intuitiva e atraente. O design é versátil e adaptável, podendo ser ajustado para diferentes 
      tipos de negócios, mantendo uma estética profissional e moderna.`,
    tags: ["figma", "uiux", "webdesign", "landingpage", "design", "pessoal"],
    primaryButton: {
      url: "https://dribbble.com/shots/24272930-dekan-landing-page",
      label: "Pré visualização",
    },
    secondaryButton: {
      url: "https://www.figma.com/design/AfUQbKpjFLUqoadJxxUU2y/projetos-%2F-designs?node-id=5-37&t=SY4NwopEjVcxHczP-1",
      label: "Layout (Figma)",
    },
  },
];
