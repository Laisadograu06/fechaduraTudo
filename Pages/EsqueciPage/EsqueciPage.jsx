import React, { useState } from "react";
import '../EsqueciPage/EsqueciPage.css'
const EsqueciPage = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email);
    };

    return (
        <div className="fundo">
            <div className="esqueci-container-login">
                <div className="esquerda-esqueci">
                    <h2 className="bem-vindo">Recuperar Senha</h2>
                    <p>Informe seu e-mail para redefinir sua senha.</p>
                </div>
                <div className="direita-esqueci">
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="email" 
                            placeholder="Email"
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                        <button className="button-esqueci" type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EsqueciPage;