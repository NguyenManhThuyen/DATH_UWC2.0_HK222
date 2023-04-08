import React, { useState } from 'react';
import { useWatch } from 'react-hook-form';
import useClickOutSide from '../hooks/useClickOutSide';

const dropdownData = [
    {
        id: 1,
        value: "online",
        text: "Online",
    },
    {
        id: 2,
        value: "offline",
        text: "Offline",
    },
]

const DropdownHook = ({control, setValue, name}) => {
    const {show, setShow, nodeRef} = useClickOutSide();
    useWatch({
        control,
        name: "status",
        defaultValue: "", //default value before render
    })
    const [label, setLabel] = useState("Select Status");
    const handleClickDropDown = (e) => {
        setValue(name, e.target.dataset.value);
        setLabel(e.target.textContent);
        setShow(false);
    }
    return (
        <div className='relative' ref={nodeRef}>
            <div className='px-5 py-2 rounded-lg border border-gray-100 bg-[#D9D9D9] flex items-center justify-between cursor-pointer' onClick={() => setShow(!show)}>
                <span>{label}</span>
            </div>
            <div className={`absolute top-full left-0 w-full rounded-lg bg-[#D9D9D9] ${show ? "" : "opacity-0 invisible"}`}>
                {
                    dropdownData.map((item) => (
                        <div className='p-5 cursor-pointer transition-all hover:bg-white' 
                        onClick={handleClickDropDown}
                        data-value ={item.value}
                        key={item.id}>{item.text}</div>
                    ))
                }
            </div>
            <span className='absolute top-0 right-0 h-full px-3 z-1 cursor-pointer' onClick={() => setShow(!show)}><i className="ri-arrow-down-s-fill text-[28px]"></i></span>
        </div>

    );
};

export default DropdownHook;