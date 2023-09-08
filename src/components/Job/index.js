import React from 'react';
import './style.scss';
import $ from 'jquery';

import job0 from './../../assets/img/jobs/fiturb.jpg';
import job1 from './../../assets/img/jobs/hipy.jpg';
import job2 from './../../assets/img/jobs/vekyo.png';
import job3 from './../../assets/img/jobs/tilev.jpg';
import job4 from './../../assets/img/jobs/rgtx.jpg';
import job5 from './../../assets/img/jobs/maluan.jpg';
import job6 from './../../assets/img/jobs/jescri.jpg';
import job7 from './../../assets/img/jobs/hardyn.jpg';
import job8 from './../../assets/img/jobs/ilumine.png';
import job9 from './../../assets/img/jobs/dily.jpg';
import job10 from './../../assets/img/jobs/cvl.jpg';
import job11 from './../../assets/img/jobs/clube-intima.jpg';
import job12 from './../../assets/img/jobs/riofit.png';
import { useEffect } from 'react';

const Job = () => {

    const active = (e) => {
        if($("#job").offset().top - $(window).scrollTop() < 450 && !$(".job").hasClass("animate")) {
            $(".job").addClass("animate");
            
        }

    }
    
    useEffect(() => {
        $(window).on('scroll',()=>active());

        // Tabs jobs
        $( ".dev" ).on( "click", function() {
            if($(this).hasClass("active")) {
            $(".job__tab__item p").removeClass("active");
            $(".job__list").removeClass("dev");
            $(this).removeClass("active");
            $(".job__list__item.evo").fadeIn(500);
            } else {
            $(".job__tab__item p").removeClass("active");
            $(".job__list").removeClass("evo");
            $(".job__list").addClass("dev");
            $(this).addClass("active");

            $(".job__list__item.dev").fadeIn(500);
            $(".job__list__item.evo").fadeOut(500);
            }
        });

        $( ".evo" ).on( "click", function() {
            if($(this).hasClass("active")) {
            $(".job__tab__item p").removeClass("active");
            $(".job__list").removeClass("evo");
            $(this).removeClass("active");

            $(".job__list__item.dev").fadeIn(500);
            } else {
            $(".job__tab__item p").removeClass("active");
            $(".job__list").removeClass("dev");
            $(".job__list").addClass("evo");
            $(this).addClass("active");

            $(".job__list__item.evo").fadeIn(500);
            $(".job__list__item.dev").fadeOut(500);
            }
        });
    },[]);

    return  (
        <div className="job" id='job'>
            <div className='container'>
                <h2 className='default-title'>My Works</h2>
            </div>
            <div className="container">
                <div className='job-content'>
                    {/* <div className='job-text'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                    </div> */}
                    {/* <div className='job__tab'>
                        <div className='job__tab__list'> */}
                            {/* Item */}
                            {/* <div className='job__tab__item'>
                                <p className='dev'>Desenvolvimento</p>
                            </div> */}

                            {/* Item */}
                            {/* <div className='job__tab__item'>
                                <p className='evo'>Evolução</p>
                            </div>
                        </div>
                    </div> */}

                    <div className='job__list'>
                        {/* Item */}
                        <div className='job__list__item evo'>
                            <img src={job0} alt="Skills"/>
                            <div className='job__list__item__box'>
                                <p className=''>
                                    <span className='box__name'>Fiturban</span>
                                    <span className='box__tags'>Evolução</span>
                                </p>
                                <a href='/' className=''>Veja Mais</a>
                            </div>
                        </div>

                        {/* Item */}
                        <div className='job__list__item evo'>
                            <img src={job1} alt="Skills"/>
                            <div className='job__list__item__box'>
                                <p className=''>
                                    <span className='box__name'>Hipy</span>
                                    <span className='box__tags'>Evolução</span>
                                </p>
                                <a href='/' className=''>Veja Mais</a>
                            </div>
                        </div>

                        {/* Item */}
                        <div className='job__list__item dev'>
                            <img src={job2} alt="Skills"/>
                            <div className='job__list__item__box'>
                                <p className=''>
                                    <span className='box__name'>Vekyo</span>
                                    <span className='box__tags'>Desenvolvimento</span>
                                </p>
                                <a href='/' className=''>Veja Mais</a>
                            </div>
                        </div>

                        {/* Item */}
                        <div className='job__list__item evo'>
                            <img src={job3} alt="Skills"/>
                            <div className='job__list__item__box'>
                                <p className=''>
                                    <span className='box__name'>Tilev</span>
                                    <span className='box__tags'>Evolução</span>
                                </p>
                                <a href='/' className=''>Veja Mais</a>
                            </div>
                        </div>

                        {/* Item */}
                        <div className='job__list__item evo'>
                            <img src={job4} alt="Skills"/>
                            <div className='job__list__item__box'>
                                <p className=''>
                                    <span className='box__name'>RGTX</span>
                                    <span className='box__tags'>Evolução</span>
                                </p>
                                <a href='/' className=''>Veja Mais</a>
                            </div>
                        </div>

                        {/* Item */}
                        <div className='job__list__item dev'>
                            <img src={job5} alt="Skills"/>
                            <div className='job__list__item__box'>
                                <p className=''>
                                    <span className='box__name'>Maluan</span>
                                    <span className='box__tags'>Desenvolvimento</span>
                                </p>
                                <a href='/' className=''>Veja Mais</a>
                            </div>
                        </div>

                         {/* Item */}
                         <div className='job__list__item evo'>
                            <img src={job6} alt="Skills"/>
                            <div className='job__list__item__box'>
                                <p className=''>
                                    <span className='box__name'>Jescri</span>
                                    <span className='box__tags'>Evolução</span>
                                </p>
                                <a href='/' className=''>Veja Mais</a>
                            </div>
                        </div>

                         {/* Item */}
                         <div className='job__list__item evo'>
                            <img src={job7} alt="Skills"/>
                            <div className='job__list__item__box'>
                                <p className=''>
                                    <span className='box__name'>Hardyn</span>
                                    <span className='box__tags'>Evolução</span>
                                </p>
                                <a href='/' className=''>Veja Mais</a>
                            </div>
                        </div>

                         {/* Item */}
                         <div className='job__list__item dev'>
                            <img src={job8} alt="Skills"/>
                            <div className='job__list__item__box'>
                                <p className=''>
                                    <span className='box__name'>Ilumine</span>
                                    <span className='box__tags'>dev</span>
                                </p>
                                <a href='/' className=''>Veja Mais</a>
                            </div>
                        </div>

                         {/* Item */}
                         <div className='job__list__item dev'>
                            <img src={job9} alt="Skills"/>
                            <div className='job__list__item__box'>
                                <p className=''>
                                    <span className='box__name'>Dily</span>
                                    <span className='box__tags'>Desenvolvimento</span>
                                </p>
                                <a href='/' className=''>Veja Mais</a>
                            </div>
                        </div>

                         {/* Item */}
                         <div className='job__list__item dev'>
                            <img src={job10} alt="Skills"/>
                            <div className='job__list__item__box'>
                                <p className=''>
                                    <span className='box__name'>CVL</span>
                                    <span className='box__tags'>Desenvolvimento</span>
                                </p>
                                <a href='/' className=''>Veja Mais</a>
                            </div>
                        </div>

                         {/* Item */}
                         <div className='job__list__item evo'>
                            <img src={job11} alt="Skills"/>
                            <div className='job__list__item__box'>
                                <p className=''>
                                    <span className='box__name'>Clube Íntima</span>
                                    <span className='box__tags'>Desenvolvimento</span>
                                </p>
                                <a href='/' className=''>Veja Mais</a>
                            </div>
                        </div>

                         {/* Item */}
                         <div className='job__list__item dev'>
                            <img src={job12} alt="Skills"/>
                            <div className='job__list__item__box'>
                                <p className=''>
                                    <span className='box__name'>Rio Fitness</span>
                                    <span className='box__tags'>Desenvolvimento</span>
                                </p>
                                <a href='/' className=''>Veja Mais</a>
                            </div>
                        </div>

                    </div>
                    {/* <div className='skill-img'>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Job;