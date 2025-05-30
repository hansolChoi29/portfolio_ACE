export interface DuodingcoSection {
  title: string;
  description: string;
  images?: {
    src: string;
    alt: string;
    width: number;
    height: number;
    layout: "responsive" | "fixed";
  }[];
}
