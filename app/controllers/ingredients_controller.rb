class IngredientsController < ApplicationController
  def index
    ingredients = Ingredient.all
    render json: ingredients.as_json
  end

  def create
    ingredient = Ingredient.create(
      name: params[:name],
      image_url: params[:image_url],
    )
    render json: ingredient.as_json
  end
end
