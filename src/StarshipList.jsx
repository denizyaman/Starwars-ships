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

const StarshipList = ({ starships, onStarshipClick }) => {
  return (
    <ul className="starship-list">
      {starships?.map((starship, index) => (
        <li
          key={starship.name + index}
          onClick={() => onStarshipClick(starship)}
          className="starship-item"
        >
          <img
            src={starshipImages[starship.name]}
            alt={starship.name}
            className="starship-item-img"
          />
          <h2>{starship.name}</h2>
          <p>
            <strong>Model:</strong> {starship.model}
          </p>
          <p>
            <strong>Speed:</strong>
            {starship.max_atmosphering_speed}
          </p>
          <p>
            <strong>Hyber Drive Rating:</strong> {starship.hyperdrive_rating}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default StarshipList;
