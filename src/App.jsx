import { useState, useEffect } from "react";
import StarshipList from "./StarshipList";
import StarshipDetail from "./StarshipDetail";
import "./App.css";

const App = () => {
  const [starships, setStarships] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [selectedStarship, setSelectedStarship] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://swapi.dev/api/starships/?page=${page}`
      );
      const data = await response.json();
      setStarships((prev) => [...prev, ...data.results]);
      setHasMore(data.next !== null);
    };

    fetchData();
  }, [page]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  const handleStarshipClick = (starship) => {
    setSelectedStarship(starship);
  };

  const handleBack = () => {
    setSelectedStarship(null);
  };

  const filteredStarships = starships.filter(
    (starship) =>
      starship.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      starship.model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      {selectedStarship ? (
        <StarshipDetail starship={selectedStarship} onBack={handleBack} />
      ) : (
        <>
          <header>
            <h1>Star Wars Starships</h1>
            <div>
              <label className="search-input-label">Name / Model</label>
              <input
                type="text"
                className="search-input"
                placeholder="Name / Model"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
          </header>
          <StarshipList
            starships={filteredStarships}
            onStarshipClick={handleStarshipClick}
          />
          {hasMore && starships.length ? (
            <button className="load-more" onClick={handleLoadMore}>
              Load More
            </button>
          ) : null}
        </>
      )}
    </div>
  );
};

export default App;
