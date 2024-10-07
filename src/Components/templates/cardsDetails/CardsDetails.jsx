import React, { useState } from "react";
import Button from "../../basics/Button";

const CardsDetails = ({
  characters,
  setCharacters,
  idCharacter,
  handleAddComment
}) => {
  const [newComment, setNewComment] = useState("");

  const character = characters.find((char) => char.id === idCharacter) || characters[0];

  const onSubmitComment = () => {
    if (newComment.trim()) {
      handleAddComment(character.id, newComment);
      setNewComment(""); 
    }
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
    </div>
  );
};

export default CardsDetails;