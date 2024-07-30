import { useContext } from "react";
import { PokemonContext } from "../../../context/PokemonContext";
import "../filter/Filter.css";

/* Filter Bar */
export const FilterBar = () => {
  const { active, handleCheckbox } = useContext(PokemonContext);

  return (
    <div className={`filters container ${active ? "active" : ""}`}>
      <div className="filters__type">
        <h2 className="filters__title">Tipo</h2>
        <div className="filters__group-type">
          <input type="checkbox" onChange={handleCheckbox} name="grass" id="grass" className="filters__checkbox" />
          <label htmlFor="grass" className="filters__label">Planta</label>
        </div>
        <div className="filters__group-type">
          <input type="checkbox" onChange={handleCheckbox} name="fire" id="fire" className="filters__checkbox" />
          <label htmlFor="fire" className="filters__label">Fuego</label>
        </div>
        <div className="filters__group-type">
          <input type="checkbox" onChange={handleCheckbox} name="bug" id="bug" className="filters__checkbox" />
          <label htmlFor="bug" className="filters__label">Bicho</label>
        </div>
        <div className="filters__group-type">
          <input type="checkbox" onChange={handleCheckbox} name="fairy" id="fairy" className="filters__checkbox" />
          <label htmlFor="fairy" className="filters__label">Hada</label>
        </div>
        <div className="filters__group-type">
          <input type="checkbox" onChange={handleCheckbox} name="dragon" id="dragon" className="filters__checkbox" />
          <label htmlFor="dragon" className="filters__label">Dragón</label>
        </div>
        <div className="filters__group-type">
          <input type="checkbox" onChange={handleCheckbox} name="shadow" id="shadow" className="filters__checkbox" />
          <label htmlFor="shadow" className="filters__label">Fantasma</label>
        </div>
        <div className="filters__group-type">
          <input type="checkbox" onChange={handleCheckbox} name="ground" id="ground" className="filters__checkbox" />
          <label htmlFor="ground" className="filters__label">Tierra</label>
        </div>
        <div className="filters__group-type">
          <input type="checkbox" onChange={handleCheckbox} name="normal" id="normal" className="filters__checkbox" />
          <label htmlFor="normal" className="filters__label">Normal</label>
        </div>
        <div className="filters__group-type">
          <input type="checkbox" onChange={handleCheckbox} name="psychic" id="psychic" className="filters__checkbox" />
          <label htmlFor="psychic" className="filters__label">Psíquico</label>
        </div>
        <div className="filters__group-type">
          <input type="checkbox" onChange={handleCheckbox} name="steel" id="steel" className="filters__checkbox" />
          <label htmlFor="steel" className="filters__label">Acero</label>
        </div>
        <div className="filters__group-type">
          <input type="checkbox" name="dark" id="dark" className="filters__checkbox" />
          <label htmlFor="dark" className="filters__label">Siniestro</label>
        </div>
        <div className="filters__group-type">
          <input type="checkbox" onChange={handleCheckbox} name="electric" id="electric" className="filters__checkbox" />
          <label htmlFor="electric" className="filters__label">Eléctrico</label>
        </div>
        <div className="filters__group-type">
          <input type="checkbox" onChange={handleCheckbox} name="fighting" id="fighting" className="filters__checkbox" />
          <label htmlFor="fighting" className="filters__label">Lucha</label>
        </div>
        <div className="filters__group-type">
          <input type="checkbox" onChange={handleCheckbox} name="flying" id="flying" className="filters__checkbox" />
          <label htmlFor="flying" className="filters__label">Volador</label>
        </div>
        <div className="filters__group-type">
          <input type="checkbox" onChange={handleCheckbox} name="ice" id="ice" className="filters__checkbox" />
          <label htmlFor="ice" className="filters__label">Hielo</label>
        </div>
        <div className="filters__group-type">
          <input type="checkbox" onChange={handleCheckbox} name="poison" id="poison" className="filters__checkbox" />
          <label htmlFor="poison" className="filters__label">Veneno</label>
        </div>
        <div className="filters__group-type">
          <input type="checkbox" onChange={handleCheckbox} name="rock" id="rock" className="filters__checkbox" />
          <label htmlFor="rock" className="filters__label">Roca</label>
        </div>
        <div className="filters__group-type">
          <input type="checkbox" onChange={handleCheckbox} name="water" id="water" className="filters__checkbox" />
          <label htmlFor="water" className="filters__label">Agua</label>
        </div>
      </div>
    </div>
  )
}
