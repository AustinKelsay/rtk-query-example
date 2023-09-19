import React from "react";
import "./Card.css"; // Importing the CSS file

function Card({ id, todos }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Todo ID: {id}</h5>
        <p className="card-text">Todo Body: {todos}</p>
      </div>
    </div>
  );
}

export default Card;
