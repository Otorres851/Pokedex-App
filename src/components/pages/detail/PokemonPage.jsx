import { useContext, useEffect, useState, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import { Loader } from "../../atoms/loader/Loader.jsx";
import { PokemonContext } from "../../../context/PokemonContext";
import { primerMayuscula } from "../../../helper/helper.js";
import arrowIcon from "../../../assets/icons/arrow_back.svg";
import info from "../../../assets/img/info.svg";
import base from "../../../assets/img/Base.svg";
import "../detail/Pokemon.css";

/* Detail Pokemon Page */
export const PokemonPage = () => {
  const { getPokemonByID } = useContext(PokemonContext);

  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState({});

  const { id } = useParams();

  const fetchPokemon = useCallback(async (id) => {
    const data = await getPokemonByID(id);
    setPokemon(data);
    setLoading(false);
  }, [getPokemonByID]);

  useEffect(() => {
    fetchPokemon(id);
  }, [fetchPokemon, id]);

  return (
    <main className="main_pokemon container">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="main_pokemon__detail">
            <div className="main_pokemon__header">
              <div className="main_pokemon__pokemon">
                <Link to="/" className="main_pokemon__back" aria-label="Go back to homepage">
                  <img className="main_pokemon__icon" src={arrowIcon} alt="Back arrow icon" />
                </Link>
                <h2 className="main_pokemon__name">{primerMayuscula(pokemon.name)}</h2>
              </div>
              <h4 className="main_pokemon__id">#{pokemon.id}</h4>
            </div>

            <figure className="main_pokemon__img">
              <img
                src={pokemon.sprites.other.dream_world.front_default}
                alt={`Pokemon ${pokemon.name}`}
                className="card_pokemon__img"
                style={{ width: "22.5rem" }} 
              />
            </figure>

            <div className="main_pokemon__info">
              <div className="main_pokemon__type">
                {pokemon.types.map(type => (
                  <span key={type.type.name} className={type.type.name}>
                    {type.type.name}
                  </span>
                ))}
              </div>

              <div className="main_pokemon__about">
                <h3 className="main_pokemon__title">About</h3>
                <img className="main_pokemon__img" src={info} alt="Information Img" />
              </div>

              <div className="main_pokemon__base">
                <p className="main_pokemon__description">
                  There is a plant seed on its back right from the day this Pokémon is born.
                  The seed slowly grows larger.
                </p>
                <img className="main_pokemon__image" src={base} alt="Base stats Img" />
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
};
