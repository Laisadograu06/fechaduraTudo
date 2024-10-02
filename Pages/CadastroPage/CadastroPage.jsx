import React, { useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import '../CadastroPage/CadastroPage.css';

const CadastroPage = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleCadastro = (e) => {
        e.preventDefault();
        console.log("Usuário:", username, "Email:", email, "Senha:", password);
    };

    return (
        <div className="fundo">
            <div className="cadastro-container">
                <div className="esquerda-cadastro">
                    <h2 className="bem-vindo">Bem-vindo!</h2>
                </div>
                <div className="direita-cadastro">
                    <h2 className="titulo-cadastro">Cadastro</h2>
                    <p className="subtitulo-cadastro">Preencha os campos abaixo para se cadastrar.</p>
                    <form onSubmit={handleCadastro}>
                       
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="bi bi-person"></i> 
                                </span>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Usuário"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        
                      
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="bi bi-envelope"></i> 
                                </span>
                            </div>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        
                      
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="bi bi-lock"></i>
                                </span>
                            </div>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Senha"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        
                        <button className="btn button-cadastro" type="submit">
                            Cadastrar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CadastroPage;   