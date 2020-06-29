import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/Home.js';
import CadastrarPaciente from './pages/model/paciente/Cadastro'

export default function Routes(){

    return(
        <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/cadastrar/paciente' exact component={CadastrarPaciente}/>
        </Switch>
        </BrowserRouter>
    );

}


