class SearchRecipesController < import axios from "axios";

  const options = {
    method: 'GET',
    url: 'https://tasty.p.rapidapi.com/recipes/auto-complete',
    params: {prefix: 'chicken soup'},
    headers: {'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY', 'X-RapidAPI-Host': 'tasty.p.rapidapi.com'}
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
