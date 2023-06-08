import React from 'react';
import logo from '../img/logo.svg';
import Pri_signUp from '../components/Pri_signUp'

function SignupBanner() {
    return (
        <div className="banner flex flex-col items-center justify-center w-[100%] h-[100%] px-8">
            {/* <img className='mt-8 ml-8' src={logo} alt="" /> */}
            <h1 className='text-white lg:text-3xl 2xl:text-4xl font-black mb-2 '>Hello, Already have an account?</h1>
            <p className='text-white mb-8 2xl:text-xl '>Continue to login page</p>
            <div className="login">
                <li className="login text-Darkgreen font-bold px-[12px] py-[12px] rounded-[4px] bg-white group  cursor-pointer hover:bg-Darkgreen transition-all ease-in-out duration-300 md:px-[18px] md:py-[14px] list-none ">
                    <a href='/login' className='text-[16px] group-hover:text-white md:text-[20px] lg:text-[15px] lg:gap-[1rem] 2xl:text-[18px]  lg:px-8'>Login</a>

                </li >
            </div>
        </div>
    )
}

export default SignupBanner