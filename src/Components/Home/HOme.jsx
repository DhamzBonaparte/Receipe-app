import { Link } from "react-router-dom";
import "./home.scss";
import { useEffect, useState } from "react";
import Receipe from "../Receipe/receipe";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";

export default function Home() {
  const [now, setNow] = useState("");
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    getItems();
  }, []);

  async function getItems() {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${now}`
      );
      const result = await response.json();
      setResult(result);
      setQuery(now);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="top">
        <p className="title">Receipe App</p>
        <div className="search">
          <input
            type="text"
            value={now}
            placeholder="Search receipe..."
            onChange={(e) => setNow(e.target.value)}
          />
          <button className="btn" onClick={() => getItems()}>
            <SearchIcon />
          </button>
        </div>
        <div className="links">
          <Link to="/favorites" className="link">
            Favs
            <FavoriteIcon className="icon" />
          </Link>
        </div>
      </div>
      <div className="receipes">
        {loading ? (
          <h2 style={{ textAlign: "center" }}>Loading Receipes...</h2>
        ) : (
          <Receipe result={result} query={query} />
        )}
      </div>
    </>
  );
}
