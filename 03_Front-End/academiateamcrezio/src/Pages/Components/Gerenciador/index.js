import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

import style_gerenciador from "./gerenciador.module.css"

import "../../Home/Adm/Agenda/agenda.modules.css";

function Gerenciador_ADM() {

    return (

        <>
            <section class={style_gerenciador.menu_gerenciador}>
                <div className={style_gerenciador.gerenciador}>
                    
                        <h2 className={style_gerenciador.titulo_gerenciador} >Gerenciador</h2>
                    
                    <div>
                        <ul>
                            <Link to="/Adm/avisos">         <li>Avisos e Eventos         </li></Link>
                            <Link to="/Adm/alertas">        <li>Alertas                  </li></Link> 
                            <Link >                         <li>Chat                     </li></Link>
                            <Link to="/Adm/agenda">         <li>Agenda Comum             </li></Link> 
                            <Link >                         <li>Agenda Personal          </li></Link> 
                            <Link >                         <li>Presença                 </li></Link> 
                            <Link to="/Adm/cadastro_gerais"><li>Cadastros                </li></Link> 
                            <Link to="/Adm/planosadm">      <li>Planos                   </li></Link> 
                            <Link to="/Adm/perfis">         <li>Perfis                   </li></Link>
                            <Link to="/Adm/mural">          <li>Mural                    </li></Link> 
                            <Link >                         <li>Loja Física              </li></Link> 
                            <Link to="/Adm/pef">            <li>Professores e Treinadores</li></Link> 
                            <Link to="/Adm/dashboard">            <li>Dashboard</li></Link> 
                        </ul>
                    </div>
                </div>
            </section>

        </>
    );

}

export default Gerenciador_ADM;