import React, { useEffect } from 'react';
import './style.scss';
import logo from './../../assets/img/logo.png'
import menu from './../../assets/img/menu.png'

import $ from 'jquery';


const Header = () => {

    const handleScroll = () => {
        if (document.documentElement.scrollTop > 100) {
            $('#header').addClass('fixed');
        } else {
            $('#header').removeClass('fixed');
        }
    }
    
    useEffect(() => {
        window.onscroll = () => handleScroll()
    },[]);
    

    return  (
        <div className="header" id='header'>
            <div className='container-fluid'>
                <div className='header__logo'>
                    <a href='/'>
                        <img src={logo} alt='Gobinar'/>
                    </a>
                </div>

                <ul className='header__menu'>
                    <li><a href='/'>Bobina térmica</a></li>
                    <li><a href='#about'>Linha hospitalar</a></li>
                    <li><a href='#about'>Etiqueta Térmica</a></li>
                    <li><a href='#about'>Lacre de segurança</a></li>
                    <li><a href='#about'>Etiqueta Gondola</a></li>
                    {/* <li><a href='#skills'>Skills</a></li> */}
                    {/* <li className='highlight'><a href='#job'>My Works</a></li> */}
                </ul>



                <a href='#contact' className='header__button primary-button'>
                    Promoção - últimas unidades
                </a>
                <div className='header__menu__button' onClick={()=>$(".header").toggleClass("open")}>
                    <img src={menu} />
                </div>
            </div>
        </div>
    )
}

export default Header;