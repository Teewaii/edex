import React from 'react';
import vec from '../img/Vector 2.svg';
import CoursesCard from './CoursesCard';
import data from './Coursedata';
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { useRef } from "react";

function Popular() {
    const scrol = useRef(null);
    function scrollLeft() {
        setTimeout(() => { scrol.current.scrollLeft -= 200; }, 300)

    }
    function scrollRight() {
        setTimeout(() => { scrol.current.scrollLeft += 200; }, 300)
    }

    return (
        <section className="popular bg-Popgreen mt-12 py-12 overflow-auto  ">
            <div className="main_container flex flex-col  items-center container " >
                <div className='left_info  '>
                    <h4 className=' text-green header2 mb-8 max-w-[115px] lg:max-w-[200px] leading-9 md:mb-8  md:text-5xl lg:text-4xl xl:text-[40px] lg:text-left lg:leading-[50px] lg:mb-[12px] relative'>
                        <span className='text-Herogreen'> Most</span> Popular
                        Course
                        <span className='absolute max-w-full right-0 bottom-[30px] lg:bottom-[50px]   '>
                            <img src={vec} alt="text_underline" /></span>
                    </h4>
                </div>

                <div ref={scrol} className="courses  flex flex-row gap-4  w-[100%] py-8  overflow-scroll snap-x snap-mandatory  md:gap-8 transition-all ease-in-out delay-300  overflow-y-hidden ">

                    {data.map(({ title, desc, price, pix, reviewCount }, index) =>
                        <div key={index} className="card shrink-0 snap-center w-[85%]  md:w-[100%]">
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
                <div className="caret  mt-11 gap-4 flex justify-end container w-[90%] lg:w-[75%]  ">
                    <ChevronLeftIcon onClick={scrollLeft} className="w-8 border  rounded-full p-2 cursor-pointer" />
                    <ChevronRightIcon onClick={scrollRight} className="w-8 border rounded-full p-2  cursor-pointer" />
                </div>
            </div>
        </section>
    )
}

export default Popular