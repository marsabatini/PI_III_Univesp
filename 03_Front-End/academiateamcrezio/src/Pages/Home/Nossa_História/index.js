import Header from "../../Components/Header/index.js";
import Footer from "../../Components/Footer/index.js";

import { useEffect } from "react";
import { Log_in_out_header } from "../../Components/Header/index.js";

import Eduardo from "../../../Assets/fotoEduardo.png";
import Mestre from "../../../Assets/fotoMestreCrezio.png";

import style_nossahistória from "./nossahistoria.css"




export default function Nossa_Historia() {

    useEffect(() => {
            Log_in_out_header();
        },[])

    return (
        <>

            <div>

                <section>


                    <Header />
                    <main className={style_nossahistória.principal}>
                        {/*classe principal estava dando conflito então coloquei className=stylenossahistória e o conflito parou*/}
                        <article className="alinhamento_ns">
                        <section class="eduardo">

                            <div class="texto">
                                <h1> Conheça a Team Crezio SP - Sua equipe de jiu jitsu em São Paulo!
                                </h1>
                                <br />

                                <ul class="paragrafo">

                                    <li> Em 2024, os amigos Eduardo Fonseca, Fabio Tezzei e Cléo Chavez trouxeram a Team Crezio para São Paulo, mais uma etapa e um sonho concluído de difundir o Jiu Jitsu e a Metodologia Crezio.</li>

                                    <li> Eduardo Fonseca é Formado em educação física pela USP, Faixa preta de Jiu Jitsu terceiro grau, com mais de 10 anos trabalhando com Jiu Jitsu fora do país. Trabalhou como supervisor da empresa Palms Sports junto ao exército e polícia dos Emirados Árabes Unidos.</li>

                                    <li> Aqui na Team Crezio SP, oferecemos um novo jeito de aprender Jiu Jitsu, com aulas imersivas em turmas pequenas de no máximo 10 alunos.</li>

                                    <li> Além de aulas de Crosstraining para grupos de até 4 alunos e aulas de Personal.</li>

                                    <li> Temos turmas para adultos, crianças e adolescentes, além de aulas de Defesa Pessoal para mulheres, boxe, preparação física para lutas e Crosstraining.</li>

                                    <li> E o melhor: as aulas podem ser em português ou inglês.</li>

                                    <li> Venha fazer parte da nossa equipe e se surpreenda com o mundo do Jiu Jitsu.</li>

                                </ul>

                            </div>

                            <img src={Eduardo} />

                        </section>



                        <section class="crezio">

                            <img src={Mestre} />

                            <div class="texto">

                                <h1> História do Mestre Crézio</h1>

                                <ul class="paragrafo">

                                    <li> Mestre Crézio Chaves nasceu em 1935 e possui mais de 70 anos de dedicação ao jiu-jitsu. Treinou diretamente com grandes nomes do Jiu Jitsu como Carlson Gracie, João Alberto Barreto, Hélio Vigio, Robson Gracie entre outros.</li>

                                    <li> Hélio e Carlos Gracie viram grande potencial no jovem Crézio Chavez e o incentivaram a lutar Vale Tudo. Ele fez sua estreia aos 17 anos, derrotando seu adversário em apenas 57 segundos do primeiro round.</li>

                                    <li> Aos 22 anos Crézio Chavez forma-se instrutor, grau entregue pelas mãos de Carlos e Hélio Gracie.</li>

                                    <li> Mestre Crézio se aposentou invicto da carreira de lutador, derrotando grandes nomes de sua geração, como Wilson Carmona, Severino de Freitas e Samuel Lancreste.</li>

                                    <li> Mestre Crézio se aposentou das lutas como competidor, mas não como professor. Ele continua ministrando aulas na Matriz da Team Crézio em Petrópolis.</li>

                                </ul>

                            </div>

                        </section>



                        <section class="botão" tabinde="0">
                            <button>Faça parte da nossa<br />história você também

                            </button>

                        </section>
                        </article>

                    </main>

                </section>
            </div>


            <Footer />

        </>
    );

}