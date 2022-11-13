export function PantryItemsIndex(props) {
  return (
    <div>
      <h1>My Pantry Items</h1>
      <div className="row">
        {props.pantryItems.map((pantryItem) => (
          <div className="col-md-3 mb-4" key={pantryItem.id}>
            <div className="card">
              <img src={pantryItem.ingredient.image_url} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{pantryItem.ingredient.name}</h5>
                <p className="card-text">amount:{pantryItem.amount}</p>
                <a href="#" className="btn btn-primary" onClick={() => props.onSelectPantryItem(pantryItem)}>
                  More info
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
