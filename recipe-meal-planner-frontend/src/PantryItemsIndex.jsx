export function PantryItemsIndex(props) {
  return (
    <div>
      <h1>My Pantry Items</h1>
      {props.pantryItems.map((pantryItem) => (
        <div key={pantryItem.id}>
          <h3>{pantryItem.ingredient_id}</h3>
          <h3>{pantryItem.user_id}</h3>
          <h3>{pantryItem.amount}</h3>
          <img src={pantryItem.ingredient.image_url} />
        </div>
      ))}
    </div>
  );
}
