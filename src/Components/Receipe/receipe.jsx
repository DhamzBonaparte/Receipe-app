import "./receipe.scss";
import { Link } from "react-router-dom";

export default function Receipe({ result, query }) {
  const meals = result.meals;
  console.log(meals);
  return (
    <>
      {
        <>
          {meals === null ? (
            <h1 style={{ textAlign: "center" }}>No Receipes for {query}</h1>
          ) : (
            <>
              <h1 style={{ textAlign: "center" }}>Our Receipes</h1>
              <div className="Receipes">
                {meals.map((info, index) => {
                  const ingredients = [];

                  for (let i = 0; i <= 20; i++) {
                    const ing = info[`strIngredient${i}`];
                    const measure = info[`strMeasure${i}`];

                    if (ing && ing.trim()) {
                      ingredients.push({
                        name: ing.trim(),
                        measure: measure?.trim() || "",
                      });
                    }
                  }
                  return (
                    <div className="card" key={info.idMeal}>
                      <div className="image">
                        <img
                          src={info.strMealThumb}
                          alt={`${info.strMeal}_image`}
                        />
                      </div>
                      <div className="tala">
                        <p>{info.strMeal}</p>
                        <p>{info.strCategory}</p>
                      </div>
                      <div className="button">
                        <Link
                          to="/receipe"
                          state={{
                            src: info.strMealThumb,
                            alt: `${info.strMeal}_image`,
                            id: info.idMeal,
                            meal: info.strMeal,
                            category: info.strCategory,
                            instruction: info.strInstructions,
                            ingredients,
                          }}
                        >
                          <button>See Receipe...</button>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </>
      }
    </>
  );
}
