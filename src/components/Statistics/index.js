import React, { useEffect } from 'react';
import './style.scss';
import image from '../../assets/img/logoRyan.jpg';
import $ from 'jquery';

import img1 from './../../assets/img/payment.png'
import img2 from './../../assets/img/hospital.png'
import img3 from './../../assets/img/restaurant.png'


const Statistics = () => {

    const active = (e) => {
        if($("#statistics").offset().top - $(window).scrollTop() < 850 && !$(".statistics").hasClass("animate")) {
            $(".statistics").addClass("animate");
        }
    }
    
    useEffect(() => {
        // $(window).on('scroll',()=>active());
    },[]);

    return  (
        <section className="statistics" id='statistics'>
            <div className="container">
                <div className='statistics__card statistics__card-1'>
                    <img src={img1} />
                    <p>Cartão de debito e crédito</p>
                </div>
                <div className='statistics__card statistics__card-2'>
                    <img src={img2} />
                    <p>Desfibrilador com bobina térmica</p>
                </div>
                <div className='statistics__card statistics__card-3'>
                    <img src={img3} />
                    <p>Comanda eletrônica</p>
                </div>
            </div>
            {/* <div className="statistics__highlight">
                <p className='statistics__highlight__text'>Entre no <b>mundo virtual</b> e deixe sua marca ser descoberta por <span>milhões</span> de pessoas!</p>
            </div> */}
        </section>
    )
}

export default Statistics;