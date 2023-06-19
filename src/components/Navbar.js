import React from 'react';
import logo from '../img/logo.svg';
import lock from '../img/Lock.svg';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Signup from './SignupButton';
import { Link } from 'react-scroll';
import Login from '../components/Login'


export default function Navbar({ toggle, handleToggle, setToggle }) {

    // Navigation links
    const navs = ["Home", "Course", "Categories", "Instructors", "Achievement"]


    return (
        <nav className=' border-b-[1px] border-gray-50 relative'>
            <div className="container ">
                <div className="nav_container py-[14px] md:py-0 md:pt-[10px] flex items-center justify-between  relative">

                    <Link to="hero" className='logo w-[90px] md:w-[120px] cursor-pointer ' spy={true} smooth={true} offset={-50} duration={500} >
                        <img src={logo} alt='logo' />
                    </Link>
                    {/* Navigation links */}
                    <div className="links py-4">
                        {!toggle ?

                            // Mobile Navs
                            <ul className="flex flex-col absolute top-20 w-full inset-x-0 py-4 gap-2 bg-green rounded-md lg:hidden md:top-40 z-10 "  >
                                {navs.map((navi, index) => (
                                    <li key={index} className='anchor text-[18px] text-white border-b-2 border-Darkgreen border-opacity-25 pb-[12px] last:pb-0 last:border-b-0 hover:bg-yellow hover:text-white md:text-[24px] '><Link onClick={() => setToggle(true)} to={navi} spy={true} smooth={true} offset={-50} duration={500} >{navi} </Link></li>
                                ))}

                                <div className="absolute top-[325px]  flex  gap-8 justify-center inset-x-0 w-full py-4 rounded-md bg-gray-100 md:top-[382px] lg:hidden">
                                    {/* <div className={toggle ? "absolute top-[320px]  flex  gap-8 justify-center inset-x-0 w-full py-4 rounded-md bg-gray-100 " : " users_desktop flex gap-6"}> */}

                                    <Login />
                                    <Signup />
                                </div>
                            </ul> :

                            // Desktop Navs
                            <ul className="hidden lg:flex gap-8 px-[24px] ">
                                {navs.map((navi, index) => (
                                    <li key={index} className='text-[16px] text-grey hover:text-black cursor-pointer lg:text-[15px] 2xl:text-[18px] lg:gap-[1rem] hover:border-b-[3px] hover:border-green transition-all duration-200 ease-in-out '><Link onClick={() => setToggle(true)} to={navi} spy={true} smooth={true} offset={-50} duration={500} >{navi} </Link></li>
                                ))}
                            </ul>}

                        {/* <ul className={toggle ? "flex flex-col absolute top-20 w-full inset-x-0 py-4 gap-2 bg-green rounded-md" : "flex gap-8 px-[24px] py-[12px]"}>
                            {navs.map((navi, index) => (
                                <li key={index} className={toggle ? 'text-white border-b-2 border-Darkgreen border-opacity-25 pb-2 last:border-b-0 last:pb-0' : 'text-[14px] lg:text-[16px] text-grey hover:text-black cursor-pointer'}>{navi}</li>
                            ))}
                        </ul> */}
                    </div>

                    {/* Hamburger */}
                    <div className="  hamburger w-9 md:w-12  z-10 lg:hidden"
                        onClick={handleToggle}
                    >
                        {toggle ? <Bars3Icon className=' text-green pointer-cursor ' /> : <XMarkIcon className=' text-green pointer-cursor' />}
                    </div>
                    <div className=" hidden lg:flex justify-center  py-4 gap-6   ">
                        {/* <div className={toggle ? "absolute top-[320px]  flex  gap-8 justify-center inset-x-0 w-full py-4 rounded-md bg-gray-100 " : " users_desktop flex gap-6"}> */}

                        <Login />
                        <Signup />

                    </div>
                </div>
            </div>
        </nav>
    )
}
