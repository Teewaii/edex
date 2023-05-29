import React from 'react';
import ScrollToTop from "react-scroll-to-top";
import { ChevronUpIcon } from '@heroicons/react/24/solid';


function ScrollToTOp() {
    return (
        <div className=''>


            <ScrollToTop style={{ color: '#20B486', }} smooth component={<ChevronUpIcon />} />
        </div>
    )
}

export default ScrollToTOp