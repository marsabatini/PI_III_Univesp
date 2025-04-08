import { Link } from "react-router-dom";

import header_style from "./header.module.css";
import logo_header from "../../../Assets/logoa.jpeg";



export async function Log_in_out_header() {
    

    let entrar = document.getElementById('entrar'),
        cadastrar = document.getElementById('cadastrar'),
        meuPerfil = document.getElementById('perfil'),
        sair = document.getElementById('sair');

    const logado = localStorage.getItem('usuarioLogado') === 'true';


    if (logado) {
        entrar.className = header_style.hide
        cadastrar.className = header_style.hide
        meuPerfil.className = header_style.log_in_out_buttons
        sair.className = header_style.log_in_out_buttons

    } else {
        entrar.className = header_style.log_in_out_buttons
        cadastrar.className = header_style.log_in_out_buttons
        meuPerfil.className = header_style.hide
        sair.className = header_style.hide
    }

    sair.onclick = () => {
        localStorage.removeItem('usuarioLogado');
        window.location.reload()
    }
}


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
