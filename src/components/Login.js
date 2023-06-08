import React from 'react';
import { LockClosedIcon } from '@heroicons/react/24/outline';

function Login() {
    return (
        <div className="login flex items-center gap-[2px] cursor-pointer text-gray px-[12px] py-[12px] rounded-[4px] hover:bg-yellow group transition-all ease-in-out duration-300 md:px-[18px] md:py-[14px]">
            <span className="icon w-[18px] md:w-[22px] ">
                <LockClosedIcon className='stroke-green group-hover:stroke-white' />
                {/* <Image src={lock} className='fill-white' width={18} height={18} alt='lock_icon' /> */}
            </span>
            <a href='/login' className='text-[18px] text-grey group-hover:text-white md:text-[20px] lg:text-[15px] 2xl:text-[18px] lg:gap-[1rem]' >Login</a>
        </div>
    )
}

export default Login