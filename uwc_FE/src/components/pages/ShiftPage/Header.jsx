import React, { useState } from 'react';
import FixedTop from './FixedTop';

const Header = () => {
    const [showModal, setShowModal] = useState(false);

    const handleCreateShift = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className='mb-3'>
            <FixedTop name='Danh sách ca' button='Tạo ca mới' onClick={handleCreateShift} />

            {showModal && (
                <div className={`fixed z-50 top-0 left-0 w-full h-full flex items-center justify-center ${showModal ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                    <div className="bg-gradient-to-r from-green-400 to-green-500 rounded-lg w-full sm:w-4/6 md:w-3/4 lg:w-1/2 xl:w-1/3">
                        <div className="p-6">
                            <h2 className="text-2xl font-bold mb-4 text-white">Tạo ca mới</h2>
                            <div className="mb-4">
                                <label className="block font-medium mb-2 text-white" htmlFor="shift-date">
                                    Ngày làm việc
                                </label>
                                <input className="bg-gray-100 appearance-none border-2 border-gray-200 rounded py-2 px-4 block w-full" type="date" id="shift-date" name="shift-date" />
                            </div>
                            <div className="mb-4">
                                <label className="block font-medium mb-2 text-white" htmlFor="shift-start-time">
                                    Giờ bắt đầu
                                </label>
                                <input className="bg-gray-100 appearance-none border-2 border-gray-200 rounded py-2 px-4 block w-full" type="time" id="shift-start-time" name="shift-start-time" />
                            </div>
                            <div className="mb-4">
                                <label className="block font-medium mb-2 text-white" htmlFor="shift-end-time">
                                    Giờ kết thúc
                                </label>
                                <input className="bg-gray-100 appearance-none border-2 border-gray-200 rounded py-2 px-4 block w-full" type="time" id="shift-end-time" name="shift-end-time" />
                            </div>
                            <div className="flex justify-end">
                                <button className="bg-gray-300 text-gray-700 rounded-lg py-2 px-4 mr-2 transition-all hover:bg-gray-400" onClick={handleCloseModal}>
                                    Hủy
                                </button>
                                <button className="bg-white hover:bg-gray-200 text-green-500 rounded-lg py-2 px-4 transition-all hover:text-white hover:bg-green-500" type="submit">
                                    Lưu
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <form autoComplete='off' className='relative max-w-[55%]'>
                <input
                    type='search'
                    className='bg-[#ECF6EF] w-full transition-all font-work border-[2px] outline-none box-border rounded-lg focus:border-blue-500
                pl-5 pr-12 py-2 text-[16px]'
                    placeholder='Search'
                />
                <button className='absolute top-0 right-0 h-full px-5 rounded-r-lg' type='submit'>
                    <i className='ri-search-line text-[20px]'></i>
                </button>
            </form>
        </div>
    );
};

export default Header;
