export function PantryItemsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreatePantryItem(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Pantry Item</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Ingredient id: <input name="ingredient_id" type="number" />
        </div>
        <div>
          User id: <input name="user_id" type="number" />
        </div>
        <div>
          Amount: <input name="amount" type="number" />
        </div>
        <button type="submit">Create pantry item</button>
      </form>
    </div>
  );
}
