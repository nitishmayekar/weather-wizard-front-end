import React from "react";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import "./App.css";
import { Home } from "./pages/home";
import { LocationProvider } from "./context/LocationContext";
import { Route, Routes } from "react-router-dom";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";

function App() {
  return (
    <LocationProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
      <Footer />
    </LocationProvider>
  );
}

export default App;
