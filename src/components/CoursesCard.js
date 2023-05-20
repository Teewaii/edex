import React from 'react';
import c1 from '../img/course1.png';
import { StarIcon } from '@heroicons/react/24/outline';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';

function CoursesCard() {
    const starIcons = [];
    for (let i = 0; i < 5; i++) {
        starIcons.push(<StarIcon key={i} className='w-6 fill-yellow text-yellow border-0' />);
    }
    return (

        <div className='bg-white rounded-2xl p-3 md:p-4 pb-6 shadow-lg'>

            <div className="image flex flex-col mb-6 relative">
                <span className='absolute text-lg font-extrabold top-4 left-4 bg-white opacity-70 py-[5px] px-[12px] rounded-md'>HTML</span>
                <img src={c1} alt="instructor_picture" />
            </div>
            <div className="text border-gray-200 border-b-[1px] pb-4">
                <h4 className='body_L_400' >Various versions have evolved daf</h4>
                <span className='ratings flex gap-2 mt-2 '>
                    {starIcons}
                    <span className='body_L_500 text-grey' >(10)</span>
                </span>
            </div>
            <div className="price flex items-center justify-between mt-6">
                <h2 className='header4'>$ 500</h2>
                <span className='p-2 rounded-lg bg-white shadow-lg hover:bg-green group'><ArrowUpRightIcon className='w-6 text-grey group-hover:text-white' /></span>
            </div>
        </div>
    )
}

export default CoursesCard