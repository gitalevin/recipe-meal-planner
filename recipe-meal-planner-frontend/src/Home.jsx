import axios from "axios";
import { useState, useEffect } from "react";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { IngredientsIndex } from "./IngredientsIndex";
import { IngredientsNew } from "./IngredientsNew";
import { PantryItemsIndex } from "./PantryItemsIndex";
import { PantryItemsNew } from "./PantryItemsNew";
import { RecipesSearch } from "./RecipesSearch";

export function Home() {
  const [ingredients, setIngredients] = useState([]);

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
      console.log(response.data);
      setPantryItems(response.data);
    });
  };

  const handleCreatePantryItem = (params, successCallback) => {
    console.log("handleCreatePantryItem", params);
    axios.post("http://localhost:3000/pantry_items.json", params).then((response) => {
      setPantryItems([...pantryItems, response.data]);
    });
  };

  useEffect(handleIndexPantryItems, []);

  return (
    <div className="container">
      <Signup />
      <Login />
      <LogoutLink />
      <IngredientsNew onCreateIngredient={handleCreateIngredient} />
      <IngredientsIndex ingredients={ingredients} />
      <PantryItemsNew onCreatePantryItem={handleCreatePantryItem} />
      <PantryItemsIndex pantryItems={pantryItems} />
      <RecipesSearch />
    </div>
  );
}
