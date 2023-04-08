import React from 'react';

const TableHeader = (props) => {
    return (
        <ul 
        className='w-full h-[90px] bg-[#018241] rounded-t-3xl text-white font-pop font-semibold flex items-center shadow-2xl'>
            <li className='md:w-[17%] text-center lg:text-[18px] md:text-[15px]'>{props.tit1}</li>
            <li className='md:w-[17%] text-center lg:text-[18px] md:text-[15px]'>{props.tit2}</li>
            <li className='md:w-[17%] text-center lg:text-[18px] md:text-[15px]'>{props.tit3}</li>
            <li className='md:w-[17%] text-center lg:text-[18px] md:text-[15px]'>{props.tit4}</li>
            <li className='md:w-[17%] text-center lg:text-[18px] md:text-[15px]'>{props.tit5}</li>
        </ul>
    );
};

export default TableHeader;