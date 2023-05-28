import React from 'react';
import student from '../img/student_1.png';
import exclamation from '../img/exclamation.svg'


function FeedbackCard({ name, title, pix, comment }) {

    return (
        <div className='main  shadow-lg p-8 bg-white rounded-2xl w-[100%] relative' >
            <span> <img src={exclamation} className="w-8 absolute right-6 top-6 " alt="exclamation mark" /> </span>
            <div className="top flex items-left gap-4 mb-6 ">
                <img src={pix} className='w-12 rounded-full  2xl:w-16' alt="" />
                <div className="title text-left">
                    <h3 className="name font-bold text-md 2xl:text-2xl">
                        {name}
                    </h3>
                    <p className="text-xs 2xl:text-lg">
                        {title}
                    </p>
                </div>
            </div>
            <div className="body text-left">
                <p className='text-sm 2xl:text-lg' >{comment}
                </p>
            </div>
        </div >
    )
}

export default FeedbackCard