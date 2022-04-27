import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../actions";
import { Link } from "react-router-dom";
import Card from "../Card/Card";

export default function Home() {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.pokemons);
  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  //Handle para recargar todos los Pokemon
  function handleClick(e) {
    e.preventDefault();
    dispatch(getPokemons());
  }

  return (
    <div>
      <Link to="/pokemon">Crear Pokemon</Link>
      <h1>POKEMON</h1>
      <button
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Volver a cargar Pokemons
      </button>
      <div>
        <select>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
        <select>
          <option value="asc">Debil a Fuerte</option>
          <option value="desc">Fuerte a Debil</option>
        </select>
        <select>
          <option value="All">Tipo</option>
        </select>
        <select>
          <option value="All">Todos</option>
          <option value="creados">Creado</option>
          <option value="existente">Existente</option>
        </select>
        {allPokemons &&
          allPokemons.map((el) => {
            <Card name={el.name} image={el.image} types={el.types} />;
            return (
              <div>
                <Card name={el.name} image={el.image} types={el.types} />
              </div>
            );
          })}
      </div>
    </div>
  );
}
