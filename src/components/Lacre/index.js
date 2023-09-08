import React, { useEffect, useState } from 'react';
import './style.scss';
import $ from 'jquery';


import b1 from '../../assets/img/l1.png';
import b2 from '../../assets/img/l2.png';
import b3 from '../../assets/img/l3.png';
import b4 from '../../assets/img/l4.png';

import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Lacre = () => {
    const [activeKey, setActiveKey] = useState('tab1');

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };

    const active = (e) => {
        if($("#lacre").offset().top - $(window).scrollTop() < 650 && !$(".lacre").hasClass("animate")) {
            $(".lacre").addClass("animate");
        }
    }

    const sendMessage = (e) => {
        console.log(e);
    }
    
    useEffect(() => {
        // $(window).on('scroll',()=>active());
    },[]);

    return  (
        <section className="lacre" id='lacre'>
            <div className='container'>
                <h2 className='default-title'>Lacre de segurança</h2>
            </div>
            <div className="container">
            <Slider {...settings}>
                <div className='tab-item'>
                    <img src={b1} />
                    <p className="legend">
                        <span className='name'>Lacre 100x40</span>
                        {/* <span className='qtd'>100MMx150MM</span>
                        <span className='ref'>35 Metros - 31 Metros - 21 Metros</span> */}
                    </p>
                </div>
                <div className='tab-item'>
                    <img src={b2} />
                    <p className="legend">
                        <span className='name'>Lacre 100x30</span>
                        {/* <span className='qtd'>60MM X 40MM</span>
                        <span className='ref'>31 Metros - 25 Metros - 21 Metros</span> */}
                    </p>
                </div>
                <div className='tab-item'>
                    <img src={b3} />
                    <p className="legend">
                        <span className='name'>Vermelha 33x21x3</span>
                        {/* <span className='qtd'>50MM x 30MM</span>
                        <span className='ref'>35 Metros - 32 Metros - 22 Metros</span> */}
                    </p>
                </div>
                <div className='tab-item'>
                    <img src={b4} />
                    <p className="legend">
                        <span className='name'>Etiqueta bopp 60x25x1</span>
                        {/* <span className='qtd'>50MM x 30MM</span>
                        <span className='ref'>35 Metros - 32 Metros - 22 Metros</span> */}
                    </p>
                </div>
            </Slider>
            </div>
        </section>
    )
}

export default Lacre;