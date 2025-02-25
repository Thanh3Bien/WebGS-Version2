import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import './Header.css';

const logoImg = "https://res.cloudinary.com/dsq0mei34/image/upload/v1739897878/Logo-removebg-preview_gpbrrt.png";

const Header = ( { onNavClick }) => {
  const [isOpen, setIsOpen] = useState(false); // Trạng thái mở/xuống

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <a href="home">
          <img src={logoImg} alt="Logo" style={{ width: '100px', height: 'auto' }} />
        </a>
      </div>
      
      <div className="menu-toggle" onClick={toggleMenu}>
        ☰ {/* Biểu tượng hamburger */}
      </div>
      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link to="home" smooth={true} duration={500} onClick={() => onNavClick('home')}>TRANG CHỦ</Link>
          </li>
          <li>
            <Link to="lop-day-hien-co" smooth={true} duration={500} onClick={() => onNavClick('lop-day-hien-co')}>LỚP DẠY HIỆN CÓ</Link>
          </li>
          <li>
            <Link to="gia-su-hien-co" smooth={true} duration={500} onClick={() => onNavClick('gia-su-hien-co')}>GIỚI THIỆU GIÁO VIÊN - SINH VIÊN</Link>
          </li>
          <li>
            <Link to="tuyen-dung-gia-su-gioi" smooth={true} duration={500} onClick={() => onNavClick('tuyen-dung-gia-su-gioi')}>TUYỂN DỤNG GIA SƯ GIỎI</Link>
          </li>
          <li>
            <Link to="lien-he" smooth={true} duration={500} onClick={() => onNavClick('lien-he')}>LIÊN HỆ</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;