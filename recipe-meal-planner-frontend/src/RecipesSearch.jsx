import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Modal } from "./Modal";

export function RecipesSearch() {
  const [recipes, setRecipes] = useState([]);
  const [isRecipesShowVisible, setIsRecipesShowVisible] = useState(false);
  const [currentRecipe, setCurrentRecipe] = useState({ steps: [{}] });

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios.get(`http://localhost:3000/search_recipes?ingredients=${params.get("name")}`).then((response) => {
      console.log(response);
      setRecipes(response.data);
    });
  };

  const [pantryItems, setPantryItems] = useState([]);
  const handlePantryItems = () => {
    console.log("Going to get all pantry items...");
    axios.get("http://localhost:3000/pantry_items.json").then((response) => {
      console.log(response);
      setPantryItems(response.data);
    });
  };
  const handleClick = (pantryItem) => {
    console.log(pantryItem);
    document.getElementById("recipes-search").value += pantryItem.ingredient.name + ",";
  };

  useEffect(handlePantryItems, []);

  const handleShowRecipe = (recipe) => {
    console.log("handleShowRecipe", recipe);
    axios.get(`http://localhost:3000/recipe_instructions?id=${recipe.id}`).then((response) => {
      console.log(response.data[0].steps);
      setIsRecipesShowVisible(true);
      setCurrentRecipe({
        title: recipe.title,
        steps: response.data[0].steps,
      });
    });
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsRecipesShowVisible(false);
  };

  return (
    <div>
      <h1>Search Recipes</h1>
      {pantryItems.map((pantryItem) => (
        <button onClick={() => handleClick(pantryItem)}>{pantryItem.ingredient.name}</button>
      ))}
      <form onSubmit={handleSubmit}>
        <div>
          <input name="name" id="recipes-search" type="text" />
        </div>
        <button className="btn btn-primary mt-2" type="submit">
          Search
        </button>
      </form>
      <div className="row">
        {recipes.map((recipe) => (
          <div className="col-md-3 mb-4" key={recipe.id}>
            <div className="card">
              <img src={recipe.image} className="card-img-top" alt="..." />{" "}
              <div className="card-body">
                <h5 className="card-title">{recipe.title}</h5>
                <ul>
                  {/* // map through an array */}
                  {recipe.usedIngredients.map((ingredient) => (
                    <li>{ingredient.originalName}</li>
                  ))}
                </ul>
              </div>
              <button className="btn btn-primary" onClick={() => handleShowRecipe(recipe)}>
                More Info
              </button>
            </div>
          </div>
        ))}
      </div>
      <Modal show={isRecipesShowVisible} onClose={handleClose}>
        <h1>{currentRecipe.title}</h1>
        <ul>
          {currentRecipe.steps.map((step) => (
            <li>{step.step}</li>
          ))}
        </ul>
      </Modal>
    </div>
  );
}
