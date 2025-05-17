import { useEffect } from "react";
import Gerenciador_ADM from "../../../Components/Gerenciador";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer_Adm";
import { Log_in_out_header } from "../../../Components/Header";


import "./dashboard.modules.css"

export default function Dashboard() {

    useEffect(() =>{
        Log_in_out_header()
    },[])

    return (

        

        <>

            <div>
                <section className="dashboard_section">
                    <div className="caixa_dashboard">
                        <Header />
                        <Gerenciador_ADM />
                        <section className="dashboard_section">
                            <h3 className="titulo_dashboard">
                                Dashboards
                            </h3>
                            <div className="quadro_dashboard">
                                <iframe src="https://maocuboengenharia.com.br/metabase/public/dashboard/eb10c34a-ba90-4441-9dfb-a61cf7713315"
                                className="dashboard"
                                loading="lazy"
                                title="Dashboard"
                                ></iframe>
                                
                            </div>

                        </section>
                    </div>
                    <Footer/>
                </section>
            </div>

        </>
    )
}