import React, { useEffect, useState } from "react";
import Button from "../../basics/Button";

const CardsDetails = ({
  characters,
  setCharacters,
  idCharacter,
  handleAddComment,
  setIdCharacter,
}) => {
  const [newComment, setNewComment] = useState("");
  const character = characters.find((char) => char.id === idCharacter) || characters[0];

  useEffect(() => {
    if (!character || character.deleted) {
      const nextCharacter = characters.find((char) => !char.deleted) || characters[0];
      setIdCharacter(nextCharacter?.id || 0);
    }
  }, [character, characters, setIdCharacter]);
  

  const onSubmitComment = () => {
    if (newComment.trim()) {
      handleAddComment(character.id, newComment);
      setNewComment(""); 
    }
  };

  const handleSoftDelete = (id) => {
    
    setCharacters((prevCharacters) =>
      prevCharacters.map((character) =>
        character.id === id ? { ...character, deleted: true } : character
      )
    );
  };

  return (
    <div className="p-24 flex flex-col gap-4">
      <img
        src={character.image}
        alt={character.name}
        className="w-28 h-28 rounded-full"
      />
      <h2 className="text-2xl font-bold">{character.name}</h2>
      <p className="text-base font-bold">Species</p>
      <p className="text-base text-neutral-500">{character.species}</p>
      <p className="text-base font-bold border-t-2 border-neutral-300">Status</p>
      <p className="text-base text-neutral-500">{character.status}</p>
      <p className="text-base font-bold border-t-2 border-neutral-300">Gender</p>
      <p className="text-base text-neutral-500">{character.gender}</p>

      {character.comments && character.comments.length > 0 && (
        <div>
          <p className="text-base font-bold border-t-2 border-neutral-300">Comments</p>
          <ul className="text-base text-neutral-500">
            {character.comments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>
        </div>
      )}

      <h3 className="text-base font-bold border-t-2 border-neutral-300">Add Comment</h3>
      <textarea
        className="p-2 border rounded"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Write your comment..."
      />
      <Button
        label="Send Comment"
        onClick={onSubmitComment}
        className="bg-blue-500 text-white h-10 w-40 mt-4"
      />
      <Button
          label="Delete Character"
          onClick={() => handleSoftDelete(character.id)} 
          className="bg-red-500 text-white h-10 w-40 mt-4"
        />
    </div>
  );
};

export default CardsDetails;