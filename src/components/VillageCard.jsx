import React from "react";
import "./VillageCard.css";

function VillageCard({ villageName, image, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={image} alt={villageName} className="village-image" />
      <h3>{villageName}</h3>
    </div>
  );
}

export default VillageCard;
