import React from "react";
import CardsTemplate from "../Components/templates/cardsTemplate/CardsTemplate";

const Principal = () => {
  return (
    <div ClassName="grid grid-rows-2 w-full">
       <div className="flex">
        <div className=" bg-blue-300">
          <h1 className="text-3xl">Rick and Morty List</h1>
        </div>
        <CardsTemplate />
      </div>
      
    </div>
  );
};

export default Principal;
