import React from 'react';

const FixedTop = (props) => {

    return (
        <div>
            <div className='flex items-center justify-between mb-4 font-work'>
                <h1 className='font-bold text-[32px] xl:text-[40px]'>
                    {props.name}
                </h1>
                <button type='button'
                    className='w-fit bg-[#018241] text-white rounded-xl transition-all px-5 py-2 mr-8  hover:bg-[#15F901]'
                    onClick={props.onClick}>
                    <span className='uppercase font-semibold'>
                        {props.button}
                    </span>
                </button>
            </div>
            {props.children}
        </div>
    );
};

export default FixedTop;
