import { Link } from "react-router-dom";
export function Header() {
  return (
    <header>
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            On My Plate
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#recipes-index">
                  All Ingredients
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#ingredients-new">
                  New Ingredient
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#ingredients-index">
                  All Pantry Items
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#pantryItems-new">
                  New Pantry Item
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/signup">
                  Signup
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/recipes_search">
                  Recipes Search
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
