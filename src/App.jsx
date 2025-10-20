import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Fav from "./Components/Favorites/Fav";
import Home from "./Components/Home/HOme";
import Particular from "./Components/Particular_Receipe/Particular";

function App() {
  const [data, setData] = useState([]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/favorites" element={<Fav data={data} setData={setData}/>}></Route>
        <Route
          path="/receipe"
          element={<Particular data={data} setData={setData} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
