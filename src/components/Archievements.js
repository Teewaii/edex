import React from 'react';
import ArchData from './ArchData';
import vec from '../img/Vector 2.svg';
import ArchivementCard from './ArchivementCard';
import archieveImage from '../img/archivevement_pix.png';
import Feedback from './Feedback';

function Archievements() {
    return (

        <section className="Archievements py-20 lg:py-24">

            <div className="main_container container " >
                <div className="top text-center flex flex-col lg:text-left ">
                    <h1 className='text-green header2 mb-4 md:mb-8  md:text-5xl leading-[40px] lg:text-4xl 2xl:text-5xl lg:text-left lg:leading-[50px] lg:mb-[12px] relative  '><span className='text-Herogreen '>Our</span> Achievement
                        <img src={vec} className='text_underline absolute top-[32px] right-[50px] w-[190px] lg:left-[70px] lg:w-[220px] 2xl:w-[280px] lg:top-[40px]  2xl:left-[90px] ' alt="" />
                    </h1>
                    <p className=' text-md md:text-lg 2xl:text-2xl 2xl:mt-4 text-grey mb-8'>Various versions have evolved over the years, sometimes by accident.</p>
                </div>
                <div className="bottom flex flex-col-reverse lg:flex-row lg:justify-between items-center">
                    <div className="archievements mb-16 flex flex-col gap-6 md:grid md:grid-cols-2 lg:gap-[50px]       
        ">
                        {

                            ArchData.map(({ title, pix, sub }, index) =>

                                <ArchivementCard
                                    key={index}
                                    title={title}
                                    pix={pix}
                                    sub={sub}
                                />

                            )
                        }

                    </div>
                    <div className="left ">
                        <img src={archieveImage} alt="" className='mb-10 lg:mb-0' />
                    </div>

                </div>

                <Feedback />
            </div>
        </section>
    )
}

export default Archievements