import React from 'react';

import '../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../assets/vendor/icofont/icofont.min.css';
import '../assets/vendor/boxicons/css/boxicons.min.css';
import '../assets/vendor/owl.carousel/assets/owl.carousel.min.css';
import '../assets/vendor/venobox/venobox.css';
import '../assets/vendor/aos/aos.css';
import '../assets/css/style.css';
import log from '../assets/img/logo.png';
import details_1 from '../assets/img/details-1.png'; 
import testimonials_1 from '../assets/img/testimonials/testimonials-1.jpg';
import testimonials_2 from '../assets/img/testimonials/testimonials-2.jpg';
import testimonials_3 from '../assets/img/testimonials/testimonials-3.jpg';

export default function Login() {

	return(
		<div>
		<header id="header" className="fixed-top">
    		<div className="container d-flex">

      <div className="logo mr-auto">
        <h1 className="text-light"><a href="index.html">Meus Sinais</a></h1>
      </div>

      <nav className="nav-menu d-none d-lg-block">
        <ul>
          <li className="active"><a href="#header">Página Inicial</a></li>
          <li><a href="#sobre">Sobre nós</a></li>
          <li><a href="#faq">Dúvidas?</a></li>
         
			<li><a href="#">Colaborador</a><br/></li>
			<li><a href="#">Paciente</a><br/></li>

          <li className="get-started"><a href="#">Agendar atendimento</a></li>
        </ul>
      </nav>

    </div>
  </header>

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
          <img src={log} className="img-fluid" alt="" style={{maxWidth: '75%',margin: 'auto'}}></img>
        </div>
      </div>
    </div>

  </section>

  

  <main id="main">
  <section id="sobre" className="details">
      <div className="container">

        <div className="row content">
          <div className="col-md-4" data-aos="fade-right">
            <img src={details_1} className="img-fluid" alt=""/>
          </div>
          <div className="col-md-8 pt-4" data-aos="fade-up">
            <h3>Sobre nós</h3>
            <p className="font-italic">
              Visão:
            </p>
            <ul>
              <li><i className="icofont-check"></i> Usuários possam identificar as ferramentas mentais utilizadas para atingir
um nível efetivo de saúde emocional.</li>

            </ul>
            <p className="font-italic">
              Missão:
            </p>
            <ul>
              <li><i className="icofont-check"></i> Acolher a demanda por assistência psicológica da comunidade
através de atendimentos virtuais gratuitos e/ou de baixo custo; informações
sobre as principais desordens mentais e práticas de autocuidado.</li>

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

          <div className="testimonial-wrap">
            <div className="testimonial-item">
              <img src={testimonials_1} className="testimonial-img" alt=""/>
              <h3>Raimundo</h3>
              <h4>Estudante</h4>
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                Estava com ansiedade e melhorei conversando com a psicóloga.
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
            </div>
          </div>

          <div className="testimonial-wrap">
            <div className="testimonial-item">
              <img src={testimonials_2} className="testimonial-img" alt=""/>
              <h3>Pedro</h3>
              <h4>Comerciante</h4>
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                100% recuperado.
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
            </div>
          </div>

          <div className="testimonial-wrap">
            <div className="testimonial-item">
              <img src={testimonials_3} className="testimonial-img" alt=""/>
              <h3>Neymar</h3>
              <h4>Jogardor</h4>
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                Pipocava nas decisões mas me recuperei e agora toda final faço gol.
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
            </div>
          </div>





        </div>

      </div>
    </section>


    <section id="faq" class="faq">
      <div class="container">

        <div class="section-title">

          <h2>Perguntas Frequentes</h2>
          <p></p>
        </div>

        <div class="accordion-list">
          <ul>
            <li data-aos="fade-up">
              <i class="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" class="collapse" href="#accordion-list-1">Qual o melhor presidente, Lula ou Bolsonaro? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
              <div id="accordion-list-1" class="collapse show" data-parent=".accordion-list">
                <p>
                  Lula.
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="100">
              <i class="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" href="#accordion-list-2" class="collapsed">Qual o melhor time do Brasil? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
              <div id="accordion-list-2" class="collapse" data-parent=".accordion-list">
                <p>
                  Corinthians.
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="200">
              <i class="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" href="#accordion-list-3" class="collapsed">Atendimento é gratuito? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
              <div id="accordion-list-3" class="collapse" data-parent=".accordion-list">
                <p>
                  Sim.
                </p>
              </div>
            </li>





          </ul>
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



  <footer id="footer">



    <div className="footer-top">
      <div className="container">
        <div className="row">

          <div className="col-lg-3 col-md-6 footer-contact" data-aos="fade-up">
            <h3>Psicólogos 24hrs</h3>
            <p>
              Centro <br/>
              Teresina, Piauí<br/>
              Brasil <br/><br/>
              <strong>Telefone:</strong> +55 86 9 9929-2372<br></br>
              <strong>Email:</strong> atendimento@psicologos24.com<br></br>
            </p>
          </div>





          <div className="col-lg-3 col-md-6 footer-links" data-aos="fade-up" data-aos-delay="300">
            <h4>Nossas Redes Sociais</h4>
            <p>Encontre-nos também nas redes sociais abaixo</p>
            <div className="social-links mt-3">
              <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
              <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
              <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
              <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
              <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div className="container py-4">
      <div className="copyright">
        &copy; Copyright <strong><span>Meus sinais</span></strong>. Todos os direitos reservados
      </div>
      <div className="credits">
        Desenvolvido por <a href="https://bootstrapmade.com/">Alexandre, Irvayne e Otávio</a>
      </div>
    </div>
  </footer>

  </div>

		);
}
