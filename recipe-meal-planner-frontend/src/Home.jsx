import axios from "axios";
import { useState, useEffect } from "react";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { IngredientsIndex } from "./IngredientsIndex";
import { PantryItemsIndex } from "./PantryItemsIndex";

export function Home() {
  const [ingredients, setIngredients] = useState([]);

  const handleIndexIngredients = () => {
    console.log("handleIndexIngredients");
    axios.get("http://localhost:3000/ingredients.json").then((response) => {
      console.log(response.data);
      setIngredients(response.data);
    });
  };

  useEffect(handleIndexIngredients, []);

  const [pantryItems, setpantryItems] = useState([]);

  const handleIndexPantryItems = () => {
    console.log("handleIndexPantryItems");
    axios.get("http://localhost:3000/pantry_items.json").then((response) => {
      console.log(response.data);
      setPantryItems(response.data);
    });
  };

  return (
    <div>
      <Signup />
      <Login />
      <LogoutLink />
      <IngredientsIndex ingredients={ingredients} />
      <PantryItemsIndex pantryItems={pantryItems} />
    </div>
  );
}
