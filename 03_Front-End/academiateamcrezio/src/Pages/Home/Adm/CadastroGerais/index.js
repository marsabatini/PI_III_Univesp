import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Log_in_out_header } from "../../../Components/Header";

import Header from "../../../Components/Header";
import Footer_Adm from "../../../Components/Footer_Adm";
import Gerenciador_ADM from "../../../Components/Gerenciador";

import style_cadastros_gerais from "./cadastrogerais.module.css";

import api from "../../../../Services/Api";

export default function Cadastro_Geral() {

    const [userData, setUserData] = useState({});
    const [id, setId] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [dataNascimento, setDatanascimento] = useState('');
    const [sexo, setSexo] = useState('');
    const [telefone, setTelefone] = useState('');
    const [rg, setRg] = useState('');
    const [cpf, setCpf] = useState('');
    const [endereco, setEndereco] = useState('');
    const [numEndereco, setNumEndereco] = useState('');
    const [cidade, setCidade] = useState('');
    const [cep, setCep] = useState('');
    const [bairro, setBairro] = useState('')
    const [cargo, setCargo] = useState('');
    const [tipoCadastro, setTipoCadastro] = useState('');
    const [estado, setEstado] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');


    //Montar função para dar um refresh nos dados

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
        
            try {
                await api.post('api/cadastroaluno', data);
    
                alert('Usuário cadastrado com Sucesso.');

            } catch (err) {
                alert('Não foi possível cadastrar.');
            }

    }

    async function cadastrarFuncionario(e) {
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
            cidade,
            cep,
            cargo
        }

        try {
            
            const storageToken = localStorage.getItem('acessToken');

           
            const response = await api.post('/api/cadastrofuncionario', data, {
                headers:{
                    'Authorization':`Bearer ${storageToken}`
                }
            });
            
            const userData = response.data;

            
            if (userData.cargo === "Professor") {
                alert("Professor cadastrado com sucesso.");

            
            } else if(userData.cargo === "Treinador") {
                alert("Treinador cadastrado com sucesso.");

            }

            
        } catch (error) {
            alert("Não foi possível cadastrar.")
        }

    }

    const HandleSubmit = (e) => {
        e.preventDefault();

        if (tipoCadastro === 'Aluno') {
            cadastrarAluno(e);
        } else if (tipoCadastro === 'Professor' || tipoCadastro === 'Treinador') {
            cadastrarFuncionario(e);
        } else {
            alert('Selecione o tipo de cadastro');
        }
    }

    const HandleChange = (e) => {
        setCargo(e.target.value)
        setTipoCadastro(e.target.value)
    }

    async function ExcluirUsuario() {

        const storageToken = localStorage.getItem('acessToken');

        try {
            
            const responseAluno = await api.delete('/adm/alunos', {
                data: {id},
                headers: {
                    'Authorization':`Bearer ${storageToken}`
                }
                
            });

            if (responseAluno.status === 200) {
                alert('Aluno excluído com Sucesso.');
            }else{
                alert('Erro ao excluir o aluno')
            }

        } catch (err) {
            alert('Id do aluno não encontrado...');
            return;
        }
        
        
        try {
        
            const responseFuncionario = await api.delete('/api/funcionarios', {
                data: {id},
                headers: {
                    'Authorization':`Bearer ${storageToken}`
                }
                
            });
            
           if(responseFuncionario.status === 200){
                alert('Usuário removido com Sucesso.');
                
            } 
            
        } catch (error) {
            alert('Id não encontrado.');
            
        }
    }

    async function ConsultarUsuario(e) {
        e.preventDefault();

        let userData = null;

        try {

            const responseAluno = await api.get(`adm/alunos/${id}`);
            userData = responseAluno.data;
            
            
            
        } catch (err) {
            alert('Id não encontrado.');
            
        }

        if (!userData || Object.keys(userData).length === 0) {
            try {
                const responseFuncionario = await api.get(`api/funcionarios/${id}`);
                userData = responseFuncionario.data;
                
            } catch (error) {
                alert('Id não encontrado.');
                return;
            }
        }

        if(userData && Object.keys(userData).length > 0) {
            setUserData(userData);
        }

    }

    useEffect(() => {
        Log_in_out_header();
    })

    return (

        <>
            <div>
                <section className={style_cadastros_gerais.cadastros_gerais_section}>


                    <div class={style_cadastros_gerais.caixa_cadastro_professor}>
                        <Header />
                        <Gerenciador_ADM />
                        <section className={style_cadastros_gerais.cadastros_section}>

                            <h3 className={style_cadastros_gerais.titulo_cadastro_professor}>
                                Cadastros Gerais
                            </h3>

                            <div className={style_cadastros_gerais.quadro_cadastro_professor}>


                                <div className={style_cadastros_gerais.caixa_input}>

                                    <div className={style_cadastros_gerais.lock_checkbox}>Trancado</div>

                                    <label className={style_cadastros_gerais.trancar_destrancar}>
                                        <input type="checkbox" />
                                        <span className="slider_perfis round"></span>
                                    </label>

                                    <div className={style_cadastros_gerais.refresh}>
                                        <i class="bi bi-arrow-clockwise"></i>  
                                    </div>
                                   

                                    <form className={style_cadastros_gerais.input_aluno}>
                                        <input 
                                        type="text"
                                        placeholder="Insira ID de Matricula" 
                                        name="id"
                                        value={id}
                                        title="Digite o ID do aluno para consultar ou excluir"
                                        onChange={e => setId(e.target.value)}
                                        
                                        />
                                    </form>
                                        <button className={style_cadastros_gerais.consultar_aluno} onClick={ConsultarUsuario} >Consultar</button>
                                        
                                </div>

                                <div className={style_cadastros_gerais.quadro_dados_cadastrais}>
                                    <form onSubmit={HandleSubmit}>
                                        <div className={style_cadastros_gerais.tipo_cadastro}>

                                            <div>
                                                <input type="radio" 
                                                name="select_tipo_cadastro" 
                                                id="iplano"
                                                value="Aluno"
                                                onChange={HandleChange} 
                                                /> <label for="iplano">Plano</label>
                                            </div>

                                            <div>
                                                <input type="radio" 
                                                name="select_tipo_cadastro" 
                                                id="ibolsa" 
                                                /> 
                                                <label for="ibolsa">Bolsa</label>
                                            </div>

                                            <div>
                                                <input type="radio" 
                                                name="select_tipo_cadastro" 
                                                id="icortesia" 
                                                /> 
                                                <label for="icortesia">Cortesia</label>
                                            </div>

                                            <div>
                                                <input type="radio" 
                                                name="select_tipo_cadastro" 
                                                id="iconvidado" 
                                                /> 
                                                <label for="iconvidado">Convidado</label>
                                            </div>


                                            <div>
                                                <input type="radio" 
                                                name="select_tipo_cadastro" 
                                                id="iaulaexperimental" 
                                                /> 
                                                <label for="iaulaexperimental">Aula Experimental</label>
                                            </div>


                                            <div>
                                                <input 
                                                type="radio" 
                                                name="select_tipo_cadastro" 
                                                id="iprofessor" 
                                                value="Professor"
                                                onChange={HandleChange}
                                                /> 
                                                <label for="iprofessor">Professor</label>
                                            </div>

                                            <div>
                                                <input type="radio" 
                                                name="select_tipo_cadastro" 
                                                id="itreinador" 
                                                value="Treinador"
                                                onChange={HandleChange}
                                                /> 
                                                <label for="itreinador">Treinador</label>
                                            </div>

                                        </div>

                                        <div className={style_cadastros_gerais.dados_cadastrais}>

                                            <div className={style_cadastros_gerais.input_nome}>
                                                <label for="iusuario_name">Nome</label>
                                                <input 
                                                type="text"  
                                                name="nome" 
                                                title="Digite o seu primeiro nome"
                                                id="iusuario_name"
                                                defaultValue={userData?.nome || ''}
                                                onChange={e => setNome(e.target.value)}
                                                required
                                                />
                                            </div>

                                            <div className={style_cadastros_gerais.input_sobrenome}>
                                                <label for="iusuario_sobrenome">Sobrenome</label>
                                                <input
                                                 type="text"  
                                                 name="sobrenome" 
                                                 id="iusuario_sobrenome"
                                                 title="Digite seu último nome"
                                                 defaultValue={userData?.sobrenome || ''}
                                                 onChange={e => setSobrenome(e.target.value)}
                                                 required
                                                 />
                                            </div>

                                            <div>

                                                <div className={style_cadastros_gerais.input_CPF}>
                                                    <label for="iusuario_CPF">CPF</label>
                                                    <input 
                                                        type="text"  
                                                        name="cpf" 
                                                        id="iusuario_CPF"
                                                        title="Digite seu CPF"
                                                        defaultValue={userData?.cpf || ''}
                                                        onChange={e=> setCpf(e.target.value)}
                                                        required
                                                    />
                                                        
                                                    
    
                                                </div>

                                                <div className={style_cadastros_gerais.input_RG}>
                                                    <label for="iusuario_RG">RG</label>
                                                    <input 
                                                    type="text" 
                                                    name="rg" 
                                                    id="iusuario_RG"
                                                    title="Digite seu RG"
                                                    defaultValue={userData?.rg || ''}
                                                    onChange={e=> setRg(e.target.value)}
                                                    required
                                                    />
                                                </div>

                                                <div className={style_cadastros_gerais.input_data_nasc}>
                                                    
                                                    <label for="iusuario_data_nas">Data Nascimento</label>
                                                    <input 
                                                        type="text"  
                                                    
                                                        title="Digite sua data de nascimento"
                                                        name="dtNasc" 
                                                        id="iusuario_data_nas"
                                                        defaultValue={userData?.dataNascimento || ''}
                                                        onChange={e=> setDatanascimento(e.target.value)}
                                                        required
                                                        />

                                                        
                                                </div>

                                            </div>

                                            <div className={style_cadastros_gerais.input_email}>
                                                <label for="iusuario_email">Email</label>
                                                <input 
                                                type="text"  
                                                name="email"
                                                id="iusuario_email"
                                                title="Digite seu email"
                                                defaultValue={userData?.email || ''}
                                                onChange={e=> setEmail(e.target.value)}
                                                required
                                                />
                                            </div>

                                            <div>
                                                <div className={style_cadastros_gerais.input_tel}>
                                                    <label for="iusuario_tel">Telefone</label>
                                                    <input 
                                                    type="text"  
                                                    name="telefone" 
                                                    id="iusuario_tel"
                                                    title="Digite seu telefone"
                                                    defaultValue={userData?.telefone || ''}
                                                    onChange={e=> setTelefone(e.target.value)}
                                                    required
                                                    />
                                                </div>

                                                <div className={style_cadastros_gerais.input_sexo}>
                                                    <label for="iusuario_sexo">Sexo</label>
                                                    <input 
                                                    type="radio"  
                                                    name="sexo" 
                                                    id="iusuario_sexo"
                                                    title="Digite seu sexo"
                                                    value={"M"}
                                                    //defaultValue={userData?.sexo || ''}
                                                    onChange={e=> setSexo(e.target.value)}
                                                    required
                                                    
                                                    /><label className={style_cadastros_gerais.gender}>Masculino</label>

                                                    <input 
                                                    type="radio"  
                                                    name="sexo" 
                                                    id="iusuario_sexo"
                                                    title="Digite seu sexo"
                                                    value={"F"}
                                                    // defaultValue={userData?.sexo || ''}
                                                    onChange={e=> setSexo(e.target.value)}
                                                    required
                                                    
                                                    /><label className={style_cadastros_gerais.gender}>Feminino</label>
                                                </div>
                                            </div>

                                            <div>

                                            <div className={style_cadastros_gerais.input_endereco}>
                                                <label for="iusuario_endereco">Endereço</label>
                                                <input 
                                                type="text" 
                                                name="endereco" 
                                                id="iusuario_endereco"
                                                title="Digite seu endereço"
                                                defaultValue={userData?.endereco?.endereco || ''}
                                                onChange={e=>setEndereco(e.target.value)}
                                                required
                                                />
                                            </div>

                                            <div className={style_cadastros_gerais.input_bairro}>
                                                <label for="iusuario_endereco">Bairro</label>
                                                <input 
                                                type="text" 
                                                name="bairro" 
                                                id="iusuario_bairro"
                                                title="Digite seu bairro"
                                                defaultValue={userData?.endereco?.bairro || ''}
                                                onChange={e=>setBairro(e.target.value)}
                                                required
                                                />
                                            </div>

                                            </div>

                                            <div>

                                                <div className={style_cadastros_gerais.input_num}>
                                                    <label for="iusuario_num">Número</label>
                                                    <input 
                                                    type="text" 
                                                    name="numero" 
                                                    id="iusuario_num"
                                                    title="Digite o número de seu endereço"
                                                    defaultValue={userData?.endereco?.numero || ''}
                                                    onChange={e=> setNumEndereco(e.target.value)}
                                                    required
                                                    />
                                                </div>

                                                <div className={style_cadastros_gerais.input_cidade}>
                                                    <label for="iusuario_cidade">Cidade</label>
                                                    <input 
                                                    type="text" 
                                                    name="cidade" 
                                                    id="iusuario_cidade"
                                                    title="Digite sua cidade"
                                                    defaultValue={userData?.endereco?.cidade || ''}
                                                    onChange={e=> setCidade(e.target.value)}
                                                    required
                                                    />
                                                </div>

                                                <div className={style_cadastros_gerais.input_CEP}>
                                                    <label for="iusuario_CEP">CEP</label>
                                                    <input 
                                                    type="text" 
                                                    name="cep" 
                                                    id="iusuario_CEP"
                                                    title="Digite seu CEP"
                                                    defaultValue={userData?.endereco?.cep || ''}
                                                    onChange={e=> setCep(e.target.value)}
                                                    required
                                                    />

                                                </div>

                                                <div className={style_cadastros_gerais.input_senha}>
                                                    <label for="iusuario_senha">Senha</label>
                                                    <input 
                                                    type="password" 
                                                    name="password" 
                                                    id="iusuario_senha"
                                                    title="Digite sua senha"
                                                    value={senha}
                                                    onChange={e=> setSenha(e.target.value)}
                                                    required
                                                    />
                                                </div>

                                            </div>

                                            <div>

                                                <div className={style_cadastros_gerais.input_reponsavel}>
                                                    <label for="iusuario_reponsavel">Responsável</label>
                                                    <input 
                                                    type="text" 
                                                    name="usuario_reponsavel" 
                                                    id="iusuario_reponsavel"
                                                    />
                                                </div>

                                                <div className={style_cadastros_gerais.input_tel_responsavel}>
                                                    <label for="iusuario_tel_responsavel">Tel. do Responsável</label>
                                                    <input 
                                                    type="text" 
                                                    name="usuario_tel_responsavel" 
                                                    id="iusuario_tel_responsavel"
                                                    />
                                                </div>

                                                <div className={style_cadastros_gerais.input_conf_senha}>
                                                    <label for="iusuario_conf_senha">Confirmar senha</label>
                                                    <input 
                                                    type="password" 
                                                    name="usuario_conf_senha" 
                                                    id="iusuario_conf_senha"
                                                    title="Digite novamente sua senha"
                                                    required
                                                    />
                                                </div>

                                            </div>

                                            <div className={style_cadastros_gerais.tipo_cadastro_options}>

                                                <Link to="/Adm/Redefinir_Senha"><button> Redefinir Senha</button></Link>
                                                <button>Alterar Dados</button>
                                                <button type="submit">Cadastrar Usuario</button>
                                                <button>Planos</button>
                                                <button>Imprimir</button>
                                                <button data-action="excluir" onClick={ExcluirUsuario}>Excluir</button>

                                            </div>

                                        </div>
                                    </form>

                                </div>

                            </div>

                            <Footer_Adm />
                        </section>

                    </div>

                </section>
            </div>
        </>

    );

}