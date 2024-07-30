import { useContext } from "react";
import { PokemonContext } from "../../context/PokemonContext.jsx";
import { CardPokemon } from "../molecules/cardPokemon/CardPokemon.jsx";
import { Loader } from "../atoms/loader/Loader.jsx";

/* Pokemon List */
export const PokemonList = () => {

    const { allPokemons, loading, filteredPokemons } = useContext(PokemonContext);

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <div className="card_pokemon container">
                    {
                        filteredPokemons.length ? (
                            <>
                                {filteredPokemons.map(pokemon => (
                                    <CardPokemon pokemon={pokemon} key={pokemon.id} />
                                ))}
                            </>

                        ) : (
                            <>
                                {allPokemons.map(pokemon => (
                                    <CardPokemon pokemon={pokemon} key={pokemon.id} />
                                ))}
                            </>
                        )
                    }

                </div>
            )}
        </>
    )
}
