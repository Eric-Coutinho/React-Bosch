import { useState, useContext } from "react"
import { CounterContext } from '../../Context/counter';

export default function CounterPage() {
    const { handleDown, handleUp } = useContext(CounterContext);

    return (
        <>
            <button onClick={handleDown}>Clique aqui</button>
            <button onClick={handleUp}>Clique aqui</button>
        </>
    )
}