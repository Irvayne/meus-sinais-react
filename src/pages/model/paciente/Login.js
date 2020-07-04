import React from 'react';

import '../../../assets/bootstrap-4.1.3-dist/css/bootstrap-grid.css';
import '../../../assets/bootstrap-4.1.3-dist/css/bootstrap.css';
import Header from '../../components/Header';
import './Cadastro.css'
import Footer from '../../components/Footer';


export default function Login({history}){

    function exibirMenu(){
        history.push('/menu/paciente');
    }

    function entrar(){
        history.push('/dashboard/paciente');
    }

    return(
        <div>
        <Header history={history}/>

        
        <section id="hero" className="d-flex align-items-center">

        <div className="container">
            <div className="row">
                        <div id="div-menu">
                            <form >
                            <div className="row">
                            <h1>Entrar</h1>
                            </div>
                                
                            <div className="row">
                                
                                <label for="email">Email:</label>
                                <input type="text" id="email" className="form-control" required
                                placeholder="Email" aria-label="email" aria-describedby="basic-addon1"></input>
                                
                            </div>
                            <div className="row">
                                <label for="email">Senha:</label>
                                <input type="password"  required
                                className="form-control" 
                                placeholder="Senha"
                                aria-label="senha"
                                aria-describedby="basic-addon1"></input>
                                
                            </div>
                            
                            <div className="row" >
                                <button type="submit" id='btn-entrar' onClick={()=>entrar()} className='meus-botoes-logar' >Entrar</button></div>
                            <div className="row" >
                                
                                    <a href="#">Esqueci a senha</a>
                                
                                    <a href="#" onClick={()=>exibirMenu()} id="link-cadastro">Voltar</a>
                            
                                
                                
                            </div>
                            </form>
                        </div>



            </div>
            </div>

        </section>

        <Footer />

        
        </div>
    );
}