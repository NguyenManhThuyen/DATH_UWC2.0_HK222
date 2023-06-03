import React, { useState, useEffect, useRef } from 'react';
import { Table, Pagination, Button } from 'react-bootstrap';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import styles from './table.module.scss';
import paginationRange from './pageRange';
import DropdownMenu from './dropDownMenu';
import { NavLink } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../../../../lib/firebase";
import { staffData } from '@mocks/staffdata';

const cx = classNames.bind(styles);

function ShiftTable({ shiftData }) {
  const itemsPerPage = 5;

  // data from firebase
  const [stateData, setStateData] = useState([]);
  useEffect(() => {
    fetchData()
  }, [])

  const [activePage, setActivePage] = useState(1);
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);

  const indexOfLastItem = activePage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = shiftData.slice(indexOfFirstItem, indexOfLastItem);
  const currentCount = currentItems.length;
  const pageCount = Math.ceil(shiftData.length / itemsPerPage);

  const handleActivePage = (pageNumber) => {
    setActivePage(pageNumber);
  };


  function fetchData() {
    const movieCollectionRef = collection(db,'data')
    getDocs(movieCollectionRef)
    .then(response => {
        const movies = response.docs.map(doc => ({
            data:doc.data(),
            id:doc.id,
        }))
        // console.log(response.docs)
        setStateData(movies)
      })
      .catch(error => console.error(error.message))
    }
    if(stateData[0]) {
      console.log(stateData[0]?.data?.data[0]?.StaffData)
    }

  const pageNumbers = paginationRange(activePage, pageCount, 3).map((i) => (
    <Pagination.Item
      className={i === activePage ? cx('active-page') : cx('page-item')}
      key={i}
      active={i === activePage}
      onClick={() => handleActivePage(i)}
    >
      {i}
    </Pagination.Item>
  ));

  const lastRowIndex = currentItems.length - 1;
  if(stateData[0]) {
    return (
      <div className={cx('wrapper')} style={{ overflow: 'auto' }}>
      <Table hover borderless>
        <thead className={cx('thread-row')}>
          <tr>
            <th>ID</th>
            <th>Ngày</th>
            <th>Bắt đầu</th>
            <th>Kết thúc</th>
            <th>Trạng thái</th>
            <th>Số nhiệm vụ</th>
            <th>Hoàn thành</th>
            <th></th>
            <th style={{ borderTopRightRadius: '10px' }}></th>
          </tr>
        </thead>
        <tbody className={cx('table-body')}>
          {currentCount === 0 ? (
            <tr>
              <td className={cx('not-found-result')} colSpan={9}>
                Không có kết quả trả về.<a href="#">Tạo ca ngay tại đây!</a>
              </td>
            </tr>
          ) : (
            stateData[0]?.data?.data[0]?.StaffData.map((shift, index) => (
              shift?.ShiftData.map((item) => 
                (<tr key={item?.id} className={index % 2 ? cx('even-row') : cx('odd-row')}>
                  <td className={index === lastRowIndex ? cx('xxxx') : ''}>{item?.id}</td>
                  <td>{new Date(item?.startTime?.seconds * 1000).toLocaleDateString("vi-VI")}</td>
                  <td>{new Date(item?.startTime?.seconds * 1000).toLocaleTimeString()}</td>
                  <td>{new Date(item?.endTime?.seconds * 1000).toLocaleTimeString()}</td>
                  <td>{item?.status}</td>
                  <td>{item?.taskDone + item.taskWorking}</td>
                  <td>{item?.taskDone}</td>
                  <td>
                    <NavLink to={item.id}>
                      <div className={cx('button-container')}>
                        <Button className={cx('show-btn')}>Chi tiết</Button>
                      </div>
                    </NavLink>
                  </td>
                  <td
                    className={index === lastRowIndex ? cx('xxx') : ''}
                    onClick={() => setShowDropdownMenu(!showDropdownMenu)}
                    >
                    <DropdownMenu
                      onEditClick={() => handleEditClick(item.id)}
                      onDeleteClick={() => handleDeleteClick(item.id)}
                      />
                  </td>
                </tr>)
              )
            ))
            )}
        </tbody>
      </Table>
      {/* <div className={cx('pagination-wrapper')}>
        <Pagination>
          <Pagination.Item
            className={cx('control-button')}
            disabled={activePage === 1}
            onClick={() => handleActivePage(activePage - 1)}
            >
            <FontAwesomeIcon icon={faChevronLeft} />
          </Pagination.Item>

          {pageNumbers}

          <Pagination.Item
            disabled={activePage === pageCount}
            onClick={() => handleActivePage(activePage + 1)}
            className={cx('control-button')}
            >
            <FontAwesomeIcon icon={faChevronRight} />
          </Pagination.Item>
        </Pagination>
      </div> */}
    </div>
  );
  }
}

export default ShiftTable;
