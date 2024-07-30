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

    /* Llamamos los primeros 20 pokemones a la API */
    const getAllPokemons = useCallback(async (limit = 20) => {
        const baseURL = import.meta.env.VITE_REACT_APP_POKEMON_API_BASE_URL;

        try {
            const res = await fetch(`${baseURL}pokemon?limit=${limit}&offset=${offset}`);
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            const text = await res.text(); // Usa text() para verificar la respuesta cruda
            console.log(text); // Verifica la respuesta cruda
            const data = JSON.parse(text); // Luego convierte a JSON manualmente

            const promises = data.results.map(async pokemon => {
                // Agregar un retraso entre solicitudes
                await new Promise(resolve => setTimeout(resolve, 200)); // Retraso de 200 ms

                const res = await fetch(pokemon.url);
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const text = await res.text(); // Usa text() para verificar la respuesta cruda
                console.log(text); // Verifica la respuesta cruda
                const data = JSON.parse(text); // Luego convierte a JSON manualmente
                return data;
            });

            const results = await Promise.all(promises);
            setAllPokemons(prevPokemons => [...prevPokemons, ...results]);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    }, [offset]);

    /* Llamamos todos los pokemones de la API */
    const getGlobalPokemons = async () => {
        const baseURL = import.meta.env.VITE_REACT_APP_POKEMON_API_BASE_URL;

        try {
            const res = await fetch(`${baseURL}pokemon?limit=1000&offset=0`); // Reducir límite aquí
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            const text = await res.text(); // Usa text() para verificar la respuesta cruda
            console.log(text); // Verifica la respuesta cruda
            const data = JSON.parse(text); // Luego convierte a JSON manualmente

            const promises = data.results.map(async pokemon => {
                // Agregar un retraso entre solicitudes
                await new Promise(resolve => setTimeout(resolve, 200)); // Retraso de 200 ms

                const res = await fetch(pokemon.url);
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const text = await res.text(); // Usa text() para verificar la respuesta cruda
                console.log(text); // Verifica la respuesta cruda
                const data = JSON.parse(text); // Luego convierte a JSON manualmente
                return data;
            });
            const results = await Promise.all(promises);

            setGlobalPokemons(results);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };

    /* Llamamos a un pokemon por el ID */
    const getPokemonByID = async id => {
        const baseURL = import.meta.env.VITE_REACT_APP_POKEMON_API_BASE_URL;
        try {
            const res = await fetch(`${baseURL}pokemon/${id}`);
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            const data = await res.json();
            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
            return null;
        }
    };

    /* Llamamos a un pokemon por el nombre */
    const getPokemonByName = async name => {
        const baseURL = import.meta.env.VITE_REACT_APP_POKEMON_API_BASE_URL;
        try {
            const res = await fetch(`${baseURL}pokemon/${name.toLowerCase()}`);
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            const data = await res.json();
            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
            return null;
        }
    };

    useEffect(() => {
        getAllPokemons();
    }, [offset, getAllPokemons]);

    useEffect(() => {
        getGlobalPokemons();
    }, []);

    /* Botón para cargar más Pokémon */
    const onClickLoadMore = () => {
        setOffset(offset + 20); // Reducir el número de resultados cargados
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
        unknown: false,
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
            setfilteredPokemons(prevFilteredPokemons => [...prevFilteredPokemons, ...filteredResults]);
        } else {
            const filteredResults = filteredPokemons.filter(
                pokemon =>
                    !pokemon.types
                        .map(type => type.type.name)
                        .includes(e.target.name)
            );
            setfilteredPokemons(filteredResults);
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
                /* Loader */
                loading,
                setLoading,
                /* btn filter */
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
