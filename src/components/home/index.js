import {Container } from "react-bootstrap"
import { useContext } from "react"
import Context from "../../context"
import { useNavigate } from "react-router-dom"
import Form from 'react-bootstrap/Form';
import './home.css'
import { useEffect, useState } from 'react';



export default () => {
    const {pokemons,setPokemons} = useContext(Context)

    const navigate = useNavigate();
    
 //   const handleClick = (id) => {
  //      const pokemon = pokemons.map(val => {
    //        if (val.id === id){
    //            return {...val,favorito:true}
     //       }
    //        return val
     //   }) 
 //       setPokemons(pokemon)
 //   }
        const goToPokemon =(id) =>{
            navigate(`/pokemon/${id}`)
        }

        const handlSelect = (e) => {
            goToPokemon(e.target.value)
        }

        const [pokemon, setPokemon] = useState({});

        useEffect(() => {
            fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
            .then(response => response.json())
            .then(data => setPokemon(data));
        }, []);
    return (
                <div className="home-class"> 
                <Container>
                <Form.Select onChange={handlSelect} className="my-2" aria-label="Default select example">
                <option> Selecciona el pokemon </option>
                {pokemons ? pokemons.map(pokemon => <option value={pokemon.name}>{pokemon.name} </option>):"loading"}
                </Form.Select>
                <div>
                <h1> Bienvenido a ni pokedex fruna! </h1>
                <img className="pika" src={pokemon.sprites?.front_default} alt="Pikachu" />
                </div>

                    
                </Container>
                </div>
        
    )

}