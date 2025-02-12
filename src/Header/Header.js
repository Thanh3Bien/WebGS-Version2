import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // Trạng thái mở/xuống

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <a href="/">Logo</a>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
      
        ☰ {/* Biểu tượng hamburger */}
      </div>
      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="/">Trang chủ</a></li>
          <li><a href="/lop-day-hien-co">Lớp dạy hiện có</a></li>
          <li><a href="/gioi-thieu-giao-vien-sinh-vien">Giới thiệu giáo viên - sinh viên</a></li>
          <li><a href="/tuyen-dung-gia-su-gioi">Tuyển dụng gia sư giỏi</a></li>
          <li><a href="/lien-he">Liên hệ</a></li>
        </ul>
      </nav>
      <div className="cta">
        <a href="/dang-ky" className="cta-button">Đăng ký ngay</a>
      </div>
    </header>
  );
};

export default Header;