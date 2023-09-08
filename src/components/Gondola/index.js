import React, { useEffect, useState } from 'react';
import './style.scss';
import $ from 'jquery';


import b1 from '../../assets/img/e1.png';
import b2 from '../../assets/img/e2.png';
import b3 from '../../assets/img/e3.png';

import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Gondola = () => {
    const [activeKey, setActiveKey] = useState('tab1');

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };

    const active = (e) => {
        if($("#gondola").offset().top - $(window).scrollTop() < 650 && !$(".gondola").hasClass("animate")) {
            $(".gondola").addClass("animate");
        }
    }

    const sendMessage = (e) => {
        console.log(e);
    }
    
    useEffect(() => {
        // $(window).on('scroll',()=>active());
    },[]);

    return  (
        <section className="gondola" id='gondola'>
            <div className='container'>
                <h2 className='default-title'>Etiqueta Gondola</h2>
            </div>
            <div className="container">
            <Slider {...settings}>
                <div className='tab-item'>
                    <img src={b1} />
                    <p className="legend">
                        <span className='name'>Etiqueta Gôndola 62x30</span>
                        <span className='qtd'>62MMx30M</span>
                        {/* <span className='ref'>35 Metros - 31 Metros - 21 Metros</span> */}
                    </p>
                </div>
                <div className='tab-item'>
                    <img src={b2} />
                    <p className="legend">
                        <span className='name'>Etiqueta Gôndola 62x30</span>
                        <span className='qtd'>62MMx30M</span>
                        {/* <span className='ref'>31 Metros - 25 Metros - 21 Metros</span> */}
                    </p>
                </div>
                <div className='tab-item'>
                    <img src={b3} />
                    <p className="legend">
                        <span className='name'>Etiqueta Gôndola 62x30</span>
                        <span className='qtd'>62MMx30M</span>
                        {/* <span className='ref'>35 Metros - 32 Metros - 22 Metros</span> */}
                    </p>
                </div>
            </Slider>
            </div>
        </section>
    )
}

export default Gondola;