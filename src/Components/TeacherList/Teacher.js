import React from 'react';
import './Teacher.css';
import { Link } from 'react-router-dom';

const TeacherList = () => {
  const listItems = [
    { id: 1, title: 'Đăng ký làm gia sư', path: '/dang-ky-lam-gia-su' },
    { id: 2, title: 'Lớp dạy hiện có', path: '/lop-day-hien-co' },
    { id: 3, title: 'Nội quy nhận lớp', path: '/noi-quy-nhan-lop' },
    { id: 4, title: 'Tuyển dụng', path: '/tuyen-dung-gia-su-gioi' },
  ];

  return (
    <div className="teacher-list">
      
      <div className="teacherlisttitle-container">
        <h2>Dành cho giáo viên</h2>
      </div>
      <ul>
        {listItems.map(item => (
          <Link to={item.path} key={item.id}>
          <li>
            <span className="bullet"></span>
            {item.title}
          </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default TeacherList;