import React from "react";
import { Link } from "react-router-dom";
import "././Card.css";

export default function Card({ name, image, types, id }) {
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
      <nav>
        <Link to={`pokemons/${id}`}>
          <button class="buttonCard">Detalles</button>
        </Link>
      </nav>
    </div>
  );
}
