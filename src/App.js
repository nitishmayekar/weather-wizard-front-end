import React from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import "./App.css";
import { Home } from "./pages/home";
import { LocationProvider } from "./context/LocationContext";


function App() {
  return (
    <LocationProvider>
      <Header />
      <Home />
      <Footer />
    </LocationProvider>
  );
}

export default App;

