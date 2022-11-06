export function IngredientsIndex(props) {
  return (
    <div>
      <h1>My Ingredients</h1>
      {props.ingredients.map((ingredient) => (
        <div key={ingredient.id}>
          <h2>{ingredient.name}</h2>
          <img src={ingredient.image_url} />
        </div>
      ))}
    </div>
  );
}
