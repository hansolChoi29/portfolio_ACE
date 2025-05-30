export interface AuthSection {
  title: string;
  images?: {
    src: string;
    alt: string;
    width: number;
    height: number;
    layout: "responsive" | "fixed";
  }[];
  texts: string[];
}
