import React from 'react';
import logo from '../img/logo.svg';
import fb from '../img/fb.svg';
import insta from '../img/insta.svg';
import linkdn from '../img/linkdn.svg';
import behance from '../img/behance.svg';
import dribble from '../img/dribble.svg';
import { Link } from 'react-scroll';
import Subscribe from './Subscribe';


function Footer() {
    const socialIcons = [fb, dribble, linkdn, insta, behance,]
    const categories = ["Design", "Development", "Marketing", "Business", "Lifestyle", "Photography", "Music"]
    const links = [{ anc: "Home", url: "home" }, { anc: "About", url: "about" }, { anc: "Course", url: "course" }, { anc: "Blog", url: "blog" }, { anc: "Contact", url: "contact" }]
    return (
        <section className="footer pt-20  pb-12 lg:py-24">
            <div className="main container grid grid-cols-2 md:grid-cols-3 gap-x-2 lg:flex  lg:justify-between lg:gap-24 lg:items-start">
                <div className="address text-sm flex flex-col items-start text-left mt-8 order-8 col-span-2 lg:mt-0 lg:order-first lg:flex-1 2xl:text-xl">
                    <div className="logo flex w-16 2xl:w-24 mb-4">
                        <img src={logo} alt="" />
                    </div>
                    <h3 className='font-bold text-sm text-md md:text-xl 2xl:text-2xl'>Contact Us</h3>
                    <p className=' text-grey py-2 md:text-lg'>Call : +123 400 123</p>
                    <p className=' text-grey w-[85%] md:w-[100%] lg:w-[75%] md:text-lg'>Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.</p>
                    <p className=' text-grey py-2 md:text-lg' >Email: example@mail.com</p>
                    <div className="socials flex items-center gap-2 md:text-lg ">
                        {socialIcons.map((icon, index) =>
                            <div key={index} className="bg-Popgreen w-8 p-2 flex items-center justify-center rounded-md mt-4 hover:bg-Darkgreen">
                                <Link to='#'> <img src={icon} className='h-4' alt="icon" /></Link>
                            </div>
                        )}
                    </div>
                </div>

                <div className="explore text-sm text-left order-first mb-8 lg:mb-0 2xl:text-xl">
                    <h3 className='font-bold text-md mb-4 md:text-xl 2xl:text-2xl'>Explore</h3>
                    <ul className='text-grey flex flex-col gap-2 md:text-lg'>
                        {links.map(({ anc, url }, index) =>
                            <li key={index}>
                                <Link to={url}>{anc}</Link>
                            </li>
                        )}

                    </ul>
                </div>
                <div className="category text-sm text-left  mb-8 lg:mb-0  2xl:text-xl">
                    <h3 className='font-bold text-md mb-4 md:text-xl 2xl:text-2xl'>Category</h3>
                    <ul className='  text-grey flex flex-col gap-2 md:text-lg '>
                        {categories.map((category, index) =>
                            <li key={index}>
                                <Link to='/'>{category}</Link>
                            </li>
                        )}

                    </ul>
                </div>
                <div className="subscribe text-sm col-span-2  md:col-span-1  text-left mb-8 flex flex-col lg:flex-1 2xl:text-xl lg:justify-start lg:items-start">
                    <h3 className='font-bold text-md md:text-xl 2xl:text-2xl'>Subscribe</h3>
                    <p className=' text-grey py-2 w-[85%] md:text-lg'>Lorem Ipsum has been them an industry printer took a galley make book.</p>
                    <input className='p-3  bg-gray-100 rounded-md my-4 focus:outline-none focus:ring-2 focus:ring-green lg:p-4' type="email" name="email" id="email" placeholder='Email here' />
                    <Subscribe />
                </div>
            </div>

        </section>
    )
}

export default Footer