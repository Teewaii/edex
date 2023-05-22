import React from 'react';
// import c1 from '../img/course1.png';
import { StarIcon } from '@heroicons/react/24/outline';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';

function CoursesCard({ title, desc, price, pix, reviewCount }) {
    const starIcons = [];
    for (let i = 0; i < 5; i++) {
        starIcons.push(<StarIcon key={i} className='w-4 fill-yellow text-yellow border-0' />);
    }
    return (

        <div className='bg-white rounded-2xl p-3 md:p-4 pb-6 shadow-lg max-w-[300px]'>

            <div className="image flex flex-col mb-4 relative">
                <span className='absolute text-md font-extrabold top-4 left-4 bg-white opacity-70 py-[5px] px-[12px] rounded-md'>{title}</span>
                <img src={pix} alt="instructor_picture" className='h-[180px]' />
            </div>
            <div className="text border-gray-200 border-b-[1px] text-left pb-4">
                <h4 className='body_L_400' >{desc}</h4>
                <span className='ratings flex gap-1 mt-2 '>
                    {starIcons}
                    <span className='body_L_500 text-grey' >({reviewCount})</span>
                </span>
            </div>
            <div className="price flex items-center justify-between mt-4">
                <h2 className='header4'>$ {price}</h2>
                <span className='p-2 rounded-lg bg-white shadow-lg hover:bg-green group'><ArrowUpRightIcon className='w-6 text-grey group-hover:text-white' /></span>
            </div>
        </div>
    )
}

export default CoursesCard