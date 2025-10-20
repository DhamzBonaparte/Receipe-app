import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import "./fav.scss";

export default function Fav({ data,setData }) {

  function handleRemove(id) {
    setData(data.filter((item) => item.id !== id));
  }

  return (
    <>
      <div className="favs">
        <Link to="/" className="title">
          Receipe App
        </Link>
        <p>
          Favorites <FavoriteIcon className="icon" />
        </p>
        <div className="spare"></div>
      </div>
      <div className="Favorites">
        {data.map((items, id) => {
          return (
            <div className="card" key={id}>
              <div className="image">
                <img className="imgg" src={items.src} alt={items.alt} />
              </div>

              <div className="talaa">
                <p className="idd ">#{items.id}</p>
                <p className="meall">{items.meal}</p>
                <p className="categoryy">{items.category}</p>
                <button onClick={() => handleRemove(items.id)}>
                  Remove from Favorites
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
