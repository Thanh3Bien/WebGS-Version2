import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const logoImg = "https://res.cloudinary.com/dsq0mei34/image/upload/v1739897878/Logo-removebg-preview_gpbrrt.png";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // Trạng thái mở/xuống

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (

      
    <header className="header">
      {/* <h1 className="">TRUNG TÂM GIA SƯ BIÊN HÒA</h1> */}
      <div className="logo">
      <a href="/">
                    <img src={logoImg} alt="Logo" style={{ width: '100px', height: 'auto' }} /> {/* Thay đổi kích thước theo nhu cầu */}
                </a>
      </div>
      
      <div className="menu-toggle" onClick={toggleMenu}>
      
        ☰ {/* Biểu tượng hamburger */}
      </div>
      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="/">TRANG CHỦ</a></li>
          <li><a href="/lop-day-hien-co">LỚP DẠY HIỆN CÓ</a></li>
          <li><a href="/gia-su-hien-co">GIỚI THIỆU GIÁO VIÊN - SINH VIÊN</a></li>
          <li><a href="/tuyen-dung-gia-su-gioi">TUYỂN DỤNG GIA SƯ GIỎI</a></li>
          <li><a href="/lien-he">LIÊN HỆ</a></li>
        </ul>
      </nav>
      {/* <div className="cta">
        <a href="/dang-ky" className="cta-button">Đăng ký ngay</a>
      </div> */}
    </header>
    
    
  );
};

export default Header;