import axios from "axios";

export function IngredientsNew() {
  const handleCreateIngredient = (params) => {
    axios.post("http://localhost:3000/ingredients.json", params).then((response) => {
      console.log("Created ingredients", response);
      window.location.href = "/ingredients";
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit new ingredient");
    const params = new FormData(event.target);
    handleCreateIngredient(params);
    event.target.reset();
  };

  return (
    <div>
      <h1>New Ingredient</h1>
      <form onSubmit={handleSubmit}>
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
