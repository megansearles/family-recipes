import './SideMenu.css';

export default function SideMenu({sideMenuOpen, setSideMenuOpen}) {
  return (
    <div className= {`side-menu ${sideMenuOpen ? "open" : ""}`}>
      <button
          className="close-menu-btn"
          onClick={() => setSideMenuOpen(!sideMenuOpen)}
          aria-label="Close menu"
        > X
        </button>
      <h3><a href="#home">Home</a></h3>
      <h3><a href="#new-recipe">New Recipe</a></h3>
      <h3><a href="#all-recipes">All Recipes</a></h3>
      <h3><a href="#categories">Categories</a></h3>
      <h3><a href="#Family Groups">Family Groups</a></h3>
    </div>
  );
}