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
                                aperte o botão abaixo para confirmar sua presença 
                            </h1>
                        </section>
                        <section className="sec_bnt">
                            <button id="btn" onClick={confirmarPresenca} className="presenca_bnt">
                                clique aqui
                            </button>

                            { }
                            {presencaConfirmada && (
                                <div className="msg_bnt">
                                    presença confirmada!
                                </div>
                            )}

                        </section>
                    </article>
                </main>
                <Footer />
            </container>
        </div>
    );
}
