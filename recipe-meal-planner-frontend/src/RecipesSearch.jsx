export function RecipesSearch() {
  return (
    <div>
      <h1>Search Recipes</h1>
      <form>
        <div>
          <input name="name" type="text" />
        </div>
        <button className="btn btn-primary mt-2" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
