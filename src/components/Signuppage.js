import React from 'react';
import fb from '../img/fb.svg';
import google from '../img/google.svg';
import Login from './Login';
import logo from '../img/logo.svg';
import SignupBanner from './SignupBanner';


function Signuppage() {
    return (
        <section className="signup flex items-center justify-center shadow-xl py-12 container  md:py-36 lg:py-24 h-[90%]">
            <div className="main_form flex flex-col items-center  py-12 shrink-0 md:py-18 rounded-lg bg-white lg:w-[50%]">
                <h1 className='header3 mb-4'>Sign Up</h1>
                <div className="input w-[100%] ">
                    <form className='flex flex-col items-center gap-5 ' action="submit">
                        <input type="text" name="f_name" id="f_name_id" placeholder='First Name' className='p-3 w-[80%] text-sm md:text-xl  bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-green md:p-5 lg:p-4' />
                        <input type="text" name="l_name" id="l_name" placeholder='Last Name' className='p-3 w-[80%] text-sm md:text-xl bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-green md:p-5 lg:p-4' />
                        <input type="email" name="email" id="email" placeholder='Email' className='p-3 w-[80%] text-sm md:text-xl bg-gray-100 rounded-md  focus:outline-none focus:ring-2 focus:ring-green md:p-5 lg:p-4' />
                        <input type="password" name="password" id="password" placeholder="Password" className='p-3 w-[80%] text-sm md:text-xl bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-green md:p-5 lg:p-4' />
                        <button type="submit" className='text-white px-[12px] py-[12px] w-[80%] font-bold text-sm md:text-xl rounded-[4px] bg-green  cursor-pointer hover:bg-Darkgreen transition-all ease-in-out duration-300 md:px-[18px] md:py-[14px] 2xl:py-[16px]  2xl:text-2xl '>Sign up</button>
                    </form>
                </div>

                <div className="bottom flex flex-col items-center">
                    <p className=' text-grey mt-4'>or <span className='text-green font-bold'>login</span>  to continue</p>
                    <div className="socials flex gap-2">
                        <div className="fb bg-Popgreen w-8 p-2 flex items-center justify-center rounded-md mt-4">
                            <img className='h-4' src={fb} alt="facebook" />
                        </div>
                        <div className="google bg-Popgreen w-8 p-2 flex items-center justify-center rounded-md mt-4">
                            <img className='h-4 ' src={google} alt="google" />
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='hidden w-[45%] bg-SignUpbg bg-cover  h-screen lg:flex'>
                <SignupBanner />
            </div> */}

        </section>
    )
}

export default Signuppage