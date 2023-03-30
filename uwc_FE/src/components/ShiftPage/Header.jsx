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
                <button className='absolute top-0 right-0 h-full px-5 rounded-r-lg' type='submit'>
                    <i className="ri-search-line text-[20px]"></i>
                </button>
            </form>
        </div>
    );
};

export default Header;