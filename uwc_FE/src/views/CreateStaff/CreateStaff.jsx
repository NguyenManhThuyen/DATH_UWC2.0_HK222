import React from 'react';
import { useState, useEffect } from 'react';
import { Timestamp, collection, getDocs, setDoc, doc } from 'firebase/firestore';
import { db } from '../../../lib/firebase';
import { ListInlineItem } from 'reactstrap';
import { Link } from 'react-router-dom';
const CreateStaff = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Trạng thái tải dữ liệu
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    gender: '',
    role: '',
  }); 
  useEffect(() => {
    getMovies();
  }, []);
  useEffect(() => {
  }, [movies]);

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

  const addStaffData = (newData) => {
    if (movies.length > 0) {
      const movieDocRef = doc(db, 'data', movies[0].id);
      const updatedData = {
        data: [
          {
            StaffData: [...movies[0].data.data[0].StaffData, newData],
          },
        ],
      };
      console.log('old ');
      setDoc(movieDocRef, updatedData)
        .then(() => {
          console.log('Đã thêm thành công vào mảng StaffData trên Firebase');
        })
        .catch((error) => {
          console.error('Lỗi khi thêm vào mảng StaffData trên Firebase:', error);
        });
    }
  };

  function generateRandomId() {
    const min = 10000; // Giá trị nhỏ nhất có 5 chữ số
    const max = 99999; // Giá trị lớn nhất có 5 chữ số
    const randomId = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomId;
  }

  const handleAddStaffData = () => {
    const newData = {
      name: formData.name,
      id: generateRandomId(),
      phone: formData.phone,
      ShiftData: [
              {
                id: '',
                startTime: {
                  seconds: null,
                  nanoseconds: null,
                },
                endTime: {
                  seconds: null,
                  nanoseconds: null,
                },
                task: {
                  taskID: '',
                  status: '',
                  details: {
                    stt: null,
                    position: [''],
                    leader: '',
                    member: [''],
                  },
                  codeVehicle: '',
                  driver: '',
                },
                status: '',
                taskWorking: null,
                taskDone: null,
              },
            ],
      address: formData.address,
      role: formData.role,
      gender: formData.gender,
      email: formData.email,
      status: 'NULL',
    };
  
    addStaffData(newData);
  };
  
  const handleErrorMessage = () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mailformat = new RegExp('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$');

    if (name.length < 2 || name.length > 30) {
      alert('Error entering First Name less than 2 or more than 50 characters');
    } else if (!email.match(mailformat)) {
      alert('You have entered an invalid email address!');
      alert('Valid email address format is <sth>@<sth>.<sth>');
    } else {
      alert('Complete!');
    }
  };

  const handleFormReset = (e) => {
    e.preventDefault();

    const elements = e.target.elements;
    for (let i = 0; i < elements.length; i++) {
      const field_type = elements[i].type.toLowerCase();

      switch (field_type) {
        case 'text':
        case 'email':
        case 'address':
        case 'phone':
          elements[i].value = '';
          break;
        case 'radio':
        case 'checkbox':
          if (elements[i].checked) {
            elements[i].checked = false;
          }
          break;
        case 'select-one':
        case 'select-multi':
          elements[i].selectedIndex = 0;
          break;
        default:
          break;
      }
    }
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="bg-white">
        <form className="h-100 bg-white col" >
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col">
                <div className="card card-registration my-4">
                  <div className="row g-0">
                    <div className="col-xl-6 d-none d-xl-block">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                        alt="Sample photo"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-xl-6">
                      <div className="card-body p-md-5 text-black">
                        <h3 className="mb-5 text-uppercase">Tạo Nhân Viên Mới</h3>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="first_name">
                              Họ và tên
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              className="form-control form-control-lg"
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="email">
                              Email
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="address">
                              Địa chỉ
                            </label>

                            <input
                              type="text"
                              id="address"
                              name="address"
                              value={formData.address}
                              onChange={handleChange}
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                        <label className="form-label" htmlFor="phone">
                              Số điện thoại
                            </label>
                          <div className="form-outline flex-fill mb-0">
                            <input type="number" 
                            id="phone" 
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            lassName="form-control" />
                          </div>
                        </div>

                        <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                          <h6 className="mb-0 me-4">Giới tính:</h6>

                          <div className="form-check form-check-inline mb-0 me-4">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              id="femaleGender"
                              // value="option1"
                              value="Nữ"
                              onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="femaleGender">
                              Nữ
                            </label>
                          </div>

                          <div className="form-check form-check-inline mb-0 me-4">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              id="maleGender"
                              value="Nam"
                              onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="maleGender">
                              Nam
                            </label>
                          </div>

  
                        </div>

                        <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                          <h6 className="mb-0 me-4">Vai trò:</h6>

                          <div className="form-check form-check-inline mb-0 me-4">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="role"
                              id="femaleGender"
                              // value="option1"
                              value="Tài xế"
                              onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="femaleGender">
                              Tài xế
                            </label>
                          </div>

                          <div className="form-check form-check-inline mb-0 me-4">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="role"
                              id="maleGender"
                              value="Người thu gom"
                              onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="maleGender">
                              Người thu gom
                            </label>
                          </div>

  
                        </div>


                        <div className="d-flex justify-content-end pt-3">
                          <button type="button" onClick={handleFormReset} className="btn btn-light btn-lg">
                            Reset all
                          </button>
                          <Link to="/staffs">
                            <button type="submit" onClick={handleAddStaffData} className="btn btn-warning btn-lg ms-2"
                            >
                              Submit form
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        ;
      </div>
    </>
  );
};
export default CreateStaff;