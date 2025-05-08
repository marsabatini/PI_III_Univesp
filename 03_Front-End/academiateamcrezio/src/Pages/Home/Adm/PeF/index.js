import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Log_in_out_header } from "../../../Components/Header"; 

import Header from "../../../Components/Header";
import Footer_Adm from "../../../Components/Footer_Adm";
import Gerenciador_ADM from "../../../Components/Gerenciador";
import fotoperfil from "../../../../Assets/fotoperfil.jpeg"

import "./pef.modules.css"

export default function Pef () {

        useEffect(() => {
            Log_in_out_header();
        })

        return (
            <>
                    <div>
                        <section className="pef_section">
                        <div className="pef_caixa">
                            <Header/>
                            <Gerenciador_ADM  />
                            <section className="tela_pef">
                                <div className="pef">
                                    <div className="titulo_pef">
                                        <h3>professores e treinadores</h3>
                                    </div>
                                    <div className="pef_1">
                                        <div className="pef_2">
                                            <div className="button_pef">
                                                <button>adicionar novo</button>
                                            </div>
                                            <div className="trancar">
                                                <label for="trancar">trancado</label>
                                                <input type="radio" id="trancar"></input>
                                            </div>
                                            <div className="pef_img">
                                                <img src={fotoperfil} alt="foto do perfil"/>
                                            <div className="pef_3">
                                                <div>
                                                <label for="nome">nome:</label>
                                                <input type="text" id="nome"/>
                                                </div>

                                                <div>
                                                <label for="fata">data de inicio:</label>
                                                <input type="text" id="data"/>
                                                </div>

                                                <div>
                                                <label for="funcao"> função:</label>
                                                <input type="text" id="funcao"/>
                                                </div>

                                                <div>
                                                <label for="graduacao">graduação:</label>
                                                <input type="text" id="graduacao"/>
                                                </div>

                                                </div>
                                            </div>
                                        </div>
                                    
                                    <div className="list_pef">
                                        <li>treinador 1</li>
                                        <li>treinador 2</li>
                                        <li>treinador 3</li>
                                        <li>treinador 4</li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </div>
                                    </div>

                                </div>
                    </section>
                    <Footer_Adm/>
                </div>
            </section>
        </div>
        
        
        
        
        
        
        
        </>
     )




}