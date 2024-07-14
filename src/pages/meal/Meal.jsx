import "./meal.css";

export default function Meal() {
  return (
    <div className="meal-page">
      <div className="meal-page-top">
        <div className="trending-wrapper">
          <div className="trending">
            <div className="trending-details">
              <h2> Trending Meal</h2>
              <p>Smoked beef</p>
              <p>meat, onion </p>
            </div>
            <img src="src\assets\steak.jpg" alt="beef" />
          </div>
        </div>

        <div className="meal-ingrediants">
          <div className="ingrediant-details">
            <h2> Choose Ingrediants</h2>
          </div>
          <img src="src\assets\steak.jpg" alt="beef" />
        </div>
      </div>

      <div className="meal-page-bottom">
        <div className="meal-search">
          <p>jfklajdljfkl</p>
        </div>
        <div className="meal-display">
          <p>jfklajdljfkl</p>
        </div>
      </div>
    </div>
  );
}
