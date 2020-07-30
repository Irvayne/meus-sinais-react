import React, {useEffect, useState} from 'react';

import log from '../assets/img/logo.png';
import details_1 from '../assets/img/details-1.png'; 
import missao from '../assets/img/missao.png'
import testimonials_1 from '../assets/img/testimonials/testimonials-1.jpg';
import testimonials_2 from '../assets/img/testimonials/testimonials-2.jpg';
import testimonials_3 from '../assets/img/testimonials/testimonials-3.jpg';
import Header from '../pages/components/Header';
import Footer from '../pages/components/Footer';

import './Home.css';

export default function Login({history}) {

  const [smartphone, setSmartphone] = useState(false);


  useEffect(() => {
      
    if (window.innerWidth < 550){
      setSmartphone(true);
}
}, [window.innerWidth]);

  function menuPaciente(){
    history.push('/menu/paciente');
  }

	return(
		<div>
		<Header history={history}/>

  <section id="hero" className="d-flex align-items-center">

    <div className="container">
      <div className="row">
        <div className="col-lg-6 d-lg-flex flex-lg-column justify-content-center align-items-stretch pt-5 pt-lg-0 order-2 order-lg-1" data-aos="fade-up">
          <div>
            <h1>Conheça os seus sinais!</h1>
            <h2>Aqui nós ajudamos você a passar pelas situações da sua vida e a se conhecer melhor. Agende sua consulta gratuita e experimente nossos serviços!</h2>
            <a href="#" className="download-btn"><i className="bx bxl-play-store"></i> Google Play</a>
            <a href="#" className="download-btn"><i className="bx bxl-apple"></i> App Store</a>
          </div>
        </div>
        <div className="col-lg-6 d-lg-flex flex-lg-column align-items-stretch order-1 order-lg-2 hero-img" data-aos="fade-up">
        {smartphone == true &&(
            <button id="button-agendamento" onClick={()=>menuPaciente()} >Agendar Atendimento</button>
            )
          }
          <img src={log} className="img-fluid" alt="" style={{maxWidth: '60%',margin: 'auto'}}></img>
          
          
        </div>
      </div>
    </div>

  </section>

  

  <main id="main">
  <section id="sobre" className="details">
      <div className="container">

        <div className="row content">
          <div className="col-md-4" data-aos="fade-right">
            <img src={missao} className="img-fluid" alt=""/>
          </div>
          <div className="col-md-8 pt-4" data-aos="fade-up">
            <h3>Sobre nós</h3>
            <p className="font-italic">
              Visão:
            </p>
            <ul>
              <li><i className="icofont-check"></i> Usuários possam utilizar ferramentas práticas aplicáveis no cotidiano que favoreçam uma melhor adaptação a eventos estressores e promovam um nível efetivo de saúde mental.</li>

            </ul>
            <p className="font-italic">
              Missão:
            </p>
            <ul>
              <li><i className="icofont-check"></i> Acolher a demanda por assistência psicológica da comunidade através de atendimentos virtuais gratuitos e/ou de baixo custo; do fornecimento de informações e recursos que promovam um bem-estar mental e um autocuidado diário.</li>

            </ul>
          </div>
        </div>






      </div>
    </section>

    <section id="testimonials" className="testimonials section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Depoimentos</h2>
          <p></p>
        </div>

        <div className="testimonials-carousel" data-aos="fade-up">

          

          

          





        </div>

      </div>
    </section>


    <section id="faq" class="faq">
      <div class="container">

        <div class="section-title">

          <h2>Perguntas Frequentes</h2>
          <p></p>
        </div>

        

      </div>
    </section>

    <section id="contact" class="contact section-bg">
      <div class="container">

        <div class="section-title">
          <h2>Contato</h2>
          <p></p>
        </div>

        <div class="row">

          <div class="col-lg-6">
            <div class="row">
              <div class="col-lg-6 info" data-aos="fade-up">
                <i class="bx bx-map"></i>
                <h4>Endereço</h4>
                <p>Centro,<br/>Teresina, PI 1086</p>
              </div>
              <div class="col-lg-6 info" data-aos="fade-up" data-aos-delay="100">
                <i class="bx bx-phone"></i>
                <h4>Telefone</h4>
                <p>+55 86 9 9929 2373<br/>+55 86 9 9932 1866</p>
              </div>
              <div class="col-lg-6 info" data-aos="fade-up" data-aos-delay="200">
                <i class="bx bx-envelope"></i>
                <h4>Email</h4>
                <p>atendimento@psicologo24.com<br/>informacoes@psicologo24.com</p>
              </div>
              <div class="col-lg-6 info" data-aos="fade-up" data-aos-delay="300">
                <i class="bx bx-time-five"></i>
                <h4>Horário</h4>
                <p>Segunda  - Sexta: 8:00 às 17:00<br/>Sábado: 8:00 às 13:00</p>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <form action="forms/contact.php" method="post" role="form" class="php-email-form" data-aos="fade-up">
              <div class="form-group">
                <input placeholder="Seu Nome" type="text" name="name" class="form-control" id="name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                <div class="validate"></div>
              </div>
              <div class="form-group">
                <input placeholder="Seu Email" type="email" class="form-control" name="email" id="email" data-rule="email" data-msg="Please enter a valid email" />
                <div class="validate"></div>
              </div>
              <div class="form-group">
                <input placeholder="Título" type="text" class="form-control" name="subject" id="subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                <div class="validate"></div>
              </div>
              <div class="form-group">
                <textarea placeholder="Mensagem" class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us"></textarea>
                <div class="validate"></div>
              </div>
              <div class="mb-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div class="text-center"><button type="submit">Enviar</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>

    




  </main>



  <Footer />

  </div>

		);
}
