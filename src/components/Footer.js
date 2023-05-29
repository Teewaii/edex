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
        <section className="footer py-20 lg:py-24">
            <div className="main container grid grid-cols-2 gap-x-2 lg:flex lg:flex-col lg:items-start">
                <div className="address flex flex-col items-start text-left mt-8 order-8 col-span-2 lg:mt-0">
                    <div className="logo flex w-16 mb-4">
                        <img src={logo} alt="" />
                    </div>
                    <h3 className='font-bold text-md '>Contact Us</h3>
                    <p className='text-sm text-grey py-2'>Call : +123 400 123</p>
                    <p className='text-sm text-grey w-[85%]'>Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.</p>
                    <p className='text-sm text-grey py-2' >Email: example@mail.com</p>
                    <div className="socials flex items-center gap-2 ">
                        {socialIcons.map((icon, index) =>
                            <div key={index} className="bg-Popgreen w-8 p-2 flex items-center justify-center rounded-md mt-4">
                                <Link to='#'> <img src={icon} className='h-4' alt="icon" /></Link>
                            </div>
                        )}
                    </div>
                </div>
                <div className="explore text-left order-first mb-8 lg:mb-0">
                    <h3 className='font-bold text-md mb-4 '>Explore</h3>
                    <ul className='text-sm text-grey flex flex-col gap-2 '>
                        {links.map(({ anc, url }, index) =>
                            <li key={index}>
                                <Link to={url}>{anc}</Link>
                            </li>
                        )}

                    </ul>
                </div>
                <div className="category text-left  mb-8 lg:mb-0">
                    <h3 className='font-bold text-md mb-4 '>Category</h3>
                    <ul className=' text-sm text-grey flex flex-col gap-2 '>
                        {categories.map((category, index) =>
                            <li key={index}>
                                <Link to='/'>{category}</Link>
                            </li>
                        )}

                    </ul>
                </div>
                <div className="subscribe col-span-2 text-left mb-8 flex flex-col">
                    <h3 className='font-bold text-md  '>Subscribe</h3>
                    <p className='text-sm text-grey py-2 w-[85%]'>Lorem Ipsum has been them an industry printer took a galley make book.</p>
                    <input className='p-2  bg-gray-100 rounded-md my-4 focus:outline-none focus:ring-2 focus:ring-green' type="email" name="email" id="email" placeholder='Email here' />
                    <Subscribe />
                </div>
            </div>

        </section>
    )
}

export default Footer