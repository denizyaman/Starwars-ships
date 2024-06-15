import React from "react";

const starshipImages = {
  "CR90 corvette":
    "https://starwars-visualguide.com/assets/img/starships/2.jpg",
  "Star Destroyer":
    "https://starwars-visualguide.com/assets/img/starships/3.jpg",
  "Sentinel-class landing craft":
    "https://starwars-visualguide.com/assets/img/starships/5.jpg",
  "Death Star": "https://starwars-visualguide.com/assets/img/starships/9.jpg",
  "Millennium Falcon":
    "https://starwars-visualguide.com/assets/img/starships/10.jpg",
  "Y-wing": "https://starwars-visualguide.com/assets/img/starships/11.jpg",
  "X-wing": "https://starwars-visualguide.com/assets/img/starships/12.jpg",
  "TIE Advanced x1":
    "https://starwars-visualguide.com/assets/img/starships/13.jpg",
};

const StarshipDetail = ({ starship, onBack }) => {
  return (
    <div className="starship-detail-container">
      <button onClick={onBack} className="back-button">
        Back
      </button>
      <div className="starship-detail-card">
        <img src={starshipImages[starship.name]} alt={starship.name} />
        <h2>{starship.name}</h2>
        <p>Model: {starship.model}</p>
        <p>Manufacturer: {starship.manufacturer}</p>
        <p>Cost in credits: {starship.cost_in_credits}</p>
        <p>Length: {starship.length}</p>
        <p>Max atmosphering speed: {starship.max_atmosphering_speed}</p>
        <p>Crew: {starship.crew}</p>
        <p>Passengers: {starship.passengers}</p>
        <p>Cargo capacity: {starship.cargo_capacity}</p>
      </div>
    </div>
  );
};

export default StarshipDetail;
