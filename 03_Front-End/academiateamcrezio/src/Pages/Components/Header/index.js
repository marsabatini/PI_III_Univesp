import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import api from "../../../Services/Api";
import axios from "axios";

import header_style from "./header.module.css";
import logo_header from "../../../Assets/logoa.jpeg";



export function Log_in_out_header() {
    

    let entrar = document.getElementById('entrar'),
        cadastrar = document.getElementById('cadastrar'),
        meuPerfil = document.getElementById('perfil'),
        gerencia = document.getElementById('gerencia'),
        sair = document.getElementById('sair');

    const logado = localStorage.getItem('usuarioLogado') === 'true';
    const role = localStorage.getItem('role');

    if (role === 'ALUNO') {
        if (logado) {
            entrar.className = header_style.hide
            cadastrar.className = header_style.hide
            meuPerfil.className = header_style.log_in_out_buttons
            sair.className = header_style.log_in_out_buttons
            gerencia.className = header_style.hide
    
        } else {
            entrar.className = header_style.log_in_out_buttons
            cadastrar.className = header_style.log_in_out_buttons
            meuPerfil.className = header_style.hide
            sair.className = header_style.hide
            gerencia.className = header_style.hide
        }
        
    } else if(role === 'ADMIN' || role === 'PROFESSOR') {
        if (logado) {
            entrar.className = header_style.hide
            cadastrar.className = header_style.hide
            meuPerfil.className = header_style.hide
            gerencia.className = header_style.log_in_out_buttons
            sair.className = header_style.log_in_out_buttons
        }else {
            entrar.className = header_style.log_in_out_buttons
            cadastrar.className = header_style.log_in_out_buttons
            gerencia.className = header_style.hide
            sair.className = header_style.hide
            meuPerfil.className = header_style.hide
        }
    }

    
    
    
    sair.onclick = () => {
        localStorage.removeItem('usuarioLogado');
        localStorage.removeItem('userData');
        window.location.href = '/';
    }
}


let conexaoPerdida = false; // variável de controle fora da função

const verifyLog = async () => {
  try {
    await api.get('http://localhost:8080/api/ping');
    
    // Se reconectar, zera a flag
    if (conexaoPerdida) {
      console.log('Reconectado ao servidor.');
      conexaoPerdida = false;
    }

  } catch (error) {
    const logado = localStorage.getItem('usuarioLogado') === 'true';

    if (logado && !conexaoPerdida) {
      conexaoPerdida = true; // evita que redirecione várias vezes
      localStorage.removeItem('usuarioLogado');
      localStorage.removeItem('userData');
      alert('Conexão perdida...');
      window.location.href = '/';
    }
  }
};


 setInterval(() => {
     verifyLog()
 },20000);

export default function Header() {

    function OpenMenu() {

        let hidden_menu = document.getElementById('hidden_menu'),
            list = document.getElementById('hidden_links'),
            icon = document.getElementById('list_icon');


        if (hidden_menu.className == header_style.show_menu) {
            hidden_menu.className = "";
            list.className = header_style.hide;
            icon.className = "bi bi-list";

        } else {

            hidden_menu.className = header_style.show_menu;
            list.className = "";
            icon.className = "bi bi-x-lg";

        }

    }

    return (    

        <>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
            <header class={header_style.header}>

                <div className={header_style.img_logo}>
                    <Link to="/home"> <img src={logo_header} alt="logotipo" ></img> </Link>
                </div>

                <div id="hidden_menu" >

                    <i onClick={OpenMenu} class="bi bi-list" id="list_icon"></i>

                    <ul id="hidden_links" className={header_style.hide}>
                        <li> < Link to="/modalidades">Modalidades </Link></li>
                        <li> < Link to="/nossaHistoria">Nossa historia </Link></li>
                        <li> < Link to="/planos">Planos </Link></li>
                        <li> < Link to="/contatos">Contato </Link></li>
                        <li> < Link to="https://voukbrasil.com/">Loja </Link></li>
                    </ul>

                </div>


                <div className={header_style.header_options}>

                    <ul>
                        <li> < Link to="/modalidades">Modalidades </Link></li>
                        <li> < Link to="/nossaHistoria">Nossa historia</Link></li>
                        <li> < Link to="/planos">Planos </Link></li>
                        <li> < Link to="/contatos">Contato </Link></li>
                        <li> < Link to="https://voukbrasil.com/">Loja </Link></li>
                    </ul>


                    <div className={header_style.user_buttons}>
                        <li>
                            <Link id="entrar" className={header_style.log_in_out_buttons} to="/login">Login</Link>
                        </li>
                        <li>
                            <Link id="gerencia" className={header_style.hide} to="/Adm/cadastro_gerais">{localStorage.getItem('role')}</Link>
                        </li>
                        <li>
                            <Link id="cadastrar" className={header_style.log_in_out_buttons} to="/cadastro">Cadastrar</Link>
                        </li>
                        <li>
                            <Link id="perfil" className={header_style.hide} to="/aluno">Meu Perfil</Link>
                        </li>
                        <li><button id="sair" className={header_style.hide}>sair</button></li>
                    </div>

                </div>


            </header>

        </>

    );

}
