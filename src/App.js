import './App.css';
import Recipe from "./recipes/Recipe.js";
import RecipeBanner from "./sitenav/RecipeBanner.js";

export default function App() {
  return (
    <div className="app-container">
      <RecipeBanner />
      <Recipe />
    </div>
  );
}
