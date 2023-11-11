import './Header.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png'

const Header = () => {
    return (
      <Navbar collapseOnSelect expand="lg"  className='p-3 bg-sm-success'>
      <Container>
        <NavLink to="/"> <img className='logo' src={logo} alt="DesignAgency" /> </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className={ ({isActive}) => isActive ? "active nav-link": " nav-link"  } to="/">Home</NavLink> 
            <NavLink className={ ({isActive}) => isActive ? "active nav-link": "nav-link"  } to="/team">Team</NavLink> 
            <NavLink className={ ({isActive}) => isActive ? "active nav-link": " nav-link"  } to="/services">Services</NavLink> 
            <NavLink className={ ({isActive}) => isActive ? "active nav-link": "nav-link"  } to="/projects">Projects</NavLink> 
            <NavLink className={ ({isActive}) => isActive ? "active nav-link": "nav-link"  } to="/testimonials">Testimonials</NavLink> 
            <button className='login-btn'>Login</button>
            <button className='register-btn'>Register</button>
      
        
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;