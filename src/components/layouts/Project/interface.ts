export interface Project {
  image: string;
  title: string;
  description: string;
  tags: string[];
  primaryButton?: {
    url: string;
    label: string;
    disabled?: boolean;
  };
  secondaryButton?: {
    url: string;
    label: string;
  };
}
