import { dividerClasses } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./presenca.css";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";



export default function Presenca() {

    const [presencaConfirmada, setPresencaConfirmada] = useState(false);

    const confirmarPresenca = () => {
        setPresencaConfirmada(true);
    };

    return (
        <div>
            <container>
                <Header />
                <main>
                    <article className="main_bnt">
                        <section>
                            <h1>
                                veja suas aulas e confirme sua presença
                            </h1>
                        </section>

                        <section className="tabela_aulas">

                            <div className="presencablocos">
                                <h3>
                                    boxe
                                </h3>
                                <span id="data_aula">
                                    20/04/25

                                </span>
                                <span id="horario_aula">
                                    20:00
                                </span>
                                <span id="dia_aula">
                                    quarta-feira
                                </span>
                                <button className="confirmar-btn" >
                                    Confirmar Presença
                                </button>
                            </div>

                            <div className="presencablocos">
                                <h3>
                                    boxe
                                </h3>
                                <span id="data_aula">
                                    20/04/25

                                </span>
                                <span id="horario_aula">
                                    20:00
                                </span>
                                <span id="dia_aula">
                                    quarta-feira
                                </span>
                                <button class="confirmar-btn" >
                                    Confirmar Presença
                                </button>
                            </div>

                            <div className="presencablocos">
                                <h3>
                                    boxe
                                </h3>
                                <span id="data_aula">
                                    20/04/25

                                </span>
                                <span id="horario_aula">
                                    20:00
                                </span>
                                <span id="dia_aula">
                                    quarta-feira
                                </span>
                                <button class="confirmar-btn">
                                    Confirmar Presença
                                </button>
                            </div>

                            <div className="presencablocos">
                                <h3>
                                    boxe
                                </h3>
                                <span id="data_aula">
                                    20/04/25

                                </span>
                                <span id="horario_aula">
                                    20:00
                                </span>
                                <span id="dia_aula">
                                    quarta-feira
                                </span>
                                <button class="confirmar-btn" >
                                    Confirmar Presença
                                </button>
                            </div>                           
                        </section>

                        <section>
                            <h1>
                                veja suas proximas aulas
                            </h1>
                        </section>
                        <section className="tabela_aulas ">
                        
                        <div className="aulablocos">
                                <h3>
                                    boxe
                                </h3>
                                <span id="data_aula">
                                    20/04/25
                                </span>
                                <span id="horario_aula">
                                    20:00
                                </span>
                                <span id="dia_aula">
                                    quarta-feira
                                </span>
                        </div>

                        <div className="aulablocos">
                                <h3>
                                    boxe
                                </h3>
                                <span id="data_aula">
                                    20/04/25
                                </span>
                                <span id="horario_aula">
                                    20:00
                                </span>
                                <span id="dia_aula">
                                    quarta-feira
                                </span>
                        </div>

                        <div className="aulablocos">
                                <h3>
                                    boxe
                                </h3>
                                <span id="data_aula">
                                    20/04/25
                                </span>
                                <span id="horario_aula">
                                    20:00
                                </span>
                                <span id="dia_aula">
                                    quarta-feira
                                </span>
                        </div>

                        <div className="aulablocos">
                                <h3>
                                    boxe
                                </h3>
                                <span id="data_aula">
                                    20/04/25
                                </span>
                                <span id="horario_aula">
                                    20:00
                                </span>
                                <span id="dia_aula">
                                    quarta-feira
                                </span>
                        </div>

                        <div className="aulablocos">
                                <h3>
                                    boxe
                                </h3>
                                <span id="data_aula">
                                    20/04/25
                                </span>
                                <span id="horario_aula">
                                    20:00
                                </span>
                                <span id="dia_aula">
                                    quarta-feira
                                </span>
                        </div>
                      </section>
                      <section className="espaco">
                     </section>
                    </article>
                </main>
                <Footer />
            </container>
        </div>
    );
}
