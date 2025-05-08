import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputMask from 'react-input-mask';

import "./styles.css";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

import logo from "../../../Assets/logopng.png"

import api from "../../../Services/Api";
import { Input } from "@mui/material";

export default function Cadastro() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confSenha, setConfSenha] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [dataNascimento, setDatanascimento] = useState('');
    const [sexo, setSexo] = useState('');
    const [telefone, setTelefone] = useState('');
    const [rg, setRg] = useState('');
    const [cpf, setCpf] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cidade, setCidade] = useState('');
    const [cep, setCep] = useState('');
    const [bairro, setBairro] = useState('');
    const [complemento, setComplemento] = useState('');
    const [numero, setNumero] = useState('');
    const [estado, setEstado] = useState('');
    const [errosFormulario, setErrosFormulario] = useState({});


    const navigate = useNavigate();

    const validarFormulario = () => {
        const erros = {};
      
        if (senha.length < 8) erros.senha = "A senha deve ter pelo menos 8 caracteres";
        if (senha !== confSenha) erros.confSenha = "As senhas não são iguais"
        if (!/^\d{3}.\d{3}.\d{3}-\d{2}$/.test(cpf)) erros.cpf = "CPF inválido ou já existente";
        if (!/^\d{2}.\d{3}.\d{3}-\d{1}$/.test(rg)) erros.rg = "RG inválido ou já existente";
        if (!/^\d{5}-\d{3}$/.test(cep)) erros.cep = "CEP inválido ou já existente";
        if (!/\S+@\S+\.\S+/.test(email)) erros.email = "Email inválido ou já existente";
        if (!/^\(\d{2}\)\d{5}-\d{4}$/.test(telefone)) erros.telefone = "Tel inválido ou já existente";

        
      
        setErrosFormulario(erros);
        return Object.keys(erros).length === 0;
      };

    async function cadastrarAluno(e) {
        e.preventDefault();

        const data = {
            nome,
            sobrenome,
            dataNascimento,
            email,
            senha,
            sexo,
            telefone,
            rg,
            cpf,
            endereco,
            numero,
            complemento,
            bairro,
            cidade,
            estado,
            cep
        }

        if (!validarFormulario()) {
           
            alert("Você inseriu dados não válidos, tente novamente...")
            
            return;
        }

        try {
            await api.post('api/cadastroaluno', data);

            alert('Usuário cadastrado com Sucesso.');

            navigate('/login');

        } catch (err) {
            alert('Não foi possível cadastrar.');
        }
    }


    return (
        <div>
            <section>
                <Header />
                <div className="cadastro-card-container">
                    <div className="cadastro-card">
                        <div className="cadastro-card-logo">
                            <Link className="link-inicio" to="/"><img src={logo} alt="Nínive" /></Link>
                        </div>
                        <div className="cadastro-card-header">
                            <h1>Faça seu cadastro</h1>
                        </div>
                        <form className="cadastro-card-form" onSubmit={cadastrarAluno}>
                            <div className="form-item">
                                <span className="form-item-icon material-symbols-rounded">account_circle</span>
                                <input
                                    className="nome"
                                    title="Digite seu primeiro nome."
                                    name="nome"
                                    type="text"
                                    value={nome}
                                    onChange={e => setNome(e.target.value)}
                                    placeholder="Primeiro nome"
                                    required
                                />
                            </div>
                            <div className="form-item">
                                <span className="form-item-icon material-symbols-rounded">account_circle</span>
                                <input
                                    className="sobrenome"
                                    title="Digite seu último nome."
                                    name="sobrenome"
                                    type="text"
                                    value={sobrenome}
                                    onChange={e => setSobrenome(e.target.value)}
                                    placeholder="Último nome"
                                    required
                                />
                            </div>
                            <div className="form-item">
                                <span className="form-item-icon material-symbols-rounded">perm_contact_calendar</span>
                                <InputMask
                                    mask="99/99/9999"
                                    className="dtNasc"
                                    title="Digite sua data de nascimento."
                                    name="dtNasc"
                                    type="text"
                                    value={dataNascimento}
                                    onChange={e => setDatanascimento(e.target.value)}
                                    placeholder="Data de nascimento"
                                    required
                                >
                                    {(inputProps) => <input type="text" {...inputProps} />}
                                </InputMask>
                            </div>
                            <div className="form-item gender">
                                <span className="gender_icon material-symbols-rounded">wc</span>
                                <input
                                    className="sexo"
                                    title="Sexo"
                                    name="sexo"
                                    type="radio"
                                    value={"F"}
                                    onChange={e => setSexo(e.target.value)}
                                    
                                    required
                                /><label>Feminino</label>
                                <input
                                    className="sexo"
                                    title="Sexo"
                                    name="sexo"
                                    type="radio"
                                    value={"M"}
                                    onChange={e => setSexo(e.target.value)}
                                    
                                    required
                                /><label>Masculino</label>
                            </div>
                            <div className="form-item">
                                <span className="form-item-icon material-symbols-rounded">id_card</span>
                                <InputMask
                                    mask="99.999.999-9"
                                    className="rg"
                                    title="Digite seu RG"
                                    name="rg"
                                    type="text"
                                    value={rg}
                                    onChange={e => setRg(e.target.value)}
                                    placeholder="RG"
                                    required
                                />{errosFormulario.rg && <p className="erros">{errosFormulario.rg}</p>}
                            </div>
                            <div className="form-item">
                                <span className="form-item-icon material-symbols-rounded">id_card</span>
                                <InputMask
                                    mask="999.999.999-99"
                                    className="cpf"
                                    title="Digite seu CPF"
                                    name="cpf"
                                    type="text"
                                    value={cpf}
                                    onChange={e => setCpf(e.target.value)}
                                    placeholder="CPF"
                                    required
                                />{errosFormulario.cpf && <p className="erros">{errosFormulario.cpf}</p>}
                            </div>
                            <div className="form-item">
                                <span className="form-item-icon material-symbols-rounded">mail</span>
                                <input
                                    className="email"
                                    title="Digite seu e-mail."
                                    name="email"
                                    type="text"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    placeholder="E-mail"
                                    required
                                />{errosFormulario.email && <p className="erros">{errosFormulario.email}</p>}
                            </div>
                            <div className="form-item">
                                <span className="form-item-icon material-symbols-rounded">phone_iphone</span>
                                <InputMask
                                    mask="(99)99999-9999"
                                    className="telefone"
                                    title="Digite seu telefone"
                                    name="telefone"
                                    type="text"
                                    value={telefone}
                                    onChange={e => setTelefone(e.target.value)}
                                    placeholder="Telefone"
                                    required
                                />{errosFormulario.telefone && <p className="erros">{errosFormulario.telefone}</p>}
                            </div>
                            <div className="form-item">
                                <span className="form-item-icon material-symbols-rounded">home</span>
                                <input
                                    className="Endereco"
                                    title="Digite seu endereço"
                                    name="endereco"
                                    type="text"
                                    value={endereco}
                                    onChange={e => setEndereco(e.target.value)}
                                    placeholder="Endereço"
                                    required
                                />
                            </div>
                            <div className="form-item">
                                <span className="form-item-icon material-symbols-rounded">home</span>
                                <input
                                    className="Numero"
                                    title="Digite o número de seu endereço"
                                    name="numero"
                                    type="text"
                                    value={numero}
                                    onChange={e => setNumero(e.target.value)}
                                    placeholder="Número"
                                    required
                                />
                            </div>
                            <div className="form-item">
                                <span className="form-item-icon material-symbols-rounded">home</span>
                                <input
                                    className="Complemento"
                                    title="Digite o complemento"
                                    name="complemento"
                                    type="text"
                                    value={complemento}
                                    onChange={e => setComplemento(e.target.value)}
                                    placeholder="Complemento"
                                    required
                                />
                            </div>
                            <div className="form-item">
                                <span className="form-item-icon material-symbols-rounded">home</span>
                                <input
                                    className="Bairro"
                                    title="Digite o nseu bairro"
                                    name="bairro"
                                    type="text"
                                    value={bairro}
                                    onChange={e => setBairro(e.target.value)}
                                    placeholder="Bairro"
                                    required
                                />
                            </div>
                            <div className="form-item">
                                <span className="form-item-icon material-symbols-rounded">home</span>
                                <input
                                    className="Cidade"
                                    title="Digite sua cidade"
                                    name="cidade"
                                    type="text"
                                    value={cidade}
                                    onChange={e => setCidade(e.target.value)}
                                    placeholder="Cidade"
                                    required
                                />
                            </div>
                            <div className="form-item">
                                <span className="form-item-icon material-symbols-rounded">home</span>
                                <input
                                    className="Estado"
                                    title="Digite seu Estado"
                                    name="estado"
                                    type="text"
                                    value={estado}
                                    onChange={e => setEstado(e.target.value)}
                                    placeholder="Estado"
                                    required
                                />
                            </div>
                            <div className="form-item">
                                <span className="form-item-icon material-symbols-rounded">home</span>
                                <InputMask
                                    mask="99999-999"
                                    className="CEP"
                                    title="Digite seu CEP"
                                    name="cep"
                                    type="text"
                                    value={cep}
                                    onChange={e => setCep(e.target.value)}
                                    placeholder="CEP"
                                    required
                                />{errosFormulario.cep && <p className="erros">{errosFormulario.cep}</p>}
                            </div>
                            <div className="form-item">
                                <span className="form-item-icon material-symbols-rounded">lock</span>
                                <input
                                    className="senha"
                                    title="Digite sua senha."
                                    name="password"
                                    type="password"
                                    value={senha}
                                    onChange={e => setSenha(e.target.value)}
                                    placeholder="Senha"
                                    required 
                                    />{errosFormulario.senha && <p className="erros">{errosFormulario.senha}</p>}
                            </div>
                            <div className="form-item">
                                <span className="form-item-icon material-symbols-rounded">lock</span>
                                <input
                                    className="confSenha"
                                    title="Digite novamente sua senha."
                                    name="confpass"
                                    type="password"
                                    placeholder="Confirme sua senha"
                                    value={confSenha}
                                    onChange={e => setConfSenha(e.target.value)}
                                    required
                                    />{errosFormulario.confSenha && <p className="erros">{errosFormulario.confSenha}</p>}
                            </div>
                            <div className="form-item-other">
                                <Link className="link-quem" to="/quem-somos">Sobre o Projeto</Link>
                                <div className="checkbox">
                                    <label for="rememberMeCheckbox">Aceito os Termos</label>
                                    <input type="checkbox" id="rememberMeCheckbox" checked />
                                </div>
                            </div>
                            <button type="submit">Cadastrar</button>
                        </form>
                        <div className="cadastro-card-footer">
                            <Link className="link-login" to="/login">Fazer login</Link>
                        </div>
                    </div>
                    <div className="cadastro-card-social">
                        <div>Cadastrar Com</div>
                        <div class="cadastro-card-social-btns">
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                                </svg>
                            </a>
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-google" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        </div>
    );
}


