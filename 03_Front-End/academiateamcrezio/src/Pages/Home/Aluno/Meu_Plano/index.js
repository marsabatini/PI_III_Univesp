import Header from "../../../Components/Header/index.js";
import Footer from "../../../Components/Footer/index.js";

import { useEffect } from "react";
import { Log_in_out_header } from "../../../Components/Header/index.js";

import style_meuPlano from "./meu_plano.css";


export default function Meu_Plano () {

    useEffect(() => {
        Log_in_out_header();
    })

    return(
        <>






            <Header/>

                <main>

                    <section class="fundoTela">

                        <div class="tituloMeuPlano">                         
                            <h1>
                                Meu Plano
                            </h1>
                        </div>

                        

                        <div class="conteúdo_meuPlano">
                      
                            <div class="elemento_meuPlano">
    
                                <div class="info_">
                                    <h2>
                                        <span> Plano: </span>
                                        <br/>
                                        <span> Status: </span>
                                        <br/>
                                        <span> Início do Plano: </span>
                                        <br/>
                                        <span> Valor do Plano: </span>
                                        <br/>
                                        <span> Validade do Plano: </span>
                                        <br/>
                                        <span> Próximo Vencimento: </span>
                                        <br/>
                                        <span> Forma de Pagamento: </span>
                                    </h2>
                                </div>

                            
                                <div  class="info_">
                                    <p> Fique tranquilo, ao renovar seu plano, a data de início passa a valer somente após a validade do seu plano atual expirar.
                                        <br/>
                                        <button>Renovar Meu Plano</button>
                                    </p>        
                                </div>

                            </div>


                            <div class="elemento_meuPlano">

                                <div  class="info_">
                                    <h2> No Plano <span> </span>, você tem direito:</h2>
                                    <br/>
                                        <p>
                                            <span> </span>
                                            <br/>
                                            <span> </span>
                                            <br/>
                                            <span> </span>
                                            <br/>
                                            <span> </span>
                                            <br/>
                                            <span> </span>
                                            <br/>
                                            <span> </span>
                                            <br/>
                                            <span> </span>
                                            <br/>
                                            <span> </span>
                                        </p>

                                </div>
                            
                                <div class="info_">
                                    <p> Caso queira transferir ou cancelar seu plano, procure a administração ou entre em contato com um de nossos canais de comunicação.
                                        <br/>
                                        Obs.: Para cancelamento de planos que tenham duração de 6 ou 12 meses, uma taxa de 10% sobre os valores dos meses ainda devidos será cobrada.
                                    </p>
                                </div>

                            </div>

                        </div>
                        
                    </section>

                </main>

            <Footer/>

        </>
    );

}