
export interface Movie {
  id: number;
  title: string;
  releaseDate: Date;
  backdrop: string;
  description: string;
  rating: number;
  poster: string;
}

export interface CompleteMovie extends Movie {
  genres: string[];
  duration: number;
  budget: number;
  originalTitle: string;
  productionComplete: string[]
}