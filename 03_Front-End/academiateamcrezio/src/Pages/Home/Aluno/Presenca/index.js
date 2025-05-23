import { dividerClasses } from "@mui/material";
import React, { useState, useEffect } from "react";
import { json, Link } from "react-router-dom";
import api from "../../../../Services/Api"
import { Log_in_out_header } from "../../../Components/Header/index.js";

import "./presenca.css";
import Footer from "../../../Components/Footer";
import Header from "../../../Components/Header";




export default function Presenca() {

    const [presencaConfirmada, setPresencaConfirmada] = useState(false);
    const [aulasMarcadas, setAulasMarcadas] = useState({})

    async function confirmarpresenca(aulaid) {
        const idAluno = JSON.parse(localStorage.getItem('id'));


        try {
            await api.post(`/adm/aulas/registrarpresenca/${idAluno}/${aulaid}`)
            alert('presença confirmada');
            setPresencaConfirmada(prevState => ({
            ...prevState,
            [aulaid]: true
        }));
        } catch (error) {
            alert('não conseguiu confirmar')
        }
    }


    async function carregarAulasAluno() {
        const idAluno = JSON.parse(localStorage.getItem('id'));


        try {
            const response = await api.get(`adm/aulas/aulasdoaluno/${idAluno}`);
            setAulasMarcadas(response.data);


        } catch (err) {

        }

    }

    useEffect(() => {
        carregarAulasAluno();
    }, [])

        useEffect(() => {
            Log_in_out_header();
        },[])
        



    return (
        <div>
            <section>
                <Header />
                <main>
                    <article >
                        <section className="main_bnt">
                            <h1>
                                veja suas aulas e confirme sua presença
                            </h1>
                            <div className="tabela_aulas" >
                                {
                                    aulasMarcadas.length > 0 ? (
                                        aulasMarcadas.map(aula => (
                                            <div id={aula.id} key={aula.id} className="presencablocos">
                                                <h3>
                                                    {aula.modalidade}
                                                </h3>
                                                <span id="data_aula">
                                                    {aula.dataHora}
                                                </span>

                                                <button
                                                    onClick={() => confirmarpresenca(aula.id)}
                                                    className={presencaConfirmada[aula.id] ? 'confirmado-bnt' : 'confirmar-bnt'}
                                                    disabled={presencaConfirmada[aula.id]}
                                                >
                                                    {presencaConfirmada[aula.id] ? 'Presença Confirmada' : 'Confirmar Presença'}
                                                </button>
                                            </div>
                                        ))

                                    ) : (
                                        <p>nenhuma aula marcada</p>
                                    )
                                }
                            </div>
                        </section>
                    </article>
                </main>
                <Footer />
            </section>
        </div>
    );
}
