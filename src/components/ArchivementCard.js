import React from 'react'

function ArchivementCard({ title, sub, pix }) {
    return (
        <div className='flex items-center gap-4 w-fit h-fit'>

            <div className="image  ">
                <img src={pix} alt="archievement Label" />
            </div>
            <div className="texttext-center text-left ">
                <h3 className='header3' >{title}</h3>
                <span className='body_Regu_400 lg:text-[16px] text-gray-400' >{sub}</span>
            </div>
        </div>
    )
}

export default ArchivementCard