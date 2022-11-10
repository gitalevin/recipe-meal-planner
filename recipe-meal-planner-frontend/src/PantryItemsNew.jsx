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
          Ingredient id: <input className="form-control" name="ingredient_id" type="number" />
        </div>
        <div>
          User id: <input className="form-control" name="user_id" type="number" />
        </div>
        <div>
          Amount: <input className="form-control" name="amount" type="number" />
        </div>
        <button className="btn btn-primary mt-3" type="submit">
          Create pantry item
        </button>
      </form>
    </div>
  );
}
