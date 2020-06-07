import React from "react";
import Card from "./Card";
function Cards(props) {
  const { cards } = props;

  return (
    <>
      {cards.map((a) => (
        <Card picter={a.img}>
          <div className="card-body">
            <h5 className="card-title">{a.title}</h5>
            <p className="card-text">{a.text}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </Card>
      ))}
    </>
  );
}
export default Cards;
