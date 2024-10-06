import React, { useEffect, useState } from 'react';
import CardCharacter from '../../collections/cardCharacter/CardCharacter';
import Filter from '../../collections/filter/Filter';
import Button from '../../basics/Button'

const CardsTemplate = ({characters,
  setCharacters,
  filters,
  setFilters,
  order,
  setOrder,
  deletedCharacters,
  setIdCharacter}) => {

  const applyFilters = (status, species, gender) => {
    setFilters({ status, species, gender });
  };

  const handleSort = (order) => {
    const sorted = [...characters].sort((a, b) => order === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
    setOrder(order);
    setCharacters(sorted);
  };

  const handleFavorite = (id) => {
    setCharacters((prevCharacters) =>
      prevCharacters.map((character) =>
        character.id === id
          ? { ...character, favorite: !character.favorite } // Alterna el estado
          : character
      )
    );
  };

  const handleId = (id) => {
    setIdCharacter(id);
  }

  return (
    <div>
      <Filter onFilter={applyFilters} />
      <div className='flex flex-row items-center justify-center gap-3 py-5'>
        <Button label="Sort A-Z" onClick={() => handleSort('asc')} />
        <Button label="Sort Z-A" onClick={() => handleSort('desc')} />
      </div>
      <div>
        <h1 className='text-neutral-500 px-10'>Starred Characters({characters.filter(character => character.favorite ).length})</h1>
      <div className="grid grid-rows-1 gap-4">
        {characters
          .filter(character => !deletedCharacters.includes(character.id))
          .filter(character => 
            (filters.status ? character.status === filters.status : true) &&
            (filters.species ? character.species === filters.species : true) &&
            (filters.gender ? character.gender === filters.gender : true)
          )
          .filter(character => character.favorite )
          .map(character => (
            <CardCharacter key={character.id} character={character} handleFavorite={handleFavorite} handleId={handleId}/>
        ))}
      </div>
      </div>
      <div> 
        <h1 className='text-neutral-500 px-10'>characters({characters.filter(character => character.favorite === false ).length})</h1>
      <div className="grid grid-rows-1 gap-4">
        {characters
          .filter(character => !deletedCharacters.includes(character.id))
          .filter(character => 
            (filters.status ? character.status === filters.status : true) &&
            (filters.species ? character.species === filters.species : true) &&
            (filters.gender ? character.gender === filters.gender : true)
          ).filter(character => character.favorite === false )
          .map(character => (
            <CardCharacter key={character.id} character={character} handleFavorite={handleFavorite} handleId={handleId} />
        ))}
      </div>
      </div>
      
    </div>
  );
}

export default CardsTemplate;
