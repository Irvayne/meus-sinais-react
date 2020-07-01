import React from 'react';

import '../../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../../assets/vendor/icofont/icofont.min.css';
import '../../assets/vendor/boxicons/css/boxicons.min.css';
import '../../assets/vendor/owl.carousel/assets/owl.carousel.min.css';
import '../../assets/vendor/venobox/venobox.css';
import '../../assets/vendor/aos/aos.css';
import '../../assets/css/style.css';

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
          <li><a href="#testimonials">Depoimentos</a></li>
          <li><a href="#faq">Dúvidas?</a></li>
          <li><a href="#contact">Contato</a></li>

          <li className="get-started"><a href="#" onClick={() => cadastrarPaciente()}>Agendar atendimento</a></li>
        </ul>
      </nav>

    </div>
  </header>
    );
}