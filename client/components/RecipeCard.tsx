import React, { useState } from "react";

interface Ingredient {
  text: string;
}

interface RecipeCardProps {
  title: string;
  cal: number;
  image: string;
  ingredients: Ingredient[];
  time?: number;
  source: string;
  servings?: number;
}

const RecipeCard: React.FC<RecipeCardProps> = ({
  title,
  cal,
  image,
  ingredients,
  time = 30,
  source,
  servings = 4,
}) => {
  const [showResults, setShowResults] = useState(false);
  const toggleTrueFalse = () => setShowResults(!showResults);

  return (
    <div className="container">
      <section className="cover">
        <img className="image" src={image} alt={title} />
      </section>
      <div className="middle">
        <p className="title">{title}</p>
        <div className="stats">
          <div className="statItem">
            <Kcal />
            <p className="big-number">{Math.round(cal)}</p>
            <p className="small-text">kcal</p>
          </div>
          <div className="statItem">
            <Serving />
            <p className="big-number">{servings}</p>
            <p className="small-text">servings</p>
          </div>
          <div className="statItem">
            <Time />
            <p className="big-number">{time}</p>
            <p className="small-text">mins</p>
          </div>
          <div className="statItem">
            <a href={source}>
              <Source />
              <p className="big-number">Go</p>
              <p className="small-text">to source</p>
            </a>
          </div>
        </div>
        <div className="ingredients-container">
          <div className="title-wrapper">
            <p className="ingredients-title">Ingredient</p>
            <span onClick={toggleTrueFalse}>
              <Open />
            </span>
          </div>
          {showResults ? (
            <ol className="ingredients-list">
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient.text}</li>
              ))}
            </ol>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
