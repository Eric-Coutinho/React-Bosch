import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.div`
    display: flex;
    justify-content: space-around;
    padding-block: 1em;
    background: rgb(181,135,255);
    background: linear-gradient(90deg, rgba(181,135,255,1) 0%, rgba(100,162,252,1) 70%, rgba(65,255,250,1) 100%);
`;

export const NavLink = styled(Link)`
    color: black;
    text-decoration: none;
`;

