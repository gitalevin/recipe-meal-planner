class PantryItemsController < ApplicationController
  def index
    @pantry_items = PantryItem.all
    render template: "pantry_items/index"
  end

  def create
    @pantry_item = PantryItem.create(
      ingredient_id: params[:ingredient_id],
      user_id: params[:user_id],
      amount: params[:amount],
    )
    render json: pantry_item.as_json
  end
end
