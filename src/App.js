import './App.css';
import Recipe from "./recipes/Recipe.js";

function RecipeBanner() {
  return (
    <div className="app-header">
      <div className="app-header-main">Family Recipes</div>
      |
      <div className="app-header-supplement">Your site for storing, editing, and sharing your family recipes</div>
    </div>
  );
}

export default function App() {
  return (
    <div className="app-container">
      <RecipeBanner />
      <Recipe />
    </div>
  );
}
