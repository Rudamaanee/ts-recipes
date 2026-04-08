export interface Recipe {
  id: string;
  title: string;
  chef: string;
  category: string;
  imgUrl?: string;
  videoUrl?: string;
  sourceUrl?: string;
  ingredients: string[];
  seasonings: string[];
  steps: string[];
  typeList: string;
}