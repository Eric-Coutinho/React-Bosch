import { Link } from "react-router-dom";
import styled from "styled-components";

export const Space = styled.div`
    display: flex;
    justify-content: center;
    padding-inline: 4em;
    padding-block: 2em;
`;

export const CardSpace = styled.div`
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2em;
    flex-direction: column;
    background: rgb(0,60,80);
    background: linear-gradient(90deg, rgba(0,60,80,1) 0%, rgba(9,9,121,1) 30%, rgba(78,0,201,1) 51%, rgba(136,0,255,1) 100%);
`;

export const Title = styled.h1`
    color: white;
    font-size: 3em;
    font-weight: 700;
`

export const Text = styled.p`
    color: white;
    font-size: 1.5em;
    font-weight: 500;

`
