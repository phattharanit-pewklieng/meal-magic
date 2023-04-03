import request from 'superagent'
import RecipeCard from '../components/RecipeCard'

//api.spoonacular.com/recipes/random?apiKey=9ab64653ed394bddb9b9d8c8a1eb3b63&query=pasta&maxFat=25&number=2

interface Recipe {
  title: string
  calories: string
  image: string
  ingredients: string
  time: string
  source: string
  servings: string
  label: string
}

// const apiKey = '9ab64653ed394bddb9b9d8c8a1eb3b63'
const APP_KEY = '2853e9ccf22f104dab4034e2f9766207'
const APP_ID = '6957ebee'

export async function fetchRecipe() {
  const response = await request
    .get(
      //Edaman API
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

      // `https://api.spoonacular.com/food/menuItems/search?apiKey=9ab64653ed394bddb9b9d8c8a1eb3b63&query=snickers`
      // `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`
      // `https://api.spoonacular.com/recipes/findByNutrients?apiKey=${apiKey}&minCarbs=10&maxCarbs=50&number=3`
    )
    .accept('application/json')
  console.log(response)
  //.recipes[0].extendedIngredients[0]
  const recipe = response.body.hits[0].recipe as Recipe
  // const recipe = response.body.menuItems[0]
  console.log(recipe)
  return recipe
}

// import request from 'superagent'

// interface Recipe {
//   title: string
//   calories: number
//   image: string
//   ingredients: string[]
//   time: number
//   source: string
//   servings: number
// }

// const APP_KEY = '2853e9ccf22f104dab4034e2f9766207'
// const APP_ID = '6957ebee'

// export async function fetchRecipe() {
//   const response = await request
//     .get(
//       //Edaman API
//       `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
// )
//     .accept('application/json')
//   console.log(response)
//   const recipeData = response.body.recipes[0]
//   const recipe: Recipe = {
//     title: recipeData.title,
//     calories: recipeData.nutrition.nutrients.find(n => n.title === 'Calories')?.amount || 0,
//     image: recipeData.image,
//     ingredients: recipeData.extendedIngredients.map(i => i.original),
//     time: recipeData.readyInMinutes,
//     source: recipeData.sourceUrl,
//     servings: recipeData.servings,
//   }
//   console.log(recipe)
//   return recipe.title
// }

// res.json to show on body response.body
//get by query food name
export async function getRecipeByName(foodId: number) {
  const response = await request.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${foodId}`
  )
  const food = response.body as Recipe
  return food
}

//get by cuisine exp (italian)
export async function getRecipeByCuisine() {
  const response = await request.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&cuisine=italian`
  )
  const cuisine = response.body as Recipe
  return cuisine.title
}

//get Random Resipe
export async function getRandomRecipe() {
  const response = await request.get(
    `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=1`
  )
  const cuisine = response.body as Recipe
  return cuisine.title
}

//https://api.spoonacular.com/mealplanner/generate
