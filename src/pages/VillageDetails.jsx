import React from "react";
import ListingCard from "../components/ListingCard";

function VillageDetails() {
  const listings = [
    { id: 1, name: "John Doe", jobTitle: "Software Engineer", company: "XYZ" },
    { id: 2, name: "Jane Smith", jobTitle: "Web Developer", company: "ABC" },
  ];

  return (
    <div className="container">
      <h2>IT Professionals in Village</h2>
      <div className="listing-list">
        {listings.map((listing) => (
          <ListingCard key={listing.id} {...listing} />
        ))}
      </div>
    </div>
  );
}

export default VillageDetails;
