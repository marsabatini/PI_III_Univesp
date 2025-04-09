import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Log_in_out_header } from "../../../Components/Header";

import Header from "../../../Components/Header";
import Gerenciador_ADM from "../../../Components/Gerenciador";
import Footer_Adm from "../../../Components/Footer_Adm";

import "./perfis.modules.css";
import foto_perfil from "../../../../Assets/fotoperfil.jpeg";

export default function Cadastros() {

    useEffect(() =>{
        Log_in_out_header();
    })

    return (

        <>
            <div>
                <section className="perfis_section">

                    <div class="caixa_perfis">
                        <Header/>
                        <Gerenciador_ADM/>
                        <section className="profiles_section">
                            
                                <h3 className="titulo_perfis">
                                    perfis
                                </h3>
    
                            <div className="Gerencia_perfis">

                                <div id="Aluno_situacao">
                                    <div className="lock_checkbox">trancado</div>

                                    <label className="switch">
                                        <input type="checkbox"/>
                                            <span className="slider_perfis round"></span>
                                    </label>

                                    <div className="search-box">
                                        <input type="text" placeholder="Procurar aluno" />
                                        <button type="submit"><span></span></button>
                                    </div>
                                </div>


                                <div id="Aluno_editor">

                                    <div id="informacoes_Aluno">

                                        <div className="foto-p">
                                            <img src={foto_perfil} alt=""/>
                                        </div>

                                        <div className="Aluno_input_dados">

                                            <form class="input_dados_forms" id="Aluno_input_dados_forms">
                                                <div className="form-row">
                                                    <label for="nome">nome</label>
                                                    <input type="text" id="nome" name="nome" placeholder="nome"/>
                                                </div>

                                                <div className="form-row">
                                                    <label for="status">status</label>
                                                    <select id="status" name="status">
                                                        <option value="active">ativo</option>
                                                        <option value="inactive">inativo</option>
                                                    </select>
                                                </div>

                                                <div className="form-row">
                                                    <label for="matricula">matricula</label>
                                                    <input type="text" id="matricula" name="matricula" placeholder="insira matricula"/>
                                                </div>

                                                <div className="form-row">
                                                    <label for="graduacao">graduação</label>
                                                    <select id="graduacao" name="graduacao" placeholder="faixa">
                                                        <option value="Branca">branca</option>
                                                        <option value="Preta">preta</option>
                                                    </select>
                                                </div>

                                                <div className="form-row">
                                                    <label for="plano">plano:</label>
                                                    <input type="text" id="plano" name="plano" placeholder="plano"/>
                                                </div>

                                                <div className="form-row">
                                                    <label for="validade_plano">validade do plano:</label>
                                                    <input type="date" id="validade_plano" name="validade_plano"/>
                                                </div>

                                                <div className="form-row">
                                                    <label for="prox_vencimento">proximo vencimento</label>
                                                    <input type="date" id="prox_vencimento" name="prox_vencimento"/>
                                                </div>

                                                <div className="form-row">
                                                    <label for="validade_exame_medico">validade exame medico</label>
                                                    <input type="date" id="validade_exame_medico" name="validade_exame_medico"/>
                                                </div>

                                            </form>


                                        </div>

                                        <div id="notificacoes_para_aluno">

                                            <div className="notifications">notificações</div>

                                            <div className="select_notifications">

                                                <div className="form-row">
                                                    <select id="Noticacao_1" name="Noticacao_1" placeholder="Noticação 1">
                                                    </select>
                                                </div>
                                                <div className="form-row">
                                                    <select id="Noticacao_2" name="Noticacao_2" placeholder="Noticação 2">
                                                    </select>
                                                </div>

                                                <div className="form-row">
                                                    <select id="Noticacao_3" name="Noticacao_3" placeholder="Noticação 3">
                                                    </select>
                                                </div>

                                                <div className="form-row">
                                                    <select id="Noticacao_4" name="Noticacao_4" placeholder="Noticação 4">
                                                    </select>
                                                </div>

                                            </div>

                                        </div>



                                    </div>

                                    <div id="agenda_aluno">
                                        <div id="Exame_medico">

                                            <div id="upload_btn">
                                                <label for="file-upload" class="file-upload-btn">anexar arquivo medico
                                                    {/* <img src={} alt="logotipo" className="img_medical_exam"/> */}
                                                </label>
                                                <input className="validate_medical_exam" type="file" id="file-upload" onchange="updateLabel()"/>
                                            </div>

                                            <div id="envia_btn">
                                                <button className="enviar-button" type="button">enviar!</button>
                                            </div>

                                            <div id="ver_arquivo">
                                                <button className="view-button" type="button">ver exame medico</button>
                                            </div>

                                        </div>

                                        <div id="Validar_exame_medico_area">
                                            <div id="data_exame">
                                                realizado dia 13/12/2023
                                            </div>
                                            <div >
                                                <button id="validar_exame_medico_btn" type="button">validar exame medico</button>
                                            </div>
                                        </div>

                                        <div id="avaliacao_fisica_agendamento">
                                        </div>

                                        <div id="graduacao_agendamento">
                                        </div>

                                        <div id="associar_convidado_area">
                                        </div>


                                    </div>
                                </div>


                            </div>
                            <Footer_Adm/>
                        </section>
                    </div>  
                    <script src="Tela_Perfil_Gerencia.js"></script>
                  
                </section>
            </div>
        </>

    );

}

    