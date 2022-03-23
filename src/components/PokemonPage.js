import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage({pokemonArr, setPokemonArr}) {
const [search, setSearch] = useState("")

const filteredPokemon = pokemonArr.filter(pokemon => pokemon.name.includes(search))
console.log(filteredPokemon)

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm pokemonArr={pokemonArr} setPokemonArr={setPokemonArr}/>
      <br />
      <Search search={search} setSearch={setSearch}/>
      <br />
      <PokemonCollection pokemonArr={filteredPokemon}/>
    </Container>
  );
}

export default PokemonPage;
