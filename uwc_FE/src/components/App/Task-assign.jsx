import React, { useRef, useState, forwardRef } from 'react';
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { faPerson } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import myimage from './image/garbage-truck.png';
import chicken from './image/chicken.png';
import dragon from './image/dragon.png';
import tiger from './image/tiger.png';
import snack from './image/snack.png';
import horse from './image/horse.png';
import { Container, Row, Col } from 'react-bootstrap';
import './Task-assign.css';
import { Link } from 'react-router-dom';
function VehicleList() {
  const [selectedOption, setSelectedOption] = useState('');
  // const [isSelectChosen, setIsSelectChosen] = useState(false);
  // const history = useHistory();
  const options = [
    {
      value: '51-A1-45678',
      label: '51-A1-45678',
      image: myimage,
    },
    {
      value: '51-B1-12345',
      label: '51-B1-12345',
      image: myimage,
    },
    {
      value: '51-C1-56789',
      label: '51-C1-56789',
      image: myimage,
    },
    {
      value: '61-D1-45678',
      label: '61-D1-45678',
      image: myimage,
    },
    {
      value: '92-K1-26081',
      label: '92-K1-26081',
      image: myimage,
    },
    {
      value: '23-X1-68723',
      label: '23-X1-68723',
      image: myimage,
    },
    {
      value: '10-M1-03030',
      label: '10-M1-03030',
      image: myimage,
    },
    {
      value: '08-H1-08102',
      label: '08-H1-08102',
      image: myimage,
    },
    {
      value: '86-E1-25623',
      label: '86-E1-25623',
      image: myimage,
    },
    {
      value: '59-F1-23456',
      label: '59-F1-23456',
      image: myimage,
    },
    {
      value: '60-N1-67891',
      label: '60-N1-67891',
      image: myimage,
    },
  ];

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };
  // const getSelectedVehicleId = () => {
  //   return selectedOption;
  // };
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      paddingLeft: '70px',
      fontSize: '25px',
      textAlign: 'left',
      background: `url(${state.data.image}) no-repeat left center`,
      backgroundSize: '50px 35px',
      backgroundColor: 'gray',
      color: 'black',
    }),
    placeholder: (provided) => ({
      ...provided,
      color: 'black',
      fontSize: '19px',
      textAlign: 'left',
    }),
    control: (provided) => ({
      ...provided,
      backgroundColor: '#DDDDDD',
      height: '50px',
    }),
  };
  const publisher = (selectedOption) => {
    if (selectedOption.value)
      return (
        <div className="publish">
          <div className="picture">
            <img className="my-image" src={myimage} alt="" />
          </div>
          <p className="text-publish">{selectedOption.value}</p>
        </div>
      );
  };
  return (
    <div className="wrapper-first">
      <h3>Chọn phương tiện</h3>
      <div className="container-select">
        <Select
          className="select-option"
          options={options}
          value={selectedOption}
          onChange={handleChange}
          styles={customStyles}
          placeholder="None"
        />
        <FontAwesomeIcon className="icon" icon={faTruck} />
      </div>
      <div>{publisher(selectedOption)}</div>
    </div>
  );
}
function Driverlist() {
  const [selectedOption, setSelectedOption] = useState('');
  // const history = useHistory();
  const options = [
    {
      value: 'Nguyễn Tuấn Anh',
      label: 'Nguyễn Tuấn Anh',
      image: snack,
    },
    {
      value: 'Nguyễn Thành Công',
      label: 'Nguyễn Thành Công',
      image: dragon,
    },
    {
      value: 'Dương Hoàng Hảo',
      label: 'Dương Hoàng Hảo',
      image: horse,
    },
    {
      value: 'Nguyễn Phước Đắc Hùng',
      label: 'Nguyễn Phước Đắc Hùng',
      image: chicken,
    },
    {
      value: 'Nguyễn Mạnh Thuyên',
      label: 'Nguyễn Mạnh Thuyên',
      image: tiger,
    },
  ];
  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };
  // const getSelectedDriverId = () => {
  //   return selectedOption;
  // };
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      paddingLeft: '70px',
      fontSize: '22px',
      textAlign: 'left',
      background: `url(${state.data.image}) no-repeat left center`,
      backgroundSize: '50px 35px',
      backgroundColor: 'gray',
      color: 'black',
    }),
    placeholder: (provided) => ({
      ...provided,
      color: 'black',
      fontSize: '19px',
      textAlign: 'left',
    }),
    control: (provided) => ({
      ...provided,
      backgroundColor: '#DDDDDD',
      height: '50px',
    }),
  };
  const publisher = (selectedOption) => {
    if (selectedOption.value) {
      if (selectedOption.value === 'Nguyễn Tuấn Anh') {
        return (
          <div className="publish">
            <div>
              <img className="my-image" src={snack} alt="" />
            </div>
            <p className="text-publish">{selectedOption.value}</p>
          </div>
        );
      } else if (selectedOption.value === 'Nguyễn Thành Công') {
        return (
          <div className="publish">
            <div>
              <img className="my-image" src={dragon} alt="" />
            </div>
            <p className="text-publish">{selectedOption.value}</p>
          </div>
        );
      } else if (selectedOption.value === 'Nguyễn Phước Đắc Hùng') {
        return (
          <div className="publish">
            <div>
              <img className="my-image" src={chicken} alt="" />
            </div>
            <p className="text-publish">{selectedOption.value}</p>
          </div>
        );
      } else if (selectedOption.value === 'Dương Hoàng Hảo') {
        return (
          <div className="publish">
            <div>
              <img className="my-image" src={horse} alt="" />
            </div>
            <p className="text-publish">{selectedOption.value}</p>
          </div>
        );
      } else if (selectedOption.value === 'Nguyễn Mạnh Thuyên') {
        return (
          <div className="publish">
            <div>
              <img className="my-image" src={tiger} alt="" />
            </div>
            <p className="text-publish">{selectedOption.value}</p>
          </div>
        );
      }
    }
  };

  return (
    <div className="wrapper-second">
      <h3>Chọn tài xế</h3>
      <div className="container-select">
        <Select
          className="select-option"
          options={options}
          value={selectedOption}
          onChange={handleChange}
          styles={customStyles}
          placeholder="None"
        />
        <FontAwesomeIcon className="icon" icon={faPerson} />
      </div>
      <div>{publisher(selectedOption)}</div>
    </div>
  );
}
function Content() {
  // const [vehicleId, setvehicleId] = useState(null);
  // const [driverid, setdriverId] = useState(null);
  // const handleNextClick = () => {
  //   const selectedVehicleId = VehicleList.getSelectedVehicleId();
  //   const selectedDriverId = Driverlist.getSelectedDriverId();
  //   if (selectedDriverId && selectedVehicleId) {
  //     alert('OK');
  //   } else {
  //     alert('vui long chon');
  //   }
  // };
  // const history = useHistory();
  // const handleNextClick = () => {
  //   // history.push('/Task-assign-2.jsx');
  // };
  // const handleNextClick = () => {
  //   <link rel="stylesheet" href="" />;
  // };
  return (
    <div className="container">
      <div className="header">
        <a href="">
          <FontAwesomeIcon className="icon-first" icon={faArrowLeft} />
        </a>
        <a className="go-back" href="https://www.useblackbox.io/search">
          Quay lại
        </a>
      </div>
      <div className="section-first">
        <div className="circle-first">1</div>
        <div className="line"></div>
        <div className="circle-second">2</div>
      </div>
      <div className="text-section-first">
        <p className="text-first">Phân công phương tiện và tài xế</p>
        <p className="text-second">Phân công người thu gom</p>
      </div>
      <div className="section-second">
        <VehicleList />
        <Driverlist />
      </div>
      <Link to="/Task">
        <button className="button-1">Tiếp Theo</button>
      </Link>
    </div>
  );
}
function Taskassign() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Content />
        </Col>
      </Row>
    </Container>
  );
}
export default Taskassign;
