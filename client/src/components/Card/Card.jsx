import React from "react";

export default function Card({ name, image, types }) {
  return (
    <div>
      <div>{name}</div>
      <div>{types.join(", ")}</div>
      <img
        src={image}
        alt="No se encuentra imagen"
        width="200px"
        height="250px"
      />
    </div>
  );
}
