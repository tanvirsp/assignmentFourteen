import './Header.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import { useRef } from 'react';

const Header = () => {

  const navigate = useNavigate()
  const myNavbar = useRef()
  


    window.addEventListener('scroll', function(){
        if (window.scrollY > 300){
            myNavbar.current.classList.add("sticky-nav")
        } else{
          myNavbar.current.classList.remove("sticky-nav")
        }
    })



    return (
      <Navbar ref={myNavbar} collapseOnSelect expand="lg"  className='p-3 '>
      <Container>
        <NavLink  to="/"> <img className='logo' src={logo} alt="DesignAgency" /> </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            
            <NavLink className={ ({isActive}) => isActive ? "active nav-link": " nav-link"  } to="/">Home</NavLink> 
            <NavLink className={ ({isActive}) => isActive ? "active nav-link": "nav-link"  } to="/team">Team</NavLink> 
            <NavLink className={ ({isActive}) => isActive ? "active nav-link": " nav-link"  } to="/services">Services</NavLink> 
            <NavLink className={ ({isActive}) => isActive ? "active nav-link": "nav-link"  } to="/projects">Projects</NavLink> 
            <NavLink className={ ({isActive}) => isActive ? "active nav-link": "nav-link"  } to="/testimonials">Testimonials</NavLink> 
            <button onClick={()=> navigate('/login')} className='login-btn'>Login</button>
            <button  onClick={()=> navigate('/register')} className='register-btn'>Register</button>
      
        
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;