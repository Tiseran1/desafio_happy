import './navbar.css'

import { Container, Nav, Navbar } from 'react-bootstrap';

import { Link } from 'react-router-dom'

export default () => {
    return (
        <>
        <Navbar className='bg-img'> 
            <Container>
                <Navbar.Brand>
                    <h5>Rick and Morty</h5>
                    <input
                    placeholder="Buscar personaje" 
                    />
                    </Navbar.Brand>
                <Nav className='me-auto'>
                    <Link className='text-white ms-3 text decoration-none' to="/">Personajes</Link>
                    <Link className='text-white ms-3 text decoration-none' to="/contacto">Favoritos</Link>
                </Nav>
            </Container>
        </Navbar>


        </>
    )
};
