import React from 'react';
import './Card.css';

const RecipePage = ({ recipe }) => {
  const {
    title,
    image,
    description,
    ingredients,
    instructions
  } = recipe

  return(
    <div className="RecipePage">
      <h2 className="title">{title}</h2>
      <img src={image} alt={title} />
      <p className="description">{description}</p>
      <h4>Ingredients</h4>
      <ul>
        {ingredients.map(ingredients => (
          <li key={ingredients}>{ingredients}</li>
        ))}
      </ul>

      <h4>Instructions</h4>
      <ul>
        {instructions.map(ingredients => (
          <li key={instructions}>{instructions}</li>
        ))}
      </ul>

    </div>
  )
}

export default RecipePage;
