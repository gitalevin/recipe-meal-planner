import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./About";
import { Header } from "./Header";
import { Home } from "./Home";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { Footer } from "./Footer";
import { RecipesSearch } from "./RecipesSearch";
import { RecipesShow } from "./RecipesShow";
import { IngredientsIndexPage } from "./IngredientsIndexPage";
import { IngredientsNew } from "./IngredientsNew";
import { PantryItemsNew } from "./PantryItemsNew";
import { PantryItemsIndexPage } from "./PantryItemsIndexPage";
import React, { useState } from "react";
import Heart from "react-heart";

function App() {
  const [active, setActive] = useState(false);
  const handleCreatePantryItem = (params, successCallback) => {
    console.log("handleCreatePantryItem", params);
    axios.post("http://localhost:3000/pantry_items.json", params).then((response) => {
      window.location.href = "/";
    });

    return (
      <div style={{ width: "2rem" }}>
        <Heart isActive={active} onClick={() => setActive(!active)} />
      </div>
    );
  };

  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ingredients" element={<IngredientsIndexPage />} />
          <Route path="/ingredients/new" element={<IngredientsNew />} />
          <Route path="/pantry_items/new" element={<PantryItemsNew onCreatePantryItem={handleCreatePantryItem} />} />
          <Route path="/recipes_show/:id" element={<RecipesShow />} />
          <Route path="/recipes_search" element={<RecipesSearch />} />
          <Route path="/about" element={<About />} />
          <Route path="/pantry_items" element={<PantryItemsIndexPage />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
