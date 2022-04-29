import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNamePokemons } from "../../actions";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleImputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getNamePokemons(name));
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => handleImputChange(e)}
      />
      <button setName="" type="submit" onClick={(e) => handleSubmit(e)}>
        Search
      </button>
    </div>
  );
}
