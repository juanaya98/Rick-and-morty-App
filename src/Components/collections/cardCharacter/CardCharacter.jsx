import React from "react";
import Button from "../../basics/Button";
import fav from "../../../assets/favorite.png";
import Nofav from "../../../assets/favorite2.png";


function CardCharacter({ character, handleFavorite, handleId }) {
  return (
    <div className="card py-2 px-10 rounded-lg max-h-20">
      <div className="border-t-2 border-neutral-300 grid grid-cols-[25%,50%,25%] gap-2 items-center py-2">
        <img
          src={character.image}
          alt={character.name}
          className="w-16 h-16 rounded-full"
        />
        <div className="w-4/6" onClick={()=>handleId(character.id - 1)}>
          <h2 className="text-base font-bold">{character.name}</h2>
          <p className="text-base text-neutral-500">{character.species}</p>
        </div>
        <div className="flex flex-col items-end">
          <img
            src={ !character.favorite ? fav : Nofav}
            alt="fav"
            className="w-8 h-8"
            onClick={() => handleFavorite(character.id)}
          />
        </div>
      </div>
    </div>
  );
}

export default CardCharacter;
