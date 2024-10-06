import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../basics/Button';

function CardsDetails() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [comments, setComments] = useState('');

  useEffect(() => {
    const fetchCharacter = async () => {
      const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      const data = await response.json();
      setCharacter(data);
    };
    fetchCharacter();
  }, [id]);

  const handleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites.push(character.id);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };

  const handleComment = () => {
    const charComments = JSON.parse(localStorage.getItem('comments')) || {};
    charComments[character.id] = comments;
    localStorage.setItem('comments', JSON.stringify(charComments));
  };

  return character ? (
    <div className="p-4">
      <img src={character.image} alt={character.name} className="w-full h-auto rounded-lg" />
      <h2 className="text-2xl font-bold">{character.name}</h2>
      <p>{character.species}</p>
      <p>{character.status}</p>
      <p>{character.gender}</p>
      <Button label="Mark as Favorite" onClick={handleFavorite} className="bg-green-500" />
      <textarea className="w-full p-2 border rounded" value={comments} onChange={(e) => setComments(e.target.value)} placeholder="Add a comment"></textarea>
      <Button label="Add Comment" onClick={handleComment} className="bg-blue-500 mt-2" />
    </div>
  ) : <p>Loading...</p>;
}

export default CardsDetails;
