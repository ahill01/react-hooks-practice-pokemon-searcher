import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemonArr}) {
const pokemonRender = pokemonArr.map(pokemon => {return <PokemonCard key={pokemon.id} pokemon = {pokemon}/>})

  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {pokemonRender}
    </Card.Group>
  );
}

export default PokemonCollection;
