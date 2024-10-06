import React, { useState } from "react";
import Button from "../../basics/Button";
import search from "../../../assets/search.png";
import menu from "../../../assets/menu.png";

function Filter({ onFilter }) {
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");
  const [gender, setGender] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleFilter = () => {
    onFilter(status, species, gender);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Alternar la visibilidad del menú
  };

  const handleClearFilters = () => {
    setStatus("");
    setSpecies("");
    setGender("");
    onFilter("", "", ""); // También limpia los filtros aplicados
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-[25%,70%,25%] border border-neutral-300 min-h-10 rounded-md bg-slate-200 items-center px-4 text-neutral-500">
        <div>
          <img
            src={search}
            alt="search"
            className="w-6 h-6 rounded-full grayscale"
          />
        </div>
        <div>search or filter results</div>
        <div>
          <img
            src={menu}
            alt="menu"
            className="w-6 h-6 rounded-full grayscale"
            onClick={toggleMenu}
          />
        </div>
      </div>

      {isMenuOpen && ( // Si el menú está abierto, mostrar las opciones de filtro
        <div className="mt-4">
          <select
            onChange={(e) => setStatus(e.target.value)}
            value={status}
            className="p-2 border rounded w-full mb-2"
          >
            <option value="">Status</option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>

          <select
            onChange={(e) => setSpecies(e.target.value)}
            value={species}
            className="p-2 border rounded w-full mb-2"
          >
            <option value="">Species</option>
            <option value="Human">Human</option>
            <option value="Alien">Alien</option>
          </select>

          <select
            onChange={(e) => setGender(e.target.value)}
            value={gender}
            className="p-2 border rounded w-full mb-2"
          >
            <option value="">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <Button
            label="Apply Filters"
            onClick={handleFilter}
            className="ml-2"
          />
           <Button label="Clean Filters" onClick={handleClearFilters} className="ml-2 bg-red-400" />
        </div>
      )}
    </div>
  );
}

export default Filter;
