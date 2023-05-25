import React from 'react'

function InstCard({ name, profession, pix }) {
    return (
        <div className='bg-white rounded-lg p-3 md:p-2 pb-6 shadow-lg shrink-0 w-[200px] '>

            <div className="image flex flex-col mb-4 lg:mb-2 relative ">
                <img src={pix} alt="instructor_picture" className='h-[fit]' />
            </div>
            <div className="text border-gray-200 text-center ">
                <h4 className='body_L_400' >{name}</h4>
                <span className='text-sm lg:text-[16px] text-gray-400' >{profession}</span>
            </div>
        </div>
    )
}

export default InstCard