import React from "react";
import "./ListingCard.css";

function ListingCard({ name, jobTitle, company }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>
        {jobTitle} at {company}
      </p>
    </div>
  );
}

export default ListingCard;
