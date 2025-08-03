import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "enabled"
  );

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode ? "enabled" : "disabled");
  };

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <main className={`home-container ${darkMode ? "dark" : ""}`}>
      <Navbar />

      <button onClick={toggleDarkMode} className="dark-mode-toggle">
        {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
      </button>

      <header className="home-header">
        <h1 className="home-title">Welcome to AnimalLover</h1>
        <p className="home-subtitle">
          Helping lost and injured animals find their way home.
        </p>
      </header>

      <section className="action-section">
        <h2 className="action-title">Take Action</h2>
        <ul className="action-list">
          <li className="action-item">
            <Link to="/lost-animal" className="action-link home-button">
              Report Lost Animal
            </Link>
          </li>
          <li className="action-item">
            <Link to="/rescue-dead" className="action-link home-button">
              Report Dead Animal
            </Link>
          </li>
          <li className="action-item">
            <Link to="/rescue-accident" className="action-link home-button">
              Report Injured Animal
            </Link>
          </li>
          <li className="action-item">
            <Link to="/animal-info" className="action-link home-button">
              Animal First Aid
            </Link>
          </li>
        </ul>
      </section>

      <section className="adopt-section">
        <h2 className="adopt-title">Adopt an Animal</h2>
        <p className="adopt-subtitle">
          Give a loving home to animals in need. Adopt a pet today and make a difference.
        </p>
        <Link to="/view-animals" className="adopt-link home-button">
          View Animals for Adoption
        </Link>
      </section>

      <section className="donate-section">
        <h2 className="donate-title">Support Our Cause</h2>
        <p className="donate-subtitle">
          Help us continue rescuing, treating, and rehoming animals in need.
        </p>
        <Link to="/donate" className="donate-button home-button">
          Donate Now 💖
        </Link>
      </section>

      <Footer />
    </main>
  );
};

export default Home;
