import { PokemonList } from "../../organisms/PokemonList";
import { FilterBar } from "../../molecules/filter/FilterBar";
import filterIcon from "../../../assets/icons/filter.svg";
import { useContext } from "react";
import { PokemonContext } from "../../../context/PokemonContext";
import "../home/HomePage.css";

/* HomePage */
export const HomePage = () => {

  const {onClickLoadMore, active, setActive}= useContext(PokemonContext);

  return (
    <>
      <nav className="nav_container">
        <div className="nav__filter" onClick={()=> setActive(!active)}>
          <img className="nav__icon" src={filterIcon} alt="Icon Filter" />
          <h2 className="nav__title">Filtrar</h2>
        </div>
      </nav>

      <PokemonList />
      <FilterBar />

      <div className="btn_load container">
        <button className="btn_load__more" onClick={onClickLoadMore}>
          Cargar más
        </button>
      </div>
    </>
  );
};
