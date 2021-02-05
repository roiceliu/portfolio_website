import React from "react";
import "./HeroSection.css";
import leftGraphics from "../../images/heroLeft.svg";
import rightGraphics from "../../images/heroRight.svg";

function HeroSection({
  id,
  headline1,
  headline2,
  headline3,
  subtitle,
  buttonLink,
  buttonText,
}) {
  return (
    <>
      <div className="heroSection" id={id}>
        <div className="heroSection-container container">
          <div className="hero__text-wrapper">
            <div className="hero-header">
              <h1 className="hero-headline">{headline1}</h1>
              <h1 className="hero-headline">{headline2}</h1>
              <h1 className="hero-headline">{headline3}</h1>
            </div>

            <p className="hero-subtitle">{subtitle}</p>
          </div>
          <img src={leftGraphics} alt="left graphics" className="hero-leftG" />
          <img
            src={rightGraphics}
            alt="right graphics"
            className="hero-rightG"
          />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
