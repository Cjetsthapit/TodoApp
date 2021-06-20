import React from 'react';
import styles from './Header.module.css';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav, Container} from 'react-bootstrap';
const Header=(props)=>(

    <Navbar bg="dark" variant="dark" expand="md" >
        <Container>
        <Navbar.Brand style={{color:'white',textDecoration:'none'}} >
                App
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className={styles.navbar}>
            <Nav className="ml-auto">
            <Nav.Link >
                <NavLink to="/TodoApp" exact activeClassName={styles.active}>
                Todo
                </NavLink>
            </Nav.Link>
            <Nav.Link>
                <NavLink to="/TodoApp/tictac" activeClassName={styles.active}>
                    TicTac
                </NavLink>
            </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
  
   
  
</Navbar>

        //<NavLink  activeClassName={styles.active} exact to="/">ToDo </NavLink>
        //<NavLink  activeClassName={styles.active} to="/tictac">TicTac </NavLink>
    // </div>
)
export default Header;