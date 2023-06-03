import { useState } from 'react';
import { staffData } from '@mocks/staffdata';
import './StaffViewContent.scss';
import StaffInfo from './StaffInfo';
import React, { useEffect } from 'react';
import { Timestamp, collection, getDocs, setDoc, doc } from 'firebase/firestore';
import { db } from '../../../lib/firebase';
import { ListInlineItem } from 'reactstrap';
import './StaffInfo.scss';
import { Link } from 'react-router-dom';

const StaffViewContent = () => {
  const [chosen, setChosen] = useState(0);
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true); // Trạng thái tải dữ liệu

  useEffect(() => {
    getMovies();
  }, []);


  useEffect(() => {
    // console.log(movies)
  }, [movies])

  function getMovies() {
    const movieCollectionRef = collection(db, 'data');
    getDocs(movieCollectionRef)
      .then((response) => {
        const movies = response.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        setMovies(movies);
        setIsLoading(false); // Dữ liệu đã được tải xong
        console.log(movies[0].data.data[0].StaffData);
      })
      .catch((error) => console.error(error.message));
  }

  const getFirstRow = (data) => [
    {
      field: 'Tên',
      content: data.name,
    },
    {
      field: 'ID',
      content: data.id,
    },
    {
      field: 'Chức vụ',
      content: data.role,
    },
  ];

  const getSecondRow = (data) => [
    {
      field: 'Giới tính',
      content: data.gender,
    },
    {
      field: 'Số điện thoại',
      content: data.phone,
    },
    {
      field: 'Email',
      content: data.email,
    },
  ];

  const getThirdRow = (data) => [
    {
      field: 'Địa chỉ',
      content: data.address,
    },
  ];

  const calculateRange = (data, rowsPerPage) => {
    const range = [];
    const num = Math.ceil(data.length / rowsPerPage);
    let i = 1;
    for (let i = 1; i <= num; i++) {
      range.push(i);
    }
    return range;
  };

  const sliceData = (data, page, rowsPerPage) => {
    return data.slice((page - 1) * rowsPerPage, page * rowsPerPage);
  };

  const useTable = (data, page, rowsPerPage) => {
    const [tableRange, setTableRange] = useState([]);
    const [slice, setSlice] = useState([]);

    useEffect(() => {
      const range = calculateRange(data, rowsPerPage);
      setTableRange([...range]);

      const slice = sliceData(data, page, rowsPerPage);
      setSlice([...slice]);
    }, [data, setTableRange, page, setSlice]);

    return { slice, range: tableRange };
  };

  // const addStaffData = (newData) => {
  //   const movieDocRef = doc(db, 'data', movies[0].id);
  //   const updatedData = {
  //     data: [{
  //       StaffData: [...movies[0].data.data[0].StaffData, newData]
  //     }]
  //   };
  //   console.log("old ", )
  //   setDoc(movieDocRef, updatedData)
  //     .then(() => {
  //       console.log('Đã thêm thành công vào mảng StaffData trên Firebase');
  //     })
  //     .catch((error) => {
  //       console.error('Lỗi khi thêm vào mảng StaffData trên Firebase:', error);
  //     });
  // };

  const deleteStaffData = () => {
    const movieDocRef = doc(db, 'data', movies[0].id);
    const updatedData = {
      data: [{
        StaffData: movies[0].data.data[0].StaffData.filter((_, index) => index !== chosen)
      }]
    };

    setDoc(movieDocRef, updatedData)
      .then(() => {
        console.log('Đã xóa thành công nhân viên trên Firebase');
      })
      .catch((error) => {
        console.error('Lỗi khi xóa nhân viên trên Firebase:', error);
      });
  };
  // ...

  const handleDeleteStaffData = () => {
    const confirmDelete = window.confirm(`Bạn có muốn xóa nhân viên "${movies[0].data.data[0].StaffData[chosen].name}" không?`);

    if (confirmDelete) {
      deleteStaffData()
        .then(() => {
          alert('Đã xóa nhân viên thành công!');
          window.location.reload(); // Tải lại trang để cập nhật dữ liệu
        })
        .catch((error) => {
          console.error('Lỗi khi xóa nhân viên:', error);
        });
    }
  };

  // ...

  // const handleAddStaffData = () => {
  //   const newData = {
  //     name: 'Nguyễn Văn MMMMM',
  //     id: 'staff9',
  //     ShiftData: [
  //       {
  //         startTime: {
  //           seconds: 1685691056,
  //           nanoseconds: 409000000,
  //         },
  //         endTime: {
  //           seconds: 1685691087,
  //           nanoseconds: 812000000,
  //         },
  //         task: {
  //           taskID: 'nhiệm vụ M',
  //           status: 'hoàn thành',
  //           details: {
  //             stt: 1,
  //             position: ['vị trí M'],
  //             leader: 'B',
  //             member: ['thành viên M'],
  //           },
  //           codeVehicle: 'XYZ123',
  //           driver: 'C',
  //         },
  //         status: 'hoàn thành',
  //         taskWorking: 2,
  //         taskDone: 3,
  //       },
  //     ],
  //     phone: '0987654321',
  //     address: '111 Đường D, Quận E, Thành phố F',
  //     role: 'nhân viên',
  //     gender: 'nam',
  //     email: 'van.c@example.com',
  //     status: 'NULL',
  //   };

  //   addStaffData(newData);
  // };




  if (movies[0]) {
    const rowsPerPage = 5;
    // const [page, setPage] = useState(1);
    // const { slice, range } = useTable(movies[0].data.data[0].StaffData[chosen].ShiftData, page, rowsPerPage);
    return (
      <>

        <div className="grid-container">
          <div className="grid-item scroll">
            <h3>Nhân viên</h3>
            {movies[0].data.data[0].StaffData.map((item, index) => (
              <button
                key={index}
                className={index === chosen ? 'button activeButton' : 'button inactiveButton'}
                onClick={() => setChosen(index)}
              >
                {item.name}
              </button>
            ))}
          </div>
          <div className="grid-item">

            <div className="info">

              {[getFirstRow(movies[0].data.data[0].StaffData[chosen]),
              getSecondRow(movies[0].data.data[0].StaffData[chosen]),
              getThirdRow(movies[0].data.data[0].StaffData[chosen])].map((row) => (
                <div>
                  {row.map((item) => (
                    <div>
                      <span>{item.field}: </span> {item.content}
                    </div>
                  ))}
                </div>
              ))}
              <span>Lịch sử công việc: </span>
              {
                (movies[0].data.data[0].StaffData[chosen].ShiftData.length <= 1) ? (
                  <p className='noStatus'>Chưa có nhiệm vụ</p>
                ) : (
                  <table className="table">
                    <thead className="tableRowHeader">
                      <tr>
                        <th className="tableHeader">ID</th>
                        <th className="tableHeader">Số nhiệm vụ</th>
                        <th className="tableHeader">Nhiệm vụ hoàn thành</th>
                        <th className="tableHeader">Thời gian bắt đầu</th>
                        <th className="tableHeader">Thời gian kết thúc</th>
                        <th className="tableHeader">Tình trạng</th>
                      </tr>
                    </thead>
                    {
                      (movies[0].data.data[0].StaffData[chosen].ShiftData.length > 1) && (
                        <tbody>
                          {movies[0].data.data[0].StaffData[chosen].ShiftData.slice(1).map((item) => (
                            <tr className="tableRowItems">
                              <td className="tableCell">{item.id}</td>
                              <td className="tableCell">{item.taskWorking}</td>
                              <td className="tableCell">{item.taskDone}</td>
                              <td className="tableCell">{new Date(item.startTime.seconds * 1000).toLocaleString()}</td>
                              <td className="tableCell">{new Date(item.endTime.seconds * 1000).toLocaleString()}</td>
                              <td className="tableCell">{item.status}</td>
                            </tr>
                          ))}
                        </tbody>
                      )
                    }

                  </table>
                )
              }


            </div>



          </div>
          <Link to="/createstaff">
            <button style={{ marginTop: '1rem' }}>Thêm nhân viên mới</button>
          </Link>
          {/* <button onClick={handleAddStaffData}>Thêm nhân viên mới</button> */}
          <button style={{ marginTop: '1rem' }} onClick={handleDeleteStaffData}>Xóa nhân viên</button>
        </div>
      </>
    )
  };
};

export default StaffViewContent;