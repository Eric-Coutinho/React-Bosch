import { Link, NavLink } from "react-router-dom";
import { Header } from "./styled";

function NavBar() {
  return (
    <Header>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/search'}>Buscar</NavLink>
        <NavLink to={'/about'}>Sobre Nós</NavLink>
        <NavLink to={'/sair'}>Sair</NavLink>
    </Header>
  );
}

export default NavBar;
