import './SideMenu.css';

export default function SideMenu({sideMenuOpen}) {
  var visibility = sideMenuOpen ? "visible" : "hidden";
  return (
    <div className="yoyo">
      <div>menu {visibility}</div>
      {/* <div className="side-menu">
        <h2><a href="#recipes">Recipes</a></h2>
        <h2><a href="#tags">Tags</a></h2>
        <h2><a href="#new-recipe">Add New Recipe</a></h2>
      </div> */}
    </div>
  );
}