export interface Project {
  image: string;
  title: string;
  description: string;
  tags: string[];
  primaryButton?: {
    url: string;
    label: string;
  };
  secondaryButton?: {
    url: string;
    label: string;
  };
}
