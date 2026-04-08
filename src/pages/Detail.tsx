import { useParams } from "react-router-dom";
import { recipes } from "@/data/recipes";

export default function Detail() {
    const { id } = useParams();

    const recipe = recipes.find((r) => r.id === id);

    if (!recipe) return <div>없음</div>;

    return (
        <div>
            <div className="imgBox">
                <h1>{recipe.title}</h1>
                <img src={recipe.imgUrl} />
                <p>{recipe.chef}</p>
            </div>

            <h3>재료</h3>
            <ul className="ingredients">
                {recipe.ingredients.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            <h3>양념</h3>
            <ul className="seasonings">
                {recipe.seasonings.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            <h3>조리 순서</h3>
            <ol className="steps">
                {recipe.steps.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ol>
        </div>
    );
}