import React from 'react';
import InstData from './InstructorData';
import InstCard from './InstCard';
import vec from '../img/Vector 2.svg';
import { useRef } from "react";

function Instructors() {
    const scrol = useRef(null);
    function scrollLeft() {
        setTimeout(() => { scrol.current.scrollLeft -= 250; }, 300)

    }
    function scrollRight() {
        setTimeout(() => { scrol.current.scrollLeft += 250; }, 300)
    }
    return (
        <section className="Instructor py-16 lg:py-24 2xl:py-28 bg-Lightyellow">
            <div className="flex flex-col">
                <div className="main">
                    <div className="top container text-center flex flex-col lg:text-left ">
                        <h1 className='text-green header2 mb-2 md:mb-8  md:text-5xl leading-[40px] lg:text-4xl 2xl:text-5xl lg:text-left lg:leading-[50px] lg:mb-[12px] relative  '><span className='text-Herogreen '>Our Best</span> Instructors
                            <img src={vec} className='text_underline absolute top-10 right-20  lg:left-[160px] lg:w-[12%] lg:top-[45px]  2xl:left-[210px] ' alt="" />
                        </h1>
                        <p className=' text-md md:text-lg text-grey mb-8'>Various versions have evolved over the years, sometimes by accident.</p>
                    </div>

                    <div ref={scrol} className="categories  flex flex-row gap-4 px-8 lg:px-0 w-[100%] py-8 scroll overflow-scroll  snap-x snap-mandatory relative 2xl:gap-8 transition-all ease-in-out delay-300  overflow-y-hidden lg:pr-10 lg:pl-[5rem] xl:pl-[10rem] 2xl:pl-[12rem]
                    
                     ">
                        {InstData.map(({ name, pix, profession }, index) =>
                            <InstCard
                                key={index}
                                name={name}
                                pix={pix}
                                profession={profession}
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Instructors