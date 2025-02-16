import React from 'react';
import './Footer.css'; // Đảm bảo bạn tạo file CSS tương ứng

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>Liên hệ</h4>
                    <p>Trung tâm Gia Sư Tài Năng Biên Hòa</p>
                    <p>Điện thoại: 0982.418.939</p>
                    <p>Email: info@giasutainang.edu.vn</p>
                </div>
                <div className="footer-section">
                    <h4>Dịch vụ</h4>
                    <ul>
                        <li><a href="/lop-day-hien-co">Lớp học hiện có</a></li>
                        <li><a href="/tuyen-dung-gia-su-gioi">Tuyển dụng</a></li>
                        <li><a href="/finding-register">Đăng ký tìm gia sư</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Kết nối với chúng tôi</h4>
                    <p>Theo dõi chúng tôi trên mạng xã hội:</p>
                    <ul className="social-links">
                        <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                        <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2025 Gia sư Tài Năng Biên Hòa - All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;