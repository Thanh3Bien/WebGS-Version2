import React from 'react';
import './Parent.css';

const ParentList = ({ handleListClick }) => {
  const listItems = [
    { id: 1, title: 'Đăng ký tìm gia sư' },
    { id: 2, title: 'Gia sư hiện có' },
    { id: 3, title: 'Phụ huynh cần biết' },
    { id: 4, title: 'Dịch vụ dạy kèm' },
    { id: 5, title: 'Học phí tham khảo' },
  ];

  return (
    <div className="parent-list">
      <h2>Dành cho phụ huynh</h2>
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

export default ParentList;