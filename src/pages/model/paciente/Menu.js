import React from 'react';

import '../../../assets/bootstrap-4.1.3-dist/css/bootstrap-grid.css';
import '../../../assets/bootstrap-4.1.3-dist/css/bootstrap.css';
import Header from '../../components/Header';
import './Cadastro.css'
import Footer from '../../components/Footer';

export default function Menu({history}){

    function realizarLogin(){
        history.push('/logar/paciente');
    }

    function realizarCadastro(){
        history.push('/cadastrar/paciente');
    }

    return(
        <div>
        <Header history={history}/>

        
        <section id="hero" className="d-flex align-items-center">

        <div className="container">
            <div className="row">
                    
                        <div id="div-menu">
                            <div className="row">
                                <button className='meus-botoes-logar' onClick={()=>realizarLogin()}>Já sou cadastrado</button>
                            </div>
                            <div className="row">
                                <button className='meus-botoes-novo' onClick={()=>realizarCadastro()}>Quero realizar meu cadastro</button>
                            </div> 
                        </div>

            </div>
        </div>

        </section>

        <Footer />

        
        </div>
    ); 
}