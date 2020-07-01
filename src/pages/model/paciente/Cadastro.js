import React from 'react';


import Header from '../../components/Header';
import './Cadastro.css'
import Footer from '../../components/Footer';

export default function Cadastrar({history}){

    return(
        <div>
        <Header history={history}/>

        
        <section id="hero" className="d-flex align-items-center">

        <div className="container">
            <div className="row">
                <div id="div-menu">
                    <div className="row">
                        <button className='meus-botoes-logar'>Já sou cadastrado</button>
                    </div>
                    <div className="row">
                        <button className='meus-botoes-novo'>Quero realizar meu cadastro</button>
                    </div> 
                </div>
            </div>
            </div>

        </section>

        <Footer />

        
        </div>
    );
}
