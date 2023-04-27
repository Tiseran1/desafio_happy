import { useEffect, useState } from "react";
import { Row, Col} from "react-bootstrap"
import { useParams } from "react-router-dom";
import './pokemon.css'


export default() => {

    const { id } = useParams()
    const [pokemon,setPokemon] = useState({})

    useEffect (() =>{
        fetch (`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((response) => response.json())
        .then((data)=> setPokemon (data))

    },[])
    
    return (
        <> 
        {pokemon ? 
            <Row>  
                <div className="podex">
            <Col> <img className="pokeimg" src={pokemon.sprites?.front_default} alt={pokemon.name} /> </Col>
            <Col>
                <h1>{pokemon.name}</h1>
                <ul>
                    <li>Type: {pokemon.types?.map(type => type.type.name).join(', ')}</li>
                    <li>Height: {pokemon.height}</li>
                    <li>Weight: {pokemon.weight}</li>
                    <li>Speed: {pokemon.stats?.find(stat => stat.stat.name === "speed")?.base_stat}</li>
                    <li>Attack: {pokemon.stats?.find(stat => stat.stat.name === "attack")?.base_stat}</li>
                    <li>HP: {pokemon.stats?.find(stat => stat.stat.name === "hp")?.base_stat}</li>
                    <li>Defense: {pokemon.stats?.find(stat => stat.stat.name === "defense")?.base_stat}</li>

                </ul>
            </Col>

                </div>

        </Row> :
        "loading"
    
    }
    
        
        </>

    )
}

