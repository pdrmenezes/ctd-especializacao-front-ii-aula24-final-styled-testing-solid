export interface INoticiasNormalizadas {
  id: number;
  titulo: string;
  description: string;
  date: number | string;
  premium: boolean;
  image: string;
  shortDescription?: string;
}
