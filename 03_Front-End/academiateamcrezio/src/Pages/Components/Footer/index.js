import { Link } from "react-router-dom";
import Footer_styles from "./footer.module.css";


import logo_footer from "../../../Assets/logopng.png";
import tiktok from "../../../Assets/tiktok.png";
import instagram from "../../../Assets/instagram.png";
import whatsapp from "../../../Assets/whatsapp.png";



function Footer() {

    return (
        <>
          
                <footer className={Footer_styles.footer}>
                    
                        <img src={logo_footer} alt="logobaixo" className={Footer_styles.logo_footer} />
                    <div className={Footer_styles.boxs}>
                        <div className={Footer_styles.footer_titles}>
                            <h2>Onde nos encontrar</h2>
                        </div>
                        <div className={Footer_styles.area_icons}>
                            <Link to="https://www.tiktok.com/@team.crezio"> <img src={tiktok} alt="N/A" className={Footer_styles.rsicon} /></Link>
                            <Link to="https://www.instagram.com/teamcreziosp/"> <img src={instagram} alt="N/A" className={Footer_styles.rsicon} /></Link>
                            <Link to=""> <img src={whatsapp} alt="N/A" className={Footer_styles.rsicon} /></Link>
                        </div>
                    </div>
                    <div className={Footer_styles.boxs}>
                        <div className={Footer_styles.footer_titles}>
                            <h2>Nossos Contatos</h2>
                        </div>
                        <div className={Footer_styles.areat}>
                            <span className="">(11)98973-2215</span>
                            <span className="">contato@teamcrezio.com.br</span>
                            <span className="">Rua Dr. Miranda de Azevedo, 415-Pompeia, São Paulo</span>
                        </div>
                    </div>
                    <div className={Footer_styles.boxs}>
                        <div className={Footer_styles.footer_titles}>
                            <h2>+ Academia Team Crezio</h2>
                        </div>
                        <div className={Footer_styles.areat}>
                            <Link to="">Atendimento</Link>
                            <Link to="">Aulas</Link>
                            <Link to="">Team Crezio Petropolis</Link>
                        </div>
                    </div>
                    
                </footer>

        
        </>

    );
}

export default Footer;