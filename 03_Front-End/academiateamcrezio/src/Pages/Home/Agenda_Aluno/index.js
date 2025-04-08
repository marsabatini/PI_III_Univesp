import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Log_in_out_header } from "../../Components/Header";

import style_agenda_aluno from "./agenda_aluno.modules.css";

import Aulas from "../../Components/Aulas";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";


import api from "../../../Services/Api";

export default function Agenda_Aluno() {

    const [classData, setClassData] = useState([]);
    const [aulasMarcadas, setAulasMarcadas] = useState([]);
    const [numAlunosAula, setNumAlunosAula] = useState([]);

    
    

    async function retornarAgendaAluno() {
        
        
        
        try {
            const response = await api.get('adm/aulas');
            const classData = response.data;
            
            setClassData(classData);
            
            
            localStorage.setItem('classData', response.data.classData)
            
            //carregar as aulas quando carregar a página
        
        } catch (err) {
            alert('Não foi possível carregar a agenda')
            
        }

        
    }

    async function carregarAulasAluno() {
        const idAluno = JSON.parse(localStorage.getItem('id'));

        
        try {
            const response = await api.get(`adm/aulas/aulasdoaluno/${idAluno}`);
            setAulasMarcadas(response.data);
            localStorage.setItem('aulasMarcadas', response.data);

        } catch (err) {
            
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

    async function marcarAula(idAula) {
        
        const idAluno = JSON.parse(localStorage.getItem('id'));


        try {
            await api.post(`adm/aulas/adicionaraluno/${idAluno}/${idAula}`);

            const aulaMarcada = classData.find(aula => aula.id === idAula);

            if (aulaMarcada) {
                setAulasMarcadas(prev => [...prev, aulaMarcada]);
                
            }
            alert('Aula marcada com sucesso.');
            
            listaAlunosAula(idAula);
        } catch (err) {
            alert('Falha ao marcar a aula.');
        }

    }

    async function desmarcarAula(idAula) {

        const idAluno = JSON.parse(localStorage.getItem('id'));

        try {
            await api.delete(`adm/aulas/removeraluno/${idAluno}/${idAula}`);
            setAulasMarcadas(prev => prev.filter(aula => aula.id !== idAula));
            
            alert('Aula desmacarda com sucesso.');
            
            listaAlunosAula(idAula);
        } catch (err) {
            alert('Aula não está agendada.');
        }

    }

    useEffect(() => {
        classData.forEach(aula => {
            listaAlunosAula(aula.id);
        });
    }, [classData]);

    useEffect(() =>{
        retornarAgendaAluno();
        carregarAulasAluno();
        Log_in_out_header();
        
    },[]);

    return (

        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"></link>
            <div>
                

                   
                        <Header />

                        <section >
                            <div className="agenda">
                                <div className="consulta_modalidade_aluno">

                                    <form>
                                        <select className="modalidade_input_aluno" id="modalidade" name="modalidade">
                                            <option value="Todas as Modalidades" >Todas as Modalidades</option>
                                            <option value="Boxe">Boxe</option>
                                            <option value="Jiu-Jitsu">Jiu-Jitsu</option>
                                            <option value="Self-Defense">Self-Defense</option>
                                            <option value="Muay-Thay">Muay-Thay</option>
                                            <option value="Kids">Kids</option>
                                            <option value="Teen">Teen</option>
                                        </select>
                                    </form>
                                    <div className="menu_calendario_aluno">

                                        <div className="menu_calendario_data_atual">
                                            <span id="prev" className="material-symbols-rounded">chevron_left</span>
                                            <h2 className="current-date"> Maio 2024</h2>
                                            <span id="next" className="material-symbols-rounded">chevron_right</span>
                                        </div>

                                        <div className="calendar_aluno">
                                            <ul className="weeks_aluno">
                                                <li class="inactive">Domingo</li>
                                                <li>Segunda</li>
                                                <li>Terça</li>
                                                <li>Quarta</li>
                                                <li>Quinta</li>
                                                <li>Sexta</li>
                                                <li>Sábado</li>
                                            </ul>
                                            <ul className="days_aluno">
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

                                <div className="consulta_modalidade_aluno">
                                    <div>
                                        <h2 className="titulos">
                                            Sua Agenda Pessoal
                                        </h2>
                                    </div>

                                    <div className="agenda_alunos">
                                        {aulasMarcadas.length > 0 ? (
                                            aulasMarcadas.map(aula => (
                                                <div key={aula.id}>
                                                    <span>{aula.dataHora + " " + aula.modalidade}</span>
                                                </div>
                                            ))
                                        ) : (
                                            <p>Nenhuma aula marcada...</p>
                                        )}

                                        
                                    </div>

                                </div>

                                <div>

                                    <h2 className="titulos">
                                        AGENDA COMUM - PÚBLICA
                                    </h2>

                                    <div className="Agenda_Publica_aluno">

                                        <div>


                                            <ul className="header_agenda_aluno">
                                                <li className="Agenda_Publica_data">Data</li>
                                                <li className="Agenda_Publica_hora">Horario</li>
                                                <li className="Agenda_Publica_modal">Modalidade</li>
                                                <li className="Agenda_Publica_func">Professor</li>
                                                <li className="Agenda_Publica_qtddlimi">Qtd Limite de Inscrições</li>
                                                <li className="Agenda_Publica_incritos">Inscritos</li>
                                                <li className="Agenda_Publica_vagas">Vagas</li>
                                                <li className="Agenda_Publica_status">Status</li>
                                            </ul>
                                            <div id="lista_aulas" className="lista_aulas_aluno">
                                                <table id="Semana-Dia-Atual" className="Semana-Dia-Atual">

                                                    <tbody>
                                                        {classData.map(aula => {
                                                            const isMarcada = aulasMarcadas.some(aulasMarcada => aulasMarcada.id === aula.id);
                                                            const [dia, hora] = aula.dataHora.split(' ');

                                                            const inscritos = numAlunosAula[aula.id] || 0;

                                                           
                                                            return (
                                                                <tr key={aula.id} className="aula">
                                                                    <td className="atributo_aula_aluno_dia">{dia}</td>
                                                                    <td className="atributo_aula_aluno_hora">{hora}</td>
                                                                    <td className="atributo_aula_aluno_modal">{aula.modalidade}</td>
                                                                    <td className="atributo_aula_aluno_func">{aula.funcionario}</td>
                                                                    <td className="atributo_aula_aluno_qtddlim">{aula.qtddLimiteAlunos}</td>
                                                                    <td className="atributo_aula_aluno_inscr">{inscritos}</td>
                                                                    <td className="atributo_aula_aluno_vagas">{aula.qtddLimiteAlunos - inscritos}</td>
                                                                    <td>
                                                                        <button
                                                                            className={isMarcada ? 'remover_aluno' : 'inserir_aluno'}
                                                                            type="button"
                                                                            onClick={() => {
                                                                                if (isMarcada) {
                                                                                    desmarcarAula(aula.id);
                                                                                } else if (inscritos < aula.qtddLimiteAlunos){
                                                                                    marcarAula(aula.id)
                                                                                } else {
                                                                                    alert('Aula está cheia.')
                                                                                }
                                                                            }}
                                                                        >
                                                                            {isMarcada ? 'Desmarcar Aula' : 'Agendar Aula'}
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                            );
                                                        })}
                                                    </tbody>

                                                </table>
                                               
                                            </div>
                                        </div>

                                    </div>
                                    
                                </div>
                            </div>

                        </section>
                    </div>
                
                    <Footer />
            

        </>



    );



}



