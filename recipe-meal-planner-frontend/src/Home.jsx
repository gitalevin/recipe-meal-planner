import axios from "axios";
import { useState, useEffect } from "react";
import { IngredientsIndex } from "./IngredientsIndex";
import { IngredientsNew } from "./IngredientsNew";
import { PantryItemsIndex } from "./PantryItemsIndex";
import { PantryItemsNew } from "./PantryItemsNew";
import { RecipesSearch } from "./RecipesSearch";
import { RecipesShow } from "./RecipesShow";

export function Home() {
  const [ingredients, setIngredients] = useState([]);
  const [isRecipesShowVisible, setIsRecipesShowVisible] = useState(false);
  const [currentRecipe, setCurrentRecipe] = useState({});

  const handleIndexIngredients = () => {
    console.log("handleIndexIngredients");
    axios.get("http://localhost:3000/ingredients.json").then((response) => {
      console.log(response);
      setIngredients(response.data);
    });
  };

  useEffect(handleIndexIngredients, []);

  const handleCreateIngredient = (params, successCallback) => {
    console.log("handleCreateIngredient", params);
    axios.post("http://localhost:3000/ingredients.json", params).then((response) => {
      setIngredients([...ingredients, response.data]);
    });
  };

  const [pantryItems, setPantryItems] = useState([]);

  const handleIndexPantryItems = () => {
    console.log("handleIndexPantryItems");
    axios.get("http://localhost:3000/pantry_items.json").then((response) => {
      console.log("pantry items", response.data);
      setPantryItems(response.data);
    });
  };

  const handleCreatePantryItem = (params, successCallback) => {
    console.log("handleCreatePantryItem", params);
    axios.post("http://localhost:3000/pantry_items.json", params).then((response) => {
      setPantryItems([...pantryItems, response.data]);
    });
  };

  const handleShowRecipe = (recipe) => {
    console.log("handleShowRecipe", recipe);
    setIsRecipesShowVisible(true);
    setCurrentRecipe(recipe);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsRecipesShowVisible(false);
  };

  useEffect(handleIndexPantryItems, []);

  return (
    <div className="container">
      <IngredientsNew onCreateIngredient={handleCreateIngredient} />
      <IngredientsIndex ingredients={ingredients} />
      <PantryItemsNew onCreatePantryItem={handleCreatePantryItem} />
      <PantryItemsIndex pantryItems={pantryItems} />
      <RecipesSearch onShowRecipe={handleShowRecipe} />
      <RecipesShow />
    </div>
  );
}
