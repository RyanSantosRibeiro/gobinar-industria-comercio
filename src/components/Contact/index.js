import React, { useEffect } from 'react';
import './style.scss';
import whatsapp from '../../assets/img/whatsapp.png';
import instagram from '../../assets/img/instagram.png';
import face from '../../assets/img/facebook.png';
import email from '../../assets/img/mail.png';
import $ from 'jquery';


const Contact = () => {

    const active = (e) => {
        if($("#contact").offset().top - $(window).scrollTop() < 650 && !$(".contact").hasClass("animate")) {
            $(".contact").addClass("animate");
        }
    }

    const sendMessage = (e) => {
        console.log(e);
    }
    
    useEffect(() => {
        // $(window).on('scroll',()=>active());
    },[]);

    return  (
        <section className="contact" id='contact'>
            <div className='container'>
                <h2 className='default-title'>Orçamento Gratuito</h2>
            </div>
            <div className="container">
                <div className='contact__modal'>
                    <h4>Faça uma cotação gratuita aqui!

                    </h4>
                    <div className='contact__social'>
                        <a href='https://wa.me/message/JX3HTMYI2FY2K1'>
                            <img src={whatsapp} alt=''/>
                            <span>Whatsapp</span>
                        </a>
                        {/* <a href='https://www.instagram.com/ryan.santosrj/'>
                            <img src={instagram} alt=''/>
                            <span>@ryan.santosrj</span>
                        </a> */}
                    </div>
                </div>
                <div className='contact__modal social-media'>
                    <a href='https://instagram.com/gobinar_bobinas_termicas_pdv?igshid=MzRlODBiNWFlZA==' className='contact__modal__action'>
                        <img src={instagram}/>
                    </a>
                    <a href='https://fb.me/9i8wFHjls' className='contact__modal__action'>
                        <img src={face}/>
                    </a>
                    <a href='/' className='contact__modal__action'>
                        <img src={email}/>
                    </a>
                    <a href='/' className='contact__modal__action'>
                        <img src={whatsapp}/>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact;