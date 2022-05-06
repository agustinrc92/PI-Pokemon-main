import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../../actions";
import { useEffect } from "react";

export default function Detail(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetails(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  const myPokemon = useSelector((state) => state.details);

  return (
    <div>
      {Object.entries(myPokemon).length > 0 ? (
        <div>
          <h1>
            Name: <br /> {myPokemon.name.toUpperCase()}
          </h1>
          <img
            src={myPokemon.image}
            alt="pokemon"
            width="380px"
            height="450px"
          />
          <h4>
            Types: {""}
            {!myPokemon.created
              ? myPokemon.types + " "
              : myPokemon.types.map((el) => el.name + " ")}
          </h4>
          <h4>HP: {myPokemon.hp}</h4>
          <h4>Attack: {myPokemon.attack}</h4>
          <h4>Defense: {myPokemon.defense}</h4>
          <h4>Speed: {myPokemon.speed}</h4>
          <h4>Height: {myPokemon.height}</h4>
          <h4>Weight: {myPokemon.weight}</h4>
        </div>
      ) : (
        <p>Loading..</p>
      )}

      <Link to="/home">
        <button>Back</button>
      </Link>
    </div>
  );
}
