import React from 'react';
import p1 from '../img/PenNib.svg';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';

function CatCard({ title, pix }) {
    return (
        <div className='main flex items-center justify-between py-2 px-3 rounded-md shadow-md  hover:shadow-xl gap-3 hover:border-2 hover:border-green hover:bg-Hovergreen transition-all ease-in-out delay-300 2xl:py-4 2xl:px-5 2xl:gap-6 cursor-pointer'>
            <div className="left flex items-center gap-2 justify-between">
                <span><img className=' w-6' src={pix} alt="" /></span>
                <p className='text-sm 2xl:text-lg'>{title}</p>
            </div>
            <div className="right min-w-6 p-1 text-green rounded-md hover:text-white hover:bg-green">
                <ArrowUpRightIcon />
            </div>
        </div>
    )
}

export default CatCard