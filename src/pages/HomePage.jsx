import React from "react";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import Illustration from "../utils/images/illustration-web.svg";

export const HomePage = () => {
  return (
    <>
      <Header />
      <main className="home-container">
        <div className="home-content-wrapper">
          <h1>The Productivity tool for developer students.</h1>
        </div>

        <div className="home-image-wrapper">
          <img src={Illustration} alt="" />
        </div>
      </main>
      <Footer />
    </>
  );
};
