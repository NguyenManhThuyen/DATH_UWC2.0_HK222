import Sidebar from '@components/App/sidebar';
import React from 'react';

const TaskView = () => {
    return (
        <>
            <Sidebar></Sidebar>
            <div className="w-[calc(100%-300px)] ml-auto p-3">
                <div className='flex justify-between mt-3 mb-5'>
                    <MemberDetailLeft></MemberDetailLeft>
                    <MemberDetailRight></MemberDetailRight>
                </div>
                    <MemberTable></MemberTable>
                    <MemberTableItem 
                    bg = "bg-white" 
                    location = "167 Phạm Hữu Lầu Phường Mỹ Phước Quận 7 TP. HCM" 
                    leader = "Nguyễn Văn A" 
                    mem1 = "Nguyễn Văn A"
                    mem2 = "Nguyễn Văn A"
                    mem3 = "Nguyễn Văn A"></MemberTableItem>
                    
                    <MemberTableItem 
                    bg = "bg-[#B2FFDA]" 
                    location = "167 Phạm Hữu Lầu Phường Mỹ Phước Quận 7 TP. HCM" 
                    leader = "Nguyễn Văn A" 
                    mem1 = "Nguyễn Văn A"
                    mem2 = "Nguyễn Văn A"
                    mem3 = "Nguyễn Văn A"></MemberTableItem>
                    
                    <MemberTableItem 
                    bg = "bg-white" 
                    location = "167 Phạm Hữu Lầu Phường Mỹ Phước Quận 7 TP. HCM" 
                    leader = "Nguyễn Văn A" 
                    mem1 = "Nguyễn Văn A"
                    mem2 = "Nguyễn Văn A"
                    mem3 = "Nguyễn Văn A"></MemberTableItem>

                    <MemberTableItem 
                    bg = "bg-[#B2FFDA]" 
                    location = "167 Phạm Hữu Lầu Phường Mỹ Phước Quận 7 TP. HCM" 
                    leader = "Nguyễn Văn A" 
                    mem1 = "Nguyễn Văn A"
                    mem2 = "Nguyễn Văn A"
                    mem3 = "Nguyễn Văn A"></MemberTableItem>

                    <MemberTableFooter></MemberTableFooter>
            </div>
        </>
    );
};

const MemberDetailLeft = () => {
    return (
        <div className='w-[73%] h-[250px] bg-white rounded-2xl shadow-xl py-8 px-5'>
            <div className='flex h-[20%] mb-2 items-center'>
                <button type="button"><i className="ri-arrow-left-line text-[28px] font-bold"></i></button>
                <h2 className='font-work uppercase text-[26px] font-semibold ml-5'>Duty ID <span>#1001</span></h2>
            </div>
            <div className='h-[80%] flex items-start justify-between text-[18px] xl:text-[20px] font-work'>
                <div className='w-[48%] h-full flex flex-col items-start justify-between'>
                    <p className='flex items-center'><span className='pr-4'><i class="ri-user-fill"></i></span><strong className='pr-4'>Driver: </strong><span>Thomas Tuchel</span></p>
                    <p className='flex items-center'><span className='pr-4'><i class="ri-compass-3-fill"></i></span><strong className='pr-4'>Duty ID: </strong><span>LT1003</span></p>
                    <p className='flex items-center'><span className='pr-4'><i class="ri-time-fill"></i></span><strong className='pr-4'>Shift ID: </strong><span>2001</span></p>
                </div>
                <div className='w-[48%] h-full flex flex-col items-start justify-between'>
                    <p className='flex items-center'><span className='pr-4'><i class="ri-roadster-fill"></i></span><strong className='pr-4'>License Plates: </strong><span>51-A1-45678</span></p>
                    <p className='flex items-center'><span className='pr-4'><i class="ri-time-fill"></i></span><strong className='pr-4'>End Time: </strong><span>9:00</span></p>
                    <span className='px-10 py-[5px] rounded-lg font-work font-medium bg-[#00ab55] text-white'>In Progress</span>
                </div>
            </div>
        </div>
    );
}

const MemberDetailRight = () => {
    return (
        <div className='w-[23%] h-[250px] rounded-2xl shadow-xl py-8 px-5'>
            <img src="../../assets/MemberDetail/images1.png" className='w-[95%] xl:w-[70%] mx-auto'/>
            <div className='text-center'>
                <button className='px-10 py-[5px] bg-[#00ab55] text-white font-semibold font-work mt-3 rounded-xl transition-all hover:bg-[#15F901]'>Route</button>
            </div>
        </div>
    );
}

const MemberTable = () => {
    return (
        <div>
            <ul className='w-full h-[90px] bg-[#018241] rounded-t-3xl text-white font-pop text-[16px] lg:text-[18px] font-semibold flex items-center shadow-2xl'
            style={{
                marginBottom: "0",
            }}>
                <li className='w-[60%] text-center'>Location</li>
                <li className='w-[20%] text-center'>Leader</li>
                <li className='w-[20%] text-center'>Members</li>
            </ul>
        </div>
    );
}

const MemberTableItem = (props) => {
    return (
        <ul className={`w-full min-h-[100px] py-3 ${props.bg} text-black font-work text-[14px] lg:text-[18px] flex items-center shadow-2xl`}
        style={{
                marginBottom: "0",
        }}>
            <li className='w-[60%] text-center'>{props.location}</li>
            <li className='w-[20%] text-center'>{props.leader}</li>
            <li className='w-[20%] text-center'>
                <ul>
                    <li>{props.mem1}</li>
                    <li>{props.mem2}</li>
                    <li>{props.mem3}</li>
                </ul>
            </li>
        </ul>
    );
}

const MemberTableFooter = () => {
    return (
        <div className='w-full h-[20px] bg-white rounded-b-3xl shadow-2xl'></div>
    )
}
export default TaskView;