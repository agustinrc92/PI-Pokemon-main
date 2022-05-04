import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { postPokemon, getTypes } from "../../actions";
import { useDispatch, useSelector } from "react-redux";

export default function PokemonCreate() {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);
  const history = useHistory();

  const [input, setInput] = useState({
    name: "",
    types: [],
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    image: "",
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleSelect(e) {
    setInput({
      ...input,
      types: [...input.types, e.target.value],
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postPokemon(input));
    alert("Pokemon created");
    setInput({
      name: "",
      types: [],
      hp: "",
      attack: "",
      defense: "",
      speed: "",
      height: "",
      weight: "",
      image: "",
    });
    history.push("/home");
  }

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  return (
    <div>
      <Link to="/home">
        <button>Home</button>{" "}
      </Link>
      <h1>Create Pokemon</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Name:</label>
          <input
            types="text"
            value={input.name}
            name="name"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Types</label>
          <select onChange={(e) => handleSelect(e)}>
            {types.map((types) => (
              <option key={types.id} value={types.name}>
                {types.name}
              </option>
            ))}
          </select>
          <ul>
            <li>{input.types.map((el) => el + " ,")}</li>
          </ul>
        </div>
        <div>
          <label>HP:</label>
          <input
            type="number"
            value={input.hp}
            name="hp"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Attack:</label>
          <input
            type="number"
            value={input.attack}
            name="attack"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Defense:</label>
          <input
            type="number"
            value={input.defense}
            name="defense"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Speed:</label>
          <input
            type="number"
            value={input.speed}
            name="speed"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Height:</label>
          <input
            type="number"
            value={input.height}
            name="height"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Weight:</label>
          <input
            type="number"
            value={input.weight}
            name="weight"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Image:</label>
          <input
            type="text"
            value={input.image}
            name="image"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button type="submit">Create Pokemon</button>
      </form>
    </div>
  );
}
