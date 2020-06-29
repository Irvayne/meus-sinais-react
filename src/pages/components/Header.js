import React from 'react';

export default function Header({history}){

    function cadastrarPaciente(){
        history.push('/cadastrar/paciente');
      }

      function home(){
        history.push('/');
      }

    return(
        <header id="header" className="fixed-top">
    		<div className="container d-flex">

      <div className="logo mr-auto">
        <h1 className="text-light"><a href="#" onClick={()=>home()}>Meus Sinais</a></h1>
      </div>

      <nav className="nav-menu d-none d-lg-block">
        <ul>
          <li className="active"><a href="#header">Página Inicial</a></li>
          <li><a href="#sobre">Sobre nós</a></li>
          <li><a href="#faq">Dúvidas?</a></li>
         
			<li><a href="#">Colaborador</a><br/></li>
			<li><a href="#" onClick={() => cadastrarPaciente()}>Paciente</a><br/></li>

          <li className="get-started"><a href="#">Agendar atendimento</a></li>
        </ul>
      </nav>

    </div>
  </header>
    );
}