import {Container, Row, Col, Card, Button } from "react-bootstrap"
import { useContext, useEffect, useState } from "react"
import Context from "../../context"

export default () => {
    const [character,setData] = useState([])
    const {characters,setCharacters} = useContext(Context)
    
    useEffect(() => {
        setData(characters.filter(character => character.favorito === true))
    },[])

    return (
                <div className="home-class"> 
                <Container>
                    <Row className="align-items-center">
                        {character ? character.map(character =>
                            <Col lg={4} md={12} className="my-4">
                            <Card>
                                <Card.Img variant="top" src={character.image} />
                                <Card.Body>
                                    <Card.Title>{character.name}</Card.Title>
                                    <Card.Text>
                                        <p> Especie:{character.species} </p>
                                        <p> Status: {character.status}</p>
                                        <p> Origen: {character.origin.name}</p>
                                        <p> Genero: {character.gender}</p>
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