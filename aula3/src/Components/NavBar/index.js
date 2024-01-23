import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';

import * as Icon from 'react-bootstrap-icons';
import styles from "./styles.module.scss";
import { useContext } from 'react';
import { DarkModeContext } from '../../Context/darkMode';

function NavBar() {
  const { changeMode } = useContext(DarkModeContext)

  return (
    <Navbar expand="lg" style={{padding: '0.5em', backgroundColor: 'darkblue'}}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundColor: 'white'}}/>
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className={styles.navbarCards}>
            <Link to='/' style={{color: 'white', textDecoration: 'none'}}>Home</Link>
            <Link to='/extrato' style={{color: 'white', textDecoration: 'none'}}>Extrato</Link>
            <Link to='/add' style={{color: 'white', textDecoration: 'none'}}>Adicionar Pagamento</Link>
          </Nav>
        </Navbar.Collapse>
          <button type='button' className={styles.navbarButton} onClick={ changeMode }>
            <Icon.Sun color='white' size={40}/>
          </button>
    </Navbar>
  );
}

export default NavBar;
