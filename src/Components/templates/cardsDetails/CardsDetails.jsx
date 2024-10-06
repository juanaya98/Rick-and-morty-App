import React, { useEffect, useState } from "react";
import Button from "../../basics/Button";

const CardsDetails = ({
  characters,
  setCharacters,
  idCharacter,
  handleAddComment,
}) => {
  const [newComment, setNewComment] = useState("");
  const character = characters[idCharacter];

  const onSubmitComment = () => {
    console.log("enviando");
    if (newComment.trim()) {
      handleAddComment(character.id, newComment); // Agregar el comentario al personaje
      setNewComment(""); // Limpiar el campo después de agregar el comentario
    }
  };

  return (
    <div className="p-24 flex flex-col gap-4">
      <img
        src={characters[idCharacter].image}
        alt={characters[idCharacter].name}
        className="w-28 h-28 rounded-full"
      />
      <h2 className="text-2xl font-bold">{characters[idCharacter].name}</h2>
      <p className="text-base font-bold">Specie</p>
      <p className="text-base text-neutral-500">
        {characters[idCharacter].species}
      </p>
      <p className="text-base font-bold border-t-2 border-neutral-300">
        Status
      </p>
      <p className="text-base text-neutral-500">
        {characters[idCharacter].status}
      </p>
      <p className="text-base font-bold border-t-2 border-neutral-300">
        Gender
      </p>
      <p className="text-base text-neutral-500">
        {characters[idCharacter].gender}
      </p>
      {characters[idCharacter].comments && characters[idCharacter].comments.length > 0 && (
        <div>
          <p className="text-base font-bold border-t-2 border-neutral-300">
            Comments
          </p>
          <p className="text-base text-neutral-500">
            {characters[idCharacter].comments}
          </p>
        </div>
      )}

      <h3 className="text-base font-bold border-t-2 border-neutral-300">
        Add Comment
      </h3>
      <textarea
        className="p-2 border rounded"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)} // Actualizar el estado cuando el usuario escribe
        placeholder="Write your comment..."
      />

      <Button
        label="Send Comment"
        onClick={onSubmitComment}
        className=" text-white h-10 w-40 mt-4"
      />
    </div>
  );
};

export default CardsDetails;
