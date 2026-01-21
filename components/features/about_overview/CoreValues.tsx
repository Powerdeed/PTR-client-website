import React from "react";
import CoreValue from "./components/CoreValue";
import "./styles/core-values.css";

export default function CoreValues({ coreValues, h2Position }) {
  return (
    <div className="core-values">
      {h2Position === "center" ? (
        <h2 className="home-section-title">Our Core Values</h2>
      ) : (
        <></>
      )}
      <div className="core-values-list">
        {Object.entries(coreValues.values).map(([key, value]) => (
          <CoreValue key={key} {...value} />
        ))}
      </div>
    </div>
  );
}
