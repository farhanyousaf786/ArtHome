import React from "react";
import "./DesignCard.css";

export default function DesignCard({ imgAlt, imgSrc }) {
  return (
    <div id="design-card">
      <img id="design-img" src={imgSrc} alt={imgAlt} />
      <div id="image-overlay">
        <div id="text">{imgAlt}</div>
      </div>
    </div>
  );
}
