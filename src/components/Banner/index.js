import React, { useEffect, useState } from 'react';
import './style.scss';
import $ from 'jquery';
import banner1 from '../../assets/img/banner-1.jpg';
import banner2 from '../../assets/img/banner-2.jpg';
import banner3 from '../../assets/img/banner-3.jpg';
import whatsapp from '../../assets/img/whatsapp.png';
import 'jquery.easing';

import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
    
    useEffect(() => {
        // $(window).on('scroll',(e)=>active(e));
        // $(window).on('mousemove',(e)=>activeMockup(e));
    },[]);
    return  (
        <section className="banner" id='banner'>
            <Slider {...settings}>
                <div>
                    <img src={banner1} />
                </div>
                <div>
                    <img src={banner2} />
                </div>
                <div>
                    <img src={banner3} />
                </div>
            </Slider>
            <div className='banner__link'>
                <p><b>Orçamento Gratuito!</b> Preço de Fábrica</p>
                <a href='https://wa.me/message/JX3HTMYI2FY2K1'>
                                <img src={whatsapp} alt=''/>
                                <span>Fazer Orçamento!</span>
                </a>
            </div>
        </section>
    )
}

export default Banner;