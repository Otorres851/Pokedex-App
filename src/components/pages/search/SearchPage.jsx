import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { CardPokemon } from "../../molecules/cardPokemon/CardPokemon";
import { PokemonContext } from "../../../context/PokemonContext";
import "../search/SearchPage.css";

/* Search Page */
export const SearchPage = () => {
	const location = useLocation();
	const { globalPokemons } = useContext(PokemonContext);

	const searchTerm = location.state ? location.state.toLowerCase() : "";

	/* Verifica 3 caracteres y no contenga acentos */
	const isValidSearchTerm = (term) => {
		const regex = /^[a-zA-Z0-9]{3,}$/;
		return regex.test(term);
	};

	const filteredPokemons = isValidSearchTerm(searchTerm)
		? globalPokemons.filter(pokemon =>
			pokemon.name.includes(searchTerm)
		)
		: [];

	return (
		<div className="container">
			{searchTerm === "" ? (
				<p className="search__p">Por favor, introduzca un término de búsqueda.</p>
			) : !isValidSearchTerm(searchTerm) ? (
				<p className="search__p">El término de búsqueda debe tener al menos 3 caracteres 
					y no contener acentos ni caracteres especiales.
				</p>
			) : (
				<>
					<p className="search__p">
						Se encontraron <span className="search__response">{filteredPokemons.length}</span>{" "}
						resultados:
					</p>
					<div className="card_pokemon container">
						{filteredPokemons.map(pokemon => (
							<CardPokemon pokemon={pokemon} key={pokemon.id} />
						))}
					</div>
				</>
			)}
		</div>
	);
};
