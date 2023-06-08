import React from 'react';
import fb from '../img/fb.svg';
import google from '../img/google.svg';
import SignupBanner from './SignupBanner';
import Pri_signUp from '../components/Pri_signUp'


function SignIn() {
    return (



        <section className="signin flex items-center justify-between  py-12  md:py-36 lg:py-24 h-[90%] ">
            <div className="main_form flex flex-col items-center container py-12 shrink-0 md:py-18 rounded-lg bg-white lg:w-[50%]">
                <h1 className='header3'>Welcome!</h1>
                <p className=' text-grey mb-4'>Sign in to continue</p>
                <div className="input w-[100%] ">
                    <form className='flex flex-col items-center gap-5 ' action="submit">
                        <input type="email" name="email" id="email" placeholder='Email' className='p-3 w-[80%] text-sm md:text-xl bg-gray-100 rounded-md  focus:outline-none focus:ring-2 focus:ring-green md:p-5 lg:p-4' />
                        <input type="password" name="password" id="password" placeholder="Password" className='p-3 w-[80%] text-sm md:text-xl bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-green md:p-5 lg:p-4' />
                        <button type="submit" className='text-white px-[12px] py-[12px] w-[80%] font-bold text-sm md:text-xl rounded-[4px] bg-green  cursor-pointer hover:bg-Darkgreen transition-all ease-in-out duration-300 md:px-[18px] md:py-[14px] 2xl:py-[16px]  2xl:text-2xl '>Sign in</button>
                    </form>

                    <div className="bottom flex flex-col items-center">
                        <p className=' text-green mt-4'>or <span className='text-black font-bold cursor-pointer'> create </span> an account with</p>
                        <div className="socials flex gap-2">
                            <div className="fb bg-Popgreen cursor-pointer hover:shadow-xl w-8 p-2 flex items-center justify-center rounded-md mt-4">
                                <img className='h-4' src={fb} alt="facebook" />
                            </div>
                            <div className="google bg-Popgreen cursor-pointer hover:shadow-xl w-8 p-2 flex items-center justify-center rounded-md mt-4">
                                <img className='h-4 ' src={google} alt="google" />
                            </div>
                        </div>
                    </div>
                </div>
                <p className=' text-green cursor-pointer hover:font-bold mt-4'>Forget password?</p>
            </div>

            <div className='hidden w-[45%] bg-SignUpbg bg-cover h-screen relative lg:flex'>
                <div className="banner flex flex-col items-center justify-center w-[100%] h-[100%] px-8 relative z-30">
                    {/* <img className='mt-8 ml-8' src={logo} alt="" /> */}
                    <h1 className=' text-white lg:text-3xl 2xl:text-4xl font-black mb-2 '>Hello, New here?</h1>
                    <p className='text-white mb-8 2xl:text-xl '>Enter your details and start your journey with us!</p>
                    <Pri_signUp
                    />


                </div>
                <div className="overlay bg-Darkgreen absolute left-0 right-0 top-0 bottom-0 opacity-50 ">
                </div>

            </div>
        </section>





    )
}

export default SignIn