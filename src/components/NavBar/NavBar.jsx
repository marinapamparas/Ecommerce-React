import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import logo from '../../assets/logo.png';
import { Link, NavLink } from 'react-router-dom';


const NavBar = () => {
    return(
        <Navbar expand="md" className='navbar'>
            <Container className="navbarcontainer">
                <Link to='/' ><img src={logo} alt="logo Painti" className='logoimg'/></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        <NavLink to={`/category/Pintura`} className={({isActive}) => isActive ? 'NavActiva' : 'NavPasiva'}>Pinturas</NavLink>
                        <NavLink to={`/category/Pastas`} className={({isActive}) => isActive ? 'NavActiva' : 'NavPasiva'}>Pastas</NavLink>
                        <NavLink to={`/category/Barnices y lacas`} className={({isActive}) => isActive ? 'NavActiva' : 'NavPasiva'}>Barnices y Lacas</NavLink>
                        <CartWidget/>

                    </Nav>
                </Navbar.Collapse>
                
            </Container>
           
        </Navbar>
    )
}

export default NavBar
