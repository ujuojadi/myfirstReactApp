import React from "react";
import image1 from "../img/ane.jpg";
import image2 from "../img/banana.jpg";
import image3 from "../img/dc-center-1.webp";
import image4 from "../img/ec.jpg";
import image5 from "../img/ecc.jpg";
import image6 from "../img/ede.webp";
import image7 from "../img/excenter.jpg";
import image8 from "../img/office.jpg";
import image9 from "../img/orange.avif";
import image10 from "../img/pcwec.jpg";
import image11 from "../img/photo-1523049673857-eb18f1d7b578.jpg";
import image12 from "../img/PricewaterhouseCoopers_Logo.png";
import image13 from "../img/PwC-Nigeria-Experience-Centre-brandspur-nigeria-3.webp";
import image14 from "../img/PwC15.jpg";
import image15 from "../img/toggle.png";
import image16 from "../img/workspace.webp";

export default function Gallery() {
  return (
    <section className="home-page main-content">
      <h2>PWC Gallery</h2>

      <div className="gallery-option">
        <div className="gallOpt" id="all">
          All
        </div>
        <div className="gallOpt" id="locations">
          Locations
        </div>
        <div className="gallOpt" id="projects">
          Projects
        </div>
        <div className="gallOpt" id="random">
          Random
        </div>
      </div>

      <div className="grid-container">
        <img src={image1} className="gallery-image pwc" />

        <img src={image2} className="gallery-image projects" />

        <img src={image3} className="gallery-image Random" />

        <img src={image4} className="gallery-image pwc" />

        <img src={image5} className="gallery-image projects" />

        <img src={image6} className="gallery-image Random" />

        <img src={image7} className="gallery-image pwc" />

        <img src={image8} className="gallery-image projects" />

        <img src={image9} className="gallery-image Random" />

        <img src={image10} className="gallery-image projects" />

        <img src={image11} className="gallery-image Random" />

        <img src={image12} className="gallery-image Random" />

        <img src={image13} className="gallery-image Random" />

        <img src={image13} className="gallery-image Random" />

        <img src={image13} className="gallery-image Random" />
      </div>
    </section>
  );
}
