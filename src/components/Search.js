import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

function Search() {
    return (
        <section className="search shadow-lg mt-8 lg:mt-0  ">
            <div className="input relative">
                <input className='text-sm md:text-lg py-[12px] md:py-[22px] w-full px-[14px] bg-gray-50  focus:bg-Hovergreen focus:border-green focus:ring-green focus:outline-none lg:py-[8px] 2xl:py-[16px]  xl:text-md 2xl:text-xl  '
                    type="text"
                    name="search"
                    id="search"
                    placeholder='What do want to learn?' />

                <MagnifyingGlassIcon className='w-6 absolute inset-y-3 md:inset-y-6  right-4 text-grey lg:inset-y-3  2xl:inset-y-4 2xl:w-6' />
            </div>
        </section>
    )
}

export default Search