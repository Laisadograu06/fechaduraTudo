import '../TodasPage/TodasPage.css';
import Reserva from '../../Components/Sala/Reserva';
import { useState } from 'react';

const TodasPage = () => {
    const [lista, setLista] = useState([
        { "id": 1, "nome": "A1", status: 1 },
        { "id": 2, "nome": "A2", status: 0 },
        { "id": 3, "nome": "B1", status: 0 },
        { "id": 4, "nome": "B2", status: 1 },
        { "id": 5, "nome": "C1", status: 1 },
        { "id": 6, "nome": "C2", status: 0 },
    ]);

    function escolherSala(id, nome) {
        alert("ID: " + id + " Sala: " + nome);
    }

    const renderSalas = (listaSalas) => {
        return listaSalas.map((item) => (
            <div key={item.id}>
                <Reserva
                    nome={item.nome}
                    id={item.id}
                    status={item.status}
                    onClick={() => escolherSala(item.id, item.nome)}
                />
            </div>
        ));
    };


    const salasA = lista.filter(sala => sala.nome.startsWith('A'));
    const salasB = lista.filter(sala => sala.nome.startsWith('B'));
    const salasC = lista.filter(sala => sala.nome.startsWith('C'));

    return (
        <div className="fundo">
            <div className="esquerda-todas">
                <div className="cima">
                    <h2> TODAS AS SALAS</h2>
                    <button className="button-todas" type="submit">Todas Salas</button>
                    <button className="button-todas" type="submit">Minhas Reservas</button>
                </div>
                <div className='baixo'>
                  
                </div>
            </div>
            <div className='salas'>
                <div className='salas-A'>
                    <h3>Fileira A</h3>
                    {salasA.length > 0 ? renderSalas(salasA) : <p>Nenhuma sala disponível</p>}
                </div>
                <div className='salas-B'>
                    <h3>Fileira B</h3>
                    {salasB.length > 0 ? renderSalas(salasB) : <p>Nenhuma sala disponível</p>}
                </div>
                <div className='salas-C'>
                    <h3>Fileira C</h3>
                    {salasC.length > 0 ? renderSalas(salasC) : <p>Nenhuma sala disponível</p>}
                </div>
            </div>
        </div>
    );
}

export default TodasPage;