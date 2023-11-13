import React from "react";
import "./style.css";

export const Home = () => {

    return (
        <main>
            {/* Current Forecast */}
            <div className="card hero-section">
                <div className="current-city">
                    <h2 className="name">
                        Mumbai
                    </h2>
                    <h3 className="date">
                        May 16 2023
                    </h3>
                </div>
                <div className="current-forecast">
                    <h3 className="weather">Misty</h3>
                    <p className="temperature">10</p>
                </div>
            </div>
        </main>

    )
}