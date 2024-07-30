/* import Link, Outlet, UseNavigate */
import { Link, Outlet, useNavigate } from "react-router-dom";

/* import Modules, Icons, Css */
import pokeballIcon from "../../../assets/icons/pokeball.svg";
import searchIcon from "../../../assets/icons/search.svg";
import sortIcon from "../../../assets/icons/sort.svg";
import { useContext } from "react";
import { PokemonContext } from "../../../context/PokemonContext";
import "../header/Navigation.css";

/*Navigation*/
export const Navigation = () => {
  const {onInputChange, valueSearch, onResetForm} = useContext(PokemonContext);
  const navigate = useNavigate();
  const onSearchSubmit = e => {
		e.preventDefault();
		navigate('/search', {
			state: valueSearch,
		});

		onResetForm();
  }  
  return (
    <>
      <header className="head container">
        <Link to="/" className="head__logo">
          <img className="head__icon" src={ pokeballIcon } alt="Icon Pokeball"/>
          <h1 className="head__title">Pokédex</h1>
        </Link>

        <form onSubmit={onSearchSubmit} className="head__form">
          <div className="head__search">
            <img className="head__icon" src={ searchIcon } alt="Icon Search"/>
            <input 
              className="head__searcher" 
              type="search"
              name="valueSearch"
              id="" 
              value={valueSearch}
              onChange={onInputChange}
              placeholder="Search"
            />
          </div>

          <button className="head__btn">
            <img className="head__icon" src={ sortIcon } alt="Icon Sort" />
          </button>
        </form>
      </header>

      <Outlet />
    </>
  );
};
