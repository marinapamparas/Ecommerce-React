import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import logo from 'c://Users/Marina/Desktop/MarinaPamparas/MarinaPamparas/src/assets/logo.png';
import { Link, NavLink } from 'react-router-dom';


const NavBar = () => {
    return(
        <Navbar expand="md" className='navbar'>
            <Container className="navbarcontainer">
                <Link to='/' ><img src={logo} alt="logo Painti" className='logoimg'/></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        <NavLink to={`/category/Pintura`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Pinturas</NavLink>
                        <NavLink to={`/category/Pastas`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Pastas</NavLink>
                        <NavLink to={`/category/Barnices y lacas`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Barnices y Lacas</NavLink>
                        

                    </Nav>
                </Navbar.Collapse>
                
            </Container>
            <CartWidget/>
        </Navbar>
    )
}

export default NavBar
