import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Log_in_out_header } from "../../../Components/Header";

import Header from "../../../Components/Header";
import Footer_Adm from "../../../Components/Footer_Adm";
import Gerenciador_ADM from "../../../Components/Gerenciador";

import "./planosadm.modules.css"


export default function Planosadm () {

    useEffect(() => {
        Log_in_out_header();
    })

        return (
            <>
                <div>
                        <section className="planosadm_section">
                            <div class="caixa_planosadm">
                               <Header /> 
                               <Gerenciador_ADM  /> 
                               <section className="tela_adm_plamos">
                                        <div className="planos_adm">
                                            <div className="titulo">
                                                <h3>
                                                    planos adm
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="manilhas">
                                            <form className="criar_plano">
                                                <h3>criar novo plano</h3>
                                                    <div className="input_b">
                                                        <div className="input_radio">
                                                            <input type="radio" id="continuo" name=""/>
                                                            <label for="continuo">plano continuo</label>
                                                        </div>

                                                        <div className="input_radio">
                                                            <input type="radio" id="promocional" name=""/>
                                                            <label for="promocional">plano promocional</label>
                                                        </div>
                                                    </div>
                                                    <div className="nomeplano">
                                                        <label for="nomeplano">nome do plano</label>
                                                        <input type="text" id="nomeplano"/>
                                                    </div>
                                                    <div className="tabela_criar">
                                                    
                                                    <label for="meses">meses</label>
                                                    <input type="text" id="meses"/>

                                                    <label for="preco">r$</label>
                                                    <input type="text" id="preco"/>

                                                    <label for="vezes">x</label>
                                                    <input type="text" id="vezes"/>

                                                    <label for="precov">r$</label>
                                                    <input type="text" id="precov"/>
                                                    
                                                    </div>
                                                    <div className="tabela_criar">
                                                    
                                                    <label for="meses">meses</label>
                                                    <input type="text" id="meses"/>

                                                    <label for="preco">r$</label>
                                                    <input type="text" id="preco"/>

                                                    <label for="vezes">x</label>
                                                    <input type="text" id="vezes"/>

                                                    <label for="precov">r$</label>
                                                    <input type="text" id="precov"/>
                                                    
                                                    </div>

                                                    <div className="mensal">
                                                        <label for="mensal">mensal</label>
                                                        <input type="text" id="mensal"/>
                                                    </div>

                                                    <div className="beneficios">
                                                        <label for="01"></label>
                                                        <input type="text" id="01"/>
                                                    </div>

                                                    <div className="beneficios">
                                                        <label for="01"></label>
                                                        <input type="text" id="01"/>
                                                    </div>

                                                    <div className="beneficios">
                                                        <label for="01"></label>
                                                        <input type="text" id="01"/>
                                                    </div>

                                                    <div className="beneficios">
                                                        <label for="01"></label>
                                                        <input type="text" id="01"/>
                                                    </div>

                                                    <div className="beneficios">
                                                        <label for="01"></label>
                                                        <input type="text" id="01"/>
                                                    </div>

                                                    <div className="beneficios">
                                                        <label for="01"></label>
                                                        <input type="text" id="01"/>
                                                    </div>

                                                    <button>criar</button>
                                            </form>

                                            <form className="editar_plano">
                                                <h3>editar plano</h3>
                                                <select className="selecione" id="selecionar" name="selecionar">
                                                <option value="" ></option>
                                                <option value="" ></option>
                                                <option value="" ></option>
                                                <option value="" ></option>
                                                <option value="" ></option>
                                                <option value="" ></option>
                                                <option value="" ></option>
                                                <option value="" ></option>
                                                <option value="" ></option>
                                                </select>

                                                <div className="nomeplano">
                                                        <label for="nomeplano">nome do plano</label>
                                                        <input type="text" id="nomeplano"/>
                                                    </div>
                                                    <div className="tabela_criar">
                                                    
                                                    <label for="meses">meses</label>
                                                    <input type="text" id="meses"/>

                                                    <label for="preco">r$</label>
                                                    <input type="text" id="preco"/>

                                                    <label for="vezes">x</label>
                                                    <input type="text" id="vezes"/>

                                                    <label for="precov">r$</label>
                                                    <input type="text" id="precov"/>
                                                    
                                                    </div>
                                                    <div className="tabela_criar">
                                                    
                                                    <label for="meses">meses</label>
                                                    <input type="text" id="meses"/>

                                                    <label for="preco">r$</label>
                                                    <input type="text" id="preco"/>

                                                    <label for="vezes">x</label>
                                                    <input type="text" id="vezes"/>

                                                    <label for="precov">r$</label>
                                                    <input type="text" id="precov"/>
                                                    
                                                    </div>

                                                    <div className="mensal">
                                                        <label for="mansal">mensal</label>
                                                        <input type="text" id="mensal"/>
                                                    </div>

                                                    <div className="beneficios">
                                                        <label for="01"></label>
                                                        <input type="text" id="01"/>
                                                    </div>

                                                    <div className="beneficios">
                                                        <label for="01"></label>
                                                        <input type="text" id="01"/>
                                                    </div>

                                                    <div className="beneficios">
                                                        <label for="01"></label>
                                                        <input type="text" id="01"/>
                                                    </div>

                                                    <div className="beneficios">
                                                        <label for="01"></label>
                                                        <input type="text" id="01"/>
                                                    </div>

                                                    <div className="beneficios">
                                                        <label for="01"></label>
                                                        <input type="text" id="01"/>
                                                    </div>

                                                    <div className="beneficios">
                                                        <label for="01"></label>
                                                        <input type="text" id="01"/>
                                                    </div>
                                                    <div className="botoes_pef">
                                                        <button className="botao_pef1">editar plano</button>
                                                        <button className="botao_pef2">cancelar plano</button>
                                                    </div>
                                            </form>
                                        </div>
                                    </section>
                                <Footer_Adm/>    
                         </div>
                        </section>
                    </div>
            </>
        )





















}