import { PokemonContext } from "./PokemonContext";
import { useEffect, useState, useCallback } from "react";
import { useForm } from "../hook/useForm";

/* Pokemon Provider */
export const PokemonProvider = ({ children }) => {

    const [allPokemons, setAllPokemons] = useState([]);
    const [globalPokemons, setGlobalPokemons] = useState([]);
    const [offset, setOffset] = useState(0);

    /* Utilizamos CustomHook - useForm */
    const { valueSearch, onInputChange, onResetForm } = useForm({
        valueSearch: "",
    });

    /* Hooks simples */
    const [loading, setLoading] = useState(true);
    const [active, setActive] = useState(false);

    /* llamamos los primeros 50 pokemones a la API */
    const getAllPokemons = useCallback(async (limit = 50) => {
        const baseURL = import.meta.env.VITE_REACT_APP_POKEMON_API_BASE_URL;

        const res = await fetch(`${baseURL}pokemon?limit=${limit}&offset=${offset}`);
        const data = await res.json();

        const promises = data.results.map(async pokemon => {
            const res = await fetch(pokemon.url);
            const data = await res.json();
            return data;
        });

        const results = await Promise.all(promises);
        setAllPokemons(prevPokemons => [...prevPokemons, ...results]);
        setLoading(false);
    }, [offset]);

    /* llamamos todos los pokemones de la API */
    const getGlobalPokemons = async () => {
        const baseURL = import.meta.env.VITE_REACT_APP_POKEMON_API_BASE_URL;

        const res = await fetch(`${baseURL}pokemon?limit=100000&offset=0`);
        const data = await res.json();

        const promises = data.results.map(async pokemon => {
            const res = await fetch(pokemon.url);
            const data = await res.json();
            return data;
        });
        const results = await Promise.all(promises);

        setGlobalPokemons(results);
        setLoading(false);
    };

    /* llamamos a un pokemon por el ID */
    const getPokemonByID = async id => {
        const baseURL = import.meta.env.VITE_REACT_APP_POKEMON_API_BASE_URL;
        const res = await fetch(`${baseURL}pokemon/${id}`);
        const data = await res.json();
        return data;
    };

    /* llamamos a un pokemon por el nombre */
    const getPokemonByName = async name => {
        const baseURL = import.meta.env.VITE_REACT_APP_POKEMON_API_BASE_URL;
        const res = await fetch(`${baseURL}pokemon/${name.toLowerCase()}`);
        const data = await res.json();
        return data;
    };

    useEffect(() => {
        getAllPokemons();
    }, [offset, getAllPokemons]);

    useEffect(() => {
        getGlobalPokemons();
    }, []);

    /* Boton para cargar más Pokemon */
    const onClickLoadMore = () => {
        setOffset(offset + 50);
    };

    // Filter Function + State
    const [typeSelected, setTypeSelected] = useState({
        grass: false,
        normal: false,
        fighting: false,
        flying: false,
        poison: false,
        ground: false,
        rock: false,
        bug: false,
        ghost: false,
        steel: false,
        fire: false,
        water: false,
        electric: false,
        psychic: false,
        ice: false,
        dragon: false,
        dark: false,
        fairy: false,
        unknow: false,
        shadow: false,
    });

    const [filteredPokemons, setfilteredPokemons] = useState([]);

    const handleCheckbox = e => {
        setTypeSelected({
            ...typeSelected,
            [e.target.name]: e.target.checked,
        });

        if (e.target.checked) {
            const filteredResults = globalPokemons.filter(pokemon =>
                pokemon.types
                    .map(type => type.type.name)
                    .includes(e.target.name)
            );
            setfilteredPokemons([...filteredPokemons, ...filteredResults]);
        } else {
            const filteredResults = filteredPokemons.filter(
                pokemon =>
                    !pokemon.types
                        .map(type => type.type.name)
                        .includes(e.target.name)
            );
            setfilteredPokemons([...filteredResults]);
        }
    };

    return (
        <PokemonContext.Provider
            value={{
                valueSearch,
                onInputChange,
                onResetForm,
                allPokemons,
                globalPokemons,
                getPokemonByID,
                getPokemonByName,
                onClickLoadMore,
                /*Loader*/
                loading,
                setLoading,
                /*btn filter*/
                active,
                setActive,
                /* Filter Container Checkbox */
                handleCheckbox,
                filteredPokemons,
            }}
        >
            {children}
        </PokemonContext.Provider>
    );
};