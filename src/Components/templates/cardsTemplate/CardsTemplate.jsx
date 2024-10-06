import React, { useEffect, useState } from 'react';
import CardCharacter from '../../collections/cardCharacter/CardCharacter';
import Filter from '../../collections/filter/Filter';
import Button from '../../basics/Button'

function CardsTemplate() {
  const [characters, setCharacters] = useState([]);
  const [filters, setFilters] = useState({ status: '', species: '', gender: '' });
  const [order, setOrder] = useState('asc');
  const [deletedCharacters, setDeletedCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      setCharacters(data.results);
    };
    fetchCharacters();
  }, []);

  const applyFilters = (status, species, gender) => {
    setFilters({ status, species, gender });
  };

  const handleSort = (order) => {
    const sorted = [...characters].sort((a, b) => order === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
    setOrder(order);
    setCharacters(sorted);
  };

  const handleDelete = (id) => {
    setDeletedCharacters([...deletedCharacters, id]);
  };

  return (
    <div>
      <Filter onFilter={applyFilters} />
      <div>
        <Button label="Sort A-Z" onClick={() => handleSort('asc')} />
        <Button label="Sort Z-A" onClick={() => handleSort('desc')} />
      </div>
      <div className="grid grid-rows-1 gap-4">
        {characters
          .filter(character => !deletedCharacters.includes(character.id))
          .filter(character => 
            (filters.status ? character.status === filters.status : true) &&
            (filters.species ? character.species === filters.species : true) &&
            (filters.gender ? character.gender === filters.gender : true)
          )
          .map(character => (
            <CardCharacter key={character.id} character={character} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default CardsTemplate;
