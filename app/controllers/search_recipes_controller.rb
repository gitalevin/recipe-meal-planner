class SearchRecipesController < ApplicationController
  def index
    response = HTTP.headers("x-api-key" => "#{Rails.application.credentials.spoonacular_api_key}").get("https://api.spoonacular.com/recipes/findByIngredients?ingredients=#{params[:ingredients]}")
    data = response.parse
    render json: data
  end

  def instructions
    response = HTTP.headers("x-api-key" => "#{Rails.application.credentials.spoonacular_api_key}").get("https://api.spoonacular.com/recipes/#{params[:id]}/analyzedInstructions")
    data = response.parse
    render json: data
  end
end
