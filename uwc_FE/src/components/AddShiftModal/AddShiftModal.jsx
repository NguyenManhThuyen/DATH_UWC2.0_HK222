import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Container, Row, Col } from 'reactstrap';
import { useState, useEffect } from 'react';
import './AddShiftModal.scss';

import { Timestamp, collection, getDocs, setDoc, doc } from 'firebase/firestore';
import { db } from '../../../lib/firebase';
import { ListInlineItem } from 'reactstrap';
import { Link } from 'react-router-dom';



const AddShiftModal = ({ isOpen, toggle }) => {

const [movies, setMovies] = useState([]);
const [isLoading, setIsLoading] = useState(true); // Trạng thái tải dữ liệu
const [formData, setFormData] = useState({
  startTime: '',
  endTime: '',
  status: '',
  date: '',
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
    const existingStaffData = movies[0].data.data[0].StaffData;
    const existingShiftData = existingStaffData[7].ShiftData;
    const updatedShiftData = [...existingShiftData, newData];
    const updatedStaffData = [
      ...existingStaffData.slice(0, 7),
      { ...existingStaffData[7], ShiftData: updatedShiftData },
      ...existingStaffData.slice(8)
    ];
    const updatedData = {
      data: [
        {
          StaffData: updatedStaffData,
        },
      ],
    };
    console.log('old ', newData);
    setDoc(movieDocRef, updatedData)
      .then(() => {
        console.log('Đã thêm thành công vào mảng ShiftData của StaffData[7] trên Firebase');
      })
      .catch((error) => {
        console.error('Lỗi khi thêm vào mảng ShiftData của StaffData[7] trên Firebase:', error);
      });
  }
  toggle();
};

const handleAddStaffData = () => {
  const newData = {
    id: '1234',
    startTime: {
      seconds: 1685691056,
      nanoseconds: 409000000,
    },
    endTime: {
      seconds: 1685691087,
      nanoseconds: 812000000,
    },
    task: {
      taskID: 'nhiệm vụ M',
      status: 'hoàn thành',
      details: {
        stt: 1,
        position: ['vị trí M'],
        leader: 'B',
        member: ['thành viên M'],
      },
      codeVehicle: 'XYZ123',
      driver: 'C',
    },
    status: 'Đang diễn ra',
    taskWorking: 1,
    taskDone: 0,
  };

  addStaffData(newData); // Gửi newData lên mảng shiftData

};



  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader>Tạo ca mới</ModalHeader>
      <ModalBody className="modal-body">
        <Container>
          <Row>
            <Col>
              <div className="input-group">
                <label htmlFor="start-time-input">Giờ bắt đầu:</label>
                <input type="time" id="start-time-input" />
              </div>
            </Col>
            <Col>
              <div className="input-group">
                <label htmlFor="end-time-input">Giờ kết thúc:</label>
                <input type="time" id="end-time-input" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="input-group">
                <label htmlFor="status-input">Trạng thái:</label>
                <select id="status-input">
                  <option value="available">Chưa diễn ra</option>
                  <option value="unavailable">Đã diễn ra</option>
                  <option value="unavailable">Kết thúc</option>
                </select>
              </div>
            </Col>
            <Col>
              <div className="input-group">
                <label htmlFor="date-input">Ngày:</label>
                <input type="date" id="date-input" />
              </div>
            </Col>
          </Row>
        </Container>
      </ModalBody>
      <ModalFooter>
      <Button color="success" onClick={toggle}>
  Xác nhận
</Button>
        <Button color="secondary" onClick={toggle}>
          Hủy bỏ
        </Button>
        <Button color="success" onClick={handleAddStaffData}>
  Thêm
</Button>
      </ModalFooter>
    </Modal>
  );
  
};

export default AddShiftModal;
