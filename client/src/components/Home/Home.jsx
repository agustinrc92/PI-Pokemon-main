import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPokemons,
  getTypes,
  filterPokemonsByTypes,
  filterCreated,
  orderByName,
  orderByAttack,
} from "../../actions";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import Paginado from "../Paginado/Paginado";
import SearchBar from "../SearchBar/SearchBar";
import "./Home.css";
import logo from "../../img/Pokelogo.png";

export default function Home() {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.pokemons);
  //Constantes para el paginado
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage] = useState(12);
  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = allPokemons.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );
  //Constante para ordenar
  const [, setOrden] = useState("");

  //Para el paginado
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //Traer los types
  const types = useSelector((state) => state.types);
  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  //Traer los Pokemon
  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  //Handle para recargar todos los Pokemon
  function handleClick(e) {
    dispatch(filterPokemonsByTypes(e.target.value));
  }

  //Handle para filtrar los Pokemon por tipo
  function handleFilterTypes(e) {
    dispatch(filterPokemonsByTypes(e.target.value));
  }

  //Handle para filtrar pokemons por attack

  function handleOrderByAttack(e) {
    e.preventDefault();
    dispatch(orderByAttack(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  }

  //Handle para filtrar por creados
  function handleFilterCreated(e) {
    dispatch(filterCreated(e.target.value));
  }

  //Handle para ordenar alfabeticamente
  function handleSort(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  }

  return (
    <div>
      <Link to="/pokemons">
        <button class="buttonDetalles">Crear Pokemon</button>
      </Link>
      <img src={logo} alt="Pokémon logo" class="logo" />
      <button
        class="buttonDetalles"
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Volver a cargar Pokemons
      </button>
      <div>
        <select class="barras" onChange={(e) => handleSort(e)}>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
        <select class="barras" onChange={(e) => handleOrderByAttack(e)}>
          <option value="desc">Debil a Fuerte</option>
          <option value="asc">Fuerte a Debil</option>
        </select>
        <select class="barras" onChange={(e) => handleFilterTypes(e)}>
          <option disabled>Filter By Type</option>
          <option value="All">All Types</option>
          {types.map((types) => (
            <option value={types.name} key={types.id}>
              {types.name[0].toUpperCase() + types.name.slice(1)}
            </option>
          ))}
        </select>
        <select class="barras" onChange={(e) => handleFilterCreated(e)}>
          <option value="All">Todos</option>
          <option value="created">Creado</option>
          <option value="api">Existente</option>
        </select>
        <SearchBar />
        <Paginado
          pokemonsPerPage={pokemonsPerPage}
          allPokemons={allPokemons}
          paginado={paginado}
        />

        {currentPokemons &&
          currentPokemons.map((el) => {
            <Card name={el.name} image={el.image} types={el.types} />;
            return (
              <div>
                <nav>
                  <Card name={el.name} image={el.image} types={el.types} />
                </nav>
                <nav>
                  <Link to={`pokemons/${el.id}`}>
                    <button>Detalles</button>
                  </Link>
                </nav>
              </div>
            );
          })}
      </div>
    </div>
  );
}
