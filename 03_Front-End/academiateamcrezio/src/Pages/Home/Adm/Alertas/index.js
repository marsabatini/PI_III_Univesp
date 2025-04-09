
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Log_in_out_header } from "../../../Components/Header";

import Header from "../../../Components/Header";
import Footer_Adm from "../../../Components/Footer_Adm";
import Gerenciador_ADM from "../../../Components/Gerenciador";

import "./alerta.modules.css";


export default function Alertas() {

    useEffect(() => {
        Log_in_out_header();
    })

    return (

        <>
            <div>
                <section className="alerta_section">

                    <div class="caixa_alerta">
                        <Header/>
                        <Gerenciador_ADM />
                        <section className="alert_section">
                            <div >
                                <h3 className="titulo_alerta">
                                    ALERTAS
                                </h3>
                            </div>

                            <div className="alertas">
                                <div className="graduacao" >
                                    <h2>
                                        APLICAR TROCA DE GRADUAÇÃO
                                    </h2>
                                    <ul>
                                        <li>098 - Paulo V. Mentani (Azul)</li>
                                        <li>087 - Leonardo V. A. do carmo (Preta)</li>
                                    </ul>
                                </div>
                                <div className="avaliacao_fisica">
                                    <h2>
                                        AVALIAÇÃO FISICA
                                    </h2>
                                    <ul>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                                <div className="exame_medico" >
                                    <h2>
                                        EXAME MÉDICO
                                    </h2>
                                    <ul>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                                <div className="mensalidade">
                                    <h2>
                                        PARCELA/MENSALIDADE ATRASADA
                                    </h2>
                                    <ul>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                            </div>

                        <Footer_Adm/>   
                        </section>
                    </div>
                </section>
            </div>
        </>

    );

}

