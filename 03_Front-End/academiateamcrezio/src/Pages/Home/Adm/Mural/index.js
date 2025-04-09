import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Log_in_out_header } from "../../../Components/Header";

import Header from "../../../Components/Header";
import Footer_Adm from "../../../Components/Footer_Adm";
import Gerenciador_ADM from "../../../Components/Gerenciador";

import "./mural.modules.css";

export default function Mural() {

    useEffect(() => {
        Log_in_out_header();
    })

    return (

        <>
            <div>
                <section className="mural_section">

                    <div class="caixa_mural">
                        <Header/>
                        <Gerenciador_ADM/>
                        <section className="quadro_mural">
                            
                            <h3 className="titulo_mural">
                                Mural
                            </h3>
                       

                            <div className="container">
                                <div className="preview-image">
                                    <img data-image-preview />
                                </div>
                                <form className="form">
                                    <div className="imagem">
                                        <label for="imagem"> selecione imagem</label>
                                        <input type="file" id="imagem" data-image-input required />
                                    </div>
                                    <div className="legenda">
                                        <input type="text" placeholder="legenda da imagem" />
                                    </div>
                                    <button className="upload_imagem">Enviar</button>
                                </form>

                                <script src="jsteste.js"></script>
                            </div>
                        </section>
                    <Footer_Adm/>
                    </div>
                    
                        </section>
                    </div>
                </>

            );

}

