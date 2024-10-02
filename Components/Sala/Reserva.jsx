import React, { useState } from 'react';
import './Reserva.css';

const Reserva = ({ id, nome, status }) => {
    const [mensagem, setMensagem] = useState(""); 

    const handleClick = () => {
        if (status === 1) {
            setMensagem("Sala indisponível");

          
            setTimeout(() => {
                setMensagem("");
            }, 1000);
        } else {
            setMensagem(""); 
        }
    };

    return (
        <div>
            {status === 1 ? (
                <button className="botao" onClick={handleClick}>
                    ID: {id} - SALA: {nome} - Status: {status}
                </button>
            ) : (
                <button className="botao-off" onClick={handleClick}>
                    ID: {id} - SALA: {nome} - Status: {status}
                </button>
            )}

            {mensagem && <p className="mensagem">{mensagem}</p>} 
        </div>
    );
};

export default Reserva;