import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

function Search() {
    return (
        <section className="search   shadow-lg mt-12 lg:mt-0  ">
            <div className="input relative">
                <input className='text-sm lg:text-body_L_400 py-[12px] w-full px-[14px] bg-gray-50 focus:bg-Hovergreen focus:border-green focus:ring-green focus:outline-none '
                    type="text"
                    name="search"
                    id="search"
                    placeholder='What do want to learn?' />

                <MagnifyingGlassIcon className='w-5 absolute inset-y-3 right-4 text-grey' />
            </div>
        </section>
    )
}

export default Search