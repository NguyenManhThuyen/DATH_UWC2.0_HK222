import React, { useRef, useState, forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select';
import './Task-assign-2.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Content() {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOption2, setSelectedOption2] = useState([]);
  const options = [
    {
      value: 'Nguyễn Văn Anh',
      label: 'Nguyễn Văn Anh',
    },
    {
      value: 'Nguyễn Chí Công',
      label: 'Nguyễn Chí Công',
    },
    {
      value: 'Dương Hữu Hảo',
      label: 'Dương Hữu Hảo',
    },
    {
      value: 'Nguyễn Phi Hùng',
      label: 'Nguyễn Phi Hùng',
    },
    {
      value: 'Nguyễn Oai Thuyên',
      label: 'Nguyễn Oai Thuyên',
    },
  ];
  const options2 = [
    {
      value: 'Nguyễn Văn Anh',
      label: 'Nguyễn Văn Anh',
    },
    {
      value: 'Nguyễn Chí Công',
      label: 'Nguyễn Chí Công',
    },
    {
      value: 'Dương Hữu Hảo',
      label: 'Dương Hữu Hảo',
    },
    {
      value: 'Nguyễn Phi Hùng',
      label: 'Nguyễn Phi Hùng',
    },
    {
      value: 'Nguyễn Oai Thuyên',
      label: 'Nguyễn Oai Thuyên',
    },
    {
      value: 'Nguyễn Văn Mạnh',
      label: 'Nguyễn Văn Mạnh',
    },
    {
      value: 'Nguyễn Đình Dũng',
      label: 'Nguyễn Đình Dũng',
    },
    {
      value: 'Nguyễn Tuấn Trình',
      label: 'Nguyễn Tuấn Trình',
    },
    {
      value: 'Nguyễn Phước Hạ',
      label: 'Nguyễn Phước Hạ',
    },
  ];
  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };
  const handleChange2 = (selectedOption2) => {
    setSelectedOption2(selectedOption2);
  };
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      paddingLeft: '30px',
      fontSize: '15px',
      textAlign: 'left',
      background: `url(${state.data.image}) no-repeat left center`,
      // backgroundSize: '40px 35px',
      backgroundColor: 'gray',
      color: 'black',
    }),
    placeholder: (provided) => ({
      ...provided,
      color: 'black',
      fontSize: '15px',
    }),
    control: (provided) => ({
      ...provided,
      backgroundColor: '#DDDDDD',
      // weight: '50px',
      height: '40px',
    }),
  };
  const customStyles2 = {
    option: (provided, state) => ({
      ...provided,
      paddingLeft: '30px',
      fontSize: '15px',
      textAlign: 'left',
      background: `url(${state.data.image}) no-repeat left center`,
      // backgroundSize: '40px 35px',
      backgroundColor: 'gray',
      color: 'black',
    }),
    placeholder: (provided) => ({
      ...provided,
      color: 'black',
      fontSize: '15px',
    }),
    control: (provided) => ({
      ...provided,
      backgroundColor: '#DDDDDD',
      // weight: '50px',
      height: '40px',
    }),
  };
  const handleButtonClick = () => {
    alert('Completed!!!');
  };
  return (
    <div className="container">
      <div className="header">
        <Link to="/Taskassign">
          <a href="">
            <FontAwesomeIcon className="icon-first" icon={faArrowLeft} />
          </a>
          <a className="go-back" href="https://www.useblackbox.io/search">
            Quay lại
          </a>
        </Link>
      </div>
      <div className="section-first">
        <div className="circle-first">
          <FontAwesomeIcon className="icon-first" icon={faCheck} />
        </div>
        <div className="line"></div>
        <div className="circle-second">2</div>
      </div>
      <div className="text-section-first">
        <p className="text-first">Phân công phương tiện và tài xế</p>
        <p className="text-second">Phân công người thu gom</p>
      </div>
      <div className="section-second-assign">
        <table className="table-wrapper">
          <tr>
            <th className="row1">Địa điểm</th>
            <th className="col2">Nhóm trưởng</th>
            <th className="col3">Thành viên</th>
          </tr>
          <tr>
            <td>167 Phạm Hữu Lầu Phường Mỹ Phước Quận 7 TP. HCM</td>
            <td>
              <Select
                className="select-assign2"
                options={options}
                value={selectedOption}
                onChange={handleChange}
                styles={customStyles}
                placeholder="Tên nhóm trưởng"
              />
            </td>
            <td>
              <Select
                isMulti
                className="select-assign2"
                options={options2}
                value={selectedOption2}
                onChange={handleChange2}
                styles={customStyles2}
                placeholder="Tên thành viên"
              />
            </td>
          </tr>
          <tr className="row-2">
            <td>205 Võ Văn Ngân Phường Linh Chiểu Quận TĐ TP. HCM</td>
            <td>
              <Select
                className="select-assign2"
                options={options}
                value={selectedOption}
                onChange={handleChange}
                styles={customStyles}
                placeholder="Tên nhóm trưởng"
              />
            </td>
            <td>
              <Select
                isMulti
                className="select-assign2"
                options={options2}
                value={selectedOption2}
                onChange={handleChange2}
                styles={customStyles2}
                placeholder="Tên thành viên"
              />
            </td>
          </tr>
          <tr>
            <td>397 Lý Thường Kiệt Phường 8 Quận Tân Bình TP. HCM</td>
            <td>
              <Select
                className="select-assign2"
                options={options}
                value={selectedOption}
                onChange={handleChange}
                styles={customStyles}
                placeholder="Tên nhóm trưởng"
              />
            </td>
            <td>
              <Select
                isMulti
                className="select-assign2"
                options={options2}
                value={selectedOption2}
                onChange={handleChange2}
                styles={customStyles2}
                placeholder="Tên thành viên"
              />
            </td>
          </tr>
        </table>
      </div>
      <button className="button" onClick={handleButtonClick}>
        Lưu
      </button>
    </div>
  );
}
function Taskassign2() {
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
export default Taskassign2;
