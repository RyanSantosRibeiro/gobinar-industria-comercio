import React, { useEffect, useState } from 'react';
import './style.scss';
import $ from 'jquery';

import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';

import b1 from '../../assets/img/h1.png';
import b2 from '../../assets/img/h2.png';
import b3 from '../../assets/img/h3.png';
import b4 from '../../assets/img/h4.png';

import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Hospital = () => {
    const [activeKey, setActiveKey] = useState('tab1');

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
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
        if($("#hospital").offset().top - $(window).scrollTop() < 650 && !$(".hospital").hasClass("animate")) {
            $(".hospital").addClass("animate");
        }
    }

    const sendMessage = (e) => {
        console.log(e);
    }
    
    useEffect(() => {
        // $(window).on('scroll',()=>active());
    },[]);

    return  (
        <section className="hospital" id='hospital'>
            <div className='container'>
                <h2 className='default-title'>Linha Hospitalar</h2>
            </div>
            <div className="container">
            <Slider {...settings}>
                <div className='tab-item'>
                    <img src={b1} />
                    <p className="legend">
                        <span className='name'>Bobina 110x15</span>
                        <span className='qtd'>110mm x 15M</span>
                        <span className='ref'>48GR</span>
                    </p>
                </div>
                <div className='tab-item'>
                    <img src={b2} />
                    <p className="legend">
                        <span className='name'>Bobina 100x15</span>
                        <span className='qtd'>100mm x 15M</span>
                        <span className='ref'>48GR</span>
                    </p>
                </div>
                <div className='tab-item'>
                    <img src={b3} />
                    <p className="legend">
                        <span className='name'>Bobina 57x30 </span>
                        <span className='qtd'>57mm x 30M</span>
                        <span className='ref'>48GR</span>
                    </p>
                </div>
                <div className='tab-item'>
                    <img src={b4} />
                    <p className="legend">
                        <span className='name'>Bobina 49x20</span>
                        <span className='qtd'>49mm x 20M</span>
                        <span className='ref'>50x30 - 50x20 - 50x15</span>
                    </p>
                </div>
            </Slider>
            </div>
        </section>
    )
}

export default Hospital;