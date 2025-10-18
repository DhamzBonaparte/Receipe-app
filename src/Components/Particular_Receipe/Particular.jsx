import { useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";

import "./Particular.scss";
export default function Particular({ data, setData }) {
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const location = useLocation();
  const { src, alt, id, meal, category, instruction, ingredients } =
    location.state || {};

  function handleFav() {
    setData((items) => [
      ...items,
      {
        src,
        alt,
        id,
        meal,
        category,
      },
    ]);
    setDisabled(!disabled);
  }

  console.log(data);

  return (
    <>
      <div className="receipess">
        <div className="left">
          <div className="img">
            <img src={src} alt={alt} />
          </div>
          <button
            className="buttt"
            disabled={disabled}
            onClick={() => handleFav()}
          >
            {disabled ? "Added to Fav" : "Add to Fav"}{" "}
            <FavoriteIcon style={{ marginLeft: "10px" }} />
          </button>
          <div className="ingredients">
            <p className="ing">Ingredients</p>
            {ingredients.map((a, id) => {
              return (
                <div className="bottom" key={id}>
                  <span className="Name">{a.name} --- </span>
                  <span className="Measure">{a.measure}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="right">
          <div className="topp">
            <p className="id">#{id}</p>
            <p className="name">
              Name: {meal}{" "}
              <span className="category"> Category: {category}</span>
            </p>
          </div>
          <div className="mid">
            <p className="instructions">
              <span className="INS">Instructions:</span>
              <span className="ins">{instruction}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
