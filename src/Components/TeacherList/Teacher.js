import React from 'react';
import './Teacher.css';

const TeacherList = ({ handleListClick }) => {
  const listItems = [
    { id: 1, title: 'Hướng dẫn giảng dạy' },
    { id: 2, title: 'Tài nguyên giảng dạy' },
    { id: 3, title: 'Kỹ năng giao tiếp với phụ huynh' },
    { id: 4, title: 'Đánh giá học sinh' },
    { id: 5, title: 'Phát triển chuyên môn' },
  ];

  return (
    <div className="teacher-list">
      <h2>Dành cho giáo viên</h2>
      <ul>
        {listItems.map(item => (
          <li key={item.id} onClick={() => handleListClick(item.id)}>
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeacherList;