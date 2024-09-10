import React from "react";
import { useCharStates } from "../Context";
import Card from "../Components/Card";

const Favs = () => {
  const { favs } = useCharStates();

  return (
    <div>
      <h2>Favoritos agregados</h2>
      {favs.map((char) => (
        <Card key={char.id} char={char} />
      ))}
    </div>
  );
};

export default Favs;
