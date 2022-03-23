import React, {useState, useEffect} from "react";
import PokemonPage from "./PokemonPage";

function App() {
const [pokemonArr, setPokemonArr] = useState([])

useEffect(() => {
  fetch("http://localhost:3001/pokemon")
  .then(res => res.json())
  .then(pokemonRes => setPokemonArr(pokemonRes)); 
},[])

  return (
    <div className="App">
      <PokemonPage pokemonArr={pokemonArr} setPokemonArr={setPokemonArr}/>
    </div>
  );
}

export default App;
