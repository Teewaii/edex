import React from 'react';
import vec from '../img/Vector 2.svg';
import CoursesCard from './CoursesCard';
import data from './Coursedata';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { useRef } from "react";


function Popular() {
    const scrol = useRef(null);
    function scrollLeft() {
        setTimeout(() => { scrol.current.scrollLeft -= 250; }, 300)

    }
    function scrollRight() {
        setTimeout(() => { scrol.current.scrollLeft += 250; }, 300)
    }

    return (
        <section id='Course' className="popular bg-Popgreen mt-12 py-12 md:mt-24 md:py-36 lg:py-24">
            <div className="flex flex-col">
                <div className="main_container flex flex-col items-center lg:flex-row lg:gap-24 lg:justify-between md:pl-[6rem] 2xl:pl-[17rem] relative" >
                    <div className='left_info  '>
                        <h4 className=' text-green header2 mb-8 max-w-[115px] md:max-w-[200px] leading-9 md:mb-8 md:text-center md:text-5xl lg:text-4xl 2xl:text-5xl lg:text-left lg:leading-[50px] lg:mb-[12px] relative'>
                            <span className='text-Herogreen'> Most</span> Popular Course
                            <span className='absolute max-w-full left-0 bottom-[28px]  md:bottom-[34px] lg:bottom-[50px]  2xl:bottom-[40px] '>
                                <img className='md:w-[180px]' src={vec} alt="text_underline" /></span>
                        </h4>
                    </div>

                    <div ref={scrol} className="courses  flex flex-row gap-4 px-8 lg:px-0 w-[100%] py-8 scroll overflow-scroll  snap-x snap-mandatory  2xl:gap-8 transition-all ease-in-out delay-300  overflow-y-hidden lg:pr-[4rem] lg:pl-4
                     
                    ">

                        {data.map(({ title, desc, price, pix, reviewCount }, index) =>
                            <div key={index} className="card shrink-0 snap-center max-w-[85%] ">

                                <CoursesCard
                                    title={title}
                                    desc={desc}
                                    price={price}
                                    pix={pix}
                                    reviewCount={reviewCount}
                                />

                            </div>
                        )}

                    </div>

                </div>
                <div className="caret  mt-11 gap-4 flex justify-center lg:justify-end   lg:w-[75%] lg:relative  ">
                    <ChevronLeftIcon onClick={scrollLeft} className="w-10 text-green hover:text-white hover:bg-green border-[1px] border-green  rounded-full p-2 2xl:w-12 cursor-pointer transition-all ease-in-out duration-300" />
                    <ChevronRightIcon onClick={scrollRight} className="w-10 text-green hover:text-white hover:bg-green border-[1px] border-green rounded-full p-2  2xl:w-12 cursor-pointer transition-all ease-in-out duration-300" />
                </div>

            </div>
        </section>
    )
}

export default Popular