import React, { useEffect } from 'react';
import './style.scss';
import image from '../../assets/img/logoRyan.jpg';
import $ from 'jquery';


const Pilares = () => {

    const active = (e) => {
        if($("#pilares").offset().top - $(window).scrollTop() < 900 && !$(".pilares").hasClass("animate")) {
            $(".pilares").addClass("animate");
        }
    }
    
    useEffect(() => {
        $(window).on('scroll',()=>active());
    },[]);

    return  (
        <section className="pilares" id='pilares'>
            <div className="pilares__highlight">
                <p className='pilares__highlight__text'><b>Aplicações: </b>
 Bares, clubes, hotéis, cozinhas industriais ,
lanchonetes. - Faça um orçamento <a href=''><b>(11) 93944-4498</b></a> </p>
            </div>
            {/* <div className="container">
                <div className='pilares__left'>
                    <h2 className='default-title'>Principais <span>Compromissos</span>!</h2>
                    <div className='pilares__left__text'>
                        <p> Descubra o poder da combinação perfeita para impulsionar o seu negócio online.  
                        <b> Design, Plataforma , Tráfego e Conteúdo</b> são os quatro pilares 
                            essenciais para alcançar o sucesso digital. 
                        </p>
                        <p>
                            Convidamos <b>você</b> a explorar nossos
                             serviços e descobrir como podemos transformar sua <b>presença online</b>. 
                             Criaremos um <b>design envolvente</b> em uma <b>plataforma robusta</b> e 
                             traremos <b>tráfego qualificado</b> para o seu site. Aumente sua 
                             <b>visibilidade</b>, <b>atraia clientes</b> e <b>alcance suas metas</b>. 
                        </p>
                        <p>
                            Estamos prontos para ajudar você a construir um negócio online de sucesso!
                        </p>
                    </div>
                </div>
                <div className='pilares__right'>
                    <div className='pilares__list'>
                        <a href='/' className='pilares__item pilares__item-1'>
                            Design
                        </a>
                        <a href='/' className='pilares__item pilares__item-2'>
                            Plataforma
                        </a>
                        <a href='/' className='pilares__item pilares__item-3'>
                            Trafego
                        </a>
                        <a href='/' className='pilares__item pilares__item-4'>
                            Conteudo
                        </a>
                    </div>
                </div>
            </div> */}
        </section>
    )
}

export default Pilares;