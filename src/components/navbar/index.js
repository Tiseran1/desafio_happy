import './navbar.css'

import { Nav, Navbar } from 'react-bootstrap';

import { NavLink } from 'react-router-dom'

export default () => {

    const setActiveClass =({isActive}) => (isActive ? "active ms-3 text-decoration-none": "text-white ms-3 text-decoration-none")
    return (
        <>
        <Navbar className bg="dark" variant="dark"> 
            <div className='nav'>
                <Navbar.Brand>
                    <h5>Pockedex Poderosa...</h5>

                    </Navbar.Brand>
                <Nav className='me-auto'>
                    <NavLink className={setActiveClass} to="/">Home</NavLink>
                    <NavLink className={setActiveClass}  to="/pokemon">Pokemon</NavLink>
                </Nav>
            </div>
        </Navbar>


        </>
    )
};
