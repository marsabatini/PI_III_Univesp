import { dividerClasses } from "@mui/material";
import React, { useState, useEffect } from "react";
import { json, Link } from "react-router-dom";
import api from "../../../Services/Api"

import "./presenca.css";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";


export default function Presenca() {

    const [presencaConfirmada, setPresencaConfirmada] = useState(false);
    const [aulasMarcadas, setAulasMarcadas] = useState({})

    async function confirmarpresenca(aulaid) {
        const idAluno = JSON.parse(localStorage.getItem('id'));


        try {
            await api.post(`/adm/aulas/registrarpresenca/${idAluno}/${aulaid}`)
            alert('presença confirmada')
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

                        <section className="tabela_aulas" >
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

                                            <button onClick={() => confirmarpresenca(aula.id)} className="confirmar-btn">
                                                Confirmar Presença
                                            </button>
                                        </div>
                                    ))

                                ) : (
                                    <p>nenhuma aula marcada</p>
                                )

                            }

                        </section>

                        <section>
                            <h1>
                                veja suas proximas aulas
                            </h1>
                        </section>
                    </article>
                </main>
                <Footer />
            </container>
        </div>
    );
}
