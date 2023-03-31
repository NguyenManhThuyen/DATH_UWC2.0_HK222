import React, { useRef, useState, forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './Task-assign-2.css';
import { Container, Row, Col } from 'react-bootstrap';
function Content() {
  const handleButtonClick = () => {
    alert('Completed!!!');
  };
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
      <div className="section-second">
        <table className="table-wrapper">
          <tr>
            <th>Địa điểm</th>
            <th>Nhóm trưởng</th>
            <th>Thành viên</th>
          </tr>
          <tr>
            <td>167 Phạm Hữu Lầu Phường Mỹ Phước Quận 7 TP. HCM</td>
            <td>Nguyễn Văn A</td>
            <td>
              <ul>
                <li>Nguyễn Văn B</li>
                <li>Nguyễn Văn C</li>
                <li>Nguyễn Văn D</li>
              </ul>
            </td>
          </tr>
          <tr className="row-2">
            <td>167 Phạm Hữu Lầu Phường Mỹ Phước Quận 7 TP. HCM</td>
            <td>Nguyễn Văn A</td>
            <td>
              <ul>
                <li>Nguyễn Văn B</li>
                <li>Nguyễn Văn C</li>
                <li>Nguyễn Văn D</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>167 Phạm Hữu Lầu Phường Mỹ Phước Quận 7 TP. HCM</td>
            <td>Nguyễn Văn A</td>
            <td>
              <ul>
                <li>Nguyễn Văn B</li>
                <li>Nguyễn Văn C</li>
                <li>Nguyễn Văn D</li>
              </ul>
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
