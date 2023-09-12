import React, { useEffect, useState } from 'react';
import './style.scss';
import $ from 'jquery';

import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';

import b1 from '../../assets/img/b1.png';
import b2 from '../../assets/img/b2.png';
import b3 from '../../assets/img/b3.png';
import b4 from '../../assets/img/b4.png';
import b5 from '../../assets/img/b5.png';
import b6 from '../../assets/img/b6.png';
import b7 from '../../assets/img/b7.png';
import b8 from '../../assets/img/b8.png';

import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Bobinas = () => {
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
        if($("#bobina").offset().top - $(window).scrollTop() < 650 && !$(".bobina").hasClass("animate")) {
            $(".bobina").addClass("animate");
        }
    }

    const sendMessage = (e) => {
        console.log(e);
    }
    
    useEffect(() => {
        $(window).on('scroll',()=>active());
    },[]);

    return  (
        <section className="bobina" id='bobina'>
            <div className='container'>
                <h2 className='default-title'>Bobina térmica</h2>
            </div>
            <div className="container">
                    <Tab.Container activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
                        <Nav variant="tabs">
                            <Nav.Item>
                                <Nav.Link eventKey="tab1">Linha 80mm</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="tab2">Linha 57mm</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="tab1">
                            <Slider {...settings}>
                                <div className='tab-item'>
                                    <img src={b1} />
                                    <p className="legend">
                                        <span className='name'>Bobina térmica 80x100</span>
                                        <span className='qtd'>Caixa com 30</span>
                                        <span className='ref'>Ref:801001</span>
                                    </p>
                                </div>
                                <div className='tab-item'>
                                    <img src={b2} />
                                    <p className="legend">
                                        <span className='name'>Bobina térmica 80x80</span>
                                        <span className='qtd'>Caixa com 16</span>
                                        <span className='ref'>Ref:808002</span>
                                    </p>
                                </div>
                                <div className='tab-item'>
                                    <img src={b3} />
                                    <p className="legend">
                                        <span className='name'>Bobina térmica 80x40</span>
                                        <span className='qtd'>Caixa com 30</span>
                                        <span className='ref'>Ref:8040023</span>
                                    </p>
                                </div>
                                <div className='tab-item'>
                                    <img src={b4} />
                                    <p className="legend">
                                        <span className='name'>Bobina térmica 80x30</span>
                                        <span className='qtd'>Caixa com 30</span>
                                        <span className='ref'>Ref:803004</span>
                                    </p>
                                </div>
                            </Slider>
                            </Tab.Pane>
                            <Tab.Pane eventKey="tab2">
                            <Slider {...settings}>
                                <div className='tab-item'>
                                    <img src={b5} />
                                    <p className="legend">
                                        <span className='name'>Bobina térmica 57x300</span>
                                        <span className='qtd'>Caixa com 6</span>
                                        <span className='ref'>Ref:573001</span>
                                    </p>
                                </div>
                                <div className='tab-item'>
                                    <img src={b6} />
                                    <p className="legend">
                                        <span className='name'>Bobina térmica 57x22</span>
                                        <span className='qtd'>Caixa com 84</span>
                                        <span className='ref'>Ref:572202</span>
                                    </p>
                                </div>
                                <div className='tab-item'>
                                    <img src={b7} />
                                    <p className="legend">
                                        <span className='name'>Bobina térmica 57x18</span>
                                        <span className='qtd'>Caixa com 100</span>
                                        <span className='ref'>Ref:5718023</span>
                                    </p>
                                </div>
                                <div className='tab-item'>
                                    <img src={b8} />
                                    <p className="legend">
                                        <span className='name'>Bobina térmica 57x15</span>
                                        <span className='qtd'>Caixa com 30</span>
                                        <span className='ref'>Ref:571504</span>
                                    </p>
                                </div>
                            </Slider>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
            </div>
        </section>
    )
}

export default Bobinas;