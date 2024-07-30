/* Pokemon Card */

import { Link } from "react-router-dom";
import "../cardPokemon/CardPokemon.css";

/* Card del Pokemon */
export const CardPokemon = ({ pokemon }) => {
  return (
    <Link to={`/pokemon/${pokemon.id}`} className="card_pokemon__card">
      <figure className="card_pokemon__image">
        <h3 className="card_pokemon__id">#{pokemon.id}</h3>
        <img
          src={ pokemon.sprites.other.dream_world.front_default }
					alt={`Pokemon ${pokemon.name}`}
          className="card_pokemon__img"
        />
      </figure>

      <h2 className="card_pokemon__name">{pokemon.name}</h2>
    </Link>
  )
}
