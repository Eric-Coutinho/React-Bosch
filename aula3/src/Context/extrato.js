import React, { useState} from 'react';

export const ExtratoContext = React.createContext();
ExtratoContext.displayName = 'Extrato';

export const ExtratoProvider = ({ children }) => {
    const [extrato, setExtrato] = useState([]);

    function addPagamento(forma, data, valor){
        setExtrato(current => [...current, {
            id: extrato.length,
            forma: forma,
            data: data,
            valor: valor
        }]);
    }

    return(
        <ExtratoContext.Provider
            value={{
                extrato,
                setExtrato,
                addPagamento
            }}
        >
            { children }
        </ExtratoContext.Provider>
    )
}
