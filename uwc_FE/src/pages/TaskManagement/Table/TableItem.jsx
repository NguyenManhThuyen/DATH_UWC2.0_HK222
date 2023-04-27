import React from 'react';

const TableItem = (props) => {
    return (
        <ul className={`w-full h-[100px] ${props.bg} text-black font-work text-[18px] flex items-center shadow-2xl
                       xl:text-[16px]`}
            style={{
                marginBottom: "0",
        }}>
            <li className='md:w-[17%] text-center lg:text-[18px] md:text-[15px]'>{props.cont1}</li>
            <li className='md:w-[17%] text-center lg:text-[18px] md:text-[15px]'>{props.cont2}</li>
            <li className='md:w-[17%] text-center lg:text-[18px] md:text-[15px]'>{props.cont3}</li>
            <li className='md:w-[17%] text-center lg:text-[18px] md:text-[15px]'>{props.cont4}</li>
            <li className='md:w-[17%] text-center lg:text-[18px] md:text-[15px]'>{props.cont5}</li>
            <button type='button' className='w-[5%] text-[16px] xl:text-[16px] bg-[#018241] text-white font-pop rounded-3xl font-semibold ml-4 transition-all hover:bg-[#15F901]'><i className="ri-eye-line"></i></button>
            <button type='button' className='w-[5%] md:ml-[10px]  lg:ml-[20px] flex justify-center transition-all hover:text-gray-500'><i className="ri-more-2-fill text-[25px] font-bold"></i></button>
        </ul>
    );
};

export default TableItem;