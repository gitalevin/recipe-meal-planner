class PantryItemsController < ApplicationController
  def index
    @pantry_items = current_user.pantry_items
    render template: "pantry_items/index"
  end

  def create
    @pantry_item = PantryItem.create(
      ingredient_id: params[:ingredient_id],
      user_id: current_user.id,
      amount: params[:amount],
    )
    render json: @pantry_item.as_json
  end
end
