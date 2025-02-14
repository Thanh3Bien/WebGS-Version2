import React from 'react';
import { Link } from 'react-router-dom'; 
import styles from './SideBar.css'; // Tạo file CSS riêng cho Sidebar
import { Carousel } from 'react-responsive-carousel'; 
import img from "../../assets/ec45042a-9053-4270-9532-f57dd49ed206.jpg";
import img2 from "../../assets/b2965456-931d-42a4-bbb0-453dbc12e292.jpg";


const Sidebar = () => {

  return (
    
    <div className="side-container">
      <div className="left-container">
        <div className="custom-sidebar">DÀNH CHO <br/>PHỤ HUYNH - HỌC SINH</div>
        <Link to="/finding-register" className="custom-button-sidebar">Đăng ký tìm gia sư</Link>
        <div className="custom-sidebar">LIÊN HỆ TÌM GIA SƯ<br/>00000</div>
        <button className="custom-button-sidebar">Nhấn vào đây</button>
      </div>

      
      
      <div className="right-container">
        <div className="custom-sidebar">DÀNH CHO <br/>GIÁO VIÊN - SINH VIÊN</div>
        <Link to="/dang-ky-lam-gia-su" className="custom-button-sidebar">Đăng ký làm gia sư</Link>
        <div className="custom-sidebar">LIÊN HỆ LÀM GIA SƯ <br/>000000</div>
        <button className="custom-button-sidebar">Nhấn vào đây</button>
      </div>
    </div>

    
  );
};

export default Sidebar;