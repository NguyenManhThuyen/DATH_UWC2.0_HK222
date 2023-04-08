import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './RouterMap.css';

const RouteMap = () => {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <div className="container">
      <header className="header">
        <button className="button">
          <i className="fa fa-arrow-left"></i>
        </button>
        <h1 className="title">Quay lại</h1>
      </header>
      <div className="content">
      <main className="main">
        <img
          src="https://github.com/NguyenManhThuyen/DATH_UWC2.0_HK222/blob/main/uwc_FE/src/assets/routeMap.png?raw=true"
          alt="Ảnh"
          className="image"
        />
      </main>
      <footer className="footer">
        <button className="button" onClick={handleShow}>Lộ trình</button>
        <button className="button">Lưu</button>
      </footer></div>

      <Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Bảng thông báo lộ trình</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <div className="route-map">
      {/* <img
        src="https://raw.githubusercontent.com/anduc146khmt/resource/master/public/assets/map.png"
        alt="Chi tiết lộ trình"
        className="route-map__image"
      /> */}
    </div>
    <div className="route-description">
      <p>Sân vận động Old Trafford<br />
        Sir Matt Busby Way, Old Trafford, Stretford, Manchester M16 0RA, Vương quốc Anh
      </p>
      <ul>
        <li>Đi về hướng Nam lên Sir Matt Busby Way/B5188 về phía Railway Rd, 0,1 dặm</li>
        <li>Rẽ phải vào Chester Rd/A56, 0,3 dặm</li>
        <li>Rẽ trái vào Great Stone Rd, 341 ft, 3 phút đi bộ (0,5 dặm)<br />
          <span>Stretford High School, Great Stone Rd., Stretford, Manchester M32 0XA, Vương quốc Anh</span>
        </li>
        <li>Đi về hướng Đông Nam lên Great Stone Rd. về phía Briggs Rd, 0,1 dặm</li>
        <li>Rẽ trái vào Talbot Rd/A5014, điểm đến sẽ ở bên trái, 0,4 dặm, 2 phút đi bộ (0,5 dặm)<br />
          <span>PHMG, Oakland House, Talbot Rd, Old Trafford, Stretford, Manchester M16 0PQ, Vương quốc Anh</span>
        </li>
        <li>Đi về hướng Đông Bắc lên Talbot Rd/A5014 về phía Botanical Ave, 0,3 dặm</li>
        <li>Rẽ phải vào Seymour Grove/B5217, 0,3 dặm</li>
        <li>Rẽ trái vào Ayres Rd/B5224, 0,3 dặm</li>
        <li>Rẽ trái vào Henrietta St, 394 ft</li>
        <li>Rẽ trái vào Fulford St, điểm đến sẽ ở bên trái, 36 ft, 4 phút đi bộ (1,0 dặm)<br />
          <span>All in One DIY Ltd, 2 Henrietta St, Old Trafford, Stretford, Manchester M16 9PT, Vương quốc Anh</span>
        </li>
      </ul>
    </div>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}> 
      Thoát
    </Button>
  </Modal.Footer>
</Modal>
    </div>
  );

};

export default RouteMap;
