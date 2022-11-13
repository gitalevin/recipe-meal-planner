import axios from "axios";
import { useState, useEffect } from "react";

export function PantryItemsIndexPage() {
  const [searchFilter, setSearchFilter] = useState("");
  const [pantryItems, setPantryItems] = useState([]);

  const handleIndexPantryItems = () => {
    console.log("Going to get all ingredients...");
    axios.get("http://localhost:3000/pantry_items.json").then((response) => {
      console.log(response);
      setPantryItems(response.data);
    });
  };

  useEffect(handleIndexPantryItems, []);

  return (
    <div id="pantryItems-index">
      <h1>All Pantry Items</h1>
      Search filter:{" "}
      <input value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} type="text" list="names" />
      <datalist id="names">
        {pantryItems.map((pantryItem) => (
          <option key={pantryItem.id}>{pantryItem.name}</option>
        ))}
      </datalist>
      <div className="row">
        {pantryItems
          .filter((pantryItem) => pantryItem.ingredient.name.toLowerCase().includes(searchFilter.toLowerCase()))
          .map((pantryItem) => (
            <div className="col-md-3 mb-4" key={pantryItem.id}>
              <div className="card">
                <img src={pantryItem.ingredient.image_url} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-name">{pantryItem.ingredient.name}</h5>
                  <p> amount: {pantryItem.amount}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
