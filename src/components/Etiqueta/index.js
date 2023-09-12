import React, { useEffect, useState } from 'react';
import './style.scss';
import $ from 'jquery';


import b1 from '../../assets/img/e1.png';
import b2 from '../../assets/img/e2.png';
import b3 from '../../assets/img/e3.png';

import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Etiqueta = () => {
    const [activeKey, setActiveKey] = useState('tab1');

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 360,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

    const active = (e) => {
        if($("#etiqueta").offset().top - $(window).scrollTop() < 650 && !$(".etiqueta").hasClass("animate")) {
            $(".etiqueta").addClass("animate");
        }
    }

    const sendMessage = (e) => {
        console.log(e);
    }
    
    useEffect(() => {
        // $(window).on('scroll',()=>active());
    },[]);

    return  (
        <section className="etiqueta" id='etiqueta'>
            <div className='container'>
                <h2 className='default-title'>Etiqueta Térmica</h2>
            </div>
            <div className="container">
            <Slider {...settings}>
                <div className='tab-item'>
                    <img src={b1} />
                    <p className="legend">
                        <span className='name'>Etiqueta 100x150</span>
                        <span className='qtd'>100MMx150MM</span>
                        <span className='ref'>35 Metros - 31 Metros - 21 Metros</span>
                    </p>
                </div>
                <div className='tab-item'>
                    <img src={b2} />
                    <p className="legend">
                        <span className='name'>Etiqueta60x40</span>
                        <span className='qtd'>60MM X 40MM</span>
                        <span className='ref'>31 Metros - 25 Metros - 21 Metros</span>
                    </p>
                </div>
                <div className='tab-item'>
                    <img src={b3} />
                    <p className="legend">
                        <span className='name'>Etiqueta 50x30 </span>
                        <span className='qtd'>50MM x 30MM</span>
                        <span className='ref'>35 Metros - 32 Metros - 22 Metros</span>
                    </p>
                </div>
            </Slider>
            </div>
        </section>
    )
}

export default Etiqueta;