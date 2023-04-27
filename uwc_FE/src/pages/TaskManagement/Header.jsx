import React from 'react';
import FixedTop from './FixedTop';

const Header = () => {
    return (
        <div className='mb-3'>
            <FixedTop name="Danh sách ca" button="Tạo ca mới"></FixedTop>
            <form autoComplete='off' className='relative max-w-[55%]'>
                <input 
                type="search" 
                className='bg-[#ECF6EF] w-full transition-all font-work border-[2px] outline-none box-border rounded-lg focus:border-blue-500
                pl-5 pr-12 py-2 text-[16px]' 
                placeholder='Search'/>
                <button className='absolute top-2/4 -translate-y-2/4 right-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </button>
            </form>
        </div>
    );
};

export default Header;