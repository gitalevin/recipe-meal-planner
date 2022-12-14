import { useState } from "react";

export function IngredientsIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div id="ingredients-index">
      <h1>All Ingredients</h1>
      Search filter:{" "}
      <input value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} type="text" list="titles" />
      <datalist id="titles">
        {props.ingredients.map((ingredient) => (
          <option key={ingredient.id}>{ingredient.name}</option>
        ))}
      </datalist>
      <div className="row">
        {props.ingredients
          .filter((ingredient) => ingredient.name.toLowerCase().includes(searchFilter.toLowerCase()))
          .map((ingredient) => (
            <div className="col-md-3 mb-4" key={ingredient.id}>
              <div className="card">
                <img src={ingredient.image_url} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-name">{ingredient.name}</h5>
                  <a className="btn btn-primary" href={`/recipes/${ingredient.id}`}>
                    Go to show page
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
