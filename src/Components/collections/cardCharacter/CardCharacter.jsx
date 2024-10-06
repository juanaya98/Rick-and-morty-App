import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../basics/Button';

function CardCharacter({ character, onDelete }) {
  return (
    <div className="card p-4 bg-black rounded-lg">
      <img src={character.image} alt={character.name} className="w-full h-auto rounded-lg" />
      <h2 className="text-xl font-bold">{character.name}</h2>
      <p>{character.species}</p>
      <Button label="Delete" onClick={() => onDelete(character.id)} className="bg-red-500" />
      <Link to={`/character/${character.id}`}>
        <Button label="View Details" className="bg-blue-500 mt-2" />
      </Link>
    </div>
  );
}

export default CardCharacter;