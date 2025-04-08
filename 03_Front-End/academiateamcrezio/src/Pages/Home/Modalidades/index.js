import Header from "../../Components/Header/index.js";
import Footer from "../../Components/Footer/index.js";

import { useEffect } from "react";
import { Log_in_out_header } from "../../Components/Header/index"

import JiuJitsu from "../../../Assets/jiuJitsu.png";
import Boxe from "../../../Assets/Boxe.png";
import DefesaPessoal from "../../../Assets/selfDefense.png";
import KidsTeens from "../../../Assets/teenKids.png";
import CrossTraining from "../../../Assets/crossTraining.png";
import PersonalTrainer from "../../../Assets/personalTrainer.png";

import style_modalidades from "./modalidades.css"



export default function Modalidades () {
    
    useEffect(() => {
            Log_in_out_header();
    },[])

    return(
        <>

            <div>

                <section>


                    <Header/>
                        <main className={style_modalidades.principal}>
                            <section className="alinhamento_m">


                            <div class="jiu_jitsu">
  
                                <div class="texto">
                                    <h1> JIU JITSU</h1>
                                    <br/>

                                    <ul class="paragrafo">

                                    <p> No nosso Studio, o Jiu Jitsu é muito mais do que uma arte marcial, é uma filosofia de vida. Com uma metodologia única, nossos instrutores buscam não apenas ensinar técnicas eficazes, mas também promover a evolução constante dos alunos, tanto fisicamente quanto mentalmente. Praticar Jiu Jitsu conosco não só aprimora suas habilidades de defesa pessoal, mas também promove o desenvolvimento da disciplina, da concentração e da autoconfiança.</p>

                                    </ul>
        
                                </div>

                                <img src={JiuJitsu}/>

                            </div>
                            


                            <div class="boxe">

                                <div class="texto">
                                    <h1> BOXE</h1>
                                    <br/>

                                    <ul class="paragrafo">

                                    <p> Em nossas aulas de Boxe, os alunos podem esperar um treinamento dinâmico e desafiador, adaptado às suas necessidades individuais. Além de aprimorar a técnica de golpes e a agilidade, o Boxe também é uma excelente forma de melhorar a resistência física e a coordenação motora. Nosso diferencial está na atenção personalizada e na ênfase na técnica correta para garantir um treino eficaz e seguro.</p>


                                    </ul>
        
                                </div>

                                <img src={Boxe}/>
      
                            </div>



                            <div class="cross_training">
  
                                <div class="texto">
                                    <h1> CROSS TRAINING</h1>
                                    <br/>

                                    <ul class="paragrafo">

                                    <p> Para quem busca um treinamento completo e intenso, o Cross Training é a modalidade ideal. No nosso Studio, o Cross Training é mais do que um simples treino, é um desafio constante para superar limites e alcançar novos patamares de condicionamento físico. Com nossa abordagem atenciosa e focada na prevenção de lesões, os alunos podem desfrutar de um treino eficiente, que trabalha todas as áreas do corpo de forma equilibrada.</p>

                                    </ul>
        
                                </div>

                                <img src={CrossTraining}/>

                            </div>
                            


                            <div class="jiu-jitsu-kidsTeens">

                                <div class="texto">
        
                                    <h1> JIU JITSU KIDS/TEENS</h1>
                                    <br/>

                                    <ul class="paragrafo">

                                    <p> Oferecemos aulas de Jiu Jitsu especialmente desenvolvidas para crianças e adolescentes, proporcionando não apenas a aprendizagem das técnicas da arte marcial, mas também o desenvolvimento de valores como respeito, disciplina e trabalho em equipe. Com uma abordagem lúdica e amigável, nossos instrutores garantem que os pequenos lutadores se divirtam enquanto desenvolvem habilidades físicas e sociais importantes.</p>

                                    </ul>
        
                                </div>

                                <img src={KidsTeens}/>
      
                            </div>


                            <div class="defesa_pessoal-feminina">
  
                                <div class="texto">
                                    <h1> DEFESA PESSOAL - FEMININA</h1>
                                    <br/>

                                    <ul class="paragrafo">

                                    <p> Nossas aulas de Jiu Jitsu para mulheres são uma oportunidade única de aprender autodefesa, fortalecer o corpo e a mente, e se conectar com outras mulheres em um ambiente acolhedor e empoderador. Com um enfoque na segurança e na eficácia dos movimentos, nossas alunas podem se sentir confiantes e preparadas para lidar com situações de risco, ao mesmo tempo em que melhoram a forma física e a saúde geral.</p>

                                    </ul>
        
                                </div>

                                <img src={DefesaPessoal}/>

                            </div>
                            


                            <div class="personal_trainer">

                                <div class="texto">
        
                                    <h1> AULAS DE PERSONAL TRAINER</h1>
                                    <br/>

                                    <ul class="paragrafo">

                                    <p> Para um treinamento verdadeiramente personalizado e focado em alcançar seus objetivos específicos, oferecemos aulas de Personal Trainer no nosso Studio. Com a atenção exclusiva de um instrutor qualificado, os alunos têm a oportunidade de receber um planejamento de treino sob medida, adaptado às suas necessidades e preferências individuais. Seja para perder peso, ganhar massa muscular ou melhorar o condicionamento físico, um Personal Trainer pode ser a chave para alcançar resultados eficazes e duradouros.</p>

                                    </ul>
                                    
                                </div>
                                
                                <img src={PersonalTrainer}/>

                            </div>
                            </section>
                            

                        </main>

                </section>
            </div>
    

                <Footer/>

        </>
    );

}

