import React from 'react';
import './Card.css';

const Card = ({title, image, getOneRecipe, id}) => {

  const imageStyle = {
    backgroundImage: `url(${image})`,
    height: "225px",
    width: "300px"
  }

  const onCardClick = () => {
    getOneRecipe(id);
  }

  return (
    <div onClick={onCardClick} className="Card">
      <div className="image" style={imageStyle}></div>
      <p className="title">{title}</p>
    </div>
  )
}

export default Card;
