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
                            <a Link href="https://www.tiktok.com/@team.crezio"> <img src={tiktok} alt="N/A" className={Footer_styles.rsicon} /></a>
                            <a Link href="https://www.instagram.com/teamcreziosp/"> <img src={instagram} alt="N/A" className={Footer_styles.rsicon} /></a>
                            <a Link href=""> <img src={whatsapp} alt="N/A" className={Footer_styles.rsicon} /></a>
                        </div>
                    </div>
                    <div className={Footer_styles.boxs}>
                        <div className={Footer_styles.footer_titles}>
                            <h2>Nossos Contatos</h2>
                        </div>
                        <div className={Footer_styles.areat}>
                            <span Link className="">(11)98973-2215</span>
                            <span Link className="">contato@teamcrezio.com.br</span>
                            <span Link className="">Rua Dr. Miranda de Azevedo, 415-Pompeia, São Paulo</span>
                        </div>
                    </div>
                    <div className={Footer_styles.boxs}>
                        <div className={Footer_styles.footer_titles}>
                            <h2>+ Academia Team Crezio</h2>
                        </div>
                        <div className={Footer_styles.areat}>
                            <a Link className="">Atendimento</a>
                            <a Link className="">Aulas</a>
                            <a Link className="">Team Crezio Petropolis</a>
                        </div>
                    </div>
                    
                </footer>

        
        </>

    );
}

export default Footer;