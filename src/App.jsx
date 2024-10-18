import React from "react";
import "./index.css";
import Bookshelf from "./components/Bookshelf";

const App = () => {
  return (
    <>
      <h1 className="bookshelfDiv">My Bookshelf</h1>
      <Bookshelf />
    </>
  );
};

export default App;
