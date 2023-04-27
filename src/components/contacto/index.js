//no tiene uso pero no quise quitarlo

import {Container, Row, Col, Card, Button } from "react-bootstrap"
import { useContext, useEffect, useState } from "react"
import Context from "../../context"

export default () => {
    const [pokemon,setData] = useState([])
    const {pokemons,setPokemons} = useContext(Context)
    
    useEffect(() => {
        setData(pokemons.filter(pokemon => pokemon.favorito === true))
    },[])

    return (
                <div className="home-class"> 
                <Container>
                    <Row className="align-items-center">
                        {pokemon ? pokemon.map(pokemon =>
                            <Col lg={4} md={12} className="my-4">
                            <Card>
                                <Card.Img variant="top" src={pokemon.image} />
                                <Card.Body>
                                    <Card.Title>{pokemon.name}</Card.Title>
                                    <Card.Text>
                                        <p> Nombre:{pokemon.name} </p>

                                    </Card.Text>
                                    <Button variant="danger"> favorito</Button>
                                </Card.Body>
                            </Card>
                            </Col>
                    
                        ) : <p> Loading...</p>}
                        
                    </Row>
                </Container>
                </div>
        
    )

}