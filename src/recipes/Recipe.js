import Ingredients from "./Ingredients.js";
import Instructions from "./Instructions.js";
import './Recipe.css';

export default function Recipe() {
    return (
      <div className="recipe-container">
        <h3 className="recipe-title">
          Chocolate Chippers
        </h3>
        <h4 className="recipe-subtitle">Ingredients</h4>
        <Ingredients />
        <h4 className="recipe-subtitle">Instructions</h4>
        <Instructions />
      </div>
    );
  }
  