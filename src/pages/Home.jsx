import React from "react";
import VillageCard from "../components/VillageCard";

function Home() {
  const villages = [
    { id: 1, name: "Village A", image: "/images/villageA.jpg" },
    { id: 2, name: "Village B", image: "/images/villageB.jpg" },
  ];

  return (
    <div className="container">
      <h2>Villages</h2>
      <div className="village-list">
        {villages.map((v) => (
          <VillageCard
            key={v.id}
            villageName={v.name}
            image={v.image}
            onClick={() => {}}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
