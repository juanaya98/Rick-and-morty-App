import React, { useEffect, useState } from "react";
import CardsTemplate from "../Components/templates/cardsTemplate/CardsTemplate";
import CardsDetails from "../Components/templates/cardsDetails/CardsDetails";

const Principal = () => {
  const [characters, setCharacters] = useState([]);
  const [idCharacter, setIdCharacter] = useState(0)
  const [filters, setFilters] = useState({
    status: "",
    species: "",
    gender: "",
  });
  const [order, setOrder] = useState("asc");
  const [deletedCharacters, setDeletedCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();

      const charactersWithFavorite = data.results.map((character) => ({
        ...character,
        favorite: false,
        comments: [],
        deleted: false,
      }));

      setCharacters(charactersWithFavorite);
    };
    fetchCharacters();
  }, []);

  const handleAddComment = (id, newComment) => {
    setCharacters((prevCharacters) =>
      prevCharacters.map((character) =>
        character.id === id
          ? { ...character, comments: [...character.comments, newComment] }
          : character
      )
    );
  };

  return (
    <div>
      <div className="grid grid-cols-[25%,75%] w-full">
        <div className=" bg-gray-100 ">
          <h1 className="text-3xl px-6 py-6">Rick and Morty List</h1>
          <CardsTemplate
            characters={characters}
            setCharacters={setCharacters}
            filters={filters}
            setFilters={setFilters}
            order={order}
            setOrder={setOrder}
            deletedCharacters={deletedCharacters}
            setDeletedCharacters={setDeletedCharacters}
            setIdCharacter={setIdCharacter}
          />
        </div>
        <div className="">
          {characters.length > 1 && (
            <CardsDetails
              characters={characters}
              setCharacters={setCharacters}
              filters={filters}
              setFilters={setFilters}
              order={order}
              setOrder={setOrder}
              deletedCharacters={deletedCharacters}
              setDeletedCharacters={setDeletedCharacters}
              idCharacter={idCharacter}
              setIdCharacter={setIdCharacter}
              handleAddComment={handleAddComment}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Principal;
