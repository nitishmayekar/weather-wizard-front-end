import React, { useState, useEffect, useContext } from "react";
import { api } from "../../utils/api";
import "./style.css";
import { LocationContext } from "../../context/LocationContext";

export const LocationSearch = () => {
  const { setSelectedLocation } = useContext(LocationContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleLocationSearch = async () => {
    const res = await api.get(`/location/${searchTerm}`);
    setSearchResults(res.data);
  };

  const handleSelectLocation = (clickedLocation) => {
    setSelectedLocation(clickedLocation);
    setSearchResults([]);
    setSearchTerm("");
  };

  useEffect(() => {
    if (searchTerm.length > 2) {
      handleLocationSearch();
    }
  }, [searchTerm]);

  return (
    <div className="location-search">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      {searchResults.length > 0 && (
        <div className="location-results">
          {searchResults.map((result) => {
            return (
              <div key={result.lat + result.lon} className="search-result">
                <p
                  onKeyDown={() => {
                    handleSelectLocation(result);
                  }}
                  onClick={() => handleSelectLocation(result)}
                >
                  {result.name}, {result.state}, {result.country}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
