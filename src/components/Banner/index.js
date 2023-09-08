import React, { useEffect, useState } from 'react';
import './style.scss';
import $ from 'jquery';
import banner1 from '../../assets/img/banner-1.jpg';
import banner2 from '../../assets/img/banner-2.jpg';
import banner3 from '../../assets/img/banner-3.jpg';
import 'jquery.easing';

import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const settings = {
    dots: true,
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
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={banner2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={banner3} />
                    <p className="legend">Legend 3</p>
                </div>
            </Slider>
        </section>
    )
}

export default Banner;