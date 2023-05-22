import React from 'react';
import CatCard from './CatCard';
import vec from '../img/Vector 2.svg';
import CatData from '../components/CatData'

function Categories() {
    return (
        <section className="header py-12 lg:py-24">
            <div className="main container  ">
                <div className="top text-center flex flex-col lg:text-left  ">
                    <h1 className='text-green header2 mb-2 md:mb-8  md:text-5xl leading-[40px] lg:text-4xl 2xl:text-5xl lg:text-left lg:leading-[50px] lg:mb-[12px] relative  '><span className='text-Herogreen '>Most </span>Popular Categories
                        <img src={vec} className='text_underline absolute top-8 right-20  lg:left-[85px] lg:w-[12%] lg:-bottom-2 -z-50 ' alt="" />
                    </h1>
                    <p className=' text-md md:text-lg text-grey mb-8'>Various versions have evolved over the years, sometimes by accident.</p>
                </div>

                <div className="categories flex flex-wrap gap-4">
                    {CatData.map(({ title, pix }, index) =>
                        <CatCard key={index}
                            title={title}
                            pix={pix}

                        />
                    )}
                </div>

            </div>
        </section>
    )
}

export default Categories