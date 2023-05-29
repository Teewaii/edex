import React from 'react'
import FeedbackCard from './FeedbackCard';
import FeedbackData from '../components/FeedbackData';
import vec from '../img/Vector 2.svg';



function Feedback() {
    return (
        <section className="mt-12 ">
            <div className="main flex flex-col items-start">
                <div className="top text-center flex flex-col lg:text-left 2xl:mb-6">
                    <h1 className='text-green header2 mb-4 md:mb-8  md:text-5xl leading-[40px] lg:text-4xl 2xl:text-5xl lg:text-left lg:leading-[50px] lg:mb-[12px] relative  '><span className='text-Herogreen '>Student</span> Feedback
                        <img src={vec} className='text_underline absolute top-[32px] right-[24px] w-[160px] md:top-[43px] md:right-[154px] md:w-[215px] lg:left-[146px] lg:w-[158px] 2xl:w-[220px] lg:top-[40px]  2xl:left-[195px] ' alt="" />
                    </h1>
                    <p className=' text-md md:text-2xl 2xl:text-2xl 2xl:mt-4 text-grey mb-8'>Various versions have evolved over the years, sometimes by accident.</p>
                </div>
                <div className="feedbacks flex flex-col gap-6 md:gap-10 lg:flex-row lg:justify-center lg:gap-10 lg:py-8">
                    {FeedbackData.map(({ name, title, comment, pix }, index) =>
                        <FeedbackCard key={index}

                            name={name}
                            title={title}
                            comment={comment}
                            pix={pix}

                        />
                    )}
                </div>
            </div>
        </section>
    )
}

export default Feedback