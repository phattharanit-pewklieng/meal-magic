import { useState, useEffect } from 'react'
import { fetchRecipe, getRecipeByCuisine } from '../apis/recipes'
import { useParams } from 'react-router-dom'
import { RecipeCard } from './RecipeCard'
import { title } from 'process'
import { log } from 'console'

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
    foodId: '',
    url: ''
  }
  // useState to store recipe
  const [recipe, setRecipe] = useState(initialCharacterState)
  const [searchRecipe, setSearchRecipe] = useState('')
  console.log(searchRecipe);
  

  // const { id } = useParams()
  // console.log(id)

  // useEffect(() => {
  //   handleSearch()
  // }, [])

  async function handleDisplayer() {
    try {
      const output = await fetchRecipe()
      setRecipe(output)
      console.log(output)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(()=>{

  },[searchRecipe])

  // const updateSearch = (e) => {
  //   setSearchRecipe(e.target.value)
  // }

  // const getSearch = (e) => {
  //   e.preventDefault()
  //   setQuery(searchRecipe)
  // }

  // async function handleSearch() {
  //   try {
  //     const output = await getRecipeByCuisine(query)
  //     setRecipe(output)
  //     console.log(output)
  //   } catch (err) {
  //     console.error(err)
  //   }
  // }


  return (
    <div className="container">
      <div className="header">
        <h1>Meal-Magic</h1>
        <div className="Input_header">
          <form className="search-form">
            <input
              className="search-bar"
              type="text"
              placeholder="Search Food" value={searchRecipe} onChange={(e)=>  setSearchRecipe(e.target.value)}
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
 
         {recipe && (
  <>
    <h3 style={{color: "blue"}}>{recipe.label}</h3>
    <p>{`Calories: ${recipe.calories}`} </p>
    <img src={recipe.image} alt={recipe.label} />
   
   <a href={recipe.url}>{recipe.url}</a>
  </>
)} 

      
        
      
      </div>
      </div>
    
  )
}

export default App
