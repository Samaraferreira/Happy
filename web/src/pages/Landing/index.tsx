import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import logoImg from "../../assets/logo.svg";

import "./landing.scss";

function Landing() {
  return (
    <div id="page-landing">
      <section className="content-wrapper">
        <img className="logo" src={logoImg} alt="Happy" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Traipu</strong>
          <span>Alagoas</span>
        </div>

        <Link to="/app" className="enter-app">
          <FaArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </Link>
      </section>
    </div>
  );
}

export default Landing;
