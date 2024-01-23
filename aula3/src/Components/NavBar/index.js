import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

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
            <Nav.Link href='/extrato' style={{color: 'white'}}>Extrato</Nav.Link>
            <Nav.Link href='/' style={{color: 'white'}}>Adicionar Pagamento</Nav.Link>
          </Nav>
        </Navbar.Collapse>
          <button type='button' className={styles.navbarButton} onClick={ changeMode }>
            <Icon.Sun color='white' size={40}/>
          </button>
    </Navbar>
  );
}

export default NavBar;
