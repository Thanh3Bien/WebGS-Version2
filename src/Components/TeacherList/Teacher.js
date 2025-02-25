import React from 'react';
import './Teacher.css';
import { Link } from 'react-scroll'; // Sử dụng react-scroll

const TeacherList = ({ onListClick }) => {
  const listItems = [
    { id: 1, title: 'Đăng ký làm gia sư', section: 'dang-ky-lam-gia-su' },
    { id: 2, title: 'Lớp dạy hiện có', section: 'lop-day-hien-co' },
    { id: 3, title: 'Nội quy nhận lớp', section: 'noi-quy-nhan-lop' },
    { id: 4, title: 'Tuyển dụng', section: 'tuyen-dung-gia-su-gioi' },
  ];

  return (
    <div className="teacher-list">
      <div className="teacherlisttitle-container">
        <h2>Dành cho giáo viên</h2>
      </div>
      <ul>
        {listItems.map(item => (
          <li key={item.id}>
            <Link 
              to={item.section} 
              smooth={true} 
              duration={500} 
              onClick={() => onListClick(item.section)} // Gọi hàm khi nhấp
            >
              <span className="bullet"></span>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeacherList;