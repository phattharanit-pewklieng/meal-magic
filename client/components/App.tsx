import { useState, useEffect } from 'react'
import { fetchRecipe, getRecipeByCuisine } from '../apis/recipes'
import { useParams } from 'react-router-dom'
import { RecipeCard } from './RecipeCard'
import { title } from 'process'

function App() {
  const initialCharacterState = {
    title: '',
    calories: '',
    image: '',
    ingredients: '',
    time: '',
    source: '',
    servings: '',
    label: '',
  }
  // useState to store recipe
  const [recipe, setRecipe] = useState(initialCharacterState)
  const [searchRecipe, setSearchRecipe] = useState('')

  const { id } = useParams()
  console.log(id)

  useEffect(() => {
    handleSearch()
  }, [])

  async function handleDisplayer() {
    try {
      const output = await fetchRecipe()
      setRecipe(output)
      console.log(output)
    } catch (err) {
      console.error(err)
    }
  }

  const updateSearch = (e) => {
    setSearchRecipe(e.target.value)
  }

  const getSearch = (e) => {
    e.preventDefault()
    setQuery(searchRecipe)
  }

  async function handleSearch() {
    try {
      const output = await getRecipeByCuisine(query)
      setRecipe(output)
      console.log(output)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="container">
      <div className="header">
        <h1>Meal-Magic</h1>
        <div className="Input_header">
          <form onSubmit={getSearch} className="search-form">
            <input
              className="search-bar"
              type="text"
              value={searchRecipe}
              onChange={updateSearch}
              placeholder="Search Food"
            />
            <button className="search-btn" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
      <div>
        <p className="Superscript">
          e.g. ramen, banana, carrot cake, avocado, salmon, tofu...
        </p>

        <h2>Random Recipe</h2>
        <button onClick={handleDisplayer}>Display</button>

        {/* <div>
        {recipes.map((recipe, i) => (
  <div key={recipe.calories}>
    <h3>{recipe.label}</h3>
    <p>calories: {`${recipe.calories}`}</p>
    <img src={recipe.image} alt="" />
    <p>{recipe.ingredients}</p>
  </div>
))} */}
          </div>
        <div> 
        {/* what to map and list all recipe */}
        {/* search recipe */}
           <h3>{recipe.label}</h3>
          <p>calories: {`${recipe.calories}`} </p>
          <img src={recipe.image} alt="" />
          <p>{recipe.ingredients}</p>
        </div> 
      </div>
    
  )
}

export default App
