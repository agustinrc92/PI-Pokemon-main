const initialState = {
  pokemons: [],
  allPokemons: [],
  types: [],
  details: {},
  loading: false,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_POKEMONS":
      return {
        ...state,
        pokemons: action.payload,
        allPokemons: action.payload,
      };
    case "GET_TYPES":
      return {
        ...state,
        types: action.payload,
      };
    case "FILTER_POKEMONS_BY_TYPES":
      const allPokemons = state.allPokemons;
      const typesFiltered =
        action.payload === "All"
          ? allPokemons
          : allPokemons.filter((el) => el.types.includes(action.payload));
      return {
        ...state,
        pokemons: typesFiltered,
      };
    default:
      return state;
  }
}

export default rootReducer;
