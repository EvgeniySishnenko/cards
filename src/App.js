import React from "react";
// import './App.css';
import Cards from "./component/Cards/Cards";

function App() {
  const cards = [
    {
      title: "Card title",
      text:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: "http://placehold.it/286x180/b0b0b0",
    },
    {
      title: "Card title 2",
      text:
        "222 Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: false,
    },
  ];
  return (
    <div className="App">
      <div className="container mt-5">
        <Cards cards={cards} />
      </div>
    </div>
  );
}

export default App;
