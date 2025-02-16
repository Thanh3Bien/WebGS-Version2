import React from 'react';
import { Link } from 'react-router-dom'; 
import './SideBar.css'; // Sử dụng file CSS chung cho cả hai sidebar
import CarouselImage from '../CarouselImage/CarouselImage';

const LeftSidebar = () => {
  return (
    <div className="left-sidebar">
      <div className="custom-sidebar">DÀNH CHO <br/>PHỤ HUYNH - HỌC SINH</div>
      <Link to="/finding-register" className="custom-button-sidebar">Đăng ký tìm gia sư</Link>
      <div className="custom-sidebar">LIÊN HỆ TÌM GIA SƯ<br/>00000</div>
      <button className="custom-button-sidebar">Nhấn vào đây</button>
    </div>
  );
};

const RightSidebar = () => {
  return (
    <div className="right-sidebar">
      <div className="custom-sidebar">DÀNH CHO <br/>GIÁO VIÊN - SINH VIÊN</div>
      <Link to="/dang-ky-lam-gia-su" className="custom-button-sidebar">Đăng ký làm gia sư</Link>
      <div className="custom-sidebar">LIÊN HỆ LÀM GIA SƯ <br/>000000</div>
      <button className="custom-button-sidebar">Nhấn vào đây</button>
    </div>
  );
};

const Sidebar = () => {
  return (
    <>
      <div className="side-container"> {/* Thêm class này để nhóm các sidebar và carousel */}
      <LeftSidebar />
      <CarouselImage /> {/* Thêm carousel vào giữa */}
      <RightSidebar />
    </div>
    </>
  );
};

export default Sidebar;