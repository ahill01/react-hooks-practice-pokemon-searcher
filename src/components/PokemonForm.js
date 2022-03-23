import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({pokemonArr, setPokemonArr}) {
let id = pokemonArr.length+1

const [formData, setFormData] = useState({
  name:"",
  hp:0,
  sprites:{}
})

const [spriteData, setSpriteData] = useState({
  front:"",
  back:""
})

function handleSubmit(e){
  e.preventDefault()
  const bodyObj = {...formData, sprites:spriteData}
  console.log(bodyObj)
  const configObj = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(bodyObj)
}
  fetch("http://localhost:3001/pokemon",configObj)
  .then(res => res.json())
  .then(newPokemon => setPokemonArr(pokemonArr => [...pokemonArr, newPokemon]))

  }

function addFrontUrl(e){
  const value = e.target.value
  setSpriteData(prevData => {
    return {...prevData, front:value}})
}

function addBackUrl(e){
  const value = e.target.value
  setSpriteData(prevData => {
    return {...prevData, back:value}})
}

function addName(e){
  const value = e.target.value
  setFormData(prevData => {
    return {...prevData, name:value}})
}

function addHP(e){
  const value = e.target.value
  setFormData(prevData => {
    return {...prevData, hp:value}})
}

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(e) => {
          handleSubmit(e)
        }}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange = {addName}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange = {(e)=>addHP(e)}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange = {(e)=>addFrontUrl(e)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange = {(e)=>addBackUrl(e)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
