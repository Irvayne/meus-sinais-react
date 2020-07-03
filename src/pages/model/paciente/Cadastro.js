import React, {useEffect, useState} from 'react';

import '../../../assets/bootstrap-4.1.3-dist/css/bootstrap-grid.css';
import '../../../assets/bootstrap-4.1.3-dist/css/bootstrap.css';
import Header from '../../components/Header';
import './Cadastro.css'
import Footer from '../../components/Footer';

export default function Cadastrar({history}){

  function exibirMenu(){
    history.push('/menu/paciente');
}

    return(
        <div>
        <Header history={history}/>

        
        <section id="hero" className="d-flex align-items-center">

        <div className="container">
            <div className="row">
                    
                    

                
                    <div className="container">
                        <div className="div-center">
                            <h1>Cadastro</h1>
                            </div>
                    <form>
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label for="inputNome">Nome</label>
                        <input type="text" class="form-control" id="inputNome" placeholder="Nome"></input>
                      </div>
                      <div class="form-group col-md-6">
                        <label for="inputPassword4">Email</label>
                        <input type="email" class="form-control" id="inputPassword4" placeholder="Email"></input>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="inputAddress">Address</label>
                      <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"></input>
                    </div>
                    <div class="form-group">
                      <label for="inputAddress2">Address 2</label>
                      <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"></input>
                    </div>
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label for="inputCity">City</label>
                        <input type="text" class="form-control" id="inputCity"></input>
                      </div>
                      <div class="form-group col-md-4">
                        <label for="inputState">State</label>
                        <select id="inputState" class="form-control">
                          <option selected>Choose...</option>
                          <option>...</option>
                        </select>
                      </div>
                      <div class="form-group col-md-2">
                        <label for="inputZip">Zip</label>
                        <input type="text" class="form-control" id="inputZip"></input>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck"></input>
                        <label class="form-check-label" for="gridCheck">
                          Check me out
                        </label>
                      </div>
                    </div>
                    <div className="div-center"  >
                                <button type="submit" id='btn-entrar' className='meus-botoes-logar' >Cadastrar</button>
                                
                                <button className='meus-botoes-novo' onClick={()=>exibirMenu()}>Voltar</button>
                                
                                </div>
                            
                                
                                    
                                
                                    
                            
                                
                                
                           
                  </form></div>
                


            </div>
            </div>

        </section>

        <Footer />

        
        </div>
    );
}
