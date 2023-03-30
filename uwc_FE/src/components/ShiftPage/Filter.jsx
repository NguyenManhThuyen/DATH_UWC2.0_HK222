import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import DropdownHook from './DropDown';


const Filter = () => {
    const {control, setValue} = useForm();
    const ref = useRef();
    const ref2 = useRef(null);
    return (
        <div className='mb-5'>
            <h3 className='font-work text-[34px] font-bold mb-3'>
                Filter
            </h3>
            <form className='flex items-start justify-between'>
                <div className='w-full max-w-[55%]'>
                    <div className='flex flex-col w-full relative'>
                        <input type="text"
                            placeholder='Date'
                            ref={ref}
                            onFocus={(e) => {ref.current.type = "date", ref2.current.className = "hidden"}}
                            onBlur={() => {ref.current.type = "date"}}
                            className='border box-border border-gray-200 w-full text-black px-5 py-2 bg-[#D9D9D9] outline-none rounded-lg transition-all mb-4'
                        />
                        <span className='absolute top-0 right-0 h-full px-5 py-2 text-[18px]' ref={ref2}>
                            <i className="ri-calendar-line"></i>
                        </span>
                    </div>
                    <div>
                        <DropdownHook control={control} setValue={setValue} name="status"></DropdownHook>
                    </div> 
                </div>
                <button type="submit" className='font-work font-bold text-white bg-[#018241] mr-8 rounded-full transition-all hover:bg-[#15F901]
                w-[60px] h-[60px] lg:text-[28px] '>
                    <i className="ri-filter-fill"></i>
                </button>
            </form>
        </div>
    );
};

export default Filter;