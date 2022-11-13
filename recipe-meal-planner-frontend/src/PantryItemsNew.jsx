import axios from "axios";
import { useState, useEffect } from "react";

export function PantryItemsNew(props) {
  const [ingredients, setIngredients] = useState([]);
  const handleIndexIngredients = () => {
    console.log("Going to get all ingredients...");
    axios.get("http://localhost:3000/ingredients.json").then((response) => {
      console.log(response);
      setIngredients(response.data);
    });
  };

  useEffect(handleIndexIngredients, []);

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
          Ingredient:{" "}
          <select name="ingredient_id" className="form-control">
            {ingredients.map((ingredient) => (
              <option value={ingredient.id} key={ingredient.id}>
                {ingredient.name}
              </option>
            ))}
          </select>
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
