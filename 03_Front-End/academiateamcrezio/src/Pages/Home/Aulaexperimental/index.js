import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

import "./aula_experimental.modules.css"

export default function Aula_Experimental() {


    return (

        <>
            <div>
                <section>
                    <Header/>
                    <h1>faça uma aula experimental gratis</h1>
                    <div class="box">
                        <div className="box-u">
                            <label for="">Nome</label>
                            <input type="text" name="" required />
                        </div>
                        <div className="box-u">
                            <label for="">email</label>
                            <input type="email" name="" required />
                        </div>
                        <div className="box-u">
                            <label for="">telefone</label>
                            <input type="tel" name="" required />
                        </div>
                        <button className="button">Ver datas disponiveis</button>
                    </div>
                    <Footer/>
                </section>
            </div>
        </>

    );

}




