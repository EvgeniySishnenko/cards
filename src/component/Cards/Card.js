import React from "react";
function Card(props) {
  const { picter } = props;

  return (
    <div className="card mt-3" style={{ width: "18rem" }}>
      {picter && (
        <img
          src="http://placehold.it/286x180/b0b0b0"
          className="card-img-top"
          alt=""
        />
      )}

      {props.children}
    </div>
  );
}
export default Card;
