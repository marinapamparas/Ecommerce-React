import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import logo from './assets/logo.png'


const NavBar = () => {
    return(
        <Navbar expand="md" className='navbar'>
            <Container className="navbarcontainer">
                <Navbar.Brand href="#home"><img src={logo} alt="logo Painti" className='logoimg'/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#inicio">Inicio</Nav.Link>
                        <Nav.Link href="#productos">Productos</Nav.Link>
                        <Nav.Link href="#promociones">Promociones</Nav.Link>
                        <Nav.Link href="#contacto">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                
            </Container>
            <CartWidget/>
        </Navbar>
    )
}

export default NavBar