import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Log_in_out_header } from "../Components/Header";

import foto_inicial from "../../Assets/fotoInicial.png";
import foto_inicial_responsiva from "../../Assets/fotoInicial_Responsiva.png";
import white_belt from "../../Assets/whiteBelt.jpeg";
import blue_belt from "../../Assets/blueBelt.jpeg";
import purple_belt from "../../Assets/purpleBelt.jpeg";
import kids from "../../Assets/kids.jpeg";
import single from "../../Assets/single.jpeg";
import triple from "../../Assets/triple.jpeg";
import single_plus from "../../Assets/single+.jpeg";
import triple_plus from "../../Assets/triple+.jpeg";
import bull from "../../Assets/fight_like_a_bull.png";
import tabela_horarios from "../../Assets/Agenda.jpg";
import professores from "../../Assets/professores.png";
import black_belt from "../../Assets/blackBelt.jpeg";


import boxe from "../../Assets/Boxe.png";
import teen_kids from "../../Assets/teenKids.png";
import cross_training from "../../Assets/crossTraining.png";
import PFL from "../../Assets/PFL.png";
import self_defense from "../../Assets/selfDefense.png";
import personal_trainer from "../../Assets/personalTrainer.png";

import gabr_carv_pic from "../../Assets/grabriela_carvalho.png";
import eli_braz_pic from "../../Assets/eli_braz.png";
import eduardo_pic from "../../Assets/eduardo.png";

import item_1 from "../../Assets/loja1.png";
import item_2 from "../../Assets/loja2.png";
import item_3 from "../../Assets/loja3.png";
import item_4 from "../../Assets/loja4.png";

import item_mural_1 from "../../Assets/mural1.png";
import item_mural_2 from "../../Assets/mural2.png";
import item_mural_3 from "../../Assets/mural3.png";
import item_mural_4 from "../../Assets/mural4.png";

import nossos_parceiros from "../../Assets/nossosParceiros.png";

// import foto_inicial from "../../Assets/fotoInicial.png";
// import foto_inicial from "../../Assets/fotoInicial.png";
// import foto_inicial from "../../Assets/fotoInicial.png";
// import foto_inicial from "../../Assets/fotoInicial.png";
// import foto_inicial from "../../Assets/fotoInicial.png";
// import foto_inicial from "../../Assets/fotoInicial.png";
// import foto_inicial from "../../Assets/fotoInicial.png";
// import foto_inicial from "../../Assets/fotoInicial.png";


import "./styles.css";


import Footer from "../Components/Footer";
import Header from "../Components/Header";


export default function Inicio() {

    useEffect(() => {
        Log_in_out_header();
    })

    return (

        <div>
            <container>

                <Header />
                <main>

                    <article className="conteudo">


                        <section className="quadro_imagem_inicial">

                            <picture>
                                <source media="(max-width:780px)" srcSet={foto_inicial_responsiva}></source>
                                <img src={foto_inicial} className="boas-vindas" />
                            </picture>

                        </section>

                        <section className="aula_experimental_home">
                            <Link to="/aula_experimental"> <button > marque agora uma aula  <br /> aula experimental</button></Link>
                        </section>

                        <section>
                            <div>
                                <span className="planoTeamCrezio">planos<br /> team crezio</span>
                            </div>

                            <div className="planos">

                                <div className="imgPlanos">
                                    <img src={white_belt} alt="plano white belt" />
                                    <img src={blue_belt} alt="plano blue belt" />
                                    <img src={purple_belt} alt="plano purple belt" />
                                    <img src={kids} alt="plano kids" />
                                    <img src={black_belt} alt="plano black belt" />
                                    <img src={single} alt="plano single" />
                                    <img src={single_plus} alt="plano single plus" />
                                    <img src={triple} alt="plano triple" />
                                    <img src={triple_plus} alt="plano triple plus" />

                                </div>

                            </div>
                        </section>

                        <section className="bull">
                            <img src={bull} alt="foto touro team crezio" />
                        </section>

                        <section>
                            <div>
                                <span className="mestres">treine com nossos mestres</span>
                            </div>

                            <div className="professores">
                                <div className="foto-professores">
                                    <img src={eduardo_pic} alt="professor Eduardo Fonseca" />
                                    <img src={gabr_carv_pic} alt="professora Gabriela Carvalho" />
                                    <img src={eli_braz_pic} alt=" professor Eli Braz" />
                                </div>
                            </div>
                        </section>
                        <section>
                            <span className="modalidades"> mais modalidades</span>
                            <div className="fotos-modalidades">
                                <div className="gallery-container">
                                    <a className="gallery-items">
                                        <img src={cross_training} alt="croos-training" />
                                    </a>
                                    <a className="gallery-items">
                                        <img src={teen_kids} alt="teen-kids" />
                                    </a>
                                    <a className="gallery-items">
                                        <img src={boxe} alt="boxe-aula" />
                                    </a>
                                    <a className="gallery-items">
                                        <img src={PFL} alt="p-f-l" />
                                    </a>
                                    <a className="gallery-items">
                                        <img src={self_defense} alt="self-defense" />
                                    </a>
                                    <a className="gallery-items">
                                        <img src={personal_trainer} alt="personal-trainer" />
                                    </a>

                                </div>
                            </div>
                        </section>


                        <span className="tabela">agenda semanal</span>
                        <div className="agenda-Semanal">
                            <img src={tabela_horarios} alt="tabela do horario das aulas" />
                        </div>

                        <div className="botão-matriculese">
                            <Link to="/cadastro"><button> matricule-se agora</button></Link>
                        </div>

                        <span className="loja">conheça nossa loja</span>

                        <div className="foto-loja">
                            <div>
                                <img src={item_1} alt="fotos de produtos da loja" />
                                <img src={item_2} alt="fotos de produtos da loja" />
                                <img src={item_3} alt="fotos de produtos da loja" />
                                <img src={item_4} alt="fotos de produtos da loja" />
                            </div>
                        </div>

                        <section>
                            <span className="mural">mural</span>

                            <div className="corpoMural">
                                <div className="slider-2">
                                    <div className="images-2">
                                        <input type="radio" name="slide-2" id="img01" defaultChecked />
                                        <input type="radio" name="slide-2" id="img02" />
                                        <input type="radio" name="slide-2" id="img03" />
                                        {/* <input type="radio" name="slide-2" id="img04" /> */}

                                        <img src={item_mural_1} className="m01" alt="img01" />
                                        <img src={item_mural_2} className="m02" alt="img02" />
                                        <img src={item_mural_3} className="m03" alt="img03" />
                                        {/* <img src={item_mural_4} className="m04" alt="img04" /> */}
                                    </div>
                                    <div className="dots-2">
                                        <label for="img01"></label>
                                        <label for="img02"></label>
                                        <label for="img03"></label>
                                        {/* <label for="img04"></label> */}
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="parceiros">
                            <img src={nossos_parceiros} />
                        </section>

                    </article>
                </main>
                <Footer />




            </container>
        </div>

    );

}
