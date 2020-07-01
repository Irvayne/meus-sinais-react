import React from 'react';

import '../components/Footer.css'


export default function Footer(){

    return(
        <footer id="footer">
            

            <div className="container py-4">
            <div className="copyright">
                &copy; Copyright <a href="#">Meus sinais</a>. 
            </div>
            <div className="credits">
                Desenvolvido por <a href="#">Alexandre, Irvayne e Otávio</a>
            </div>
            </div>
        </footer>

    );


}