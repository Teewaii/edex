import React from 'react';
import teamImg from '../img/team.png'
import Signup from './SignupButton';
import SignupButton from './SignupButton';

function Join() {
    return (
        <section className="join bg-Popgreen mt-12 py-20 md:mt-24 md:py-36">
            <div className="main container flex flex-col  lg:flex-row lg:items-center gap-14 lg:justify-between">

                <div className="left">
                    <img src={teamImg} alt="team pix" />
                </div>
                <div className="right flex flex-col lg:items-start justify-between ">
                    <div className="top mb-6 flex flex-col items-center lg:items-start lg:mb-10 ">
                        <h3 className='text-black text-3xl font-bold mb-2 md:mb-8  md:text-4xl lg:text-3xl  2xl:text-4xl lg:text-left lg:leading-24 lg:mb-2 relative  '>Join <span className='text-green '>World's largest </span> learning platform today
                        </h3>
                        <p className=' text-md text-left md:text-2xl 2xl:text-xl 2xl:mt-4'>Start learning by registering for free.</p>
                    </div>
                    <SignupButton />
                </div>

            </div>
        </section>
    )
}

export default Join