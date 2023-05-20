import React from 'react';
import { LockClosedIcon } from '@heroicons/react/24/outline';

function Login() {
    return (
        <div className="login flex items-center gap-[2px] cursor-pointer text-gray px-[12px] py-[6px] rounded-[4px] hover:bg-yellow group transition-all ease-in-out duration-300 ">
            <span className="icon w-[18px] ">
                <LockClosedIcon className='stroke-green group-hover:stroke-white' />
                {/* <Image src={lock} className='fill-white' width={18} height={18} alt='lock_icon' /> */}
            </span>
            <p className='text-[18px] text-grey group-hover:text-white lg:text-[15px] xl:text-[19px] lg:gap-[1rem]' >Login</p>
        </div>
    )
}

export default Login