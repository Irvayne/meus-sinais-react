import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/Home.js';
import CadastrarPaciente from './pages/model/paciente/Cadastro';
import MenuPaciente from './pages/model/paciente/Menu';
import LogarPaciente from './pages/model/paciente/Login';

export default function Routes(){

    return(
        <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/menu/paciente' exact component={MenuPaciente}/>
            <Route path='/cadastrar/paciente' exact component={CadastrarPaciente}/>
            <Route path='/logar/paciente' exact component={LogarPaciente}/>
        </Switch>
        </BrowserRouter>
    );

}


