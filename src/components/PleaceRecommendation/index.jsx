import React, { useState, useContext, useEffect } from "react";
import { LocationContext } from "../../context/LocationContext";
import { api } from "../../utils/api";
import "./style.css";

const getPhotoUrl = (photo, height, width) =>
  `https://places.googleapis.com/v1/${photo}/media?key=${
    process.env.REACT_APP_GOOGLE_API_KEY
  }&maxWidthPx=${200}&maxHeightPx=${200}`;

export const PlaceRecommendations = () => {
  const { selectedLocation } = useContext(LocationContext);
  const [places, setPlaces] = useState([]);

  const findPlaces = async () => {
    const data = await api.get(
      `/places/${selectedLocation.lat}/${selectedLocation.lon}`
    );
    console.log("🚀 ~ file: index.jsx:12 ~ findPlaces ~ data:", data);
    setPlaces(data.data.places);
  };

  useEffect(() => {
    findPlaces();
  }, [selectedLocation]);

  return (
    <div className="card">
      <h2 className="card-title">Recommended Places</h2>
      <div className="recommended-places">
        {places.map((each) => (
          <div className="place" key={each.id}>
            {each.photos.slice(0, 1).map((photo) => (
              <img
                className="photo"
                key={photo.id}
                src={getPhotoUrl(photo.name, photo.heightPx, photo.widthPx)}
                alt={photo.caption}
              />
            ))}
            <h3 className="name">{each.displayName.text}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
