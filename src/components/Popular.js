import React from 'react';
import vec from '../img/Vector 2.svg';
import CoursesCard from './CoursesCard';

function Popular() {
    return (
        <section className="popular bg-Popgreen mt-12 py-12 ">
            <div className="main_container flex flex-col  items-center container">
                <div className='left_info  '>
                    <h4 className=' text-green header2 mb-8 max-w-[115px] lg:max-w-[200px] leading-9 md:mb-8  md:text-5xl lg:text-4xl xl:text-[40px] lg:text-left lg:leading-[50px] lg:mb-[12px] relative'>
                        <span className='text-Herogreen'> Most</span> Popular
                        Course
                        <span className='absolute max-w-full right-0 bottom-[30px] lg:bottom-[50px]   '>
                            <img src={vec} alt="text_underline" /></span>
                    </h4>
                </div>
                <div className="right">
                    <CoursesCard />
                </div>
            </div>
        </section>
    )
}

export default Popular