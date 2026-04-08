import { recipes } from "@/data/recipes";
import RecipeCard from "@/components/RecipeCard";

export default function Home() {
  return (
    <div className="recipe-list">
      {recipes.map((item) => (
        <RecipeCard key={item.id} recipe={item} />
      ))}
    </div>
  );
}