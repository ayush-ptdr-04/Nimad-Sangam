import React from "react";
import "./HelpContactCard.css";

function HelpContactCard({ name, position, phone }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{position}</p>
      <p>Contact: {phone}</p>
    </div>
  );
}

export default HelpContactCard;
