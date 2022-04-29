import axios from "axios";

//Traer Pokemons a home
export function getPokemons() {
  return async function (dispatch) {
    var json = await axios.get("http://localhost:3001/pokemons");
    return dispatch({
      type: "GET_POKEMONS",
      payload: json.data,
    });
  };
}

export function getTypes() {
  return async function (distpach) {
    try {
      const allTypes = await axios.get("http://localhost:3001/types");
      return distpach({
        type: "GET_TYPES",
        payload: allTypes.data,
      });
    } catch (error) {
      return error;
    }
  };
}

export function filterPokemonsByTypes(payload) {
  return {
    type: "FILTER_POKEMONS_BY_TYPES",
    payload,
  };
}
