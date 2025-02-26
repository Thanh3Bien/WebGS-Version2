import React from 'react';
// import { Link} from 'react-router-dom'; 
import './SideBar.css'; // Sử dụng file CSS chung cho cả hai sidebar
import CarouselImage from '../CarouselImage/CarouselImage';
import { Link } from 'react-scroll';

const LeftSidebar = ({ onListClick }) => {
  
  return (
    <div className="left-sidebar">
      <div className="custom-sidebar">DÀNH CHO <br/>PHỤ HUYNH - HỌC SINH</div>
      <Link to='finding-register' 
              smooth={true} 
              duration={500} 
              onClick={() => onListClick('finding-register')} className="custom-button-sidebar">Đăng ký tìm gia sư</Link>
      <div className="custom-sidebar">LIÊN HỆ TÌM GIA SƯ<br/>0393687033</div>
      <a href="https://zalo.me/0393687033" className="custom-button-sidebar" target="_blank" rel="noopener noreferrer">
  Liên hệ ngay
</a>
    </div>
  );
};

const RightSidebar = ({ onListClick }) => {
  return (
    <div className="right-sidebar">
      <div className="custom-sidebar">DÀNH CHO <br/>GIÁO VIÊN - SINH VIÊN</div>
      <Link to='dang-ky-lam-gia-su' 
              smooth={true} 
              duration={500} 
              onClick={() => onListClick('dang-ky-lam-gia-su')}className="custom-button-sidebar">Đăng ký làm gia sư</Link>
      <div className="custom-sidebar">LIÊN HỆ LÀM GIA SƯ <br/>0393687033</div>
      <a href="https://zalo.me/0393687033" className="custom-button-sidebar" target="_blank" rel="noopener noreferrer">
  Liên hệ ngay
</a>
    </div>
  );
};

const Sidebar = ({ onListClick }) => {
  return (
    <>
      <div className="side-container"> {/* Thêm class này để nhóm các sidebar và carousel */}
      <LeftSidebar  onListClick={onListClick}/>
      <CarouselImage /> {/* Thêm carousel vào giữa */}
      <RightSidebar  onListClick={onListClick}/>
    </div>
    </>
  );
};

export default Sidebar;