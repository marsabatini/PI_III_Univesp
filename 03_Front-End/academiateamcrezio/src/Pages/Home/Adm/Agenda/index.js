import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import InputMask from 'react-input-mask';
import axios from 'axios';

import { Log_in_out_header } from "../../../Components/Header";

import style_agenda from "./agenda.modules.css";

import Gerenciador_ADM from "../../../Components/Gerenciador";
import Header from "../../../Components/Header";
import Footer_Adm from "../../../Components/Footer_Adm";
import Aulas_Adm from "../../../Components/Aulas_Adm";

import api from "../../../../Services/Api";
import { FiUnderline } from "react-icons/fi";


export default function Agenda() {

    const [dia, setDia] = useState('');
    const [hora, setHora] = useState('');
    const [dataHora, setDataHora] = useState('');
    const [modalidade, setModalidade] = useState('');
    const [funcionario, setFuncionario] = useState('');
    const [qtddLimiteAlunos, setQttdLimiteAlunos] = useState('');
    const [classData, setClassData] = useState([]);
    const [numAlunosAula, setNumAlunosAula] = useState([]); 

    let dictionary = {
        "Jiu-jitsu": 0,
        "Boxe": 1,
        "Self-Defense": 2,
        "PFL": 3,
        "Kids": 4,
        "Teens": 5
    }

    

    async function cadastrarAula(e) {
        e.preventDefault();
        


        const concatDataHora = dia + 'T' + hora;
        setDataHora(concatDataHora);

        const data = {
            dataHora: concatDataHora,
            modalidade: modalidade,
            funcionario: {
                id: funcionario
            },
            qtddLimiteAlunos: qtddLimiteAlunos
    
        }


        try {
            await api.post('/adm/aulas', data);
            retornarAgendaAdm()
            alert('aula cadastrada com sucesso')

            
            //fazer um apend usando a variavel de estado classData, como essa aula
            //sendo a ultima da lista
            

        } catch (error) {
            alert('Não foi possível cadastrar, verifique os dados.')
        }
        
    
    }

    async function retornarAgendaAdm() {
        

        
        try {
            const response = await api.get('adm/aulas');
            const classData = response.data
            

            setClassData(classData);
            
            localStorage.setItem('classData', response.data.classData)
            
            
            
            //carregar as aulas quando carregar a página
        
        } catch (error) {
            alert('Não foi possível carregar a agenda')
            
        }

        
    }

    async function listaAlunosAula(idAula) {
        
        try {
            const response = await api.get(`adm/aulas/alunosinscritosnaaula/${idAula}`)
            setNumAlunosAula(prev => ({
                ...prev,
                [idAula]: response.data.length
            }));

        } catch (error) {
            
        }
    }

    useEffect(() => {
        classData.forEach(aula => {
            listaAlunosAula(aula.id);
        });
    }, [classData]);

    useEffect(() => {
        retornarAgendaAdm();
        Log_in_out_header();
    }, []);


    return (

        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"></link>
            <div>
                <section className="agenda_section">
                    <div class="caixa_agenda">
                        <Header />
                        <Gerenciador_ADM />
                        <section className="conteudo_gerenciado">

                            <h4 className="titulo_agenda">
                                AGENDA COMUM
                            </h4>


                            <div className="agenda">
                                <div className="consulta_modalidade">
                                    <div>
                                        <h2 className="titulos">
                                            AULA
                                        </h2>
                                    </div>
                                    <form>
                                        <select className="modalidade_input" id="modalidade" name="modalidade">
                                            <option value="Todas as Modalidades" >Todas as Modalidades</option>
                                            <option value="Boxe">Boxe</option>
                                            <option value="Jiu-Jitsu">Jiu-Jitsu</option>
                                            <option value="Self-Defense">Self-Defense</option>
                                            <option value="Muay-Thay">Muay-Thay</option>
                                            <option value="Kids">Kids</option>
                                            <option value="Teen">Teen</option>
                                        </select>
                                    </form>
                                    <div className="menu_calendario">

                                        <div className="menu_calendario_data_atual">
                                            <span id="prev" className="material-symbols-rounded">chevron_left</span>
                                            <h2 className="current-date"> Maio 2024</h2>
                                            <span id="next" className="material-symbols-rounded">chevron_right</span>
                                        </div>

                                        <div className="calendar">
                                            <ul className="weeks">
                                                <li class="inactive">Domingo</li>
                                                <li>Segunda</li>
                                                <li>Terça</li>
                                                <li>Quarta</li>
                                                <li>Quinta</li>
                                                <li>Sexta</li>
                                                <li>Sábado</li>
                                            </ul>
                                            <ul className="days">
                                                <li className="inactive">28</li>
                                                <li className="inactive">29</li>
                                                <li className="inactive">30</li>
                                                <li>01</li>
                                                <li>02</li>
                                                <li>03</li>
                                                <li>04</li>
                                                <li>05</li>
                                                <li>06</li>
                                                <li>07</li>
                                                <li>08</li>
                                                <li>09</li>
                                                <li>10</li>
                                                <li>11</li>
                                                <li>12</li>
                                                <li>13</li>
                                                <li>14</li>
                                                <li>15</li>
                                                <li>16</li>
                                                <li>17</li>
                                                <li>18</li>
                                                <li>19</li>
                                                <li>20</li>
                                                <li>21</li>
                                                <li>22</li>
                                                <li>23</li>
                                                <li>24</li>
                                                <li>25</li>
                                                <li>26</li>
                                                <li>27</li>
                                                <li>28</li>
                                                <li>29</li>
                                                <li>30</li>
                                                <li>31</li>
                                                <li className="inactive">01</li>

                                            </ul>
                                        </div>

                                    </div>
                                </div>

                                <div className="separador">

                                </div>

                                <div className="consulta_modalidade">
                                    <div>
                                        <h2 className="titulos">
                                            ALUNO
                                        </h2>
                                    </div>
                                    <form>
                                        <select className="modalidade_input" id="filtro_modalidade" name="modalidade">
                                            <option value="Todas as Modalidades" >Todas as Modalidades</option>
                                            <option value="Boxe">Boxe</option>
                                            <option value="Jiu-Jitsu">Jiu-Jitsu</option>
                                            <option value="Self-Defense">Self-Defense</option>
                                            <option value="Muay-Thay">Muay-Thay</option>
                                            <option value="Kids">Kids</option>
                                            <option value="Teen">Teen</option>
                                        </select>
                                    </form>
                                    <form>
                                        <input className="aluno_input" id="select_modalidade" name="modalidade" type="text" placeholder="Insira nome, sobrenome ou matricula(id)"></input>
                                        <div className="alunos">
                                            <ul>
                                                <li>Alunos ficarão aqui...</li>
                                            </ul>
                                        </div>
                                    </form>
                                </div>

                                <div className="Agendamento">

                                    <h2 className="titulos">
                                        AGENDA COMUM - PÚBLICA
                                    </h2>

                                    <div className="Agenda_Publica">
                                        <div>
                                            <ul className="header_agenda_adm">
                                                <li>Data</li>
                                                <li>Horario</li>
                                                <li>Modalidade</li>
                                                <li>Professor</li>
                                                <li>Qtd Limite de Inscrições</li>
                                                <li>Inscritos</li>
                                                <li>Vagas</li>
                                                
                                            </ul>
                                            <div id="lista_aulas" className="lista_aulas_adm">
                                                <table id="Semana-Dia-Atual_adm" className="Semana-Dia-Atual_adm">
                                                    <tbody>
                                                        {classData.map(aula =>{
                                                            const[dia,hora] = aula.dataHora.split(' ')

                                                            const inscritos = numAlunosAula[aula.id] || 0

                                                            return (
                                                                <tr key={aula.id} className="aula">
                                                                    <td className="atributo_aula_aluno_dia">{dia}</td>
                                                                    <td className="atributo_aula_aluno_hora">{hora}</td>
                                                                    <td className="atributo_aula_aluno_modal">{aula.modalidade}</td>
                                                                    <td className="atributo_aula_aluno_func">{aula.funcionario}</td>
                                                                    <td className="atributo_aula_aluno_qtddlim">{aula.qtddLimiteAlunos}</td>
                                                                    <td className="atributo_aula_aluno_inscr">{inscritos}</td>
                                                                    <td className="atributo_aula_aluno_vagas">{aula.qtddLimiteAlunos - inscritos}</td>

                                                                </tr>
                                                            );
                                                        })}

                                                    </tbody>
                                                    

                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="alter_modalidade">
                                        <div>
                                            <form >
                                                <input
                                                    id="cor_modalidade"
                                                    className="modalidade"
                                                    title="Digite uma modalidade"
                                                    name="cor_modalidade"
                                                    type="text"
                                                    placeholder="Cadastrar nova modalidade"
                                                    
                                                />
                                                <button className="Inserir_Excluir" type="submit" id="inserir_modalidade" name="inserir_modalidade" >Inserir</button>
                                            </form>
                                        </div>

                                        <div>
                                            <form>

                                                <select className="modalidade" id="excluir_modalidade">
                                                    
                                                    <option value="Todas as Modalidades" >Todas as Modalidades</option>
                                                    <option value="Boxe">Boxe</option>
                                                    <option value="Jiu-Jitsu">Jiu-Jitsu</option>
                                                    <option value="Self-Defense">Self-Defense</option>
                                                    <option value="Muay-Thay">Muay-Thay</option>
                                                    <option value="Kids">Kids</option>
                                                    <option value="Teen">Teen</option>

                                                </select>
                                                <button className="Inserir_Excluir" type="submit" id="excluir" name="excluir">Excluir</button>
                                            </form>
                                        </div>

                                    </div>

                                    <h2 className="titulos">Inserir nova aula</h2>

                                    <form onSubmit={cadastrarAula} className="inserir_nova_aula">
                                        <div>
                                            <div>
                                                <label for="iinput_data">Data</label>
                                                <InputMask 
                                                    mask="9999-99-99"
                                                    type="text" 
                                                    name="input_data" 
                                                    id="iinput_data"
                                                    placeholder="data da aula yyyy-mm-dd"
                                                    value={dia}
                                                    onChange={e => setDia(e.target.value)}
                                                >

                                                    {(inputProps) => <input type="text" {...inputProps}/>}

                                                </InputMask>

                                            </div>

                                            <div>
                                                <label for="iinput_hora">Horario</label>
                                                <InputMask
                                                    mask="99:99" 
                                                    type="text" 
                                                    name="input_hora" 
                                                    id="iinput_hora"
                                                    placeholder="horário da aula"
                                                    value={hora}
                                                    onChange={e => setHora(e.target.value)}
                                                >
                                                    {(inputProps) => <input type="text" {...inputProps}/>}

                                                </InputMask>
                                            </div>

                                            <div>
                                                <label for="iinput_modalidade">Modalidade</label>
                                                <select type="text" name="input_modalidade" id="iinput_modalidade" onChange={e => setModalidade(e.target.value)}>
                                                    <option value={dictionary['Boxe']}         > Boxe</option>
                                                    <option value={dictionary['Jiu-jitsu']}    > Jiu-jitsu</option>
                                                    <option value={dictionary['Self-Defense']} > Self-Defense</option>
                                                    <option value={dictionary['PFL']}          > PFL</option>
                                                    <option value={dictionary['Kids']}         > Kids</option>
                                                    <option value={dictionary['Teens']}        > Teen</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div>

                                            <div>
                                                <label for="iinput_professor">Professor</label>
                                                <input 
                                                type="text" 
                                                name="input_professor" 
                                                id="iinput_professor"
                                                placeholder="id do professor"
                                                value={funcionario}
                                                onChange={e => setFuncionario(e.target.value)}
                                                />
                                                    
                                            </div>

                                            <div>
                                                <label for="iinput_qtd_limite">Qtd Limite</label>
                                                <input type="text" 
                                                name="input_qtd_limite" 
                                                id="iinput_qtd_limite"
                                                placeholder="quantidade máxima de alunos"
                                                value={qtddLimiteAlunos}
                                                onChange={e => setQttdLimiteAlunos(e.target.value)}
                                                />
                                            </div>
                                            <div>
                                                <button className="Inserir_Aula" type="submit" name="inserir_aula">Salvar Aula</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </section>
                        <Footer_Adm />
                    </div>
                </section>

            </div>

        </>



    );



}