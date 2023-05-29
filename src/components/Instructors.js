import React from 'react';
import InstData from './InstructorData';
import InstCard from './InstCard';
import vec from '../img/Vector 2.svg';
import { useRef } from "react";
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { ChevronRightIcon } from '@heroicons/react/24/solid';


function Instructors() {
    const scrol = useRef(null);
    function scrollLeft() {
        setTimeout(() => { scrol.current.scrollLeft -= 250; }, 300)

    }
    function scrollRight() {
        setTimeout(() => { scrol.current.scrollLeft += 250; }, 300)

    }
    return (
        <section className="Instructor bg-Popgreen mt-12 py-12 md:mt-0 md:py-36 lg:py-24">
            <div className="flex flex-col">
                <div className="main_container flex flex-col  items-start lg:justify-between md:pl-[6rem] 2xl:pl-[17rem] relative" >
                    <div className="top text-center flex flex-col  lg:text-left ">
                        <h1 className='text-green header2 mb-4 md:mb-8  md:text-5xl leading-[40px] lg:text-4xl 2xl:text-5xl lg:text-left lg:leading-[50px] lg:mb-[12px] relative  '><span className='text-Herogreen '>Our Best</span> Instructors
                            <img src={vec} className='text_underline absolute top-8 right-[20px] w-[180px] lg:left-[160px] md:top-10 md:left-[300px] md:w-[240px] lg:w-[170px] 2xl:w-[245px] lg:top-[40px]  2xl:left-[210px] ' alt="" />
                        </h1>
                        <p className=' text-md md:text-xl 2xl:text-2xl 2xl:mt-4 text-grey mb-8'>Various versions have evolved over the years, sometimes by accident.</p>
                    </div>

                    <div ref={scrol} className="courses  flex flex-row gap-4 px-8 lg:px-0 w-[100%] py-8 scroll overflow-scroll  snap-x snap-mandatory  2xl:gap-8 transition-all ease-in-out delay-300  overflow-y-hidden lg:pr-[4rem] lg:pl-4
                 
                ">
                        {
                            InstData.map(({ name, pix, profession }, index) =>
                                <div key={index} className="card snap-center max-w-[85%]   ">
                                    <InstCard
                                        key={index}
                                        name={name}
                                        pix={pix}
                                        profession={profession}
                                    />
                                </div>
                            )
                        }

                    </div>

                </div>
                <div className="caret  mt-11 gap-4 flex justify-center w-[100%] lg:w-[75%] lg:relative  lg:justify-end   ">
                    <ChevronLeftIcon onClick={scrollLeft} className="w-10 text-green hover:text-white hover:bg-green border-[1px] border-green  rounded-full p-2 2xl:w-12 cursor-pointer" />
                    <ChevronRightIcon onClick={scrollRight} className="w-10 text-green hover:text-white hover:bg-green border-[1px] border-green rounded-full p-2  2xl:w-12 cursor-pointer" />
                </div>

            </div>
        </section>
    )
}

export default Instructors


