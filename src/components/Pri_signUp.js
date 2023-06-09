import React from 'react';
import { Link } from "react-router-dom";


function SignupButton() {
    return (

        <li className="signup text-Darkgreen font-bold px-[12px] py-[12px] rounded-[4px] bg-white group  cursor-pointer hover:bg-Darkgreen transition-all ease-in-out duration-300 md:px-[18px] md:py-[14px] list-none ">
            <a href='/login' className='text-[16px] group-hover:text-white md:text-[20px] lg:text-[15px] 2xl:text-[18px] lg:gap-[1rem]'>Sign up for Free</a>

        </li >

    )
}

export default SignupButton      