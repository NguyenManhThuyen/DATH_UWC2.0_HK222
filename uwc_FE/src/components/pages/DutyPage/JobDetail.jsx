import React from 'react';
import FixedTop from '../ShiftPage/FixedTop';

const JobDetail = () => {
    return (
        <div>
          <FixedTop name="Danh sách nhiệm vụ" button="Tạo nhiệm vụ mới"></FixedTop>
          <ShiftDetail></ShiftDetail>
        </div>
    );
};

const ShiftDetail = () => {
    return (
        <div className='flex justify-between mb-5 md:flex-wrap'>
            <ShiftDetailLeft
            shift = "#4004"
            date = "12/05/2023"
            status = "In Progress"
            start = "6:00"
            end = "9:00"></ShiftDetailLeft>
            <ShiftDetailRight
            timeAgo= "1 minute ago"
            shift = "#1001"
            desc = "Updated Collected"
            result = "Confirm"
            tick = {<i className="ri-check-line"></i>}></ShiftDetailRight>
        </div>
    )
}

const ShiftDetailLeft = (props) => {
    return (
        <div className='w-full mb-[30px] border-[2px] border-gray-300 
        xl:shadow-xl xl:mb-0 xl:w-[62%] xl:border-none h-[180px] bg-white rounded-2xl p-5'>
            <div className='flex h-[20%] mb-2 items-center'>
                <button type="button"><i className="ri-arrow-left-line text-[28px] font-bold"></i></button>
                <h2 className='font-work uppercase text-[26px] font-semibold ml-5'>Thông tin ca <span>{props.shift}</span></h2>
            </div>

            <div className='h-[80%] flex items-start justify-between'>
                <div className='flex flex-col h-full w-[48%] font-work'>
                    <div className='flex items-start text-[24px]'>
                        <span><i className="ri-calendar-line font-bold"></i></span>
                        <span className='ml-5'><strong className='font-semibold'>Ngày: </strong> {props.date}</span>
                    </div>
                    <div className='w-full h-[40px] mt-auto'>
                        <span className='w-full h-full bg-[#018241] text-white flex items-center justify-center rounded-2xl text-[18px] font-bold'>{props.status}</span>
                    </div>
                </div>

                <div className='flex flex-col h-full lg:w-[40%] font-work'>
                    <div className='flex items-center'>
                        <span><i class="ri-time-fill text-[28px]"></i></span>
                        <span className='text-[24px] ml-5'>
                            <strong>Giờ bắt đầu: </strong>{props.start}
                        </span>
                    </div>
                    <div className='flex items-center'>
                        <span><i class="ri-time-fill text-[28px]"></i></span>
                        <span className='text-[24px] ml-5'>
                            <strong>Giờ kết thúc: </strong>{props.end}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ShiftDetailRight = (props) => {
    return (
        <div className='w-full border-[2px] h-[200px] border-gray-200 p-2 xl:p-0 xl:w-[35%] xl:h-[180px] bg-white rounded-2xl 
        xl:shadow-xl font-work'>
            <div className=' h-[20%] mb-2'>
                <h2 className='text-[26px] font-semibold uppercase flex items-center justify-center'>Thông báo tiến độ</h2>
            </div>
            <div className='w-[85%] h-auto p-3 rounded-lg bg-[#ebf8f2] mx-auto text-[20px]'>
                <p className='font-medium italic'><span>{props.timeAgo} </span><span>{props.shift}</span></p>
                <p className='font-semibold '>{props.desc}</p>
                <p className='text-[#00ab55] font-medium flex items-center'><span>{props.result} </span><span className='text-white bg-[#00ab55] flex items-center justify-center w-7 h-7 ml-2 font-bold rounded-full'>{props.tick}</span></p>
            </div>
        </div>
    )
}

export default JobDetail;