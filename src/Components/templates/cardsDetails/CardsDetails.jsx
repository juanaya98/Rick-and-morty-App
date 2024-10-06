import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../basics/Button";

const CardsDetails = ({
  characters,
  setCharacters,
  filters,
  setFilters,
  order,
  setOrder,
  deletedCharacters,
  setDeletedCharacters,
  idCharacter
}) => {
  return (
    <div className="p-24 flex flex-col gap-4">
      <img
        src={characters[idCharacter].image}
        alt={characters[idCharacter].name}
        className="w-28 h-28 rounded-full"
      />
      <h2 className="text-2xl font-bold">{characters[idCharacter].name}</h2>
      <p  className="text-base font-bold">Specie</p>
      <p className="text-base text-neutral-500">{characters[idCharacter].species}</p>
      <p  className="text-base font-bold border-t-2 border-neutral-300">Status</p>
      <p className="text-base text-neutral-500">{characters[idCharacter].status}</p>
      <p  className="text-base font-bold border-t-2 border-neutral-300">Gender</p>
      <p className="text-base text-neutral-500">{characters[idCharacter].gender}</p>
    </div>
  );
};

export default CardsDetails;
