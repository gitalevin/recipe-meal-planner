import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function RecipesShow() {
  const [recipe, setRecipe] = useState({});
  const params = useParams();

  const handleShowRecipe = () => {
    // axios.get(`http://localhost:3000/recipes/${params.id}.json`).then((response) => {
    //   console.log(response.data);
    //   setRecipe(response.data);
    // });
  };

  useEffect(handleShowRecipe, []);

  return (
    <div>
      <h1>Recipe info</h1>
      <p>Title: {recipe.title}</p>
      <img src={recipe.image} alt="" />
      <a className="btn btn-primary" href="/recipes_search">
        {/* <ul>
          {recipe.usedIngredients.map((ingredient) => (
            <li>{ingredient.originalName}</li>
          ))}
        </ul> */}
        Back to all recipes
      </a>
    </div>
  );
}
