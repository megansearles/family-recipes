import './RecipeBanner.css';

export default function RecipeBanner({sideMenuOpen, setSideMenuOpen}) {
  return (
    <div className="app-header">
      <div className="left-header">
        <span className="app-header-main">Family Recipes</span>
        <span className="app-header-supplement">|</span>
        <span className="app-header-supplement">Your site for storing, editing, and sharing your family recipes</span>
      </div>
      <div className="right-header">
        <button
          className="hamburger-menu"
          onClick={() => setSideMenuOpen(!sideMenuOpen)}
          aria-label="Open menu"
        >
          <svg className="hamburger-bars" width="24" height="24" viewBox="0 0 24 24">
            <rect y="4" width="24" height="2" rx="1"  />
            <rect y="11" width="24" height="2" rx="1" />
            <rect y="18" width="24" height="2" rx="1" />
          </svg>
        </button>
      </div>
    </div>
  );
}