import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../src/Pages/Home/index";
import Cadastro from "../src/Pages/Home/Cadastro/";
import Login from "./Pages/Home/Login";
import Aula_Experimental from "./Pages/Home/Aulaexperimental";
import Nova_Senha from "./Pages/Home/Login/Nova_Senha";
import Redefinir_Senha from "./Pages/Home/Login/Redefinir_Senha";
import Planos from "./Pages/Home/Planos";
import Agenda_Aluno from "./Pages/Home/Agenda_Aluno";

import Agenda from "./Pages/Home/Adm/Agenda";
import Alertas from "./Pages/Home/Adm/Alertas";
import Avisos from "./Pages/Home/Adm/Avisos";
import Perfis from "./Pages/Home/Adm/Perfis";
import Mural from "./Pages/Home/Adm/Mural";
import Cadastro_Geral from "./Pages/Home/Adm/CadastroGerais";
import Planos_Adm from "./Pages/Home/Adm/Planosadm"
import Pef_adm from "./Pages/Home/Adm/PeF"

import Aluno from "./Pages/Home/Aluno";
import MeuPlano from "./Pages/Home/Aluno/Meu_Plano";
import Nossa_Historia from "./Pages/Home/Nossa_História";
import Contato from "./Pages/Home/Contato";
import Modalidades from "./Pages/Home/Modalidades";
import Presenca from "./Pages/Home/Aluno/Presenca";
import Dashboard from "./Pages/Home/Adm/Dashboard";





export default function AppRoutes() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/contatos" element={<Contato />} />
                <Route path="/nossaHistoria" element={<Nossa_Historia />} />
                <Route path="/modalidades" element={<Modalidades />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/login" element={<Login />} />
                <Route path="/login/Redefinir_Senha" element={<Redefinir_Senha />} />
                <Route path="/Adm/Redefinir_Senha" element={<Redefinir_Senha />} />
                <Route path="/login/Nova_Senha" element={<Nova_Senha />} />
                <Route path="/Adm/agenda" element={<Agenda/>} />
                <Route path="/Adm/alertas" element={<Alertas/>} />
                <Route path="/Adm/avisos" element={<Avisos/>} />
                <Route path="/Adm/perfis" element={<Perfis/>} />
                <Route path="/Adm/mural" element={<Mural/>} />
                <Route path="/Adm/cadastro_gerais" element={<Cadastro_Geral/>} />
                <Route path="/aluno" element={<Aluno/>} />
                <Route path="/aluno/meuplano" element={<MeuPlano/>} />                
                <Route path="/aula_experimental" element={<Aula_Experimental/>} />
                <Route path="/planos" element={<Planos/>} />
                <Route path="/agenda_aluno" element={<Agenda_Aluno/>} />
                <Route path="/Adm/planosadm" element={<Planos_Adm/>} />
                <Route path="/Adm/pef"  element={<Pef_adm/>} />
                <Route path="/Aluno/Presenca" element={<Presenca/>} />
                <Route path="/Adm/dashboard" element={<Dashboard/>}></Route>

                {/* <Route path="/perfil" element={<Perfil/>} /> */}
            </Routes>
        </BrowserRouter>
    );
}