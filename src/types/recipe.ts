export interface Recipe {
  id: string;
  imgUrl: string;
  videoUrl: string;
  title: string;
  chef: string;
  categoryId: number;
  tag: string[];
  sourceUrl: string;
  ingredients: string[];
  steps: string[];
  seasonings?: string[]; // ✅ optional
}