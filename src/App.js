import './App.css';
import { useState } from "react";
import Recipe from "./recipes/Recipe.js";
import RecipeBanner from "./sitenav/RecipeBanner.js";
import SideMenu from "./sitenav/SideMenu.js";

export default function App() {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);

  return (
    <div className="app-container">
      <div className="main-content">
        <RecipeBanner sideMenuOpen={sideMenuOpen} setSideMenuOpen={setSideMenuOpen}/>
        <Recipe />
      </div>
      <SideMenu sideMenuOpen={sideMenuOpen} setSideMenuOpen={setSideMenuOpen}/>
    </div>
  );
}
