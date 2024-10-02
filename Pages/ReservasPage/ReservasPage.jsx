import React, { useState } from "react";
import "./ReservasPage.css";

const ReservasPage = () => {
  const [nome, setNome] = useState("");
  const [data, setData] = useState("");
  const [horaInicio, setHoraInicio] = useState("");
  const [horaFim, setHoraFim] = useState("");

  const handleReserva = (e) => {
    e.preventDefault();
    console.log(
      "Nome:",
      nome,
      "Data:",
      data,
      "Horário:",
      horaInicio,
      "até",
      horaFim
    );
  };

  return (
    <div className="reserva-container">
      <div className="sidebar">
        <div className="profile-section">
          <div className="foto"></div>
          <h3 className="profile-name">EDSON SIDRONIO</h3>
        </div>
        <div className="menu">
          <button className="menu-btn">Salas</button>
          <button className="menu-btn active">Minhas Reservas</button>
        </div>
        <button className="logout-btn">SAÍDA</button>
      </div>

      <div className="main-content">
        <h2 className="room-title">SALA B10</h2>
        <form onSubmit={handleReserva} className="reserva-form">
          <div className="form-group">
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="data">Data:</label>
            <input
              type="date"
              id="data"
              value={data}
              onChange={(e) => setData(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="horaInicio">Horário:</label>
            <div className="time-inputs">
              <input
                type="time"
                id="horaInicio"
                value={horaInicio}
                onChange={(e) => setHoraInicio(e.target.value)}
                required
              />
              <span>às</span>
              <input
                type="time"
                id="horaFim"
                value={horaFim}
                onChange={(e) => setHoraFim(e.target.value)}
                required
              />
            </div>
          </div>
          <button className="btn-reservar" type="submit">
            Reservar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReservasPage;
