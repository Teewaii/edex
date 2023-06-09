import React from 'react';
import heropix from '../img/hero_pix.png';
import vec from '../img/Vector 2.svg';
import star from '../img/Sparkle.png';
import Ellipse from '../img/Ellipse 4.svg';
import Search from './Search';


function Hero() {
    return (
        <section id='hero' className="hero flex flex-col items-start container lg:flex-row lg:py-6 lg:gap-6 md:pt-4" >
            <div className="search-mobile order-first w-full lg:hidden">
                <Search />
            </div>
            <div className="info flex flex-col md:pt-10  lg:py-16 2xl:py-28 lg:max-w-[50%] ">

                <h4 className='text-md text-green pt-4 relative lg:text-2xl lg:text-left md:mb-[8px] '>START TO SUCCESS
                    <span className='absolute left-8 top-0 lg:left-0 lg:-top-8 w-6'><img src={star} alt="" /></span>
                    <span className='hidden lg:flex absolute top-0 right-[220px]'><img src={Ellipse} alt="" /></span>
                </h4>

                <div className="mainText  ">
                    <p className='body_xl2 mb-4 md:mb-8 text-center md:text-5xl lg:text-3xl  xl:text-[40px]  text-Herogreen 2xl:text-[50px]  lg:text-left  lg:leading-[45px] 2xl:leading-[60px] lg:mb-[5px] '>Access To <span className='text-green relative'>5000+
                        <span className='absolute inset-x-0 -bottom-[6px]'><img src={vec} alt="" /></span>
                    </span> Courses from <span className='text-green relative'>300
                            <span className='absolute inset-x-0 -bottom-[2px]'><img src={vec} alt="" /></span>
                        </span> Instructors & Institutions</p>
                    <p className='text-md px-4  text-grey lg:text-left lg:mb-[30px] lg:px-0 md:text-2xl lg:text-lg 2xl:text-xl lg:leading-5' >Various versions have evolved over the years, sometimes by accident,</p>
                </div>

                <div className="search hidden lg:block w-[90%]">
                    <Search />
                </div>
            </div>
            <div className="picture mt-6 lg:mt-0 max-sm:order-first">
                <img src={heropix} alt="hero-image" />
            </div>
        </section>
    )
}

export default Hero