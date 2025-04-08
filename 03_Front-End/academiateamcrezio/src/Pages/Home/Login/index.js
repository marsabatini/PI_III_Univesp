import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Log_in_out_header } from "../../Components/Header/index"
import './styles.css';

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

import api from '../../../Services/Api';

import logo from "../../../Assets/logopng.png"



export default function Login() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [id, setId] = useState('');
    const [nome, setNome] = useState('');
    const [role, setRole] = useState('');
    

    const navigate = useNavigate();

    

    async function Login(e) {
        e.preventDefault();

        const data = {
            email,
            senha
        };

        try {
            const response = await api.post('/api/login', data);
            const userData = response.data;

            localStorage.setItem('email', email);
            localStorage.setItem('id', response.data.id);
            localStorage.setItem('nome', response.data.nome);
            //localStorage.setItem('refreshToken', response.data.refreshToken);
            localStorage.setItem('role', response.data.role);
            
            if (response.data.role === "ALUNO") {
                localStorage.setItem('userData', JSON.stringify(userData));
                localStorage.setItem('usuarioLogado','true');
                navigate('/aluno')

            } else if (response.data.role === "ADMIN") {
                localStorage.setItem('acessToken', response.data.token);
                navigate('/adm/cadastro_gerais')

            } else if (response.data.role === "PROFESSOR" || response.data.role === "TREINADOR") {
                localStorage.setItem('acessToken', response.data.token);
                navigate('/adm/cadastro_gerais')

            } else {
                alert("Usuário não encontrado!!!!!!!");
            }
            
        } catch (err) {
            // mensagemErro('Usuário e/ou senha inválido(s).')
            alert("Usuário desconhecido")
        }

    };
    
    useEffect(() => {
        Log_in_out_header();
    },[])
    
    return (
        <div>
            <section className="login_section">
                <Header />
                <main>
                    <article>
                        <section>
                            <div class="container_login">
                                <div className="cadastro">
                                    <div className="flexz">
                                        <img src={logo} alt="logo team crezio" />
                                        <p> caso não seja cadastrado ainda, crie sua conta!</p>
                                        <Link to="/cadastro">
                                            <button className="c-bnt">cadastrar</button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="login-column">
                                    <form className="login" onSubmit={Login}>
                                        <h2>entre em seu cadastro </h2>
                                        <div className="caixa-u">
                                            <input
                                                title="Digite seu e-mail."
                                                type="text"
                                                value={email}
                                                onChange={e => setEmail(e.target.value)}
                                                required
                                            />
                                            <label>usuário</label>
                                        </div>
                                        <div className="caixa-u">
                                            <input
                                                title="Digite sua senha."
                                                type="password"
                                                value={senha}
                                                onChange={e => setSenha(e.target.value)}
                                                required
                                            />
                                            <label>senha</label>
                                        </div>
                                        <div className="esquecerSenha">
                                            <Link className="esqueceu" to="/login/Redefinir_Senha"> esqueci a senha </Link>
                                        </div>
                                        <div className="div_entrar_button">
                                            <button type="submit" className="l-bnt">entrar</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </section>
                    </article>
                </main>
            </section >
            <Footer />
        </div >
    );
}

