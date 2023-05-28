import React from 'react';
import teamImg from '../img/team.png'
import Signup from './Signup';

function Join() {
    return (
        <section className="join bg-Popgreen mt-12 py-12 lg:py-24">
            <div className="main container flex flex-col  lg:flex-row lg:items-center gap-8 lg:justify-between">

                <div className="left">
                    <img src={teamImg} alt="team pix" />
                </div>
                <div className="right flex flex-col lg:items-start justify-between ">
                    <div className="top mb-6 flex flex-col items-center lg:items-start lg:mb-16 2xl:w-[95%]">
                        <h3 className='text-black text-3xl font-bold mb-2 md:mb-8  md:text-2xl lg:text-3xl  2xl:text-4xl lg:text-left lg:leading-24 lg:mb-0 relative  '>Join <span className='text-green '>World's largest </span> learning platform today
                        </h3>
                        <p className=' text-md text-left md:text-lg 2xl:text-2xl 2xl:mt-4'>Start learning by registering for free.</p>
                    </div>
                    <Signup />
                </div>

            </div>
        </section>
    )
}

export default Join