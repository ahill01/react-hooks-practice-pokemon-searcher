import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  const {id,name,hp, sprites} = pokemon; 

  const [toggleSprite, setToggleSprite] = useState(true)

  function handleClick(){
    setToggleSprite(prevState => !prevState)
  }

  return (
    <Card >
      <div onClick={handleClick}>
        <div className="image">
          <img src = {toggleSprite ? sprites.front : sprites.back} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
