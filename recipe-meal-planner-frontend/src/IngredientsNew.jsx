export function IngredientsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateIngredient(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Ingredient</h1>
      <form onSumbit={handleSubmit}>
        <div>
          Name: <input className="form-control" name="name" type="text" />
        </div>
        <div>
          Image_url: <input className="form-control" name="image_url" type="text" />
        </div>
        <button className="btn btn-primary mt-2" type="submit">
          Create Ingredient
        </button>
      </form>
    </div>
  );
}
