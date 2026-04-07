type Props = {
  title: string;
  image: string;
};

export default function RecipeCard({ title, image }: Props) {
  return (
    <div className="recipe-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}