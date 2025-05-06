
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Log_in_out_header } from "../../Components/Header";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

import "./planos.modules.css";

export default function Planos() {

    useEffect(() => {
        Log_in_out_header();
    },[])
    
    return (

        <>
            <div>
                <section>
                    <Header />
                    <main>
                        <article >
                            <section class="containerp">
                                <h1>planos</h1>
                                <div className="caixa3">
                                    <div className="imagens1">
                                        <a Link=""> <div className="plan1">
                                            <h1>white belt</h1>

                                            <div className="col1">
                                                <span>12 meses</span>
                                                <h3> R$ 299,00</h3>
                                                <span>6x R$ 598,00</span>
                                            </div>
                                            <div className="col2">
                                                <span>6 meses</span>
                                                <h3> R$ 349,00</h3>
                                                <span>4x R$ 523,00</span>
                                            </div>
                                            <div className="col3">
                                                <span>mensal</span>
                                                <h3> R$ 399,00</h3>
                                            </div>

                                            <span>1x por semana</span>
                                            <span>matricula R$ 199,00</span>
                                            <span>+ kimono vouk R$ 479,00</span>
                                        </div></a>
                                    </div>
                                    <div className="imagens1">
                                        <a Link=""> <div className="plan1">
                                            <h1>blue belt</h1>

                                            <div className="col1">
                                                <span>12 meses</span>
                                                <h3> R$ 349,00</h3>
                                                <span>6x R$ 698,00</span>
                                            </div>
                                            <div className="col2">
                                                <span>6 meses</span>
                                                <h3> R$ 399,00</h3>
                                                <span>4x 598,50</span>
                                            </div>
                                            <div className="col3">
                                                <span>mensal</span>
                                                <h3> R$ 449,00</h3>
                                            </div>

                                            <span>2x por semana</span>
                                            <span>matricula R$ 199,00</span>
                                            <span>+ kimono vouk R$ 479,00</span>
                                        </div></a>
                                    </div>
                                    <div className="imagens1">
                                        <a Link=""> <div className="plan1">
                                            <h1>purple belt</h1>

                                            <div className="col1">
                                                <span>12 meses</span>
                                                <h3> R$ 399,00</h3>
                                                <span>6x R$ 798,00</span>
                                            </div>
                                            <div className="col2">
                                                <span>6 meses</span>
                                                <h3> R$ 449,00</h3>
                                                <span>4x R$673,50</span>
                                            </div>
                                            <div className="col3">
                                                <span>mensal</span>
                                                <h3> R$ 499,00</h3>
                                            </div>

                                            <span>acesso livre</span>
                                            <span>matricula R$ 199,00</span>
                                            <span>+ kimono vouk R$ 479,00</span>
                                        </div></a>
                                    </div>
                                    <div className="imagens1">
                                        <a Link=""> <div className="plan1">
                                            <h1>kids</h1>

                                            <div className="col1">
                                                <span>12 meses</span>
                                                <h3> R$ 359,00</h3>
                                                <span>6x R$ 718,00</span>
                                            </div>
                                            <div className="col2">
                                                <span>6 meses</span>
                                                <h3> R$ 519,00</h3>
                                                <span>4x R$ 778,50</span>
                                            </div>
                                            <div className="col3">
                                                <span>mensal</span>
                                                <h3> R$ 689,00</h3>
                                            </div>

                                            <span>2x por semana</span>
                                            <span>matricula R$ 199,00</span>
                                            <span>+ kimono vouk R$ 319,00</span>
                                        </div></a>
                                    </div>
                                    <div className="imagens1">
                                        <a Link=""> <div class="plan1">
                                            <h1>single</h1>

                                            <div className="col1">
                                                <span>12 meses</span>
                                                <h3> R$ 1.249,00</h3>
                                                <span>6x R$ 2498,00</span>
                                            </div>
                                            <div className="col2">
                                                <span>6 meses</span>
                                                <h3> R$ 1.619,00</h3>
                                                <span>4x R$2.428,00</span>
                                            </div>
                                            <div className="col3">
                                                <span>mensal</span>
                                                <h3> R$1.999,00</h3>
                                            </div>
                                            <span>treino personalizado e individual</span>
                                            <span>2x por semana</span>
                                            <span>matricula R$ 99,00</span>
                                            <span>1x na semana (diminui 25%)</span>
                                            <span>3x por semana (aumenta 50%)</span>
                                            <span></span>

                                        </div></a>
                                    </div>
                                    <div className="imagens1">
                                        <a Link=""> <div className="plan1">
                                            <h1>triple</h1>

                                            <div className="col1">
                                                <span>12 meses</span>
                                                <h3> R$ 429,00</h3>
                                                <span>6x R$ 858,00</span>
                                            </div>
                                            <div className="col2">
                                                <span>6 meses</span>
                                                <h3> R$ 559,00</h3>
                                                <span>4x R$ 830,50</span>
                                            </div>
                                            <div className="col3">
                                                <span>mensal</span>
                                                <h3> R$ 689,00</h3>
                                            </div>
                                            <span>treino personalizado</span>
                                            <span>2x por semana</span>
                                            <span> turmas de ate 3 alunos</span>
                                            <span>matricula R$ 99,00</span>


                                        </div></a>
                                    </div>
                                </div>
                            </section>

                            <section class="containerp">
                                <h1>planos promocionais</h1>
                                <div className="caixa2">
                                    <div className="imagens2">
                                        <a Link=""> <div className="plan2">
                                            <h1>Black belt</h1>
                                            <div className="col4">
                                                <h2>R$ 299,00</h2>
                                                <span>media mensal</span>
                                            </div>
                                            <h4>10x de R$ 358,80</h4>
                                            <h3>promoção por tempo limitado</h3>
                                            <span>matricula isenta</span>
                                            <span> acesso livre </span>
                                            <span>vale por 2 </span>
                                            <span>ferias de 15 a 90 dias </span>
                                            <span>transferivel</span>
                                            <span>kimono vouk de presente</span>
                                        </div></a>
                                    </div>
                                    <div className="imagens2">
                                        <a Link=""> <div className="plan2">
                                            <h1>super kids</h1>
                                            <div className="col4">
                                                <h2>R$ 349,00</h2>
                                                <span>media mensal</span>
                                            </div>
                                            <h4>10x de R$ 418,80</h4>
                                            <h3>promoção por tempo limitado</h3>
                                            <span>matricula isenta</span>
                                            <span> acesso livre </span>
                                            <span>vale por 2 </span>
                                            <span>ferias de 15 a 90 dias </span>
                                            <span>transferivel</span>
                                            <span>kimono vouk de presente</span>
                                        </div></a>
                                    </div>
                                    <div className="imagens2">
                                        <a Link=""><div className="plan2">
                                            <h1>single +</h1>
                                            <div className="col4">
                                                <h2>R$ 1.199,00</h2>
                                                <span>media mensal</span>
                                            </div>
                                            <h4>10x de R$ 1438,80</h4>
                                            <h3>promoção por tempo limitado</h3>
                                            <span> treino personalizado e individual </span>
                                            <span>matricula isenta</span>
                                            <span>2x na semana</span>
                                            <span>vale por 2 </span>
                                            <span>ferias de 15 a 90 dias </span>
                                            <span>transferivel</span>
                                            <span>kimono vouk de presente</span>
                                            <span>1x na semana (diminui 25%)</span>
                                            <span>3x por semana (aumenta 50%)</span>

                                        </div></a>
                                    </div>
                                    <div className="imagens2">
                                        <a Link=""><div className="plan2">
                                            <h1>triple +</h1>
                                            <div className="col4">
                                                <h2>R$ 399,00</h2>
                                                <span>media mensal</span>
                                            </div>
                                            <h4>10x de R$ 478,80</h4>
                                            <h3>promoção por tempo limitado</h3>
                                            <span> treino personalizado</span>
                                            <span> turma de ate 3 alunos</span>
                                            <span>matricula isenta</span>
                                            <span>2x na semana</span>
                                            <span>vale por 2 </span>
                                            <span>ferias de 15 a 90 dias </span>
                                            <span>transferivel</span>
                                            <span>kimono vouk de presente</span>
                                            <span>1x na semana (diminui 25%)</span>
                                            <span>3x por semana (aumenta 50%)</span>

                                        </div></a>

                                    </div>
                                </div>



                            </section>

                            <section className="button_mp">
                                <Link to="/aula_experimental"><button className="button_p">marque gratuitamente uma aula experimental</button></Link>
                            </section>

                        </article>


                    </main>

                    <br />

                </section>
            </div>
                    <Footer />
        </>


    );

}

