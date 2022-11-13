import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header>
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {" "}
            On My Plate
          </Link>
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
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ingredients">
                  All Ingredients
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ingredients/new">
                  New Ingredient
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pantry_items">
                  All Pantry Items
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pantry_items/new">
                  New Pantry Item
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/recipes_search">
                  Recipes Search
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <li className="nav-item">
                  <LogoutLink className="nav-link" />
                </li>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
